//(\w+)\s(\w+)
//[괄호 는 그룹]
//[\w 는 대소문자 a~z, 0~9]
//[+ 는 하나 이상]
//\s 는 공백

var var1 = 'abcde';
var pattern = /a/;
var result = pattern.exec(var1);

var2 = "coding every"
var pattern2 = /(\w+)\s(\w+)/;
var result2 = pattern2.exec(var2);


document.writeln(result2);

var result3 = var2.replace(pattern, '$2', '$1', '$0');
//document.write(result3);



var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});

document.writeln(result);