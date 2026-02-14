def swap_number(number1, number2):
    temp = number1
    number1 = number2
    number2 = temp
    return number1, number2
# function invocation
number1 = 10
number2 = 20
print(f"Before swapping number1: {number1} number2: {number2}")
number1, number2 = swap_number(number1, number2)

print(f"After swapping number1: {number1} number2: {number2}")
print("\nUsing simple swapping without using third variable")


#using simple swapping without using third variable
def swap_simple(number1, number2):
    return number2, number1
# function invocation
number1 = 10
number2 = 20
print(f"Before swapping number1: {number1} number2: {number2}")
number1, number2 = swap_simple(number1, number2)
print(f"After swapping number1: {number1} number2: {number2}")