// colors
let REGULAR_TXT_CLR = "#0A8266"


// icons
let mail = document.querySelector("#mail");
let contactPopUp = document.querySelector("#contact-popup");


let mailClicked = false;



// fun definitions
function close(item) {
    switch(item) {
        case "contactPopUp":
            contactPopUp.style.visibility = "hidden";
            contactPopUp.innerHTML = "";
            mailClicked = false;
            break;
        default:
            alert("Oops I did not understand what you did there :(");
            break;
    }

}


function contactButtonClicked (contactButton) {
    switch (contactButton) {
        case 'mail':
            if (!mailClicked) {
                mailClicked = true
                contactPopUp.style.visibility = "visible";

                let popUpText = document.createElement("p");
                popUpText.textContent = "okoth46@gmail.com";
                popUpText.style.color = REGULAR_TXT_CLR;
                popUpText.style.fontFamily = `"Viga", sans-serif`;
                popUpText.style.fontSize = "1.1rem";

                let closeIcon = document.createElement("span");
                closeIcon.innerHTML = 
                        `<svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z" 
                            
                            "/>
                        </svg> `;
                closeIcon.classList.add("svg-fill");
                closeIcon.style.cursor = "pointer";
                closeIcon.addEventListener("click", () => close("contactPopUp"));
                

                contactPopUp.appendChild(popUpText);
                contactPopUp.appendChild(closeIcon);
            }
            break;
        default:
            alert("Oops I did not understand what you did there :(");
            break;
    }
}




// click listeners
mail.addEventListener("click", ()=> {
    contactButtonClicked("mail");
})