const { readFileSync } = require('fs');
const { join } = require('path');
const dbConnection = require('../connections');

module.exports = () => {
  const sql = readFileSync(join(__dirname, '..', 'build', 'init.sql')).toString()
            + readFileSync(join(__dirname, '..', 'build', 'fakeData.sql')).toString();

  return dbConnection.query(sql);
};
