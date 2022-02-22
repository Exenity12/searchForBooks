import React from 'react';
import  s from './PostsNumber.module.css';


const PostsNumber = (props) => {
return ( 
     <div className={s.item}>
      <div>
        <img src='https://avatars.mds.yandex.net/i?id=3b84ba0a875426c558f8592865b5fa51-5265887-images-thumbs&n=13'></img>
        {props.content }
      </div>
      <div>
       {props.like}
      </div>
    </div>
  );
};




export default PostsNumber