const ReviewDetails = ({ review }) => {
    return (
        <div className="post-form">
            <input type="text" placeholder="Your Name">{review.Username}</input>
            <textarea placeholder="Write your post here" defaultValue={""}>{review.revContent}</textarea>
            <input type="file" accept="image/*" multiple>{review.reviewImg}</input> 
            <p>{review.createdAt}</p>
        </div>
    )
}

export default ReviewDetails