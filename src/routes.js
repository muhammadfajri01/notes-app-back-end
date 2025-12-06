const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: () => {
  method: 'POST',
  path: '/notes',
  handler: addNoteHandler,
},
  },
];

module.exports = routes;
