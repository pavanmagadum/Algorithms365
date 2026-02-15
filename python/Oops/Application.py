
from Book import Book
from Book_Management import BookManagement
from Student import Student

class Application:

    def __init__(self):
        self.__library = BookManagement()
        self.__students = []

    def run(self):
        while True:
            print("\n===== LIBRARY MANAGEMENT =====")
            print("1. Add Book")
            print("2. Display Books")
            print("3. Register Student")
            print("4. Borrow Book")
            print("5. Return Book")
            print("6. Exit")

            choice = input("Enter choice: ")

            if choice == "1":
                title = input("Enter book title: ")
                author = input("Enter author: ")
                book = Book(title, author)
                self.__library.add_book(book)

            elif choice == "2":
                self.__library.display_books()

            elif choice == "3":
                name = input("Enter student name: ")
                age = input("Enter student age: ")
                student = Student(name, age)
                self.__students.append(student)
                print("Student registered successfully.")

            elif choice == "4":
                book_id = int(input("Enter book ID: "))
                student_id = int(input("Enter student ID: "))
                student = self.__find_student(student_id)
                if student:
                    self.__library.borrow_book(book_id, student)
                else:
                    print("Student not found.")

            elif choice == "5":
                book_id = int(input("Enter book ID: "))
                student_id = int(input("Enter student ID: "))
                student = self.__find_student(student_id)
                if student:
                    self.__library.return_book(book_id, student)
                else:
                    print("Student not found.")

            elif choice == "6":
                print("Exiting... Thank you!")
                break

            else:
                print("Invalid choice!")

    def __find_student(self, student_id):
        for student in self.__students:
            if student.get_id() == student_id:
                return student
        return None
    

if __name__ == "__main__":
    app = Application()
    app.run()