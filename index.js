let body = document.querySelector("body")
let h1 = document.createElement("h1")
function submitData(name,email){
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };
      
      
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          document.body.innerHTML = object['id']
          console.log(object["id"]);
        })
        .catch(function(error) {
            alert("Error heres where things went wrong");
           document.body.innerHTML = error.message
            console.log(h1);
         }); 
    
}

