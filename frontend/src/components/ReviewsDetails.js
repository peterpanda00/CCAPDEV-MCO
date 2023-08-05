import { useEffect, useState }from 'react'

const ReviewDetails = ({ review,  onDelete  }) => {


  const [userName, setUserName] = useState([]) 
  const [responseContent, setComment] = useState([]) 
  const [comments, setAllComments] = useState('')
  const [error, setError] = useState(null )
  

  const handleDelete = () => {
    onDelete(review._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const comment = {responseContent}; 

    const response = await fetch(`/api/reviews/${review._id}/comments`,{
      method:'POST',
      body:JSON.stringify( comment ),  
      headers:{
        'Content-Type':'application/json'
      }
    })

    const json = await response.json( )

    if(!response.ok){

      setError(json.error)

    }
    if(response.ok){
      setComment('')
      

      setError(null)
      console.log('Comment posted',json)
    }
    
  }



  return (
    <div id="post-container">

    <button className="btn btn-pill btn-small btn-dark margin-small" onClick={handleDelete}>Delete Post</button>
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
      
      <div>
        {review.responseContent.map((comment) => (
          <div className="post-container">{comment}</div>
        ))}
      </div>

      
      <form className="post-container commentForm" id="commentForm" onSubmit={handleSubmit}>
              <textarea 
                    className="post-container"
                    placeholder="Write your comment here" 
                    defaultValue={""}
                    onChange={(e) => setComment([e.target.value])} 
                    value={responseContent}
                    required
                />
                <button className="btn btn-pill btn-small btn-dark">Submit</button>
          </form>
    </div>
  );
};

export default ReviewDetails;