import { useEffect, useState }from 'react'
import Cookies from 'js-cookie';

const ReviewDetails = ({ review,  onDelete  }) => {


  const [responseName, setResponseName] = useState('Anonymous') 
  const [comment, setComment] = useState('') 
  const [comments, setComments] = useState('') 
  const [responseContent, setResponse] = useState([]) 
  const [error, setError] = useState(null )

  const GUEST_USERID = "64ccfc4bc4db8bceaaec9ecb"
  const [userID, setUserID] = useState(''); 

  useEffect(() => {
    if(Cookies.get('_id') !== '64ccfc4bc4db8bceaaec9ecb' && Cookies.get('_id') !== undefined){
      var userID = (Cookies.get('_id').slice(3,27))
      setUserID((Cookies.get('_id').slice(3,27)))
      
    }
    else if (Cookies.get('_id') !== undefined){
      var userID = (Cookies.get('_id'))
      setUserID((Cookies.get('_id')))
    }
    else{
      var userID = '64ccfc4bc4db8bceaaec9ecb'
      setUserID('64ccfc4bc4db8bceaaec9ecb')
      
    }

    const fetchUser = async () => {
      if (userID !== GUEST_USERID) {
        try {
          const response = await fetch(`https://park-avenue-guesthouse-2443.onrender.com/api/users/${userID}`);
          if (response.ok) {
            const userData = await response.json();
            setResponseName(userData.userName);
            
          } else {
            console.log('Unable to fetch user data.'); 
          }
        } catch (error) {
          console.log('An error occurred while fetching user data.'); 
        }
      }
    };

    fetchUser();  
}, []);

  

  const handleDeleteComment = async (reviewId, commentId) => {
    try {
      const response = await fetch(`https://park-avenue-guesthouse-2443.onrender.com/api/reviews/${reviewId}/comments/${commentId}`, {
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

    const newComment = {
      userName: responseName, 
      comment: comment, 
    };
    
    const commentsArray = [newComment];

    const response = await fetch(`https://park-avenue-guesthouse-2443.onrender.com/api/reviews/${review._id}/comments`,{
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


  return (
    <div id="post-container" style={{ position: 'relative' }}>
      <h4 style={{ display: 'flex', alignItems: 'center' }}>
        <strong>{review.userName}</strong>
        <button
          className="btn btn-pill btn-small btn-dark"
          onClick={handleDelete}
          style={{
            position: 'absolute',
            top: '10px',
            right: '40px',
            fontWeight: 'bold',
            fontSize: '15px',
            background: 'none', 
            border: 'none',
            color: 'gray',
            cursor: 'pointer',
          }}
        >
          Delete Post
        </button>
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
        {review.responseContent.map((comment, index) => (
          <div
            key={index}
            className="post-container"
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              background: '#ECECEC', 
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p style={{ flex: 1 }}>
              <strong>{comment.userName}</strong>: {comment.comment}
            </p>
            <button
              onClick={() => handleDeleteComment(review._id, comment._id)}
              style={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: 'small', 
                color: 'gray'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      
      <form className="post-container commentForm" id="commentForm" onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <textarea
            style={{
              width: '100%',
              height: '100px',
              border: '1px solid #ccc',
              padding: '5px',
              resize: 'none',
              marginBottom: '10px',
            }}
            placeholder="Write your comment here"
            defaultValue={""}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            required
          />
          <button className="btn btn-pill btn-small btn-dark" style={{ marginTop: '10px' }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewDetails;