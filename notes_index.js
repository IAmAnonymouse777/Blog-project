
// const addNoteBtn = document.getElementById('addNoteBtn');
// const popup = document.getElementById('popup');
// const closePopup = document.getElementById('closePopup');
// const saveNoteBtn = document.getElementById('saveNoteBtn');
// const noteInput = document.getElementById('noteInput');
// // const notesContainer = document.getElementById('notesContainer');

// // Event Listeners
// addNoteBtn.addEventListener('click', () => {
//   popup.classList.remove('hidden');
//   noteInput.value = '';
// });

// closePopup.addEventListener('click', () => {
//   popup.classList.add('hidden');
// });

// saveNoteBtn.addEventListener('click', () => {
//   const text = noteInput.value.trim();
//   if (text) {
//     addNewNote(text);
//     popup.classList.add('hidden');
//     saveNotesToLocalStorage();
//   }
// });

// // Drag Functionality
// let isDragging = false;
// let offsetX, offsetY;

// popup.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   offsetX = e.offsetX;
//   offsetY = e.offsetY;
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// document.addEventListener('mousemove', (e) => {
//   if (isDragging) {
//     popup.style.left = `${e.pageX - offsetX}px`;
//     popup.style.top = `${e.pageY - offsetY}px`;
//   }
// });

// // Functions
// function addNewNote(text) {
//   const note = document.createElement('div');
//   note.classList.add('note');

//   note.innerHTML = `
//     <textarea readonly>${text}</textarea>
//     <button class="delete">Delete</button>
//   `;

//   const deleteBtn = note.querySelector('.delete');
//   deleteBtn.addEventListener('click', () => {
//     note.remove();
//     saveNotesToLocalStorage();
//   });

//   notesContainer.appendChild(note);
//   saveNotesToLocalStorage();
// }

// function saveNotesToLocalStorage() {
//   const notes = Array.from(document.querySelectorAll('.note textarea')).map(
//     (note) => note.value
//   );
//   localStorage.setItem('notes', JSON.stringify(notes));
// }

// function loadNotesFromLocalStorage() {
//   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   savedNotes.forEach((note) => addNewNote(note));
// }

// Load notes on page load


  fetch('notes.html')
      .then(response => response.text())
      .then(data => {
          // You can extract a specific container or element from the fetched content
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          const notesContainer = doc.querySelector('#notesContainer');  // Assuming #notesContainer exists in anotherPage.html

          // Now append this content to the main page
          if (notesContainer) {


const addNoteBtn = document.getElementById('addNoteBtn');
addNoteBtn.innerHTML='Quick Temp Note'
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
// const saveNoteBtn = document.getElementById('saveNoteBtn');
const noteInput = document.getElementById('noteInput');
// const notesContainer = document.getElementById('notesContainer');

// Event Listeners
addNoteBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
  noteInput.value = '';
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// saveNoteBtn.addEventListener('click', () => {
//   const text = noteInput.value.trim();
//   if (text) {
//     addNewNote(text);
//     popup.classList.add('hidden');
//     saveNotesToLocalStorage();
//   }
// });

// Drag Functionality
let isDragging = false;
let offsetX, offsetY;
            popup.addEventListener('mousedown', (e) => {
              isDragging = true;
              offsetX = e.offsetX;
              offsetY = e.offsetY;
            });
            
            document.addEventListener('mouseup', () => {
              isDragging = false;
            });
            
            document.addEventListener('mousemove', (e) => {
              if (isDragging) {
                popup.style.left = `${e.pageX - offsetX}px`;
                popup.style.top = `${e.pageY - offsetY}px`;
              }
            });
            
            // Functions
            function addNewNote(text) {
              const note = document.createElement('div');
              note.classList.add('note');
            
              note.innerHTML = `
                <textarea readonly>${text}</textarea>
                <button class="delete">Delete</button>
              `;
            
              const deleteBtn = note.querySelector('.delete');
              deleteBtn.addEventListener('click', () => {
                note.remove();
                saveNotesToLocalStorage();
              });
            
              notesContainer.appendChild(note);
              saveNotesToLocalStorage();
            }
            
            function saveNotesToLocalStorage() {
              const notes = Array.from(document.querySelectorAll('.note textarea')).map(
                (note) => note.value
              );
              localStorage.setItem('notes', JSON.stringify(notes));
            }
            
            function loadNotesFromLocalStorage() {
              const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
              savedNotes.forEach((note) => addNewNote(note));
            }

            document.addEventListener('DOMContentLoaded', loadNotesFromLocalStorage);
          }
      })
      .catch(error => console.error('Error loading content:', error));
