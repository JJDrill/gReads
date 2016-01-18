// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'gReads'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'gReads',
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
