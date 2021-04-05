/*
exercise1.
write a javascript program to check two numbers and return true 
if one of the number is 100 or if the sum
of the two numbers is 100.

const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a+b) === 100;

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(10,0));
console.log(isEqualTo100(0,10));

console.log(isEqualTo100(10,90));
console.log(isEqualTo100(90,10));
*/

/*
Exercise2:  no idea
  write a javascript program to get the extension of a file.
  

const getFileExtension = (str) => str.slice
(str.lastIndexof('.'));
console.log(getFileExtention('programs.js'));
*/

/*
Exercise2:no idea
write  a javascript program to replace the every character
 in a given string with the character following it is the alphabet.
 
const moveCharsForward = (str) =>
str.split('')
.map(char => String.fromCharCode(char.charcodeAt(0) + 1))
.join('');
  console.log(moveCharsForward );
*/

/*
Exercise4.
    write a javascript program to get the current date.
       Expected output:
              mm-dd--yyyy or dd--mm--yyyy, dd/mm/yyyy
              */
             const formatDate = (date = new Date()) =>
             {
                 const days = date.getDate + 1();
                 const months = date.getmonth  + 1();
                 const years = date.getFullyear  + 1();

                 return '${days}/ ${month}/${year}';
 
                }
                console.log( formatDate);








