const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../data/db.json'));
const middlewares = jsonServer.defaults();
 
server.use(middlewares);
server.use(router);
server.listen(3006, () => {
  console.log('JSON Server is running on port 3006...')
});