import { Router, response } from 'express'

import ListPosts from './controllers/listPostsController';
import CreatePost from './controllers/createPostController';
import PutPost from './controllers/putPostController';
import DeletePost from './controllers/deletePostController';

const routes = Router();

routes.get('/', (request, response) => {
    response.send('API INICIADA COM SUCESSO!')
})

routes.get('/posts',ListPosts);

routes.post('/posts', CreatePost);

routes.put('/posts', PutPost);

routes.delete('/posts', DeletePost);

export default routes;
