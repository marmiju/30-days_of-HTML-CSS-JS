function validInput(){
    event.preventDefault();
   const  inputfield = document.getElementById("input");
   const errmeg = document.getElementById("errmsg");
   console.log(inputfield);
   const inputvalue = inputfield.value.trim(); 
    // Removed unused errmsg variable
    if(inputvalue.length < 20){
        inputfield.classList.add("shake");
        errmeg.style.visibility = "visible";
        setTimeout(() => {
            inputfield.classList.remove("shake");
            errmeg.style.visibility = "hidden";
        },1000);



    }
}