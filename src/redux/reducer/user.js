
// dispatch GET_USER from the component
export const GET_USER = "GET_USER";
// dispatch SET_USER from the data from the api and store it
const SET_USER = "SET_USER";

//getUser is been handled by the saga watcher
export const getUser = () => ({
    type: GET_USER
});
// we are getting an user back from an endpoint setUser Action
export const setUser = (user) => ({
    type: SET_USER,
    user
});

const initialState = {
    user: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            const { user } = action;
            return { ...state, user };
        default:
            return state;
    }
};
