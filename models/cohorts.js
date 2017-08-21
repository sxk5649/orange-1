const Bookshelf = require('../bookshelf');

const Student = Bookshelf.Model.extend({
 tableName: 'cohorts'
});

module.exports = Bookshelf.model('Cohorts', Cohorts);
