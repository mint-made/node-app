const fs = require('fs');
const { array } = require('yargs');

const getNotes = function () {
  return 'Success';
};

// Handler Functions
const addNote = function (title, body) {
  const notes = loadsNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken.');
  }
};

const removeNote = function (title) {
  let notes = loadsNotes();
  const filteredNotes = notes.filter(function (note) {
    return note.title !== title;
  });
  saveNotes(filteredNotes);
};

// Utility Functions
const loadsNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
