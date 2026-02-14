def numbers_recusion(number):
    if number == 0:
        return
    
  
    print(f"before the recursive call: {number}")
    number = number - 1
    
    numbers_recusion(number)
    print(f"after the recursive call: {number}")

numbers_recusion(5)