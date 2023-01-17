function CalculateBMI(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height /100
    var result = weight/Math.pow(height,2);

    document.getElementById("result").innerText= result.toFixed(2);


    if (result<18.5){
        document.getElementById("result-status").innerText ="Under Weight";
        document.getElementById("result-status").style.color="rgb(19, 232, 232)";
    }else if (result>=18.5 && result <25){
        document.getElementById("result-status").innerText ="Normal";
        document.getElementById("result-status").style.color="rgb(22, 242, 66)";
    }else if (result>=25 && result <30){
        document.getElementById("result-status").innerText ="Over Weight";
        document.getElementById("result-status").style.color="rgb(240, 151, 7)";
    }else if (result>=30 ){
        document.getElementById("result-status").innerText ="Obese";
        document.getElementById("result-status").style.color="rgb(255, 0, 0)";
    }

}

function reset(){

    document.getElementById("weight").value =0;
    document.getElementById("height").value=0;
    document.getElementById("result").innerText="";
    document.getElementById("result-status").innerText="Please enter the values.";
    document.getElementById("result-status").style.color="rgb(240, 54, 178)";

}