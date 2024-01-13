let calculation = '';
let languageCode;

document.documentElement.setAttribute('lang', navigator.language)

function result(){ 
document.getElementById('result').innerText=calculation;
console.log(calculation)
}

document.onkeydown = function(e){
	
	if (e.key == '1' || 
			e.key == '2' || 
			e.key == '3' || 
			e.key == '4' || 
			e.key == '5' || 
			e.key =='6'  || 
			e.key == '7' || 
			e.key == '8' || 
			e.key == '9' ||
			e.key == '0' ||
			e.key == '.') {
		calculation +=e.key
	}

	if (e.key == '=' || e.key == 'Enter'){
			try {
				calculation = eval(calculation).toString();
				if (calculation=='Infinity') {
					if (document.documentElement.getAttribute('lang')=='pl') {
						calculation='BŁĄD - Dzielenie przez 0';
					}else{
						calculation='ERROR - Division by 0';
					}
				}
			} catch (SyntaxError) {
				if (document.documentElement.getAttribute('lang'=='pl')) {
					alert(`Wewnątrz działania: "${calculation}" jest błąd. Proszę poprawić działanie i wprowadzić je ponownie.`)
				} else {
					alert(`There is an error inside: ${calculation} operation. Please correct it and enter it again.`)
				}
				calculation=''
				}
		if (calculation=='undefined') {
			calculation='';
		}
	}

	if (e.key == 'Backspace'){
		if (calculation.toString().slice(-1) == '1' || 
				calculation.toString().slice(-1) == '2' || 
				calculation.toString().slice(-1) == '3' || 
				calculation.toString().slice(-1) == '4' || 
				calculation.toString().slice(-1) == '5' || 
				calculation.toString().slice(-1) == '6' || 
				calculation.toString().slice(-1) == '7' || 
				calculation.toString().slice(-1) == '8' || 
				calculation.toString().slice(-1) == '9' ||
				calculation.toString().slice(-1) == '0') {
					calculation = calculation.slice(0,-1);
	}
	if (calculation.toString().slice(-2,-1) == '+'||
		calculation.toString().slice(-2,-1) == '-'||
		calculation.toString().slice(-2,-1) == '*'||
		calculation.toString().slice(-2,-1) == '/'){
				calculation = calculation.slice(0,-3)
	}
	}

	if (e.key == 'Backspace' && e.shiftKey){
		calculation='';
	}

	if (e.key == '+'||
	e.key == '-'||
	e.key == '*'||
	e.key == '/'){
		if (calculation.toString().slice(-2,-1)=='*' && e.key=='/'){
			if (document.documentElement.getAttribute('lang')=='pl') {
				alert('Nie można wstawić "*" i "/" obok siebie!');
			}else{
				alert("You can't put \"*\" and \"/\" alongside each other!");
			}

		}else if(calculation.toString().slice(-2,-1) == '/' && e.key=='*'){
			if (document.documentElement.getAttribute('lang')=='pl') {
				alert('Nie można wstawić "/" i "*" obok siebie!');
			}else{
				alert("You can't put \"/\" and \"*\" alongside each other!");
			}

		}else if(calculation.toString().slice(-2,-1) == '/' && e.key=='/'){
			if (document.documentElement.getAttribute('lang')=='pl') {
				alert('Nie można duplikować znaku "/"!');
			}else{
				alert("You can't duplicate \"/\" character!");
			}

		}else if(calculation.toString().slice(-2,-1) == '*' && e.key=='*'){
			if (document.documentElement.getAttribute('lang')=='pl') {
				alert('Nie można duplikować znaku "*"!');
			}else{
				alert("You can't duplicate \"*\" character!");
			}

		}else if(calculation=='' && e.key=='/'){
		if(document.documentElement.getAttribute('lang')=='pl'){
			alert(`Nie można zacząć działania od znaku "/"!`)
		}else{
			alert(`You can't begin an operation with "/"!`)
		}
	}else if(calculation=='' && e.key=='*'){
			if(document.documentElement.getAttribute('lang')=='pl'){
				alert(`Nie można zacząć działania od znaku "*"!`)
			}else{
				alert(`You can't begin an operation with "*"!`)
			}}else{
		calculation += ' '+e.key+' ';
	}
	}
	result();
}

function checkCharacter(charBefore,char) {
	if (calculation.toString().slice(-2,-1)==charBefore){
			if (document.documentElement.getAttribute('lang')=='pl') {
				alert(`Nie można wstawić znaku "${charBefore}" i "${char}" obok siebie!`);
			}else{
				alert(`You can't put "${charBefore}" and "${char}" alongside each other!`);
			}

	}else if(calculation.toString().slice(-2,-1) == char){
			if (document.documentElement.getAttribute('lang')=='pl') {
				alert(`Nie można duplikować znaku "${char}" !`);
			}else{
				alert(`You can't duplicate "${char}" character!`);
			}
	
	}else if(calculation==''){
		if(document.documentElement.getAttribute('lang')=='pl'){
			alert(`Nie można zacząć działania od znaku "${char}"!`)
		}else{
			alert(`You can't begin an operation with "${char}"!`)
		}
	}else if(char == '.'){
		calculation += char;
	}else{
		calculation += ` ${char} `;
	}
}