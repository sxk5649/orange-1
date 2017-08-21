const Bookshelf = require('../bookshelf');

const Student = Bookshelf.Model.extend({
 tableName: 'students'
});

module.exports = Bookshelf.model('Student', Student);
