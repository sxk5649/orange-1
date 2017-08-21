const Bookshelf = require('../bookshelf');

const Student = Bookshelf.Model.extend({
 tableName: 'instructors'
});

module.exports = Bookshelf.model('Instructors', Instructors);
