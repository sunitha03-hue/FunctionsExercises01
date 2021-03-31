/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.
b) Retrieve only the last character from strings with lengths of 3 or less.
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank
with the original string.
*/
function funPhrase(strname)
{
  //let strname = '';
  let newname='';
  let newname1=strname.length;
if (newname1<=3)
{
  newname=strname.slice(newname1-1);
}else
{
  newname=strname.slice(0,3);
}


console.log(`We put the ${newname} in ${strname}`);
}
/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
let str = "Functions rock!";
console.log(funPhrase(str));