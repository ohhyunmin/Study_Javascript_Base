function cal1(func, num){
    return func(num);
}

function increase(num){
    return num+1;
}

function decrease(num){
    return num-1;
}

document.writeln(cal1(increase, 3))
document.writeln(cal1(decrease, 3))
document.writeln('<br/>'); 

//----------리턴값으로의 함수 사용------------
function cal2(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
document.writeln(cal2('plus')(2,1));
document.writeln(cal2('minus')(2,1));
document.writeln('<br/>'); 

//----------배열로서의 함수 사용-------------
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
document.writeln(input);