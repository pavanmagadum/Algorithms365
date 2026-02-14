#for else loop
number = [1, 2, 4, 5]
for number in number:
     print(number)
     if number == 3:
         break
else:
       print("3 is not found")



# one linear for loop
square = [number ** 2 for number in range(6)]
print(square)  

#continue and break statement
for index in range(1, 10, 1):
   if index == 7:
         continue
   print(index)
   if index == 9:
         break


# list iteration using for loop and while loop
name = ["Pavan", "Kalyan", "Ravi", "Suresh"]
for name in name:
        print(name)

        count = 0
        while count <= 5:
            print(count)
            count += 1