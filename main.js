const myLibrary = [];

function Book(title, author, numoOfPages) {
  this.title = title;
  this.author = author;
  this.numoOfPages = numoOfPages;
}

function addBookToLibrary(title, author, numoOfPages) {
  const book = new Book(title, author, numoOfPages);
  myLibrary.push(book);
  displayBooks();
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 323);

function displayBooks() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  for (let book of myLibrary) {
    const newRow = document.createElement("tr");
    for (let property in book) {
      const newTableData = document.createElement("td");
      newTableData.innerText = book[property];
      newRow.appendChild(newTableData);
    }

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteBook);
    newRow.appendChild(button);
    tableBody.appendChild(newRow);
  }
}

function deleteBook(e) {
  myLibrary.forEach((item, index, arr) => {
    if (item.title == e.target.parentNode.firstChild.innerText)
      arr.splice(index, 1);
  });
  displayBooks();
}

displayBooks();

// 'Project Hail Mary', 'Andy Weir', 496

/*

*/
