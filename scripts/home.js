/*
    I am listing the top projects below instead of importing them from the projects.js file because to the best of my knowledge,
    Github Pages does not support importing modules from other files.
*/
const projects = [
    {
        "id": 1,
        "title": "Data Migration Solution",
        "description": `"Migrate your data between data stores with ease!"`,
        "code": "https://github.com/syntax-ray/demo-f_e-migration",
        "demo": {
            "hasDemo": false,
            "link": undefined
        },
        "website": {
            "hasWebsite": false,
            "link": undefined
        },
        "tools": ["Python", "SQL", "Docker", "PostgreSQL", "MSSQL"],
        "topProject": true
    },
    {
        id: 2,
        "title": "Portfolio Website",
        "description": `"Get to know me and see what I can do!"`,
        "code": "https://github.com/syntax-ray/portfolio",
        "demo": {
            "hasDemo": false,
            "link": undefined
        },
        "website": {
            "hasWebsite": true,
            "link": "https://syntax-ray.github.io/portfolio/"
        },
        "tools": ["HTML", "CSS", "Javascript", "GithubPages"],
        "topProject": true
    },
];

let topProjects = projects.filter((project) => project["topProject"] === true);
let projectsDisplay = projects;

let REGULAR_TXT_CLR = "#0A8266";
let EMAIL = "okoth46@gmail.com";
let GITHUB = "https://github.com/syntax-ray";
let LINKEDIN = "https://linkedin.com/in/donald-okoth-6a225720b";


// icons
let mail = document.querySelector("#mail");
let github = document.querySelector("#github");
let linkedin = document.querySelector('#linkedin');
let contactPopUp = document.querySelector("#contact-popup");
let topProjectsSection = document.querySelector(".actual-top-projects");
let searchIcon = document.querySelector("#search-svg");
let searchInput = document.querySelector("#search");
let projectsDisplayDiv = document.querySelector("#projects-display");


let mailClicked = false;
let githubClicked = false;
let linkedinClicked = false;


let nextProject = document.querySelector("#next-project");
let currentProject = 0;

