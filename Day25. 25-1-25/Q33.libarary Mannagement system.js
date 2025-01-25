// libarary management System

const library = {
    books: [],
    // display Books
    displayBooks : function(){
      console.log("library....")
      let count = 1;
      if(this.books.length === 0){
        console.log("library is empty");
      }else{
          this.books.forEach(book => {
            console.log(`${count}. Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
            count++
         });
      }
    },
    
   // Add book in library
    addBook : function(book) {
     let books = !book.title ? "book titile not 😐founded" :
                 !book.author ? "book author not 😐founded." :
                 !book.year ? "book year not 😐founded" : this.books.push(book)+
                 `.${book.title} 📘 added successfully😊.. `;
                  console.log(books);
   },
   
   // find book from the index
   findBookByTitle : function(title) {
   let findBook = this.books.find(book => book.title === title);
   if(findBook){
     console.log(`here is your book..📗${findBook.title}`)
   }else{
     console.log(`sorry!🙁 ${title} is not avaliable in library`);
   }
   },
   
   // remove book from library
   removeBook : function(title) {
   const index = this.books.findIndex(book => book.title === title);
   if (index !== -1) {
   this.books.splice(index, 1);
   console.log(`${title} removed from library`);
   } else {
   console.log("Book not found.");
   }}};
   
   
   library.displayBooks()
   library.addBook({ title: "The Hobbit",author: "George Orwell", year: 1937 });
   library.addBook({ author: "J.R.R. Tolkien"});
   library.addBook({ title: "The Hobbit", year: 1937});
   library.addBook({ title: "The Hobbit",author: "George Orwell"})
   library.addBook({ title: "The Hot",author: "Grge Orwell", year: 1937 });
   
   library.displayBooks()
   
   library.findBookByTitle("The Hobbit")
   
   library.removeBook("The Hobbit");
   
   library.displayBooks()
   
   library.removeBook("The Hot")
   
   library.displayBooks();
   

   
// library....
// library is empty
// 1.The Hobbit 📘 added successfully😊.. 
// book titile not 😐founded
// book author not 😐founded.
// book year not 😐founded
// 2.The Hot 📘 added successfully😊.. 
// library....
// 1. Title: The Hobbit, Author: George Orwell, Year: 1937
// 2. Title: The Hot, Author: Grge Orwell, Year: 1937
// here is your book..📗The Hobbit
// The Hobbit removed from library
// library....
// 1. Title: The Hot, Author: Grge Orwell, Year: 1937
// The Hot removed from library
// library....
// library is empty
   
   
   
   
   
   
   