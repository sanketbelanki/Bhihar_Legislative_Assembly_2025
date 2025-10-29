function applyDynamicColor() {
  fetch("mapData.json")
    .then((response) => response.json())
    .then((jsonData) => {
      console.log("jsonData ", jsonData);
      for (const regionId in jsonData) {
        const regions = document.querySelectorAll(`[id="${regionId}"]`);
        if (regions.length > 0) {
          regions.forEach((region) => {
            region.style.fill = jsonData[regionId];
          });
        } else {
          console.warn(`Region with ID ${regionId} not found in SVG.`);
        }
      }
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}
setInterval(applyDynamicColor, 4000);
// function applyDynamicColor() {
//   fetch("regionIdAndColor.json") // Replace 'your-data.json' with your actual JSON file path
//     .then((response) => response.json())
//     .then((jsonData) => {
//       console.log("jsonData ", jsonData);
//       for (const regionId in jsonData) {
//         const region = document.querySelector(`[id="${regionId}"]`);

//         if (region) {
//           region.style.fill = jsonData[regionId];
//         } else {
//           console.warn(`Region with ID ${regionId} not found in SVG.`);
//         }
//       }
//     })
//     .catch((error) => console.error("Error fetching JSON:", error));
// }
// setInterval(applyDynamicColor, 5000);
