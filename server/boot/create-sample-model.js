var async = require('async');

module.exports = function(app) {
	
  var User = app.models.User;
  User.create({ email: 'admin@admin.com', password: 'admin' }, function(err, user) {
    console.log('Created the following user: ', user);

  });
};
