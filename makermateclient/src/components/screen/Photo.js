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
        <div>
        <form action="/photos" encType="multipart/form-data" method="post">
            <label style={{fontSize:'1.3em', color:'black', padding: '10px'}}htmlFor="myImage">Add some holiday snaps</label>
            <input className="btn waves-effect waves-light #1976d2 blue darken-1" style={{ margin: '10px'}}type="file" name="myImage" />
            <input className="btn waves-effect waves-light #1976d2 blue darken-1" type="submit" value="Upload Photo" />
        </form>
        </div>
        <br></br>
        <br></br>
        <div>
        <form action="/photos/profilepic" encType="multipart/form-data" method="post">
            <label style={{fontSize:'1.3em', color:'black', padding: '10px'}} htmlFor="myImage">Add profile pic</label>
            <input className="btn waves-effect waves-light #1976d2 blue darken-1" style={{ margin: '10px'}} type="file" name="myImage" />
            <input className="btn waves-effect waves-light #1976d2 blue darken-1" type="submit" value="Upload Photo" />
        </form>
        </div>
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