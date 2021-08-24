// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    //changed from sqlite3 to pg
    connection: 'postgres://postgres:postgres@localhost:5432/docker',
    //removed object, added this connection (docker at end is the name of the db connecting to)
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },

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
