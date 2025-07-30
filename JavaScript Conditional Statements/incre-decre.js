//i++ ---> Post incremental operator
// console.log(i++);//1
// console.log(i);//2

//++i --> pre-incremental operator
// let i = 7;
// console.log(++i);//8
// console.log(++i);//9
// console.log(i++);//9
// console.log(++i);//11
// console.log(--i);//10
// console.log(++i);//11
// console.log(i--);//11
// console.log(i++);//10
// console.log(i);//11

//Q1.******** What is the result of -a + b-- when a=5 b=7******
// let a = 5, b = 7, c;
// c = -a + b--;//11
// console.log(a,b,c);//4,6,11

//Q2.********* Evaluate (a+b++)+(--a+b--) when a= 4 and b=9*********
// let a=4,b=9,c;
// c=(a+b++)+(--a+b--)
// console.log(c);
// console.log(a);
// console.log(b);

//Q3.******when i=10 what are the final  value after********
// let i = 10, j, k;
// j = i++;
// k = ++i;
// console.log(i,j,k);

//Q4.******when i=10 what are the final  value after*****
// let i = 10,j,k;
// j = i--;
// k = --i;
// console.log(i,j,k);

//Q5.**********when i=10 evaluate*******
// let i = 10, j, k, l;
// j = i++ + i++;
// k = ++i + ++i;
// l = ++i + i--;
// console.log(i,j,k,l);

//Q6.**** Evaluate  ++x + x++ + x++  when X=10***
// let x = 10, y;
// y = ++x + x++ + x++;
// console.log(x,y);//13,34

//Q7. *** Evaluate ++i + ++i + ++i when i=4
// let i = 4, x;
// x = ++i + ++i + ++i;
// console.log(i,x);//7,18

//Q8.**** Evaluate i++ + i++ + i++ when i=4
// let i = 4;
// i = i++ + i++ + i++;
// console.log(i);//15

//Q9. ****Evaluate  i++ - --i + ++i - i-- when i=0****
// let i = 0;
// i = i++ - --i + ++i - i--;
// console.log(i);//0

//10.Find final values of `a`, `b`, and `c` after these operations with starting values `a = 12`, `b = 13`, and `c = 11`:
// let a = 12,
//   b = 13,
//   c = 11;
// a = a++ + --b + c++;
// console.log(a);//35

// b = b++ + ++a * 2;
// console.log(b);//84

// c = c++ + a++ * ++b;
// console.log(c);//3072

// console.log(a,b,c);//37 85 3072


//11.Find final values in `k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++`when `i = 19` and `j = 29`.

// let i = 19,
//   j = 29,
//   k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log(i, j, k); //19,29,-20
