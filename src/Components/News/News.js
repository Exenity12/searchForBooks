import React from 'react';


const News = () => {


    let store = {login: "", password: ""};



    let onLoginChange = (e) => {
        let body = e.target.value;
        store.login += body;
        console.log(store.login);
    };

    let onPasswordChange = (e) => {
        let body = e.target.value;
        store.password += body;
        console.log(store.password);
    };

    let onNewMassageAlert = () => {
        console.log(store.login, store.password);
        let body = "";
        store.value = body;
    };

     

    return (
        <div>
            <div>
                <div>Login</div>
                <input
                    onChange={onLoginChange}
                    value={store.login}>
                </input>
                <div>Password</div>
                <input
                    value={store.password}
                    onChange={onPasswordChange}>
                </input>
            </div>
            <button onClick={onNewMassageAlert}>Log in</button>
        </div>
        
    )
};

export default News