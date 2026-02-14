#include<stdio.h>

/*int main() {
    for (int number = 0; number <= 10; number++) {
      
        if(number == 5) {
            continue; // Skip the rest of the loop when number is 5
        }
          if (number == 8){
            break; // Exit the loop when number is 4
        }
        printf("%d\n", number);
    }
}*/
// Compile with: gcc forloop.c -o forloop.exe
// Run with: ./forloop.exe



int main() {
    for (int number = 1; number <= 100000; number++) {
        for (int value = 1; value <= 10; value++) {
            int result = number * value;
            printf("%d ", result);
        }
    }
}