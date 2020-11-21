const chalk = require('chalk');
const fs = require('fs');
const { array } = require('yargs');

// Handler Functions
const addNote = (title, body) => {
  const notes = loadsNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken.'));
  }
};

const removeNote = (title) => {
  let notes = loadsNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  saveNotes(notesToKeep);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

const listNotes = () => {
  const notes = loadsNotes();
  console.log(chalk.green.inverse('Your notes'));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadsNotes();
  const noteMatch = notes.find((note) => note.title === title);
  if (noteMatch) {
    console.log(chalk.yellow.inverse(noteMatch.title));
    console.log(noteMatch.body);
  } else {
    console.log(chalk.red.inverse('Note title not found'));
  }
};

// Utility Functions
const loadsNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