// fun definitions
function close(item) {
    switch(item) {
        case "mail":
            contactPopUp.style.visibility = "hidden";
            contactPopUp.innerHTML = "";
            mailClicked = false;
            break;
        case "github":
            contactPopUp.style.visibility = "hidden";
            contactPopUp.innerHTML = "";
            githubClicked = false;
            break;
        case "linkedin":
            contactPopUp.style.visibility = "hidden";
            contactPopUp.innerHTML = "";
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
            if (githubClicked) {
                close("github");
            }
            if (linkedinClicked) {
                close("linkedin");
            }
            if (!mailClicked) {
                mailClicked = true
                contactPopUp.style.visibility = "visible";

                let popUpText = document.createElement("p");
                popUpText.textContent = EMAIL;
                popUpText.style.color = REGULAR_TXT_CLR;
                popUpText.style.fontFamily = `"Viga", sans-serif`;
                popUpText.style.fontSize = "1.1rem";


                let copyIcon = document.createElement("span");
                copyIcon.innerHTML = 
                    `<svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        `<svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z" 
                            
                            "/>
                        </svg> `;
                closeIcon.classList.add("svg-fill");
                closeIcon.style.cursor = "pointer";
                closeIcon.addEventListener("click", () => close("mail"));
                

                contactPopUp.appendChild(popUpText);
                contactPopUp.appendChild(copyIcon);
                contactPopUp.appendChild(closeIcon);
            }
            break;
            case 'github':
                if (mailClicked) {
                    close("mail");
                }
                if (linkedinClicked) {
                    close("linkedin");
                }
                if (!githubClicked) {
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
                            `<svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z" 
                                
                                "/>
                            </svg> `;
                    closeIcon.classList.add("svg-fill");
                    closeIcon.style.cursor = "pointer";
                    closeIcon.addEventListener("click", () => close("github"));
                    
    
                    contactPopUp.appendChild(popUpText);
                    contactPopUp.appendChild(closeIcon);
                }
                break;
                case 'linkedin':
                    if (mailClicked) {
                        close("mail");
                    }
                    if (githubClicked) {
                        close("github");
                    }
                    if (!linkedinClicked) {
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
                                `<svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z" 
                                    
                                    "/>
                                </svg> `;
                        closeIcon.classList.add("svg-fill");
                        closeIcon.style.cursor = "pointer";
                        closeIcon.addEventListener("click", () => close("linkedin"));
                        
        
                        contactPopUp.appendChild(popUpText);
                        contactPopUp.appendChild(closeIcon);
                    }
                    break;
        default:
            alert("Oops I did not understand what you did there :(");
            break;
    }
}


function displayProject (project) {  
    let projectTitle = document.querySelector(".project-title");
    let projectContent = document.querySelector(".project-content");
    let projectTitleBack = document.querySelector(".project-title-back");
    let projectToolsList = document.querySelector(".project-tools-list");
    let projectDemo = document.querySelector("#project-demo");
    let projectCode = document.querySelector("#project-source-code");
    let projectWebsite = document.querySelector("#project-website");
    
    // Reset the project section
    projectToolsList.innerHTML = "";
    projectDemo.style.display = "none";
    projectWebsite.style.display = "none";

    projectTitleBack.classList.add("project-title");
    projectTitle.textContent = project.title;
    projectTitleBack.textContent = project.title;
    project.tools.forEach(tool => {
        let toolItem = document.createElement("li");
        toolItem.textContent = tool;
        projectToolsList.appendChild(toolItem);
    });
    projectCode.href = project.code;
    projectCode.target = "_blank";  
    projectCode.rel = "noopener noreferrer";
    
    if (project.demo.hasDemo) {
        projectDemo.style.display = "inline-block";
        projectDemo.href = project.demo.link;
        projectDemo.target = "_blank";
        projectDemo.rel = "noopener noreferrer";
    }
    if (project.website.hasWebsite) {
        projectWebsite.style.display = "inline-block";
        projectWebsite.href = project.website.link;
        projectWebsite.target = "_blank";
        projectWebsite.rel = "noopener noreferrer";
    }
    projectContent.textContent = project.description;
    topProjectsSection.style.display = "flex";
}


function loadTopProjectsSection () {
    if (topProjects && topProjects.length == 0) {
        topProjectsSection.style.display = "flex";
        topProjectsSection.textContent = "No projects to show at the moment";
        topProjectsSection.style.fontFamily = `"Viga", sans-serif`;
        topProjectsSection.style.fontSize = "1.8rem";
    } else if (topProjects && topProjects.length > 0) {
        let firstProject = topProjects[0];
        displayProject(firstProject);
    }
    return 0
}

function createProjectsSectionRowItems () {

}

function loadDisplayProjects() {
    if (projectsDisplay && projectsDisplay.length == 0) {
        projectsDisplayDiv.style.display = "flex";
        projectsDisplayDiv.style.justifyContent = "center";
        projectsDisplayDiv.style.alignItems = "center";
        projectsDisplayDiv.textContent = "No project";
        projectsDisplayDiv.style.fontFamily = `"Viga", sans-serif`;
        projectsDisplayDiv.style.color = "white"
        projectsDisplayDiv.style.fontSize = "1.8rem";
        projectsDisplayDiv.style.marginTop = "20px";
    } else {
        projectsDisplayDiv.style.display = "block";
        let rowsRequired = undefined;
        if (projectsDisplay.length <= 3) {
            rowsRequired = 1
        } else if (projectsDisplay.length <=6) {
            rowsRequired = 2
        } else {
            rowsRequired = 3
        }
        for (let i = 0; i < rowsRequired; i++) {
            let div = document.createElement('div');
            div.style.backgroundColor = 'green';
            div.style.height = '20px'
            div.style.border = '1px solid red';
            
            projectsDisplayDiv.appendChild(div);
        }
    }
}

function toggleDisplay(el, displayType = 'block') {
    if (getComputedStyle(el).display === 'none') {
      el.style.display = displayType;
    } else {
      el.style.display = 'none';
    }
  }

function searchIconClicked() {
    toggleDisplay(searchInput);
}

function handleSearch(event) {
    console.log(event.target.value);
}

// click listeners
mail.addEventListener("click", ()=> contactButtonClicked("mail"));
github.addEventListener("click", () => contactButtonClicked("github"));
linkedin.addEventListener("click", () => contactButtonClicked("linkedin"));
searchIcon.addEventListener("click", ()=> searchIconClicked());
search.addEventListener("input", (event)=> handleSearch(event));



loadTopProjectsSection();
loadDisplayProjects();

if (topProjects.length > 1) {
    nextProject.textContent = "Next";
    nextProject.style.display = "inline-block";
    nextProject.addEventListener("click", () => {
        if (currentProject + 1 >= topProjects.length) {
            currentProject = 0;
            displayProject(topProjects[currentProject]);
        } else {
            currentProject += 1;
            displayProject(topProjects[currentProject]);
        }
    });
}