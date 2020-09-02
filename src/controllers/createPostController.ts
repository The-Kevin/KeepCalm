import knex from '../database/connection';
import {Request, Response} from 'express';

const CreatePost = async (request: Request, response: Response) => {

    const {autor, texto} = request.body
    const data = new Date();

    try {
        
        await knex('posts').insert({
           autor,
           texto,
           data: data.toLocaleDateString()
       });

   } catch (error) {
       response.send('ocorreu um erro no cadastro do novo post!')
       console.log(error);
   }

    response.json({
       autor,
       texto
   });
   
   response.send('Novo post criado com sucesso!')
   
}


export default CreatePost;