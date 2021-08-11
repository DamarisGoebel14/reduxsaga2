
// dispatch GET_POSTS from the component
export const GET_POSTS = "GET_POSTS";
// dispatch SET_POSTS from the data from the api and store it
const SET_POSTS = "SET_POSTS";

//getPosts is been handled by the saga watcher
export const getPosts = () => ({
    type: GET_POSTS
});
// we are getting posts back from an endpoint setUser Action
export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
});

const initialState = {
    posts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            const { posts } = action;
            return { ...state, posts };
        default:
            return state;
    }
};
