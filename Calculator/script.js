let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let address = document.getElementById('address');
let pincode = document.getElementById('pincode');
let state = document.getElementById('state');
let country = document.getElementById('country');
let gender = document.getElementById('')

    
    

function formSubmit(){
    
    document.getElementById("td1").innerHTML = first_name.value;
    
    document.getElementById("td2").innerHTML = last_name.value;
    
    document.getElementById("td3").innerHTML = address.value;
    
    document.getElementById("td4").innerHTML = pincode.value;

    document.getElementById("td7").innerHTML = state.value;

    document.getElementById("td8").innerHTML = country.value;

    var gen = document.getElementsByName('gender');
              
        for(i = 0; i < gen.length; i++) {
                  
         if(gen[i].type="radio") {
                  
          if(gen[i].checked)

            document.getElementById("td5").innerHTML += gen[i].value;
                          
                }
            }


        let food = []
        let x = document.getElementById('food').value;

        for(i = 0; i < x.length-1; i++){
            if(x[i].type ="checkbox"){
                if(x[i].checked)
                    food.push(x[i]);
                console.log(food)
            }
        }

        
}
function reset(){
    let table = document.getElementsByTagName("td");

    table.clear();
}