import {combineReducers} from 'redux';
import PostsReducer from './PostsReducer';
import CommentsPostsReducer from './CommentsPostsReducer';
import UserDetailsReducer from './UserDetailsReducer';

export default combineReducers ({
    PostsReducer: PostsReducer,
    CommentsPostsReducer: CommentsPostsReducer,
    UserDetailsReducer: UserDetailsReducer,
    
})