function checkForInt(intTest) {
    intTest = parseInt(intTest);
    console.log(intTest);

    console.log(Number.isNaN(intTest));


    while (Number.isNaN(intTest)) {
        if (Number.isNaN(intTest)) {
            intTest = prompt("Enter a # fool!");
            intTest = parseInt(intTest);
            console.log(intTest);
        }
    }
}
