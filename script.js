let input = [...document.querySelectorAll('input')];
console.log(input);

input.forEach((element) => {
    element.addEventListener('keyup', (event) => {
        // Check if the pressed key is not Enter (optional)
        if (event.key !== 'Enter') {
            let currentIndex = input.indexOf(element);
            if (currentIndex + 1 < input.length) {
                input[currentIndex + 1].focus();
            }
        }
    });
});
