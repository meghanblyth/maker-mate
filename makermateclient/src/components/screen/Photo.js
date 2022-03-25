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
      <div className='upload-box'>
        <form action="/photos" encType="multipart/form-data" method="post">
            <label style={{fontSize:'1.3em'}}htmlFor="myImage">Add some holiday snaps</label>
            <input className="btn waves-effect waves-light" type="file" name="myImage" />
            <input className="btn waves-effect waves-light" type="submit" value="Upload Photo" />
        </form>
        <br></br>
        <br></br>
        <form action="/photos/profilepic" encType="multipart/form-data" method="post">
            <label style={{fontSize:'1.3em'}} htmlFor="myImage">Add profile pic</label>
            <input className="btn waves-effect waves-light" type="file" name="myImage" />
            <input className="btn waves-effect waves-light" type="submit" value="Upload Photo" />
        </form>
      </div>
    {
      data.map(post=>{
        return(
          <div>
          <div className='photo-album-div' key={post._id}>
              <img className='individual-photo' src={post.imgPath} alt="photo"/>
          </div>
              <div className='photo-buttons' style={{
                   margin: "10px auto",
                   maxWidth: "200px",
                   padding: "20px",
                   textAlign: "center",
              }}>
              <i className="material-icons">delete</i>
              <i className="material-icons">thumb_down</i>
              <i className="material-icons">thumb_up</i>
            </div>
          </div>
        )
      })
    }
  </div>
)}


export default Photo