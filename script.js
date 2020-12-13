// Write your JavaScript code here!

//Code for verification below
window.addEventListener("load",function(){
   let form = document.querySelector("form");
   //Code for verifying all values are received
   form.addEventListener("submit",function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if(pilotName.value === ""|| copilotName.value===""|| fuelLevel ==="" || cargoMass ===""){
         alert("Hola! Remember all fields are required");
         event.preventDefault();
      }
      if(typeof pilotName.value !== "string" || typeof copilotName.value !== "string"){
         alert("Hi! Please enter valid inputs. Make sure "+pilotName.value +" and "+copilotName.value+ " are both strings.");
         event.preventDefault();
      }
      if(typeof fuelLevel.value !== "number" || typeof cargoMass.value !== "number"){
         alert("Hi! Please enter valid inputs. Make sure "+fuelLevel.value +" and "+cargoMass.value+ " are both numbers.");
         event.preventDefault();
      }
   })
   alert("Hi!"+pilotName);
})



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
