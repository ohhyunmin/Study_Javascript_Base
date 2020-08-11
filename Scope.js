//자바스크립트의 지역변수와 전역변수

var vscope = 'global';
function fscope(){
    var vscope = 'local';
    document.writeln(vscope);
}
fscope();
document.writeln(vscope);

MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());