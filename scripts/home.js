let REGULAR_TXT_CLR = "#0A8266";
let EMAIL = "okoth46@gmail.com";
let GITHUB = "https://github.com/syntax-ray";
let LINKEDIN = "www.linkedin.com/in/donald-okoth-6a225720b";


// icons
let mail = document.querySelector("#mail");
let github = document.querySelector("#github");
let linkedin = document.querySelector('#linkedin');
let contactPopUp = document.querySelector("#contact-popup");


let mailClicked = false;
let githubClicked = false;
let linkedinClicked = false;



// fun definitions
function close(item) {
    switch(item) {
        case "contactPopUp":
            contactPopUp.style.visibility = "hidden";
            contactPopUp.innerHTML = "";
            mailClicked = false;
            githubClicked = false;
            linkedinClicked = false;
            break;
        default:
            alert("Oops I did not understand what you did there :(");
            break;
    }

}


function contactButtonClicked (contactButton) {
    switch (contactButton) {
        case 'mail':
            if (!mailClicked && !githubClicked && !linkedinClicked) {
                mailClicked = true
                contactPopUp.style.visibility = "visible";

                let popUpText = document.createElement("p");
                popUpText.textContent = EMAIL;
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
            case 'github':
                if (!githubClicked && !mailClicked && !linkedinClicked) {
                    githubClicked = true
                    contactPopUp.style.visibility = "visible";
    
                    let popUpText = document.createElement("p");
                    popUpText.textContent = GITHUB;
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
                case 'linkedin':
                    if (!githubClicked && !mailClicked && !linkedinClicked) {
                        linkedinClicked = true
                        contactPopUp.style.visibility = "visible";
        
                        let popUpText = document.createElement("p");
                        popUpText.textContent = LINKEDIN;
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
mail.addEventListener("click", ()=> contactButtonClicked("mail"));
github.addEventListener("click", () => contactButtonClicked("github"));
linkedin.addEventListener("click", () => contactButtonClicked("linkedin"));