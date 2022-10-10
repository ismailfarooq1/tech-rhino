export default (state = {}, action) => {
    switch (action.type) {
        case 'admin/posts':
            return { ...state, allPosts: action.payload };
        default:
            return state;
    }
}