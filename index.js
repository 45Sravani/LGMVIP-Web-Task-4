let result = document.getElementById("inputText");

let calculate=(number)=>{
   result.value = result.value + number;
}

let Result=()=>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("enter valid result");
    }
}

function clr(){
    result.value = "";
}

function del(){
     
        nV = result.value.substring(0, result.value.length - 1);
        result.value = nV ? nV : 0;
      
}