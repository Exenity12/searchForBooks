let rerenderEntireTree = () => {
    console.log("123124");
}


let State = {
    MassengersPage: {
        dialoges: [
            {users: "Petya",  name: "Petya"},
            {users: "Tolya",  name: "Tolya"},
            {users: "Vika",  name: "Vika"},
            {users: "Olga",  name: "Olga"},
        ],
        masseges: [
            {masseges: "Hello world"},
            {masseges: "Hello"},
            {masseges: "world"},
        ],
    },
    PostsPage: {
        postNumber: [
            {content: "my firts posts", like: "Like 32"},
            {content: "Hi comunity", like: "Like 24"},
            {content: "By", like: "Like 28"},
        ],
        NewPostText: "",
    },
}

export let addPost = () => {
    let newPost = {
        content: State.PostsPage.NewPostText,
        like: 0,
    };
    State.PostsPage.postNumber.push(newPost);
    rerenderEntireTree(State);
}

export let updateNewPostText = (newText) => {
    State.PostsPage.NewPostText = newText;
    rerenderEntireTree(State);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default State