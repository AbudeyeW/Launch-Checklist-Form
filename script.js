// Write your JavaScript code here!

//Code for verification below
window.addEventListener("load",function(){
   let form = document.querySelector("form");

   
   form.addEventListener("submit",function(event){
      event.preventDefault();
         //Code for verifying all values are received
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if(pilotName.value === ""|| copilotName.value===""|| fuelLevel ==="" || cargoMass ===""){
         alert("Hola! Remember all fields are required");
      }
      else if(!isNaN(Number(pilotName.value)) || !isNaN(Number(copilotName.value))){
         alert("Hi! Please enter valid inputs. Make sure '"+pilotName.value +"' and '"+copilotName.value+ "' are both strings.");

      }
      else if(isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))){
         alert("Hi! Please enter valid inputs. Make sure '"+fuelLevel.value +"' and '"+cargoMass.value+ "' are both numbers.");

      }
      else{
         let shuttleReady = true;
         document.getElementById("pilotStatus").innerHTML = "Pilot "+pilotName.value+" is ready for Launch.";
         document.getElementById("copilotStatus").innerHTML = "Copilot "+copilotName.value+" is ready for Launch.";
         
         if(Number(fuelLevel.value)<10000){
            document.getElementById("fuelStatus").innerHTML = "Fuel Level too low for launch. It should be > 10000, it is: "+fuelLevel.value ;
            shuttleReady = false;
         }
         if(Number(cargoMass.value)>100000){
            document.getElementById("cargoMass").innerHTML = "Cargo Mass too large. It should be > 100000, it is: "+cargoMass.value;
            shuttleReady = false;
         }
         if(shuttleReady==false){
            document.getElementById("launchStatus").innerHTML = "Shuttle NOT ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
         }
         else if(shuttleReady == true){
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for Launch";
         }

      }
      //Verifies if Shuttle is ready for takeoff from values
   })

   //Fetch data from JSON file using an API
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const randomIndex = Math.floor(Math.random() * json.length);
         const target = document.getElementById("missionTarget");
         target.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomIndex].name}</li>
            <li>Diameter: ${json[randomIndex].diameter}</li>
            <li>Star: ${json[randomIndex].star}</li>
            <li>Distance from Earth: ${json[randomIndex].distance}</li>
            <li>Number of Moons: ${json[randomIndex].moons}</li>
         </ol>
         <img src="${json[randomIndex].image}">
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
