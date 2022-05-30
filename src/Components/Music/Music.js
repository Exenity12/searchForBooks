import React from 'react';


const Music = () => {
    let state = {login: "", password: ""};



    let onLoginChange = (e) => {
        let body = e.target.value;
        state.login += body;
        console.log(state.login);
    };

    let onPasswordChange = (e) => {
        let body = e.target.value;
        state.password += body;
        console.log(state.password);
    };

    let onNewMassageAlert = () => {
        console.log(state.login, state.password);
        let body = "";
        state.value = body;
    };

     

    return (
        <div>
            <div>
                <div>Login</div>
                <input
                    onChange={onLoginChange}
                    value={state.login}>
                </input>
                <div>Password</div>
                <input
                    value={state.password}
                    onChange={onPasswordChange}>
                </input>
            </div>
            <button onClick={onNewMassageAlert}>Register</button>
        </div>
        
    )
};

export default Music