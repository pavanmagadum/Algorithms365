def print_100(maxcount):
    star_string = ""
    for count in range(maxcount):
        star_string = star_string + "*"
    print(star_string)

#print_100(10000)


# optimized version of print_100
def print_stars(maxcount):
    print(maxcount * "*")
#print_stars(10000)


# another optimized version of print_100
def print_stars_2(maxcount):
    for count in range(maxcount):
        print("*", end="")
#print(print_stars_2(10000))

def print_stars_grid_concat(grid_size):
    for row in range(grid_size):
         printMsg = []
         for noOfSize in range(grid_size):
          printMsg.append("*")
         print("".join(printMsg))
print_stars_grid_concat(10)
      


# print stars in 10 crosss 10
def print_stars_grid(maxcount):
    for count in range(maxcount):
        print("*" * 10)
#print_stars_grid(10)



def print_star_for_list(numbers):
    for count in numbers:
        print("*" * count)
#numbers = [1,2,3,4,5]
#print_star_for_list(numbers)


def patern_number():
    for count in range(9,0,-2):
        for count in range(1,count+1,2):
            print(count, end="")
        print()
#patern_number()


#for number in range(11):
   # print(number)


n = 10   # 2nd question
total = 0
index = 1
while index <= n:
    total = total + index
    index = index + 1
#print("sum of number from 1 to" , n, "is", total)   



def printing_multiplication_table(): #3rd question
    table = int(input("Enter the table number: "))
    for row in range(1,11):
        print(f"{table} * {row} = {table*row}")
        print()
#printing_multiplication_table()

def pattern_printing():  #4th question
    for row in range(4):
        for column in range(row + 1):
            print("*", end=" ")
        print()
#pattern_printing()

print()
def pattern_printing_2():  #5th question
    for row in range(4):
        for column in range(4 - row):
            print("*", end=" ")
        print()
#pattern_printing_2()


def finding_even_and_odd(n):
    even_count = 0
    odd_count = 0
    count = 1
    while(count<=n):
        if count %2 == 0:
            even_count += 1
        else:
            odd_count += 1
        count +=1
    print("The total count of even number",even_count)
    print("The total count of odd number",odd_count)
#finding_even_and_odd(69)

def factorial():
    number = int(input("Enter the number to find factioral:"))
    count = 1
    fact = 1
    while(count <= number):
        fact = fact * count
        count += 1
    print(f"Factorial of {number} is :",fact )
#factorial()


def check_prime():
    numbers = int(input("Enter the number to find prime or not: "))

    if numbers < 2:
        print("The number is not a prime number")
        return
    
    i = 2
    is_prime = True
    while i <= numbers // 2:
            if numbers % i == 0:
                is_prime = False
            i +=1

    if is_prime:
     print("The number is prime")
    else:
     print("The number is not prime")
        
#check_prime()


def sum_of_digits(number):
    total = 0
    for digits in str(number):
        total = total + int(digits)
    print("The sum of digits in the number is:", total)
#sum_of_digits(1234)


#print(sum(map(int, str(1234))))