import { useEffect, useState }from 'react'
import Cookies from 'js-cookie';

const ReviewDetails = ({ review,  onDelete  }) => {


  const [responseName, setResponseName] = useState('Anonymous') 
  const [comment, setComment] = useState('') 
  const [comments, setComments] = useState('') 
  const [responseContent, setResponse] = useState([]) 
  const [error, setError] = useState(null )

  const [userID, setUserID] = useState(Cookies.get('_id'));
  const GUEST_USERID = "64ccfc4bc4db8bceaaec9ecb"
  const rawUserID = Cookies.get('_id').slice(3, 27);
  

  const handleDeleteComment = async (reviewId, commentId) => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        
        console.log('Comment deleted successfully.');
        window.location.reload()
      } else {
       
        console.error('Failed to delete comment');
      }
    } catch (error) {
      console.error('An error occurred while deleting the comment:', error);
    }
  };


  const handleDelete = () => {
    onDelete(review._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(responseName)
    console.log(comment)
    

    const newComment = {
      userName: responseName, 
      comment: comment, 
    };
    console.log(newComment)
    const commentsArray = [newComment];

    const response = await fetch(`/api/reviews/${review._id}/comments`,{
      method:'POST',
      body:JSON.stringify({ responseContent: commentsArray }),  
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
      window.location.reload()
    }
    
  }

  useEffect(() => {
    const fetchUser = async () => {
      if (userID !== GUEST_USERID) {
        try {
          const response = await fetch(`/api/users/${rawUserID}`);
          if (response.ok) {
            const userData = await response.json();
            setResponseName(userData.userName);

          
            //disableComment=false;
            
          } else {
            console.log('Unable to fetch user data.'); 
          }
        } catch (error) {
          console.log('An error occurred while fetching user data.'); 
        }
      }
    };

    fetchUser();
  },[]);


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

      {/*
          <p>{getTime(review.createdAt)}</p>
          */}
      

      <p><strong>Comments</strong></p>
      
      <div>
        {review.responseContent.map((comment,index) => (
          <div key={index} className="post-container">
            <p><strong>{comment.userName}</strong>: {comment.comment} <button onClick={() => handleDeleteComment(review._id, comment._id)}>&times;</button></p>
            
          </div>
        ))}
      </div>

      
      <form className="post-container commentForm" id="commentForm" onSubmit={handleSubmit}>
              <textarea 
                    className="post-container"
                    placeholder="Write your comment here" 
                    defaultValue={""}
                    onChange={(e) => setComment(e.target.value)} 
                    value={comment}
                    required
                    //disabled={disableComment}
                />
                <button className="btn btn-pill btn-small btn-dark">Submit</button>
          </form>
    </div>
  );
};

export default ReviewDetails;