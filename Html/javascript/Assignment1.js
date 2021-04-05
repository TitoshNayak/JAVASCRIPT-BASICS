/*
//1.write a program to print 1 to 10 number using while and for loop
var i=1;
for(var i=1;i <=10; i++)
{
    console.log(i);
}

//while
var i=0
while(i<=10)
{

    i++;
    console.log(i);
}



//2.print 10 to 1 number
var i=10;
for(var i=10; i >=1; i--)
{
    console.log(i);

}

//while loop using
var i=10;
while(i>=1)
{
     i--;
    console.log(i);
}


//3. print the odd number less than 50
var i=1;

for(var i=1; i<=50; i +=2)
{
    console.log(i);
}
  

// while loop
var i=1;
while(i<30)
{
    i+=2;
    console.log(i);
}
/*

//4. print the multiplication table with 8

for( var i=1; i<=8; i++)
{
    var row = "8 *"+ i +"="+8*i;   
    
    console.log(row);
}

//while loop
var i=1;
while(i<=8)
{
    i++;
    var row="8*"+i+"="+8*i;
    console.log(row);
}


// 5.print number 5 to 15 using the loops concept
var i=5;
for( i=5; i <=15; i++)
{
    console.log(i);
}

//while
var i=5;
while(i<15)
{
    i++;
    console.log(i);
}


// 6.print number 15 to 10 using the loops concept
var i=15;
for(var i=15; i >=10; i--)
{
    console.log(i);
}

//while
var i=15;
while (i>10)
   
{
    i--;
    console.log(i);
}


//7. print 1 to 10 even number

for(i=1;i<=10;i++)
{
    if(i % 2 ==0)
    {
        console.log(i);
    }
}


 //while loop
var i=0;
 while(i<=10)
 {
    i +=2;
    console.log(i);
    
 }
 
//8. print 1 to 10 odd number
 //for loop
var i=1;
for(i=1;i<=10;i++)
{
    if(i % 2 !==0)
    {
        console.log(i);
    }
}

// odd number print out 1 to 10
var i=1;
 while(i<=10)
 {

     console.log(i);
     i +=2;  
 }


//7.1 write a program first ten multiples of 4 using a while loop

var i=1;
while(i<=10)
{
   i++;
    var row="4*"+i+"="+4*i;
    
    console.log(row);
}

var i=1;
for( var i=1;i<=10;i++)
{
    var row="4*"+i+"="+4*i;
    console.log(row);
}

//8. write a program multiples of 4  are 4,8,12,16 using a while loop

//while loop
var i=0;
while(i<=3)
{
   i++;
    var row="4*"+i+"="+4*i;
    
    console.log(row);
}

//9. write a program to print multiplication table of 6 using while loop
//while loop
var i=0;
while(i<=20)
{
   i++;
    var row="6*"+i+"="+6*i;
    
    console.log(row);
}

*/
/*//10. write factorial of 24!
var i=1;
var fact=1;
while(i<=5)
{
    i--;
  var fact="5*"+i+"="+5*i;
   console.log(fact);
}


 // program to find the factors of an integer

// take input
/*const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}
*/
//10. factor of the numbers
/*
var number=prompt("Please Enter the number");

for(var i=1;i<=number;i++)
{
    if(number % i == 0)
    {
        console.log(i);
    }
}
*/
//factors of the nmbber using while loop
/*
var number=prompt("Please Enter the number");
while( i<=number);
{
      i++;
    if(number % == 0)
    {
       console.log(i);
   }
}*/

//12. write program to reverse the number

//for loop
/*
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('nayak');
*/
//14.write a program to print the fibonaci series
/*
function fibonacci(num)
    {
        if(num==1)
            return 0;
        if(num==2)
            return 1;
        var num1=0;
        var num2=1;
        var sum;
        var i=2;
        while (i<num)  
        {
            sum=num1+num2;
            num1=num2;
            num2=sum;
            i+=1;
        }
        return num2;
    }
  
console.log("Fibonacci(5): "+fibonacci(5)+"<br>");
console.log("Fibonacci(8): "+fibonacci(8)+"<br>");
*/

/*
function fibonacci(num)
{
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}
  
console.log("Fibonacci(5): "+fibonacci(5));
console.log("Fibonacci(7): "+fibonacci(7));
*/

//13. write a programt o read 5numbers and only print even number
/*
var line=[];

for (var i = 2; i <= 100; i += 2) {
  if (line.length == 5) {
    console.log(line);
    line=[];
  }
  line.push(i);
}
console.log(line);
*/
// 15.write a program to check a givrn number is Armstrong number or not

function Armstrong()
	{
		var flag,number,remainder,addition = 0;
		number = Number(document.getElementById("N").value);

		flag = number;
		while(number > 0)
		{
			remainder = number%10;
			addition = addition + remainder*remainder*remainder;
			number = parseInt(number/10);
		}

		if(addition == flag)
		{
			window.alert("-The inputed number is Armstrong");
		}
		else
		{
			window.alert("-The inputed number is not Armstrong");
		}
	}