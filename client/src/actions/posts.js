import * as api from '../api/posts';

export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    console.log(id)
    try {
        await api.deletePost(id);

        dispatch({ type: 'pDELETE', id:id });
    } catch (error) {
        console.log(error);
    }
}