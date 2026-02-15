# Get the string length 
def get_String_lenght(string)->int:
    counter = 0
    if string!= None:
        for charecter in string:
            counter = counter + 1
        return counter
# function invocation
input = None
result = get_String_lenght(input)
print(f"String lenth of {input} is {result}")

input1 = " "
result = get_String_lenght(input1)
print(f"String lenth of {input1} is {result}")

input2 = "Pavan"
result = get_String_lenght(input2)
print(f"String lenth of {input2} is {result}")

input3 = "Pavan Magadum"
result = get_String_lenght(input3)
print(f"String lenth of {input3} is {result}")
