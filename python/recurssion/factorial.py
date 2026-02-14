def factorial(number):
    if number <=10:
        if number == 0:
            return 1
        else:
            print(f"factorial({number}) = {number} * factorial({number - 1})")
            return number * factorial(number - 1)
    else:
        return "Number should be less than or equal to 10"
print(factorial(5))