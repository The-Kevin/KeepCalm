import { Router } from 'express'

import ListPosts from './controllers/listPostsController';
import CreatePost from './controllers/createPostController';
import DeletePost from './controllers/deletePostController';

const routes = Router();

routes.get('/posts',ListPosts);

routes.post('/posts', CreatePost);

routes.delete('/posts', DeletePost);

export default routes;
