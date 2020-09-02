import { Router, response } from 'express'

import ListPosts from './controllers/listPostsController';
import CreatePost from './controllers/createPostController';
import PutPost from './controllers/putPostController';
import DeletePost from './controllers/deletePostController';

const routes = Router();

routes.get('/', (request, response) => {
    response.send('API INICIADA COM SUCESSO!')
})

routes.get('/postsList',ListPosts);

routes.post('/postsCreate', CreatePost);

routes.put('/postsPut', PutPost);

routes.delete('/postsPost', DeletePost);

export default routes;
