import React from 'react';
import  s from './Component.module.css';
import Posts from '../Posts/Posts.js';

const Component = (props) => {
    return ( 
    <div className={s.content}>
      <div>
        <img src='https://avatars.mds.yandex.net/i?id=3b84ba0a875426c558f8592865b5fa51-5265887-images-thumbs&n=13'></img>
      </div>
      <div className={s.profile}>
        <div>
          Name
        </div>
        <div>
          Description
        </div>
      </div>
      <Posts addPost={props.addPost} updateNewPostText={props.updateNewPostText} postNumber={props.postNumber} NewPostText={props.NewPostText}/>
  </div>
  );
};

export default Component