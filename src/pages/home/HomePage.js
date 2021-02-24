import { useState } from "react";
import PostItem from "./components/PostItem";

function HomePage() {
    const [posts, setPost] = useState([{
        id: 1,
        displayName: "Bikram Gurung",
        displayPicture: "https://picsum.photos/200",
        image: "https://picsum.photos/400"
    }, {
        id: 2,
        displayName: "Bishnu Gurung",
        displayPicture: "https://picsum.photos/200",
        image: "https://picsum.photos/400"
    }, {
        id: 3,
        displayName: "Sunil Gurung",
        displayPicture: "https://picsum.photos/200",
        image: "https://picsum.photos/400"
    }, {
        id: 4,
        displayName: "Prativa Gurung",
        displayPicture: "https://picsum.photos/200",
        image: "https://picsum.photos/400"
    }])
    return (
        <>{posts.map((post) => (
            <PostItem
                key={post.id}
                post={post}
            />
        ))}
        </>
    )
}

export default HomePage
