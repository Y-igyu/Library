const myLibrary = [];

// same as --function Book(){this.title: etc.}
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const close = document.querySelector("#close");

const dialog = document.querySelector("#bookInfo");
const newBook = document.querySelector("#newBook");
const addBook = document.querySelector("#addBook");

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.className = "book";

    // checkbox in read input is checked or not
    if (book.read == true) {
      bookEl.innerHTML = `<p class="title">${book.title}</p>
        <p class="author">By: ${book.author}</p>
        <p class="page">${book.page}</p>
        <p class="read">Read: <input type="checkbox" checked/></p>
        <button class="delete" onclick="removeBook(${i})">Delete</button>`;
    } else {
      bookEl.innerHTML = `<p class="title">${book.title}</p>
        <p class="author">By: ${book.author}</p>
        <p class="page">${book.page}</p>
        <p class="read">Read: <input type="checkbox"/></p>
        <button class="delete" onclick="removeBook(${i})">Delete</button>`;
    }

    libraryEl.appendChild(bookEl);
  }
}

// delete function
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  // do stuff
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let page = document.querySelector("#page").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, page, read);

  myLibrary.push(newBook);

  render();
}

// shows dialog box
newBook.addEventListener("click", () => {
  dialog.showModal();
});

// add book to library
addBook.addEventListener("click", () => {
  if (valueCheck() == 1) {
    return alert("Fill it out if you want to add it loser");
  }
  addBookToLibrary();

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#page").value = "";
  document.querySelector("#read").checked = false;
  dialog.close();
});

// close dialog box
close.addEventListener("click", () => {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#page").value = "";
  document.querySelector("#read").checked = false;
  dialog.close();
});

// checks if dialog input is empty
function valueCheck() {
  if (document.querySelector("#title").value == "") {
    return 1;
  }
  if (document.querySelector("#author").value == "") {
    return 1;
  }
  if (document.querySelector("#page").value == "") {
    return 1;
  }
  return 0;
}
