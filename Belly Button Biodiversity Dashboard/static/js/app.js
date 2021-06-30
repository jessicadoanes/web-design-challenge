function getPlots(id) { 
//USe D3 fetch to read JSON file
//Read samples.json 
d3.json("StarterCode/samples.json").then (importedData) => {
    console.log(importedData)
    var data = importedData;
}
