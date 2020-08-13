var home = {}

home.kind = 'apart';
home.indroduce = function(){
    return 'kind is ' + home.kind;
}
document.write(home.indroduce()+'<br/>');

var home2 = {
    'kind' : 'zugong',
    'indroduce': function(){
        return 'kind is ' + home2.kind;
    }
}
document.write(home2.indroduce()+'<br/>')

function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('aaa1');
document.write(p1.introduce()+"<br />");
 
var p2 = new Person('bbb1');
document.write(p2.introduce());