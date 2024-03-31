import axios from 'axios'
import  { useState } from 'react'

function ImageUpload() {
    const [image , setImage] = useState('')
    function handleImage(e){
        console.log(e)
        setImage(e.target.files[0])
    }

    function handleimg(){
        const formData = new FormData()
        formData.append('image',image)
        axios.post('url' , formData).then((res)=>{
            console.log(res)
        })
    }
  return (
    <div>
      <input type="file" name='file' onChange={handleImage} />
      <button onClick={handleimg}>Submit</button>
    </div>
  )
}

export default ImageUpload
