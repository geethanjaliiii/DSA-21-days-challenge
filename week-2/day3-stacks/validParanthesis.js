const Stack= require('./stackImplementation')

function validParanthesis(s){
    const stack=new Stack()
    for(let i=0;i<s.length;i++){
        if(s[i]==='('|| s[i]=='{'||s[i]=='['){
            stack.push(s[i])
        }else if((s[i]==']'&& stack.peek()=='[')||(s[i]===')'&& stack.peek()=='(')|| (s[i]=='}'&& stack.peek()=='{')){
            stack.pop()
        }
    }
    return stack.size()===0
}
console.log('hii');

console.log(validParanthesis('{]'));
