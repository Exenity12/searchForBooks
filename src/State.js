import { dialogsReducer, massegesReducer, newMassegeBodyReducer } from "./Reducer";

let store = {
    _State : {
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
            NewMassegeBody: "",
        },
        PostsPage: {
            postNumber: [
                {content: "my firts posts", like: "Like 32"},
                {content: "Hi comunity", like: "Like 24"},
                {content: "By", like: "Like 28"},
            ],
            NewPostText: "",
        },
    },

    _callSubscriber() {
        console.log("123124");
    },
    
    getState() {
        return this._State;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch( action ){

        this._State.MassengersPage = dialogsReducer(this._State.MassengersPage, action);
        this._State.NewMassegeBody = massegesReducer(this._State.NewMassegeBody, action);
        this._State.PostsPage = newMassegeBodyReducer(this._State.PostsPage, action);

        this._callSubscriber(this._State);

    },
};




export default store

















