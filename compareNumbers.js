function compareNumbers(num1, num2) {
	if(!num1 || !num2) return 'Defina dois números!';
	
    const firstSentence = createFirstSentence(num1, num2);
    const secondSentence = createSecondSentence(num1, num2);
    
    return `${firstSentence} ${secondSentence}`;
}

function createFirstSentence(num1, num2) {
    let firstSentence = `Os números ${num1} e ${num2}`;
    let yesNo = 'No'

    if (num1 === num2) {
        yesNo = '';
    }

    return `${firstSentence} ${yesNo} são iguais.`
}

function createSecondSentence(num1, num2) {
	const sum = num1 + num2;

	let result10 = 'menor';
	let result20 = 'maior';
	const compare10 = sum > 10;
	const compare20 = sum > 20;

	if(compare10) {
		result10 = 'maior';
	}

	if(compare20) {
		result20 ='maior'
	}

	return `Sua soma é ${sum}, que é ${result10} que 10 e ${result20} que 20.`
}

console.log(compareNumbers(20, 20));