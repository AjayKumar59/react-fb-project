import React, { useState, useRef } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar, IconButton, Modal } from "@material-ui/core";
import './MessageSender.css'
import { Close, Crop, EmojiEmotions, PhotoLibrary, VideoCallRounded } from "@material-ui/icons";
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase'
import { storage } from "./firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [image, setImage] = useState('');
  const [input, setInput] = useState('')
  const [progress, setProgress]=useState(0)
  const [open, setOpen]=useState(false)
  const handleClose=()=>{
    setOpen(false)
  }
  const handleOpen=()=>{
    setOpen(true)
  }
 const uploadFile=()=>{
   document.getElementById("imagefile").click();

 }

    // const uploadfile=()=>{
    //        document.getElementById("imagefile").click();

    // }
    const handleChange=(e)=>{
      if(e.target.files[0])
      {
        setImage(e.target.files[0]);
      }
console.log(image.name)
    }


    const handleUpload=(e)=>{
      e.preventDefault();
      if(image===""){
        db.collection('posts').add({
          
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName
      
      })
        
      }
      else{

        const uploadTask= storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
          "state_changed",
          (snapshot)=>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
            setProgress(progress)
          },
          (error)=>{
            console.log(error);
            alert(error.message);
          },
          ()=>{
            storage.ref("images").child(image.name).getDownloadURL().then(url=>{
              db.collection('posts').add({
          
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                image: url
            }) 
            handleClose();
            setInput("");
            setImage(null);
            setProgress(0);
            })
          }
        )

      }
     
    }
    

    

    // const handleUpload = (e) => {
    //     e.preventDefault()

    //     db.collection('posts').add({
          
    //         message: input,
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //         profilePic: user.photoURL,
    //         username: user.displayName,
    //         image: image
    //     })


    //     setInput('')
    //     setImage('')
    // }
    return (
        <>
        <Modal open={open} onClose={handleClose}>
      <div className="modal-pop">
        <form >
          <div className="modalHeading">
            <h3>Create Post</h3>
            <IconButton onClick={handleClose}>
              <Close/>
            </IconButton>
          </div>
          <div className="modalHeader-top">
            <Avatar src={user.photoURL}/>
            <h5>{user.displayName}</h5>
          </div>
          <div className="modal-body">
           <textarea  rows="5" placeholder="What's on your mind " value={input} onChange={(e) => setInput(e.target.value)}/>
          </div>
          <div className="modalFooter">
            <div className="modalFooter-left">

            </div>
            <div className="modalFooter-right">
              <h3>Add to post</h3>
              <IconButton onClick={uploadFile}>
                <PhotoLibrary style={{color: "red"}}/>
              </IconButton>
              <input type="file" id="imagefile" onChange={handleChange} style={{display:"none"}}/>
              <IconButton>
                <VideoCallRounded style={{color: "blue"}}/>
              </IconButton>
              <IconButton>
          <EmojiEmotions style={{color: "orange"}}/>
              </IconButton>

            </div>

          </div>
          {image!=="" && <p style={{"marginBottom":"20px", "color":"green"}}> Image Added , Display after click on Post Button  </p>}
          {
            progress!="" &&  <progress value={progress} max ="100" style={{"width":"100%", "marginBottom":"20px"}}/>
          }
          
          <input onClick={handleUpload} value="post" type="submit" className="post-submit" />
        </form>
      </div>

    </Modal>
        <div className="messageSender">
            <div class="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    
                    <input  className="messageSender__input" onClick={handleOpen}  placeholder={`What's on your mind ${user.displayName}?`} />


                </form>
            </div>
            <div class="messageSender__bottom">
                <div class="messageSender__option">
                    <VideocamIcon  style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div><div  class="messageSender__option">
                    <PhotoLibraryIcon  style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div><div  class="messageSender__option">
                    <InsertEmoticonIcon  style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default MessageSender
