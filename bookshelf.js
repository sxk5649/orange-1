const knex = require('knex')(require('./knefile'));
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry')

module.export = bookshelf;
