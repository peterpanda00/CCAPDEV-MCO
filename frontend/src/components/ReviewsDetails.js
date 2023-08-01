const ReviewDetails = ({ review }) => {
    return (
      <div id="post-container">
        <h4>
          <strong>{review.userName}</strong>
        </h4>
        <p>{review.revContent}</p>

        {review.reviewImg && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={review.reviewImg}
            alt="Review Image"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
        </div>
      )}
      
        <p>{review.createdAt}</p>
      </div>
    );
  };
  
  export default ReviewDetails;