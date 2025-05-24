let REGULAR_TXT_CLR = "#0A8266";
let EMAIL = "okoth46@gmail.com";
let GITHUB = "https://github.com/syntax-ray";
let LINKEDIN = "https://linkedin.com/in/donald-okoth-6a225720b";


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

function emailCopy() {
    navigator.clipboard.writeText(EMAIL);
}

function copiedAlert() {
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    // After 0.5 seconds, remove the show class from div
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 500);
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


                let copyIcon = document.createElement("span");
                copyIcon.innerHTML = 
                    `<svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 30H8C6.93913 30 5.92172 29.5786 5.17157 28.8284C4.42143 28.0783 4 27.0609 4 26V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H26C27.0609 4 28.0783 4.42143 28.8284 5.17157C29.5786 5.92172 30 6.93913 30 8V10M22 18H40C42.2091 18 44 19.7909 44 22V40C44 42.2091 42.2091 44 40 44H22C19.7909 44 18 42.2091 18 40V22C18 19.7909 19.7909 18 22 18Z" 
                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`;
                copyIcon.classList.add("copy-svg");
                copyIcon.style.cursor = "pointer";
                copyIcon.addEventListener('click', () => {
                    emailCopy();
                    copiedAlert();
                });

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
                contactPopUp.appendChild(copyIcon);
                contactPopUp.appendChild(closeIcon);
            }
            break;
            case 'github':
                if (!githubClicked && !mailClicked && !linkedinClicked) {
                    githubClicked = true
                    contactPopUp.style.visibility = "visible";
    
                    let popUpText = document.createElement("a");
                    popUpText.href = GITHUB;
                    popUpText.textContent = GITHUB;
                    popUpText.target = "_blank";
                    popUpText.rel = "noopener noreferrer";
                    popUpText.classList.add("contact-me-txt");
    
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
        
                        let popUpText = document.createElement("a");
                        popUpText.href = LINKEDIN;
                        popUpText.textContent = LINKEDIN;
                        popUpText.target = "_blank";
                        popUpText.rel = "noopener noreferrer";
                        popUpText.classList.add("contact-me-txt");
        
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