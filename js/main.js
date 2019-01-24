function getValue() {
    var name = document.getElementById("form1").value;
    var surname = document.getElementById("form2").value;
    var phone = document.getElementById("form3").value;
    
    document.getElementById("name").innerHTML  = name;
    document.getElementById("surname").innerHTML  = surname;
    document.getElementById("phone").innerHTML  = phone; 
    
  }
  
  var btn = document.getElementById("btn");
  btn.addEventListener("click", getValue); 
  
  