import { Router } from 'express'


const routes = Router();


routes.get('/', (request, response) => {
    response.json({
        test: "this is a test routes"
    });
});


export default routes;
