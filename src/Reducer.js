let initialState = {
    value: {
        lastPage: 30,
        allBooks: [],
        isArrayOfBooks: false,
    },
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE":
            state.value.lastPage = 31;
            state.value.allBooks = [...action.body];
            state.value.isArrayOfBooks = true;
            return state;
        case "MORE":
            state.value.lastPage = state.value.lastPage + 30;
            state.value.allBooks = [...state.value.allBooks, ...action.body];
            return state;
        default: return state;
    };
};

