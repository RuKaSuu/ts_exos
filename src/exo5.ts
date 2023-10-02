function filterEvenNumbers(numbers: number[]) {
    let evenNumber: number[] = [];
    numbers.filter(function (result: number) {
        if (result % 2 === 0 || result === 0) {
            evenNumber.push(result);
        }
    })

    console.log(evenNumber)
}

filterEvenNumbers([1, 6, 7, 8, 9, 2, 4, 6, 55])