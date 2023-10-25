let nameVal=document.getElementById('name')
let emailVal=document.getElementById('emails')
let btns=document.getElementById('btns')
 
let ValArray;
fetch("test.json")
.then((res) => res.json())
.then((data) => {
   ValArray = data.map((item) => {
    return {
      name: item.name,
      email: item.email
    };
 
  });
 });
 
btns.addEventListener('click',validate);
function validate(){
    const enteredval= nameVal.value;
    const enteredEmail=emailVal.value;

    for(let i=0;i<=ValArray.length;i++){
        if(enteredval===ValArray[i].name&& enteredEmail===ValArray[i].email){
            document.getElementById('loginmsg').innerHTML='login sucessfull'
            return;
        }
        else{
            document.getElementById('loginmsg').innerHTML='login failed'
        }
    }
}
