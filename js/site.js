//Call Hello World
function reverseString(){
    let string=document.getElementById("textInput").value;
    let stringReversed='';
    for(let i=string.length-1; i>=0;i--){
        stringReversed+=string[i];
    }
    displayResult(stringReversed);

}
function displayResult(text){
    let jumbotronString=`<h4 class="display-4 header-dark">Well done!</h4>
                         <hr class="my-4">
                         <p>The reversed string is <strong>${text}<strong></p> `
    document.getElementById("jumbotronOutput").innerHTML=jumbotronString;
}
