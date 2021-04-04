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

var number=prompt("Please Enter the number");

for(var i=1;i<=number;i++)
{
    if(number % i == 0)
    {
        console.log(i);
    }
}

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





