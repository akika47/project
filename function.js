function getFirstElement (arr){
        return arr[0]
    }
    const numbers = [1, 2, 3];
    const words = ["apple", "banana&quot","cherry&quot"];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);

    function factorial(n) {
        let ans = 1; 
    
        if(n === 0)
            return 1;
        for (let i = 2; i <= n; i++) 
            ans = ans * i; 
        return ans; 
    }
        console.log(`Factorial of 5: ${factorial(5)}`);