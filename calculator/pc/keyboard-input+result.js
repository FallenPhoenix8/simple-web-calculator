let calculation = '';
let languageCode;
document.documentElement.setAttribute('lang', navigator.language)
//Defining variables and setting language of website (according to user browser)


function result(){/*Function which puts our calculation into result field*/
document.getElementById('result').innerText=calculation;
console.log(calculation)
}

document.onkeydown = function(e){
	/*Function which handles keyboard inputs from user, that is:
	- numbers from keyboard
	- operations from keyboard
	- "Enter" or "=" to evaluate operation
	- "Backspace" to delete previous character
	- "Shift" + "Backspace" to clear whole result window and calculation variable 
	*/ 
	
	if (e.key == '1' || 
			e.key == '2' || 
			e.key == '3' || 
			e.key == '4' || 
			e.key == '5' || 
			e.key == '6' || 
			e.key == '7' || 
			e.key == '8' || 
			e.key == '9' ||
			e.key == '0' ||
			e.key == '.') {
		calculation += e.key
	}/*Section adding numbers to calculation*/

	if (e.key == '=' || e.key == 'Enter'){
			try {
				calculation = eval(calculation).toString();
				if (calculation=='Infinity') {
					if (document.documentElement.getAttribute('lang')=='pl') {
						calculation='BŁĄD - Dzielenie przez 0';
					}else{
						calculation='ERROR - Division by 0'
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
	}/*Section handling evaluation, division by 0 and other general errors*/

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
	}}/*Section which deletes last character upon pressing "Backspace"*/

	if (e.key == 'Backspace' && e.shiftKey){
		calculation='';
	}/*Section clearing result after pressing "Shift" + "Backspace"*/

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
	}}/*Section adding operators and handling some specific common errors*/
	
	result();
}

function checkCharacter(charBefore,char) {/*Function handling some common errors, which is used with buttons*/
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
	}}