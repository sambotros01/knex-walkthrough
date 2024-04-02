// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development:{
    client: 'postgresql',
    connection:{
      database: 'pet_store',
      host: '127.0.0.1',
      user: 'postgres',
      password: 'docker',
      port: 5432
    }
  },

  // development: {
  //   client: 'pg',
  //   connection: {
  //     filename: 'postgres://postgres:docker@localhost/pet_store'
  //   }
  // },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
