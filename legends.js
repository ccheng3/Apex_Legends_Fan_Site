const legendsDiv = document.createElement("div");
legendsDiv.setAttribute("id", "legendsDiv");
legendNames = ["Fuse", "Bangalore",
   "Bloodhound", "Caustic", "Crypto",
   "Gibraltar", "Horizon", "Lifeline",
   "Loba", "Mirage", "Octane", "Pathfinder",
   "Rampart", "Revenant", "Wattson",
   "Wraith"]
for (let i = 0; i < 16; ++i) {
   const imgAndDescription = document.createElement("div");
   let image = document.createElement("img");
   image.setAttribute("src", `Sources/Legends/Legend_${i + 1}.jpg`);
   let legendName = document.createElement("div");
   legendName.textContent = legendNames[i];
   // append legend and their name to smaller div
   imgAndDescription.appendChild(image);
   imgAndDescription.appendChild(legendName);
   imgAndDescription.setAttribute("id", `legendInfo_${i + 1}`);
   imgAndDescription.style.textAlign = "center";
   imgAndDescription.style.fontSize = "2rem";
   imgAndDescription.style.marginBottom = "2rem";
   console.log(document.querySelector("#legendInfo_1"));
   // append smaller div to legendsDiv
   legendsDiv.appendChild(imgAndDescription);
}
// append the legends Div to the document body. 
document.body.appendChild(legendsDiv);

// 
const pageTitle = document.createElement("div");
pageTitle.textContent = "The Legends"
pageTitle.setAttribute("id", "pageTitle");
document.body.insertBefore(pageTitle, legendsDiv);
