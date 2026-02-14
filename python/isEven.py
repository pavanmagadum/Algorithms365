def IsEven(number):
    if number%2 == 0:
        return True
    else:
        return False
# function invocation
number =8
if IsEven(number):
    print(f"{number} is an even number")
else:
    print(f"{number} is an odd number")     