function sum(){
    var i, _sum = 0;    
    for(i = 0; i < arguments.length; i++){
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }   
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));
document.write('<br/>')

function zero(){
    document.write('zero.length : ', zero.length,'arguments : ', arguments.length + '<br/>');
}
function one(arg1){
    document.write('one.length : ', one.length,'arguments : ', arguments.length + '<br/>');
}
function two(arg1, arg2){
    document.write('two.length : ', two.length,'arguments : ', arguments.length + '<br/>');
}
zero();
one('val1', 'val2');
two('val1');