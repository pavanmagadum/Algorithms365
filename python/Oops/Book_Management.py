class BookManagement:

    def __init__(self):
        self.__books = []

    def add_book(self, book):
        self.__books.append(book)
        print("Book added successfully.")

    def display_books(self):
        if not self.__books:
            print("No books available.")
        for book in self.__books:
            book.display()
            print("----------------")

    def borrow_book(self, book_id, student):
        for book in self.__books:
            if book.get_id() == book_id:
                if book.is_available():
                    book.borrow(student.get_name())
                    student.borrow_book(book.get_title())
                else:
                    print("Book not available.")
                return
        print("Book not found.")

    def return_book(self, book_id, student):
        for book in self.__books:
            if book.get_id() == book_id:
                book.return_book()
                student.return_book(book.get_title())
                return
        print("Book not found.")