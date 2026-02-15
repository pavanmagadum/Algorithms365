def isPalendrome(string) -> bool:
    leftIndex = 0
    rightIndex = len(string)-1
    result = True
    while leftIndex < rightIndex:
        if string [leftIndex] != string[rightIndex]:
            result = False
            break
        leftIndex +=1
        rightIndex -=1
        return result
result1 = "mom"
result2 = "dad"
result3 = "hello"
result4 = "malayalam"
result = isPalendrome(result1)
if result:
        print("String is Palendrome")
else:
        print("String is not Palendrome")

