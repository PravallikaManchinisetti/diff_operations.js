greeting="hello world";
console.log(greeting);
console.log(typeof(greeting));//string

num=1;
console.log(num);
console.log(typeof(num));//number

boo=true;
console.log(boo);
console.log(typeof(boo));//boolean

und=undefined;
console.log(und);
console.log(typeof(und));//undefined

nulll=null;
console.log(nulll);
console.log(typeof(nulll));//null

arr=[1,2,3,4];
console.log(arr);
console.log(typeof(arr));//object

arr1=[1,2,'arr',4];
console.log(arr1);
console.log(typeof(arr1));//object

var obj = {key1: "value1", key2: "value2"};
console.log(obj);
console.log(typeof(obj));//object

Object. assign(obj, {key3: "value3"});
console.log(obj);
console.log(typeof(obj));//object

//arithmetic operators
a=1;b=2;
add=a+b;
sub=a-b;
mul=a*b;
div=a/b;
mod=a%b;
inc=a++;
dec=b--;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);
console.log(inc);
console.log(dec);

c='1';d='intern';
add1=c+d;
sub1=c-d;
mul1=c*d;
div1=c/d;
mod1=c%d;
inc1=c++;
dec1=d--;
console.log(add1);
console.log(sub1);
console.log(mul1);
console.log(div1);
console.log(mod1);
console.log(inc1);
console.log(dec1);

//assignment operators
x=10;y=11;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x **= y);

//comparision operators	
console.log(x==y);
console.log(x!=y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

//logical operators
 console.log(x&&y);
 console.log(x||y);
 
//checks whether it is an array or not.
console.log(Array.isArray( [1,2,3] )) // true
console.log(Array.isArray( { a: 1 } )) // false

//converting to string
x=10;
console.log(String(x));         // returns a string from a number variable x
console.log(String(12));       // returns a string from a number literal 12
x=11;
console.log(x.toString());

console.log(false.toString());   // returns "false"
console.log(true.toString());    // returns "true"

//converting to number
console.log(Number("3.14"))    // returns 3.14
console.log(Number(" "))       // returns 0

console.log(Number(false))     // returns 0
console.log(Number(true))      // returns 1


