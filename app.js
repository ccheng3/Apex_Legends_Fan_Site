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

