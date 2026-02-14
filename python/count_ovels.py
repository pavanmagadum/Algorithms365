def count_ovels(string):
    counter = 0
    if string != None:
        for charecter in string:
            if charecter in 'aeiouAEIOU':
                counter = counter + 1
        return counter

#function invocation
input = "Pavan Magadum"
print(f"Number of ovels in '{input}' is: {count_ovels(input)}")