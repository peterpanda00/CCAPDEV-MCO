const ReviewDetails = ({ review }) => {
  return (
    <div id="post-container">
      <h4>
        <strong>{review.userName}</strong>
      </h4>
      <p>{review.revContent}</p>

      {review.reviewImg && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px', 
            border: '3px solid #F1F1F1',
            padding: '10px',
          }}
        >
          <img
            src={review.reviewImg}
            alt="Review Image"
            style={{
              maxWidth: '100%',
              maxHeight: '100%', 
              width: 'auto',
              height: 'auto',
            }}
          />
        </div>
      )}

      <p>{review.createdAt}</p>
    </div>
  );
};

export default ReviewDetails;