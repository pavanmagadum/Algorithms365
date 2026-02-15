#Checking wether the given string is a number or not
def IsNumber(number):
    IsNumber = True
    for eachnumber in number:
        if eachnumber >= '0' and eachnumber <= '9':
            continue
        else:
            IsNumber = False
            break
    return IsNumber
# function invocation

number = "1a578"
if IsNumber(number):
    print(f"{number} is a number")
else:
    print(f"{number} is not a number")


    #Checking wether the given string is a number or not using simple method


def IsnumberSimple(number):
        for eachnumber in number:
            if eachnumber < '0' or eachnumber >'9':
             return False
        return True
# function invocation
number = "12r456"
if IsnumberSimple(number):
    print(f"{number} is a number")
else:
    print(f"{number} is not a number")


# Input and output functions
def Input_function():
    name = input("Enter your name: ")
    age = input("Enter your age: ")
    print(f"Namaksar {name} your age is {age}")

    # function invocation
Input_function()