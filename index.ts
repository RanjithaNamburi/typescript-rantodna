// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function leap(pNum: number) {
  // if ((pNum%4==0)||(pNum%400==0))? console.log('Its leap year') : console.log('Its  NOT a leap year')

  if (pNum % 4 == 0 || pNum % 400 == 0) {
    console.log(pNum + ' is a leap year');
  } else {
    console.log(pNum + ' is NOT a leap year');
  }
}

function colorCode() {
  console.log('Inside Color code ');
  var COLORS: any[] = ['black', 'brown', 'red', 'orange', 'yellow'];
  console.log('Color code is ' + COLORS.indexOf('red'));
}

//leap(1997);
console.log('Calling Color Code');
colorCode();
console.log('End');
