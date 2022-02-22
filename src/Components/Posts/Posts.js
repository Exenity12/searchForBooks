import React from 'react';
import  s from './Posts.module.css';
import PostsNumber from './PostsNumber';


const Posts = (props) => {

let postNumberRender = props.postNumber.map(p => <PostsNumber content={p.content} like={p.like}/>);

let newPostElement = React.createRef();

let addPosts = () => {
  props.addPost()
  props.updateNewPostText("");
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}


  return ( 
    <div className={s.content}>
      <div>
        My posts
        <div>
          New posts
        </div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.NewPostText}></textarea>
        </div>
        <button onClick={addPosts}>
          Send
        </button>
      </div>
      <div className={s.item}>
        { postNumberRender }
      </div>
    </div>
  );
};




export default Posts