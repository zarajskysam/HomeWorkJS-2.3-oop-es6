//Задание 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }    

    fix(){
        this.state = this.state * 1.5;  
    }

    set state(val) { 
        if (val < 0) {
            this._state = 0;
        } else if (val > 100) {
            this._state = 100;
        } else {
            this._state = val;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author; 
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

//Задание 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.schoolSubjects = {

        };
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject){
        if (this.schoolSubjects[subject]){
            if (grade >= 1 && grade <= 5) {
                this.schoolSubjects[subject].push(grade);
            } else {
                return `Вы пытались поставить оценку "отлично!" по предмету ${subject}. Допускаются только числа от 1 до 5`;
            }
        } else {
            if (grade >= 1 && grade <= 5) {
                this.schoolSubjects[subject] = [grade];
            } else {
                return `Вы пытались поставить оценку "отлично!" по предмету ${subject}. Допускаются только числа от 1 до 5`;
            }
        }
        return this.schoolSubjects[subject].length;
    }

    getAverageBySubject(subject) {
        for (let i = 0; i < Object.keys(this.schoolSubjects).length; i++) {
            if (Object.keys(this.schoolSubjects)[i] === subject) {
                let sumMarks = 0;
                for (let i = 0; i < this.schoolSubjects[subject].length; i++) {
                    sumMarks += this.schoolSubjects[subject][i];
                }
                return sumMarks / this.schoolSubjects[subject].length;
            }
        }
        return 0;
    }

    getTotalAverage() {
        let sumMarks = 0;
        let quantityMarks = 0;
        for (let sub in this.schoolSubjects) {
            let sumMarksIteration = 0;
            let quantityMarksIteration = 0;
            for (let i = 0; i < this.schoolSubjects[sub].length; i++) {
                sumMarksIteration += this.schoolSubjects[sub][i];
            }
            sumMarks += sumMarksIteration;
            quantityMarks += this.schoolSubjects[sub].length;
        }
        return sumMarks / quantityMarks;
    }
}