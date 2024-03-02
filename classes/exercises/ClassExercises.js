// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, numPages, checkOutNum, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.checkOutNum = checkOutNum;
        this.discarded = discarded;
        
    } 
    checkout(uses=1){
        this.checkOutNum += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, checkOutNum, discarded) {
        super(title, author, copyrightDate, ISBN, numPages, checkOutNum, discarded);
    }
    discard(date){
        if (date-this.copyrightDate > 5) {
            this.discarded = "Yes";
        }
    } 
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, checkOutNum, discarded){
        super(title, author, copyrightDate, ISBN, numPages, checkOutNum, discarded);
    }
    discard(){
        if (this.checkOutNum > 100){
            this.discarded = "Yes";
        } 
    }
}
// Declare the objects for exercises 2 and 3 here:
let pridePrej = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");

let SecretShuttle = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, "No");
// Code exercises 4 & 5 here:


console.log(novel.SecretShuttle.checkOutNum(120));
console.log(SecretShuttle.novel.discard());