def reverce_string(string):
    length = len(string)
    reversed = " "
    for end in range(length-1,-1,-1):
        reversed = reversed + string[end]
    return reversed
#function invocation
input = "Pavan Magadum"
reverce_string(input)
print(f"original string is: {input}")
print(f"reverce string is: {reverce_string(input)}")