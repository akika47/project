function getFirstElement (arr){
    if (arr.length == 0) {
        return "üres tömb"
    }
        return arr[0]
    }
    const numbers = [];
    const words = ["apple", "banana&quot","cherry&quot"];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);