function display(val){
    document.getElementById('result').value += val;
}
function backspace() {
    let d=document.getElementById('result');
    d.value=d.value.slice(0,-1);
}
function clearsc(){
    document.getElementById('result').value='';
    //return '';
}
function solve(){
    let x = document.getElementById('result').value
    try{
        let y = eval(x);
        document.getElementById('result').value = y
    }
    catch(error){
        x='Error';
    }
}
