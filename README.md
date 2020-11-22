# A Basic CRUD Node application to keep track of notes.
To run the application, navigate to the application folder in your terminal and run the app using any of the following commands:


## Add a note
In your terminal and run the app using the following command. This command takes two arguments; a title and a body variable for the note you want to create.

```
node app.js add --title="Shopping List" --body="milk, eggs, bread, butter and jam"
```
## Remove a note
In your terminal, run the app using the following command. This command takes one arguments; a title for the note you want to remove.

```
node app.js remove --title="Shopping List"
```
## Read a note and its contents
In your terminal, run the app using the following command. This command takes one arguments; a title for the note you want to view.

```
node app.js read --title="Shopping List"
```
## List all note titles
In your terminal, run the app using the following command. 

```
node app.js list
```


