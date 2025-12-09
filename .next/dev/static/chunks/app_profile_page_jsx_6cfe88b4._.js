(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/profile/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/ThemeContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Load emoji picker dynamically
const Picker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Picker;
function ProfilePage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"]);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // States
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFriendRequests, setShowFriendRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMyFriends, setShowMyFriends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestedUsers, setSuggestedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [friendRequests, setFriendRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [myFriends, setMyFriends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoFile, setVideoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Redirect if not logged in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            if (!user) router.push("/login");
            else {
                fetchSuggestions();
                fetchFriendRequests();
            }
        }
    }["ProfilePage.useEffect"], [
        user
    ]);
    if (!user) return null;
    // Helper to show temporary messages
    const showTemporaryMessage = (msg)=>{
        setMessage(msg);
        setTimeout(()=>setMessage(""), 3000);
    };
    // Fetch friend suggestions
    const fetchSuggestions = async ()=>{
        try {
            const res = await fetch("/api/friends/suggestions");
            const data = await res.json();
            setSuggestedUsers(data.users || []);
        } catch (err) {
            console.error(err);
        }
    };
    // Fetch incoming friend requests
    const fetchFriendRequests = async ()=>{
        try {
            const res = await fetch("/api/friends/requests");
            const data = await res.json();
            setFriendRequests(data.requests || []);
        } catch (err) {
            console.error(err);
        }
    };
    // Fetch my friends
    const fetchMyFriends = async ()=>{
        try {
            const res = await fetch("/api/friends/list");
            const data = await res.json();
            setMyFriends(data.friends || []);
        } catch (err) {
            console.error(err);
        }
    };
    // Toggle friend suggestions panel
    const handleAddFriendsClick = async ()=>{
        setShowSuggestions(!showSuggestions);
        if (!showSuggestions && suggestedUsers.length === 0) await fetchSuggestions();
    };
    // Toggle friend requests panel
    const handleShowFriendRequests = async ()=>{
        setShowFriendRequests(!showFriendRequests);
        if (!showFriendRequests) await fetchFriendRequests();
    };
    // Toggle My Friends panel
    const handleShowMyFriends = async ()=>{
        setShowMyFriends(!showMyFriends);
        if (!showMyFriends) await fetchMyFriends();
    };
    // Send friend request
    const handleSendRequest = async (friendId)=>{
        try {
            const res = await fetch("/api/friends/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    friendId
                })
            });
            const data = await res.json();
            if (res.ok) {
                setSuggestedUsers((prev)=>prev.filter((u)=>u.id !== friendId));
                showTemporaryMessage("Friend request sent!");
            } else showTemporaryMessage(data.error || "Failed to send request");
        } catch (err) {
            console.error(err);
            showTemporaryMessage("Failed to send request");
        }
    };
    // Accept friend request
    const handleAcceptRequest = async (requestId)=>{
        try {
            const res = await fetch("/api/friends/accept", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    requestId
                })
            });
            if (res.ok) {
                setFriendRequests((prev)=>prev.filter((r)=>r.id !== requestId));
                showTemporaryMessage("Friend request accepted!");
            }
        } catch (err) {
            console.error(err);
            showTemporaryMessage("Failed to accept request");
        }
    };
    // Reject friend request
    const handleRejectRequest = async (requestId)=>{
        try {
            const res = await fetch("/api/friends/reject", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    requestId
                })
            });
            if (res.ok) {
                setFriendRequests((prev)=>prev.filter((r)=>r.id !== requestId));
                showTemporaryMessage("Friend request rejected!");
            }
        } catch (err) {
            console.error(err);
            showTemporaryMessage("Failed to reject request");
        }
    };
    // Create post
    const handleCreatePost = async (e)=>{
        e.preventDefault();
        if (!title && !content && !imageFile && !videoFile) return alert("Add some content!");
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        if (imageFile) formData.append("image", imageFile);
        if (videoFile) formData.append("video", videoFile);
        try {
            const res = await fetch("/api/posts/create", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            if (res.ok) {
                setTitle("");
                setContent("");
                setImageFile(null);
                setVideoFile(null);
                setShowForm(false);
                showTemporaryMessage("Post created successfully!");
            } else showTemporaryMessage(data.error || "Something went wrong");
        } catch (err) {
            console.error(err);
            showTemporaryMessage("Failed to create post");
        }
    };
    const onEmojiClick = (emojiData)=>{
        setContent((prev)=>prev + emojiData.emoji);
    };
    // Dynamic styles
    const styles = {
        page: {
            display: "flex",
            minHeight: "100vh",
            background: theme === "dark" ? "#121212" : "#fff",
            color: theme === "dark" ? "#f1f1f1" : "#000"
        },
        sidebar: {
            width: collapsed ? "70px" : "220px",
            transition: "width 0.3s",
            padding: "20px 10px",
            background: theme === "dark" ? "#1e1e1e" : "#f0f0f0",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            borderRight: theme === "dark" ? "1px solid #333" : "1px solid #ccc",
            position: "sticky",
            top: 0,
            height: "100vh"
        },
        sidebarBtn: {
            display: "flex",
            alignItems: "center",
            gap: collapsed ? "0" : "10px",
            padding: "10px",
            background: theme === "dark" ? "#333" : "#ddd",
            color: theme === "dark" ? "#fff" : "#000",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
            justifyContent: collapsed ? "center" : "flex-start"
        },
        collapseBtn: {
            marginTop: "auto",
            padding: "6px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: theme === "dark" ? "#fff" : "#000",
            display: "flex",
            justifyContent: collapsed ? "center" : "flex-end"
        },
        main: {
            flex: 1,
            padding: "30px"
        },
        card: {
            marginBottom: "20px",
            padding: "20px",
            background: theme === "dark" ? "#1e1e1e" : "#eee",
            borderRadius: "8px"
        },
        form: {
            marginTop: "20px",
            padding: "20px",
            background: theme === "dark" ? "#1e1e1e" : "#f7f7f7",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        },
        input: {
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: theme === "dark" ? "#2b2b2b" : "#fff",
            color: theme === "dark" ? "#f1f1f1" : "#000"
        },
        textarea: {
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: theme === "dark" ? "#2b2b2b" : "#fff",
            color: theme === "dark" ? "#f1f1f1" : "#000"
        },
        emojiBtn: {
            padding: "6px 12px",
            background: "#ffecb3",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            width: "fit-content"
        },
        submitBtn: {
            padding: "6px 12px",
            background: "green",
            color: "white",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer"
        },
        message: {
            marginTop: "15px",
            color: "green"
        },
        suggestionCard: {
            marginTop: "15px",
            padding: "10px",
            background: theme === "dark" ? "#2a2a2a" : "#eee",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowForm(!showForm),
                        style: styles.sidebarBtn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            " ",
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Create Post"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 208,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddFriendsClick,
                        style: styles.sidebarBtn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserFriends"], {}, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            " ",
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Friend Suggestions"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 212,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowFriendRequests,
                        style: styles.sidebarBtn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserFriends"], {}, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            " ",
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Friend Requests"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 216,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShowMyFriends,
                        style: styles.sidebarBtn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserFriends"], {}, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            " ",
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "My Friends"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 220,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCollapsed(!collapsed),
                        style: styles.collapseBtn,
                        children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {}, void 0, false, {
                            fileName: "[project]/app/profile/page.jsx",
                            lineNumber: 224,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {}, void 0, false, {
                            fileName: "[project]/app/profile/page.jsx",
                            lineNumber: 224,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.jsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Your Profile"
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.card,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Name:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.jsx",
                                        lineNumber: 234,
                                        columnNumber: 14
                                    }, this),
                                    " ",
                                    user.name || "No Name"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Email:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.jsx",
                                        lineNumber: 235,
                                        columnNumber: 14
                                    }, this),
                                    " ",
                                    user.email
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Role:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.jsx",
                                        lineNumber: 236,
                                        columnNumber: 14
                                    }, this),
                                    " ",
                                    user.role
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Joined:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.jsx",
                                        lineNumber: 237,
                                        columnNumber: 14
                                    }, this),
                                    " ",
                                    new Date(user.createdAt).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleCreatePost,
                        style: styles.form,
                        encType: "multipart/form-data",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Post title",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                style: styles.input
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Write your post...",
                                value: content,
                                onChange: (e)=>setContent(e.target.value),
                                rows: 4,
                                style: styles.textarea
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowEmojiPicker(!showEmojiPicker),
                                style: styles.emojiBtn,
                                children: showEmojiPicker ? "Close Emojis" : "Add Emoji"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            showEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Picker, {
                                onEmojiClick: onEmojiClick,
                                theme: theme === "dark" ? "dark" : "light"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 248,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        onChange: (e)=>setImageFile(e.target.files[0])
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.jsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "video/*",
                                        onChange: (e)=>setVideoFile(e.target.files[0])
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.jsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                style: styles.submitBtn,
                                children: "Publish"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: styles.message,
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 258,
                        columnNumber: 21
                    }, this),
                    showSuggestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Friend Suggestions"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            suggestedUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No suggestions found"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 264,
                                columnNumber: 44
                            }, this) : suggestedUsers.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.suggestionCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: u.name || u.email
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.jsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSendRequest(u.id),
                                            style: styles.submitBtn,
                                            children: "Send Request"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.jsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, u.id, true, {
                                    fileName: "[project]/app/profile/page.jsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    showFriendRequests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Incoming Friend Requests"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            friendRequests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No requests"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 279,
                                columnNumber: 44
                            }, this) : friendRequests.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.suggestionCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: r.fromName || "Unknown User"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.jsx",
                                            lineNumber: 282,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "5px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleAcceptRequest(r.id),
                                                    style: styles.submitBtn,
                                                    children: "Accept"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRejectRequest(r.id),
                                                    style: {
                                                        ...styles.submitBtn,
                                                        background: "red"
                                                    },
                                                    children: "Reject"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profile/page.jsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, r.id, true, {
                                    fileName: "[project]/app/profile/page.jsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    showMyFriends && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "My Friends"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            myFriends.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "You have no friends yet"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.jsx",
                                lineNumber: 297,
                                columnNumber: 39
                            }, this) : myFriends.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.suggestionCard,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: f.friend.name || f.friend.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.jsx",
                                        lineNumber: 300,
                                        columnNumber: 19
                                    }, this)
                                }, f.id, false, {
                                    fileName: "[project]/app/profile/page.jsx",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.jsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.jsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/page.jsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(ProfilePage, "0WiZRxxGxDjSce+EMmJxg5WasK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = ProfilePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Picker");
__turbopack_context__.k.register(_c1, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_profile_page_jsx_6cfe88b4._.js.map