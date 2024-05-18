const myLibrary = []



let addButton = document.createElement('button');
addButton.textContent = 'Add Book';
document.body.appendChild(addButton);




let inputTitle, inputAuthor, inputPages, inputRead, submitButton, title, author, pages, read


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read    
}

function displayLibrary() {
    let newUl = document.createElement('ul')
    document.body.appendChild(newUl)

    let newLi = document.createElement('li')
    newLi.textContent = myLibrary[0].title
    newUl.appendChild(newLi)

    newLi = document.createElement('li')
    newLi.textContent = myLibrary[0].author
    newUl.appendChild(newLi)

    newLi = document.createElement('li')
    newLi.textContent = myLibrary[0].pages
    newUl.appendChild(newLi)

    newLi = document.createElement('li')
    newLi.textContent = myLibrary[0].read
    newUl.appendChild(newLi)
}


addButton.addEventListener('click', function() {
    bookForm = document.createElement('form');
    document.body.appendChild(bookForm);



    let labelInputTitle = document.createElement('label')
    labelInputTitle.textContent = 'book title:'
    bookForm.appendChild(labelInputTitle);

    inputTitle = document.createElement('input')
    inputTitle.setAttribute('type', 'text')
    inputTitle.setAttribute('id', 'title')
    bookForm.appendChild(inputTitle);


    let labelInputAuthor = document.createElement('label')
    labelInputAuthor.textContent = 'author:'
    bookForm.appendChild(labelInputAuthor);

    inputAuthor = document.createElement('input')
    inputAuthor.setAttribute('type', 'text')
    inputAuthor.setAttribute('id', 'author')
    bookForm.appendChild(inputAuthor);


    let labelInputPages = document.createElement('label')
    labelInputPages.textContent = 'pages:'
    bookForm.appendChild(labelInputPages);

    inputPages = document.createElement('input')
    inputPages.setAttribute('type', 'text')
    inputPages.setAttribute('id', 'pages')
    bookForm.appendChild(inputPages);


    let labelInputRead = document.createElement('label')
    labelInputRead.textContent = 'Is this book read or unread?:'
    bookForm.appendChild(labelInputRead);

    inputRead = document.createElement('input')
    inputRead.setAttribute('type', 'text')
    inputRead.setAttribute('id', 'read')
    bookForm.appendChild(inputRead);

    submitButton = document.createElement('button')
    submitButton.setAttribute('type', 'submit')
    submitButton.textContent = 'submit'
    bookForm.appendChild(submitButton)


    bookForm.addEventListener('submit', function(event) {
        event.preventDefault()

        title = inputTitle.value
        author = inputAuthor.value
        pages = inputPages.value
        read = inputRead.value
        
        addBookToLibrary(title, author, pages, read)
        displayLibrary()

        console.log(myLibrary)
        
        bookForm.reset()
        document.body.removeChild(bookForm)

    })

})







