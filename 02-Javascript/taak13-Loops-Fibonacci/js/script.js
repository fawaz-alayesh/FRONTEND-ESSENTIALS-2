var fibonacci = [1,2];
for (i = fibonacci.length; i < 10; i++){
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
}
console.log(fibonacci);
