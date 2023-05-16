// Adds all 'detail' elements to an array
var allDetails = document.querySelectorAll("details");

// Loops through each element in the array
allDetails.forEach((detailElement)=>{
    // Uses an event listener to check if an element has been clicked
    detailElement.addEventListener("click", () => {
        // Checks if the clicked element is open or closed and changes the button symbol accordingly
        if(detailElement.hasAttribute("open")){
            detailElement.children[0].children[0].innerHTML = "+";
        }else{
            detailElement.children[0].children[0].innerHTML = "-";
        }
        // Once clicked loops through all elements again and closes all except the clicked element
        allDetails.forEach((detail) => {
            if(detail !== detailElement){
                detail.removeAttribute("open");
                detail.children[0].children[0].innerHTML = "+";
            }
        });
    });
});