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
    connection: 'postgres://staposturxkiwo:nPX-GkgL_HIbmRt6r-1I1RrRG8@ec2-54-227-249-166.compute-1.amazonaws.com:5432/ddthgqj582ni44?SSL=true'
    // connection: process.env.DATABASE_URL + '?SSL=true'
  }

};
