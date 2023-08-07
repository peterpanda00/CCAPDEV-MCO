import { useState,useEffect } from "react"
import Cookies from 'js-cookie';


const MemoriesForm = () => {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setName] = useState('')
    const [datePosted, setDate] = useState('')
    const [revContent, content] = useState('')
    const [reviewImg, setImage] = useState('')
    const [responseDatePosted, resDate] = useState('')
    const [responseContent, resContent] = useState('')
    const [error, setError] = useState(null)
    const [imageUrl, setImageUrl] = useState(null);

    const [isImageLoading, setImageLoading] = useState(false);


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
          const response = await fetch(`http://localhost:4000/api/users/${userID}`);
          if (response.ok) {
            const userData = await response.json();
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setName(`${userData.firstName} ${userData.lastName}`);
            
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const currentDate = new Date(); 
        const formattedDate = currentDate.toISOString();
        
        const review = {userName, datePosted:formattedDate, revContent, reviewImg:imageUrl}

        const response = await fetch('http://localhost:4000/api/reviews/', {
            method: 'POST',
            body:JSON.stringify(review),  
            headers:{
                'Content-Type':'application/json'
              }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setName('')
            setDate('')
            content('')
            setImage('')
            setImageUrl('')
          

            setError(null)
            console.log('Post sent',json)
            window.location.reload()
        }

      
    }

    



    const handleImage = async (event) => {
      event.preventDefault();
      const file = event.target.files[0];

      if (file) {
          setImageLoading(true); 

          const { url } = await fetch("http://localhost:4000/s3Url").then((res) => res.json());

          await fetch(url, {
              method: "PUT",
              headers: {
                  "Content-Type": "multipart/form-data",
              },
              body: file,
          });

          const imageUrl = url.split('?')[0];
          setImageUrl(imageUrl);
          setImage(imageUrl);
          setImageLoading(false); 
      } else {
          setImageUrl('');
          setImage('');
      }
  };

    return (
        <div className="post-form">
        
        <form className="memForm" id="memForm" onSubmit={handleSubmit}>
        {userID === GUEST_USERID ? (
                <>
                    <form className="memForm" id="memForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                        value={userName}
                    />
                    </form>
                </>
                ) : (
                
                <>
                    <h2>{firstName} {lastName}</h2>
                </>
                )}

                <textarea 
                    placeholder="Write your post here" 
                    defaultValue={""}
                    onChange={(e) => content(e.target.value)}
                    value={revContent}
                    required
                />
                <div>
                    <input type="file" id="imageInput" onChange={handleImage} onclick={handleImage}/>
                </div>
                
                <button onClick={handleSubmit} disabled={isImageLoading}>
                    {isImageLoading ? "Loading..." : "Submit"}
                </button>
            </form>
            {error && <div className="text-black">{error}</div>}
        </div>
    )
} 

export default MemoriesForm