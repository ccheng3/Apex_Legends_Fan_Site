function setAttributes(element, attributes) {
   // use a loop to set an object containing key-value pairs of the 
   // attributes required for each element 
   for (key in attributes) {
      element.setAttribute(key, attributes[key]);
   }
}

for (let i = 0; i < 10; ++i) {
   let carouselItem = document.createElement("div");
   if (i === 0) {
      setAttributes(carouselItem, { "class": "carousel-item active", "data-bs-interval": "6000" });
   }
   else {
      setAttributes(carouselItem, { "class": "carousel-item", "data-bs-interval": "6000" });
   }
   let image = document.createElement("img");
   setAttributes(image, { "src": "Sources/Loading_Screens/Load_" + (i + 1) + ".png", "class": "d-block w-100" });
   carouselItem.appendChild(image);
   innerCarouselDiv.appendChild(carouselItem);
}

// const totalCarouselDiv = document.createElement("div");
// let totalCarouselDivAttributes = {
//    "id": "carouselExampleFade",
//    "class": "carousel slide carousel-fade",
//    "data-bs-ride": "carousel"
// }
// setAttributes(totalCarouselDiv, totalCarouselDivAttributes);
// document.body.appendChild(totalCarouselDiv);
// // once you are done with creating the carousel using the DOM, 
// // insert the totalCarouselDiv element before the wallpaperDownload div
// const wallpaperDownload = document.getElementById("fan-wallpaper-download");
// const innerCarouselDiv = document.createElement("div");
// // run a loop and create carousel items, append to innerCarouselDiv, then
// // append innerCarouselDiv to totalCarouselDiv and implement the carousel buttons 
// for (let i = 0; i < 10; ++i) {
//    let carouselItem = document.createElement("div");
//    setAttributes(carouselItem, { "class": "carousel-item active", "data-bs-interval": "6000" });
//    let image = document.createElement("img");
//    setAttributes(image, { "src": "Sources/Loading_Screens/Load_" + (i + 1) + ".png", "class": "d-block w-100" });
//    carouselItem.appendChild(image);
//    innerCarouselDiv.appendChild(carouselItem);
// }
// // append the innerCarouselDiv to the totalCarouselDiv (so the images show up)
// totalCarouselDiv.appendChild(innerCarouselDiv);
// // add the next and previous carousel buttons
// const btnNames = ["next", "prev"];
// const textNames = ["Next", "Previous"];
// for (let i = 0; i < 2; ++i) {
//    let btn = document.createElement("button");
//    setAttributes(btn, {
//       "class": `carousel-control-${btnNames[i]}`,
//       "type": "button",
//       "data-bs-target": "#carouselExampleFade",
//       "data-bs-slide": `${btnNames[i]}`
//    })
//    const span1 = document.createElement("span");
//    setAttributes(span1, { "class": `carousel-control-${btnNames[i]}-icon`, "aria-hidden": "true" });
//    btn.appendChild(span1);
//    const span2 = document.createElement("span");
//    setAttributes(span2, { "class": "visually-hidden" });
//    span2.textContent = `${textNames[i]}`;
//    btn.appendChild(span2);
//    totalCarouselDiv.appendChild(btn);
// }
// document.body.insertBefore(totalCarouselDiv, wallpaperDownload);