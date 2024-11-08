const { addNoteHandler } = require('./handler');
const { getAllNotesHandler } = require('./handler');
const { getNoteByIdHandler } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
      handler: () => {},
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
      },
      {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
      },
  ];
   
  module.exports = routes;