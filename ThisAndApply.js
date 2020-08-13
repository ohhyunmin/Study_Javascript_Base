var o = {'name':'im o'}
var p = {'name':'im P'}
function func(){
    switch(this){
        case o:
            document.write(this.name + '<br/>');
            break;
        case p:
            document.write(this.name + '<br/>');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func();
func.apply(o,p);
func.apply(p);