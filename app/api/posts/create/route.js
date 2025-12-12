export async function POST(req: Request) {
  try {
    // لازم نمرر req
    const user = await getUserFromCookie(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const form = await req.formData();
    const title = form.get("title")?.toString().trim();
    const content = form.get("content")?.toString().trim();
    const image = form.get("image");
    const video = form.get("video");

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let imageUrl = null;
    let videoUrl = null;

    // Upload image
    if (image && image instanceof File) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadResult = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "posts", resource_type: "image" },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        ).end(buffer);
      });
      imageUrl = uploadResult.secure_url;
    }

    // Upload video
    if (video && video instanceof File) {
      const bytes = await video.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadResult = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "posts", resource_type: "video" },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        ).end(buffer);
      });
      videoUrl = uploadResult.secure_url;
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        image: imageUrl,
        video: videoUrl,
        authorId: user.id,
      },
    });

    return NextResponse.json({ post });
  } catch (err) {
    console.error("CREATE POST ERROR:", err);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
