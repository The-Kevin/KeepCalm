import knex from 'knex';
import path from 'path';

 const connect = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true
});

export default connect;

// usei banco relacional para poder adicionar mais tabelas posteriormente 