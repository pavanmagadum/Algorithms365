def getclasspercentage(percentage: float) -> str:
    if percentage >= 75:
        return "Distinction"
    elif percentage >= 60:
        return "First Class"
    elif percentage >= 50:
        return "Second Class"
    elif percentage >= 35:
        return "Third Class"
    else:
        return "Fail"

# Function invocation
Student1 = 76
result = getclasspercentage(Student1)
print(result)
