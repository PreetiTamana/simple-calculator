let display = document.getElementById("display")

function append(char){
    if (display.innerText === "0"){
        display.innerText = char;
    }
    else{
        display.innerText += char;
    }

    }
    function ClearDisplay(){
        display.innerText = "0";
    }
    function deletechar(){
        if (display.innerText.length === "1"){
            display.innerText = "0";
        }
        else{
            display.innerText = display.innerText.slice(0,-1);
        }
    }
    function calculate(){
        try{
            let result = eval(display.innerText.replace(/÷/g , '/').replace(/×/g, '*'));
            display.innerText = result;
        }
        catch(e){
            display.innerText= "error"

        }
        }