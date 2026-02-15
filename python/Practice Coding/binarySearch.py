def search(arr, key) -> bool:
    leftIndex = 0
    rightIndex = len(arr) - 1
    result = False
    while leftIndex <= rightIndex:
        midIndex = leftIndex + (rightIndex - leftIndex)//2
        if arr[midIndex] == key:
            return True
        elif arr[midIndex] < key:
            leftIndex = midIndex + 1
        else:
            rightIndex = midIndex - 1
    return result
inputArray = [1, 3, 5, 7, 9, 11, 13, 15]
key1 = 7
key2 = 4
result = search(inputArray, key2)
if result:
    print("key found in the array")
else:
    print("key not found in the array")
