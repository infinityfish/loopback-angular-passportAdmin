// module.exports = function(app) {
//   // Install a "/ping" route that returns "pong"
//   app.get('/ping', function(req, res) {
//     res.send('pong');
//   });
// };


'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/status', server.loopback.status());
  server.use(router);
};