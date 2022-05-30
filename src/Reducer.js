let initialState = {
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
        NewMassegeBody: "",

}

let initialBody = {
        postNumber: [
            {content: "my firts posts", like: "Like 32"},
            {content: "Hi comunity", like: "Like 24"},
            {content: "By", like: "Like 28"},
        ],
        NewPostText: "",
};

let initialMassage = {

};




export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE-NEW-MASSAGE-BODY":
            state.NewMassegeBody = action.body;
            return state;
        case "SAND-MASSAGE":
            let body = state.NewMassegeBody;
            state.NewMassegeBody = "";
            state.masseges.push({masseges: body});
            return state;
        default: return state;
    };
};






export const massegesReducer = (state = initialMassage, action) => {
    return state;
};






export const newMassegeBodyReducer = (state = initialBody, action) => {
    switch(action.type) {
        case "ADD-POST":
            let newPost = {
                content: state.NewPostText,
                like: 0,
            };
            state.postNumber.push(newPost);
            state.NewPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.NewPostText = action.newText;
            return state;
        default: return state;
    };
};
