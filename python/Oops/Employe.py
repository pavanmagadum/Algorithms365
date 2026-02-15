class Employee:
    __count = 0

    def __init__(self, name, role):
        Employee.__count += 1
        self.__emp_id = Employee.__count
        self.__name = name
        self.__role = role

    def display(self):
        print(f"Employee ID: {self.__emp_id}, Name: {self.__name}, Role: {self.__role}")