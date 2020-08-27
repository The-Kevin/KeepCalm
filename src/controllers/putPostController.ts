import {Request, Response} from 'express';
import knex from '../database/connection';


const PutPost = async (request: Request, response: Response) => {

    const {id, autor, texto} = request.body;

    try {
        await knex('posts')
        .where('id' , id)
        .update({
            "autor" : autor,
            "texto": texto
        });

        response.send('postagem alterada com sucesso');

    } catch (error) {
        console.log(error);
        response.send('ocorreu um erro ao alterar a postagem!');
    }
    

}

export default PutPost;

