import knex from '../database/connection';
import {Request, Response} from 'express';

const DeletePost = async (request: Request, response: Response) => {

    const { id } = request.body;

        try {
            await knex('posts')
        .where('id', id)
        .del();
       
        response.send(`post de id ${id} apagado com sucesso`)

        } catch (error) {
            console.log(error);
            response.send('ocorreu um erro ao apagar a postagem')
        }
       
}

export default DeletePost;
