# Sum Of Two Numbers
def get_sum(Number1, Number2):
    return Number1+Number2

# function invocatiov
# sum for integers
def invocation():
    sum = get_sum(40, 60)
    print("Sum of two numbers is: ",sum)

    # sum for float
    sum1 = get_sum(1.5, 2.8)
    print("Sum of two numbers is: ",sum1)

    # sum for string
    sum2 = get_sum("Pavan ", "Magadum")
    print("Sum of two numbers is: ",sum2)

# using single function for different data types is called polymorphism



# sum of numbers in list or array

def sumOfNumbers(numbers):
    sum = 0
    for number in numbers:
        sum = sum + number
    return sum
# function invocation
numbers = [20, 30, 40, 50]
result = sumOfNumbers(numbers)
print(f"Sum of number in list is : {result}")


# sum of numbers using while loop
a = int(input("Enter a number: "))
sum = 0

while a > 0:
    sum += a % 10
    a = a // 10
print(f"Sum of digits is: {sum}")

#sum of numbers using for loop
sum = 0
number = [1, 2, 6, 4]
count = 0
for index in number:
    count = count + 1
    sum = sum + index
   
print(f"count :{count}")
print(f"sum :{sum}")