(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PostsFeed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostsFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/ThemeContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Picker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Picker;
function PostsFeed() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"]);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]); // "dark" or "light"
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showEmoji, setShowEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [replyInputVisible, setReplyInputVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [repliesVisible, setRepliesVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [lazyReplies, setLazyReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const REPLIES_BATCH = 5;
    const fetchRandomPosts = async ()=>{
        try {
            const res = await fetch("/api/posts/random");
            const data = await res.json();
            setPosts(data.posts || []);
        } catch (err) {
            console.error("Fetch random posts error:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostsFeed.useEffect": ()=>{
            fetchRandomPosts();
        }
    }["PostsFeed.useEffect"], []);
    const handleLike = async (postId)=>{
        if (!user) return alert("Please login first");
        await fetch(`/api/posts/${postId}/interact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "like"
            })
        });
        fetchRandomPosts();
    };
    const handleComment = async (postId, parentId = null)=>{
        if (!user) return alert("Please login first");
        const content = parentId ? replyText[parentId] : commentText[postId];
        if (!content || content.trim() === "") return;
        await fetch(`/api/posts/${postId}/interact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "comment",
                content,
                parentId
            })
        });
        if (parentId) {
            setReplyText((prev)=>({
                    ...prev,
                    [parentId]: ""
                }));
            setReplyInputVisible((prev)=>({
                    ...prev,
                    [parentId]: false
                }));
        } else {
            setCommentText((prev)=>({
                    ...prev,
                    [postId]: ""
                }));
        }
        fetchRandomPosts();
    };
    const handleCommentLike = async (commentId)=>{
        if (!user) return alert("Please login first");
        await fetch(`/api/comments/${commentId}/like`, {
            method: "POST"
        });
        fetchRandomPosts();
    };
    const handleEmojiClick = (id, emojiData, isReply = false)=>{
        if (isReply) setReplyText((prev)=>({
                ...prev,
                [id]: (prev[id] || "") + emojiData.emoji
            }));
        else setCommentText((prev)=>({
                ...prev,
                [id]: (prev[id] || "") + emojiData.emoji
            }));
    };
    const toggleReplies = (commentId)=>{
        setRepliesVisible((prev)=>({
                ...prev,
                [commentId]: !prev[commentId]
            }));
        if (!lazyReplies[commentId]) {
            setLazyReplies((prev)=>({
                    ...prev,
                    [commentId]: REPLIES_BATCH
                }));
        }
    };
    const loadMoreReplies = (commentId)=>{
        setLazyReplies((prev)=>({
                ...prev,
                [commentId]: Math.min(prev[commentId] + REPLIES_BATCH, posts.flatMap((p)=>p.comments).find((c)=>c.id === commentId)?.replies?.length || 0)
            }));
    };
    const renderReplies = (postId, replies, parentId)=>{
        const countToShow = lazyReplies[parentId] || REPLIES_BATCH;
        return replies.slice(0, countToShow).map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                style: {
                    marginLeft: "20px",
                    marginTop: "5px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: theme === "dark" ? "#7abfff" : "#0070f3"
                        },
                        children: [
                            reply.author?.name || "Unknown",
                            ":"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostsFeed.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    " ",
                    reply.content,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleCommentLike(reply.id),
                        style: {
                            marginLeft: "10px",
                            background: "#ff4d4f",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "2px 6px",
                            cursor: "pointer"
                        },
                        children: [
                            "❤️ ",
                            reply.likes?.length || 0
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostsFeed.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    !replyInputVisible[reply.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            marginLeft: "10px",
                            background: theme === "dark" ? "#444" : "#0070f3",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "2px 6px",
                            cursor: "pointer"
                        },
                        onClick: ()=>setReplyInputVisible((prev)=>({
                                    ...prev,
                                    [reply.id]: true
                                })),
                        children: "↩️ Reply"
                    }, void 0, false, {
                        fileName: "[project]/components/PostsFeed.jsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    replyInputVisible[reply.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "5px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Write a reply...",
                                value: replyText[reply.id] || "",
                                onChange: (e)=>setReplyText((prev)=>({
                                            ...prev,
                                            [reply.id]: e.target.value
                                        })),
                                rows: 1,
                                style: {
                                    width: "80%",
                                    borderRadius: "6px",
                                    border: "1px solid #ccc",
                                    padding: "6px",
                                    fontSize: "14px",
                                    background: theme === "dark" ? "#222" : "#fff",
                                    color: theme === "dark" ? "#f1f1f1" : "#000",
                                    resize: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/PostsFeed.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "5px",
                                    marginTop: "4px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowEmoji((prev)=>({
                                                    ...prev,
                                                    [reply.id]: !prev[reply.id]
                                                })),
                                        style: {
                                            background: "#eee",
                                            border: "none",
                                            borderRadius: "6px",
                                            padding: "4px 8px",
                                            cursor: "pointer"
                                        },
                                        children: "😊 Emoji"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostsFeed.jsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    showEmoji[reply.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Picker, {
                                        onEmojiClick: (e)=>handleEmojiClick(reply.id, e, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostsFeed.jsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleComment(postId, reply.id),
                                        style: {
                                            background: "#28a745",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "6px",
                                            padding: "4px 8px",
                                            cursor: "pointer"
                                        },
                                        children: "✅ Done"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostsFeed.jsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostsFeed.jsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostsFeed.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    reply.replies?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleReplies(reply.id),
                                style: {
                                    marginTop: "5px",
                                    background: theme === "dark" ? "#333" : "#ddd",
                                    border: "none",
                                    borderRadius: "6px",
                                    padding: "4px 8px",
                                    cursor: "pointer"
                                },
                                children: repliesVisible[reply.id] ? "Hide Replies" : `View Replies (${reply.replies.length})`
                            }, void 0, false, {
                                fileName: "[project]/components/PostsFeed.jsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            repliesVisible[reply.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    marginTop: "5px"
                                },
                                children: [
                                    renderReplies(postId, reply.replies, reply.id),
                                    lazyReplies[reply.id] < reply.replies.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>loadMoreReplies(reply.id),
                                        style: {
                                            marginTop: "5px",
                                            background: "#0070f3",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "6px",
                                            padding: "4px 8px",
                                            cursor: "pointer"
                                        },
                                        children: "➕ View More Replies"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostsFeed.jsx",
                                        lineNumber: 220,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostsFeed.jsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, reply.id, true, {
                fileName: "[project]/components/PostsFeed.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this));
    };
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        background: theme === "dark" ? "#121212" : "#f9f9f9",
        minHeight: "100vh",
        padding: "20px 0",
        color: theme === "dark" ? "#f1f1f1" : "#000"
    };
    const postStyle = {
        background: theme === "dark" ? "#1e1e1e" : "#fff",
        boxShadow: theme === "dark" ? "0 2px 8px rgba(255,255,255,0.05)" : "0 2px 8px rgba(0,0,0,0.1)",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "12px",
        transition: "transform 0.2s"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                fontSize: "18px",
                color: "#888"
            },
            children: "Loading posts..."
        }, void 0, false, {
            fileName: "[project]/components/PostsFeed.jsx",
            lineNumber: 266,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            style: {
                listStyle: "none",
                padding: 0,
                maxWidth: "700px",
                width: "100%"
            },
            children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    style: postStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: theme === "dark" ? "#7abfff" : "#0070f3"
                                    },
                                    children: post.author?.name || "Unknown"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostsFeed.jsx",
                                    lineNumber: 275,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    style: {
                                        color: theme === "dark" ? "#999" : "#999"
                                    },
                                    children: new Date(post.createdAt).toLocaleDateString()
                                }, void 0, false, {
                                    fileName: "[project]/components/PostsFeed.jsx",
                                    lineNumber: 278,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PostsFeed.jsx",
                            lineNumber: 274,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                margin: "10px 0",
                                fontSize: "20px",
                                color: theme === "dark" ? "#f1f1f1" : "#333"
                            },
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/components/PostsFeed.jsx",
                            lineNumber: 284,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginBottom: "15px",
                                lineHeight: "1.5",
                                color: theme === "dark" ? "#ddd" : "#444"
                            },
                            children: post.content
                        }, void 0, false, {
                            fileName: "[project]/components/PostsFeed.jsx",
                            lineNumber: 287,
                            columnNumber: 15
                        }, this),
                        post.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: post.image,
                            style: {
                                maxWidth: "100%",
                                borderRadius: "8px",
                                marginBottom: "15px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PostsFeed.jsx",
                            lineNumber: 292,
                            columnNumber: 17
                        }, this),
                        post.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            controls: true,
                            style: {
                                maxWidth: "100%",
                                borderRadius: "8px",
                                marginBottom: "15px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: post.video
                            }, void 0, false, {
                                fileName: "[project]/components/PostsFeed.jsx",
                                lineNumber: 311,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PostsFeed.jsx",
                            lineNumber: 303,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "15px",
                                marginBottom: "15px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLike(post.id),
                                    style: {
                                        background: "#0070f3",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "6px",
                                        padding: "6px 12px",
                                        cursor: "pointer"
                                    },
                                    children: "👍 Like"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostsFeed.jsx",
                                    lineNumber: 317,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        post._count?.likes || 0,
                                        " Likes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PostsFeed.jsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        post._count?.comments || 0,
                                        " Comments"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PostsFeed.jsx",
                                    lineNumber: 331,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PostsFeed.jsx",
                            lineNumber: 316,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: "15px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Write a comment...",
                                    value: commentText[post.id] || "",
                                    onChange: (e)=>setCommentText((prev)=>({
                                                ...prev,
                                                [post.id]: e.target.value
                                            })),
                                    rows: 1,
                                    style: {
                                        width: "100%",
                                        borderRadius: "6px",
                                        border: "1px solid #ccc",
                                        padding: "8px",
                                        fontSize: "14px",
                                        background: theme === "dark" ? "#222" : "#fff",
                                        color: theme === "dark" ? "#f1f1f1" : "#000",
                                        resize: "none"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/PostsFeed.jsx",
                                    lineNumber: 336,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "8px",
                                        display: "flex",
                                        gap: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowEmoji((prev)=>({
                                                        ...prev,
                                                        [post.id]: !prev[post.id]
                                                    })),
                                            style: {
                                                background: "#eee",
                                                border: "none",
                                                borderRadius: "6px",
                                                padding: "6px 12px",
                                                cursor: "pointer"
                                            },
                                            children: "😊 Emoji"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostsFeed.jsx",
                                            lineNumber: 355,
                                            columnNumber: 19
                                        }, this),
                                        showEmoji[post.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Picker, {
                                            onEmojiClick: (e)=>handleEmojiClick(post.id, e)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostsFeed.jsx",
                                            lineNumber: 371,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleComment(post.id),
                                            style: {
                                                background: "#28a745",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "6px",
                                                padding: "6px 12px",
                                                cursor: "pointer"
                                            },
                                            children: "💬 Comment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostsFeed.jsx",
                                            lineNumber: 373,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PostsFeed.jsx",
                                    lineNumber: 354,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PostsFeed.jsx",
                            lineNumber: 335,
                            columnNumber: 15
                        }, this),
                        post.comments?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                marginTop: "10px",
                                paddingLeft: "0"
                            },
                            children: post.comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    style: {
                                        background: theme === "dark" ? "#2a2a2a" : "#f9f9f9",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: theme === "dark" ? "#7abfff" : "#0070f3"
                                            },
                                            children: [
                                                c.author?.name || "Unknown",
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PostsFeed.jsx",
                                            lineNumber: 402,
                                            columnNumber: 23
                                        }, this),
                                        " ",
                                        c.content,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "5px",
                                                display: "flex",
                                                gap: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleCommentLike(c.id),
                                                    style: {
                                                        background: "#ff4d4f",
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: "6px",
                                                        padding: "4px 10px",
                                                        cursor: "pointer"
                                                    },
                                                    children: [
                                                        "❤️ ",
                                                        c.likes?.length || 0
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PostsFeed.jsx",
                                                    lineNumber: 408,
                                                    columnNumber: 25
                                                }, this),
                                                !replyInputVisible[c.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        background: theme === "dark" ? "#444" : "#0070f3",
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: "6px",
                                                        padding: "4px 10px",
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>setReplyInputVisible((prev)=>({
                                                                ...prev,
                                                                [c.id]: true
                                                            })),
                                                    children: "↩️ Reply"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PostsFeed.jsx",
                                                    lineNumber: 423,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PostsFeed.jsx",
                                            lineNumber: 407,
                                            columnNumber: 23
                                        }, this),
                                        replyInputVisible[c.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    placeholder: "Write a reply...",
                                                    value: replyText[c.id] || "",
                                                    onChange: (e)=>setReplyText((prev)=>({
                                                                ...prev,
                                                                [c.id]: e.target.value
                                                            })),
                                                    rows: 1,
                                                    style: {
                                                        width: "90%",
                                                        borderRadius: "6px",
                                                        border: "1px solid #ccc",
                                                        padding: "6px",
                                                        fontSize: "14px",
                                                        background: theme === "dark" ? "#222" : "#fff",
                                                        color: theme === "dark" ? "#f1f1f1" : "#000",
                                                        resize: "none"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PostsFeed.jsx",
                                                    lineNumber: 443,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: "6px",
                                                        display: "flex",
                                                        gap: "10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowEmoji((prev)=>({
                                                                        ...prev,
                                                                        [c.id]: !prev[c.id]
                                                                    })),
                                                            style: {
                                                                background: "#eee",
                                                                border: "none",
                                                                borderRadius: "6px",
                                                                padding: "4px 10px",
                                                                cursor: "pointer"
                                                            },
                                                            children: "😊 Emoji"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PostsFeed.jsx",
                                                            lineNumber: 462,
                                                            columnNumber: 29
                                                        }, this),
                                                        showEmoji[c.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Picker, {
                                                            onEmojiClick: (e)=>handleEmojiClick(c.id, e, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PostsFeed.jsx",
                                                            lineNumber: 479,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleComment(post.id, c.id),
                                                            style: {
                                                                background: "#28a745",
                                                                color: "#fff",
                                                                border: "none",
                                                                borderRadius: "6px",
                                                                padding: "4px 10px",
                                                                cursor: "pointer"
                                                            },
                                                            children: "✅ Done"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PostsFeed.jsx",
                                                            lineNumber: 482,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PostsFeed.jsx",
                                                    lineNumber: 461,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PostsFeed.jsx",
                                            lineNumber: 442,
                                            columnNumber: 25
                                        }, this),
                                        c.replies?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleReplies(c.id),
                                                    style: {
                                                        marginTop: "8px",
                                                        background: theme === "dark" ? "#333" : "#ddd",
                                                        border: "none",
                                                        borderRadius: "6px",
                                                        padding: "4px 10px",
                                                        cursor: "pointer"
                                                    },
                                                    children: repliesVisible[c.id] ? "Hide Replies" : `View Replies (${c.replies.length})`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PostsFeed.jsx",
                                                    lineNumber: 501,
                                                    columnNumber: 27
                                                }, this),
                                                repliesVisible[c.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            style: {
                                                                marginTop: "8px"
                                                            },
                                                            children: renderReplies(post.id, c.replies, c.id)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PostsFeed.jsx",
                                                            lineNumber: 519,
                                                            columnNumber: 31
                                                        }, this),
                                                        lazyReplies[c.id] < c.replies.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>loadMoreReplies(c.id),
                                                            style: {
                                                                marginTop: "6px",
                                                                background: "#0070f3",
                                                                color: "#fff",
                                                                border: "none",
                                                                borderRadius: "6px",
                                                                padding: "4px 10px",
                                                                cursor: "pointer"
                                                            },
                                                            children: "➕ View More Replies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PostsFeed.jsx",
                                                            lineNumber: 524,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/components/PostsFeed.jsx",
                                    lineNumber: 393,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PostsFeed.jsx",
                            lineNumber: 391,
                            columnNumber: 17
                        }, this)
                    ]
                }, post.id, true, {
                    fileName: "[project]/components/PostsFeed.jsx",
                    lineNumber: 272,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/PostsFeed.jsx",
            lineNumber: 270,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PostsFeed.jsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
_s(PostsFeed, "LRbDeWuuPMHZGsIlxzF7HQVC2fE=");
_c1 = PostsFeed;
var _c, _c1;
__turbopack_context__.k.register(_c, "Picker");
__turbopack_context__.k.register(_c1, "PostsFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ReelsFeed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReelsFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ReelsFeed() {
    _s();
    const [reels, setReels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newComments, setNewComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // temp input per reel
    const fetchReels = async ()=>{
        try {
            const res = await fetch("/api/reels/random"); // fetch reels
            const data = await res.json();
            // Fetch interactions (likes + comments) for each reel
            const reelsWithInteractions = await Promise.all((data.reels || []).map(async (r)=>{
                const res2 = await fetch(`/api/reels/${r.id}/interact`);
                const interactions = await res2.json();
                return {
                    ...r,
                    likes: interactions.likes,
                    comments: interactions.comments
                };
            }));
            setReels(reelsWithInteractions);
        } catch (err) {
            console.error(err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelsFeed.useEffect": ()=>{
            fetchReels();
        }
    }["ReelsFeed.useEffect"], []);
    const handleLike = async (reelId)=>{
        try {
            await fetch(`/api/reels/${reelId}/interact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "like"
                })
            });
            fetchReels(); // refresh to update likes
        } catch (err) {
            console.error(err);
        }
    };
    const handleComment = async (reelId)=>{
        if (!newComments[reelId]) return;
        try {
            await fetch(`/api/reels/${reelId}/interact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "comment",
                    content: newComments[reelId]
                })
            });
            setNewComments({
                ...newComments,
                [reelId]: ""
            }); // clear input
            fetchReels(); // refresh to show new comment
        } catch (err) {
            console.error(err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Reels"
            }, void 0, false, {
                fileName: "[project]/components/ReelsFeed.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            reels.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No reels yet"
            }, void 0, false, {
                fileName: "[project]/components/ReelsFeed.jsx",
                lineNumber: 65,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px"
                },
                children: reels.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "250px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: r.video,
                                controls: true,
                                style: {
                                    width: "100%",
                                    borderRadius: "6px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ReelsFeed.jsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            r.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "5px"
                                },
                                children: r.caption
                            }, void 0, false, {
                                fileName: "[project]/components/ReelsFeed.jsx",
                                lineNumber: 83,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleLike(r.id),
                                style: {
                                    marginTop: "5px",
                                    cursor: "pointer",
                                    padding: "4px 8px",
                                    borderRadius: "4px"
                                },
                                children: [
                                    "❤️ ",
                                    r.likes?.length || 0
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ReelsFeed.jsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "10px"
                                },
                                children: r.comments?.length > 0 && r.comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "13px",
                                            padding: "2px 0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    c.author?.name || "Unknown",
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ReelsFeed.jsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this),
                                            " ",
                                            c.content,
                                            " ",
                                            c.emoji && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: c.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/components/ReelsFeed.jsx",
                                                lineNumber: 104,
                                                columnNumber: 35
                                            }, this),
                                            c.replies?.length > 0 && c.replies.map((rpl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "12px",
                                                        paddingLeft: "10px",
                                                        color: "#555"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                rpl.author?.name || "Unknown",
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ReelsFeed.jsx",
                                                            lineNumber: 116,
                                                            columnNumber: 29
                                                        }, this),
                                                        " ",
                                                        rpl.content
                                                    ]
                                                }, rpl.id, true, {
                                                    fileName: "[project]/components/ReelsFeed.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 27
                                                }, this))
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/components/ReelsFeed.jsx",
                                        lineNumber: 102,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ReelsFeed.jsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Add a comment...",
                                        value: newComments[r.id] || "",
                                        onChange: (e)=>setNewComments({
                                                ...newComments,
                                                [r.id]: e.target.value
                                            }),
                                        style: {
                                            width: "100%",
                                            padding: "5px",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReelsFeed.jsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleComment(r.id),
                                        style: {
                                            marginTop: "5px",
                                            cursor: "pointer",
                                            padding: "4px 8px",
                                            borderRadius: "4px"
                                        },
                                        children: "Comment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReelsFeed.jsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ReelsFeed.jsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/components/ReelsFeed.jsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ReelsFeed.jsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ReelsFeed.jsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ReelsFeed, "bUlobHcSfbyokmjTZca0fq3pxIA=");
_c = ReelsFeed;
var _c;
__turbopack_context__.k.register(_c, "ReelsFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostsFeed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PostsFeed.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ReelsFeed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ReelsFeed.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HomePage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("posts"); // posts | reels
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            padding: "20px",
            display: "flex",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "800px",
                width: "100%",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: "32px",
                        fontWeight: "800",
                        background: "linear-gradient(90deg, #0070f3, #7928ca)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "10px",
                        textShadow: "0px 1px 2px rgba(0,0,0,0.15)"
                    },
                    children: "Welcome to Social App"
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        marginTop: "20px",
                        fontSize: "20px",
                        color: "#555"
                    },
                    children: "Explore"
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px",
                        justifyContent: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("posts"),
                            style: {
                                padding: "10px 20px",
                                background: activeTab === "posts" ? "#0070f3" : "#ddd",
                                color: activeTab === "posts" ? "#fff" : "#000",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: "600"
                            },
                            children: "Posts"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("reels"),
                            style: {
                                padding: "10px 20px",
                                background: activeTab === "reels" ? "#0070f3" : "#ddd",
                                color: activeTab === "reels" ? "#fff" : "#000",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: "600"
                            },
                            children: "Reels"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "30px"
                    },
                    children: [
                        activeTab === "posts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostsFeed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 92,
                            columnNumber: 37
                        }, this),
                        activeTab === "reels" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ReelsFeed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 93,
                            columnNumber: 37
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(HomePage, "n4OMP+ctwk9UF7CGlbNMJldIbiY=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${dplId}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
]);

//# sourceMappingURL=_1e6e6fa5._.js.map