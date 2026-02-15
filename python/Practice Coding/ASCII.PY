def printASCIofString(string):
    string = input("Enter the string: ")
    for charecter in string:
        print(f"ASCI value of {charecter} is {ord(charecter)}")

# function invocation
printASCIofString("hello world")
