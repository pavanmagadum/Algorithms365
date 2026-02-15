class Student:
    __count = 0

    def __init__(self, name, age):
        Student.__count += 1
        self.__id = Student.__count
        self.__name = name
        self.__age = age
        self.__borrowed_books = []

    def get_id(self):
        return self.__id

    def get_name(self):
        return self.__name

    def borrow_book(self, book_title):
        self.__borrowed_books.append(book_title)

    def return_book(self, book_title):
        if book_title in self.__borrowed_books:
            self.__borrowed_books.remove(book_title)

    def display(self):
        print(f"ID: {self.__id}, Name: {self.__name}, Age: {self.__age}")
        print("Borrowed Books:", self.__borrowed_books)