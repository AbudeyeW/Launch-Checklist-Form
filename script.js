// Write your JavaScript code here!

//Code for verification below
window.addEventListener("load",function(){
   let form = document.querySelector("form");
   //Code for verifying all values are received
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   form.addEventListener("submit",function(event){
      if(pilotName.value === ""|| copilotName.value===""|| fuelLevel ==="" || cargoMass ===""){
         alert("Hola! Remember all fields are required");
         event.preventDefault();
      }
      if(typeof pilotName.value !== "string" || typeof copilotName.value !== "string"){
         alert("Hi! Please enter valid inputs. Make sure '"+pilotName.value +"' and '"+copilotName.value+ "' are both strings.");
         event.preventDefault();
      }
      if(isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))){
         alert("Hi! Please enter valid inputs. Make sure '"+fuelLevel.value +"' and '"+cargoMass.value+ "' are both numbers.");
         event.preventDefault();
      }
      //Verifies if Shuttle is ready for takeoff from values
      let shuttleReady = true;
      document.getElementById("pilotStatus").innerHTML = "Pilot "+pilotName+" is ready for Launch.";
      document.getElementById("copilotStatus").innerHTML = "Copilot "+copilotName+" is ready for Launch.";
      if(Number(fuelLevel)<10000){
         document.getElementById("fuelStatus").innerHTML = "Fuel Level too low for launch: "+fuelLevel;
         shuttleReady = false;
      }
      if(Number(cargoMass)<100000){
         document.getElementById("cargoMass").innerHTML = "Cargo Mass too large: "+cargoMass;
         shuttleReady = false;
      }
      if(shuttleReady==false){
         document.getElementById("launchStatus").style.color = red;
         document.getElementById("faultyItems").style.visibility = "visible";
         event.preventDefault();
      }
      else{
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for Launch";
      }
   })
   //Fetch data from JSON file using an API
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const target = document.getElementById("missionTarget");
         target.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">
         `
      }); 
   } );

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
