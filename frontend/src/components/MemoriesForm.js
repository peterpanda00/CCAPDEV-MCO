import { useState,useEffect } from "react"
import Cookies from 'js-cookie';


const MemoriesForm = () => {

    const [userID, setUserID] = useState(Cookies.get('_id'));
    const GUEST_USERID = "64ccfc4bc4db8bceaaec9ecb"
    const rawUserID = Cookies.get('_id').slice(3, 27);
    var registered = false;

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const currentDate = new Date(); 
        const formattedDate = currentDate.toISOString();
        
        const review = {userName, datePosted:formattedDate, revContent, reviewImg:imageUrl}

        const response = await fetch('/api/reviews/', {
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

    useEffect(() => {
        const fetchUser = async () => {
          if (userID !== GUEST_USERID) {
            try {
              const response = await fetch(`/api/users/${rawUserID}`);
              if (response.ok) {
                const userData = await response.json();
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
                setName(`${userData.firstName} ${userData.lastName}`);
                
                registered=true;
                
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

    const handleImage = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
    
        
        const { url } = await fetch("/s3Url").then((res) => res.json());
        console.log(url);
    
     
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: file,
        });
    
        const imageUrl = url.split('?')[0];
        console.log({imageUrl});
        setImageUrl(imageUrl);
        setImage(imageUrl);
        console.log({reviewImg});
    
        // You can post a request to your server here to store any extra data
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
                    <input type="file" id="imageInput" onChange={handleImage}/>
                </div>
                
                <button>Submit</button>
            </form>
            {error && <div className="text-black">{error}</div>}
        </div>
    )
} 

export default MemoriesForm