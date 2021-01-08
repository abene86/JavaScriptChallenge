function convertAgeInDays()
{
    var birthYear=prompt('What year were you born?');
    var ageInDays=(2021-birthYear)*365;
    addAnswerScreen(ageInDays);
}
function addAnswerScreen(ageInDays)
{
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('You are'+' '+ageInDays);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset()
{
    document.getElementById('ageInDays').remove();
}
function throwHand(yourchoice){
    var possibleChoices=['rock', 'paper', 'scissors'];
    var randomIndex=Math.floor(Math.random()*3);
    var result=decideWinner(yourchoice, possibleChoices[randomIndex]);
    var statment=produceMessage(result);
    createUIResult(yourchoice.id, possibleChoices[randomIndex], statment);
}
function createUIResult(yourchoice, compchoice, statment){
    var imageDataBase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // removes the image elements;
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    // create a div
    var humandiv, compdiv, messagediv;
    humandiv= document.createElement('div');
    compdiv=document.createElement('div');
    messagediv=document.createElement('div');
    //adding html elements to the div
    humandiv.innerHTML="<img src='"+imageDataBase[yourchoice]+"'style='box-shadow: 0px 1px 25px rgba(20, 4, 241, 0.7);' height=150 width=150>";
    compdiv.innerHTML="<img src='"+imageDataBase[compchoice]+"'style='box-shadow: 0px 1px 25px hsla(0, 97%, 48%, 0.795);' height=150 width=150>";
    messagediv.innerHTML="<h1 style='color:"+statment.color+";'>"+statment.message+"</h1>";
    //adding the divs into the flex container
    document.getElementById('flex-box-container-2').appendChild(humandiv);
    document.getElementById('flex-box-container-2').appendChild(messagediv);
    document.getElementById('flex-box-container-2').appendChild(compdiv);   
}
function produceMessage(result){
    var statment={
        message:'nothing',
        color: 'black',
    };
    if(result[0]==1){
        statment.message='You won';
        statment.color='blue';}
    else if(result[1]==1){
        statment.message='You lost';
        statment.color='red';}
    else{
        statment.message='You are tied';
        statment.color='green';}
    return statment;  
}
function decideWinner(yourchoice, compChoice){
    let result= [0, 0];
    if(yourchoice.id=='rock' && compChoice=='scissors')
        result[0]=1;
    else if(yourchoice.id=='scissors' && compChoice=='rock')
        result[1]=1;
    else if(yourchoice.id=='paper' && compChoice=='scissors')
        result[1]=1;
    else if(yourchoice.id=='scissors' && compChoice=='paper')
        result[0]=1;
    else if(yourchoice.id=='rock' && compChoice=='paper')
        result[1]=1;
    else if(yourchoice.id=='paper' && compChoice=='rock')
        result[0]=1;
    else{
        result[1]=0.5;
        result[0]=0.5;
    }
    return result;    
}
function removeImg(){
    document.getElementById('handsign').remove();
}
function generateCatImg(){
    var img=document.createElement('img');
    img.setAttribute('id', 'catimg')
    img.src="http:thecatapi.com/api/images/get?format=src&type=jpg&size=small";
    document.getElementById('flex-box-container-3').appendChild(img);}