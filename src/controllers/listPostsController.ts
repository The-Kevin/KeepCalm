import knex from '../database/connection';
import {Request, Response} from 'express';

const ListPosts = async (request: Request, response: Response) => {

    const posts = await knex('posts').select('*');

    try{
         response.json(posts);
    }catch (error){
        response.send('ocorreu um erro ao buscar as postagens!')
        console.log(error);
    }
};

export default ListPosts;