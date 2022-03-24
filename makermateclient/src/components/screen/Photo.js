//import req from 'express/lib/request';
import React, {useState, useEffect} from 'react';

const Photo = () => { 
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("/photos",{
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json())
      .then(result=>{
        console.log(result)
      setData(result.photos)
    })
  }, [])



return(

  <div>
      <div>
        <form action="/photos" encType="multipart/form-data" method="post">
            <label htmlFor="myImage">Add some holiday snaps</label>
            <input className="choose-file-btn" type="file" name="myImage" />
            <input className="upload-btn" type="submit" value="Upload Photo" />
        </form>
        <form action="/photos/profilepic" encType="multipart/form-data" method="post">
            <label htmlFor="myImage">Add profile pic</label>
            <input className="choose-file-btn" type="file" name="myImage" />
            <input className="upload-btn" type="submit" value="Upload Photo" />
        </form>
        
      </div>


    {
      data.map(post=>{
        return(
          <div key={post._id}>
              <img src={post.imgPath} alt="photo"/>
          </div>
        )
      })
    }
  </div>
)}


export default Photo