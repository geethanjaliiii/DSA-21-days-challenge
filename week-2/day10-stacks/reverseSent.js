function reverseSentence(str) {
  let stack = [];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " ) {
      stack.push(newStr);
      newStr = "";
    } else {
      newStr += str[i];
    }
  }
  //till now the last word wont get pushed as no space in front
  if(newStr!=''){
    stack.push(newStr)
  }
  let final = "";
  while (stack.length) {
    final += " " + stack.pop();
  }

  return final.trim();
}

console.log(reverseSentence("hi i am beautiful"));
