import { useState } from "react"
//import reviewModel from "../../../backend/models/reviewModel"

const MemoriesForm = () => {
    const [user, setName] = useState('')
    const [datePosted, setDate] = useState('')
    const [revContent, content] = useState('')
    const [reviewImg, image] = useState('')
    const [responseDatePosted, resDate] = useState('')
    const [responseContent, resContent] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const review = {user, revContent, reviewImg}

        const response = await fetch('/api/bookings/', {
            method: 'POST',
            body:JSON.stringify(review),  
            headers:{
                'Content-Type':'application/json'
              }
        })
        const json = await response.json()

        if(!response.ok) {
            setDefaultResultOrder(json.error)
        }
        if(response.ok) {
            setName('')
            content('')
            image('')

            setError(null)
            console.log('Inquiry sent',json)
        }
    }
    return (
        <div className="post-form">
            <form className="memForm" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={user}
                    required
                />
                <textarea 
                    placeholder="Write your post here" 
                    defaultValue={""}
                    onChange={(e) => content(e.target.value)}
                    value={revContent}
                    required
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={(e) => image(e.target.value)}
                    value={reviewImg}
                />
                <button>Submit</button>
            </form>
            {error && <div className="text-black">{error}</div>}
        </div>
    )
} 

export default MemoriesForm