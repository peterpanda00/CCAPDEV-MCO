const ReviewDetails = ({ review }) => {
    return (
      <div id="post-container">
        <h4>
          <strong>{review.userName}</strong>
        </h4>
        <p>{review.revContent}</p>
      
        <p>{review.createdAt}</p>
      </div>
    );
  };
  
  export default ReviewDetails;