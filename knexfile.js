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
    connection: process.env.DATABASE_URL + '?SSL=true'
  }

};
