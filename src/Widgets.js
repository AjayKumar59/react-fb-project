import { Avatar } from "@material-ui/core";
import React from "react";
import "./Widgets.css";
import { MoreHorizOutlined, SearchRounded,  VideoCallRounded, VolumeDown } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-header">
        <div className="widgets-header-left">
          <h4>Your Pages</h4>
        </div>
        <MoreHorizOutlined />
      </div>
      <div className="widgets-body">
        <div className="widgets-options ml10">
          <Avatar src="https://scontent.fstv2-1.fna.fbcdn.net/v/t1.6435-9/175540605_102966275271905_8651226216268443224_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=ITG0VGravYcAX8i2NDB&_nc_ht=scontent.fstv2-1.fna&oh=53af1ed49e657f683cd1250514078055&oe=617FC382" />
          <h4>Technobhar</h4>
        </div>
        <div className="widgets-options">
            <NotificationsIcon />
          <p>1 Notification</p>
        </div><div className="widgets-options">
            <VolumeDown />
          <p>Create Promotion</p>
        </div>
        <iframe
        className="widgets-scroll"
        title="facebook-post"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTechnobhar-102965861938613%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=143387200923976"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      </div>
      <hr/><br />
      <div className="widgets-header">
        <div className="widgets-header-left">
          <h4>Contact</h4>
        </div>
        <div className="widgets-headerRight">
            <VideoCallRounded />
            <SearchRounded />
            <MoreHorizOutlined />
        </div>
      </div>
      <div className="widgets-body">
        <div className="widgets-options ml10">
          <Avatar src="https://img.icons8.com/color/96/000000/couple-posing.png" />
          <h4>Praveen</h4>
        </div>
        <div className="widgets-options ml10">
          <Avatar src="https://scontent.fstv2-1.fna.fbcdn.net/v/t1.6435-9/175540605_102966275271905_8651226216268443224_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=ITG0VGravYcAX8i2NDB&_nc_ht=scontent.fstv2-1.fna&oh=53af1ed49e657f683cd1250514078055&oe=617FC382" />
          <h4>Noormd</h4>
        </div>
        <div className="widgets-options ml10">
          <Avatar src="https://img.icons8.com/ios-filled/50/000000/github.png" />
          <h4>Abhi</h4>
        </div>
        <div className="widgets-options ml10">
          <Avatar src="https://img.icons8.com/color/96/000000/couple-posing.png" />
          <h4>Ajay</h4>
        </div>
        
      </div>
      
    </div>
  );
}

export default Widgets;
