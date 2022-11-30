let str="naman";
let N=5;
let bag="";

for(let i=N-1; i>=0; i--)
  {

    bag=bag+str[i];
  }

if(str==bag)
{
  console.log("String is Palindrome");
}
else
{
  console.log("String is Not Palindrome");
}