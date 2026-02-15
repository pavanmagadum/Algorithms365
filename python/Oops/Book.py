class Book:
    __count = 0

    def __init__(self, title, author):
        Book.__count += 1
        self.__book_id = Book.__count
        self.__title = title
        self.__author = author
        self.__is_available = True
        self.__borrowed_by = None

    def get_id(self):
        return self.__book_id

    def get_title(self):
        return self.__title

    def is_available(self):
        return self.__is_available

    def borrow(self, student_name):
        if self.__is_available:
            self.__is_available = False
            self.__borrowed_by = student_name
            print(f"Book '{self.__title}' borrowed by {student_name}")
        else:
            print("Book already borrowed.")

    def return_book(self):
        if not self.__is_available:
            print(f"Book '{self.__title}' returned.")
            self.__is_available = True
            self.__borrowed_by = None
        else:
            print("Book is already available.")

    def display(self):
        print(f"ID: {self.__book_id}, Title: {self.__title}, Author: {self.__author}")
        print("Available:", self.__is_available)
