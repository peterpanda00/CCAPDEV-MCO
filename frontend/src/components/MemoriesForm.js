import { useState } from "react"


const MemoriesForm = () => {
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

    const handleImage = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
    
        // Get the secure URL from your server
        const { url } = await fetch("/s3Url").then((res) => res.json());
        console.log(url);
    
        // Post the image directly to the S3 bucket
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
                <input 
                    type="text" 
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={userName}
                    
                />
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