const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  building: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Content of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note!');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('List out all notes');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note');
  },
});

yargs.parse();
console.log(yargs.parse());
