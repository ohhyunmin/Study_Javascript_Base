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

//-----------------------------------
function cal2(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
document.writeln(cal2('plus')(2,1));
document.createElement("br"); 
document.writeln(cal2('minus')(2,1));