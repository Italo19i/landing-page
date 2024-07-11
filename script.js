(function(){
  let screen = document.querySelector("#name")
  let buttons = document.querySelectorAll("input")

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = button.value;

        if(button.value === 'C'){
              screen.value = ''
        }else if (button.value === "=") {
         
            if(screen.value === ''){
                screen.value = ""
            }else{
                let answer = eval(screen.value)
                screen.value = answer
            }
        }else{
          screen.value += value;
        }
        
    })
})
})();
