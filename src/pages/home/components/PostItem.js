function PostItem({ post }) {
    return (
        <div className="post-container">
            <div className="post-header">
                <img src={post.displayPicture} />
                <p className="post-display-name">{post.displayName}</p>
            </div>
            <div className="post-body">
                <img src={post.image} />
            </div>
            <div className="post-footer">
            </div>
        </div>
    )
}
export default PostItem
