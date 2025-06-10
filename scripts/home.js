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
        "tools": ["Python", "SQL", "Docker", "Postgres", "MSSQL"],
        "topProject": true
    },
    {
        "id": 2,
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
    {
        "id": 3,
        "title": "Construction Management",
        "description": `"Use AI to manage your construction projects efficiently"`,
        "code": "https://github.com/Donjerzy/construction-management",
        "demo": {
            "hasDemo": false,
            "link": undefined
        },
        "website": {
            "hasWebsite": false,
            "link": undefined
        },
        "tools": ["HTML", "CSS", "Javascript", "Svelte", "Python", "Kotlin", "Spring", "Tailwind"],
        "topProject": true

    },
    {
        "id": 4,
        "title": "Jackpot",
        "description": `"Use AI to generate soccer predictions (IN PROGRESS)"`,
        "code": "https://github.com/Donjerzy/jackpot",
        "demo": {
            "hasDemo": false,
            "link": undefined
        },
        "website": {
            "hasWebsite": false,
            "link": undefined
        },
        "tools": ["Python"],
        "topProject": false

    }
];

let searchValues = undefined;

let topProjects = projects.filter((project) => project["topProject"] === true);
let projectsDisplay = projects;
let projectIndexStart = 0;
let projectIndexEnd =  2;

const REGULAR_TXT_CLR = "#0A8266";
const NAV_TXT_CLR = "#B3B3B3";
const NAV_TXT_HVR_CLR = "#ff00cc";
const NAV_FONT = '"Inter", sans-serif';

const EMAIL = "okoth46@gmail.com";
const GITHUB = "https://github.com/syntax-ray";
const LINKEDIN = "https://linkedin.com/in/donald-okoth-6a225720b";


// icons
let mail = document.querySelector("#mail");
let github = document.querySelector("#github");
let linkedin = document.querySelector('#linkedin');
let searchIcon = document.querySelector("#search-svg");

let contactPopUp = document.querySelector("#contact-popup");
let topProjectsSection = document.querySelector(".actual-top-projects");
let searchInput = document.querySelector("#search");
let projectsDisplayDiv = document.querySelector("#projects-display");
let projectsDiv = document.querySelector(".projects");
let searchValue = document.querySelector("#search-value")


let mailClicked = false;
let githubClicked = false;
let linkedinClicked = false;


let nextProject = document.querySelector("#next-project");
let currentProject = 0;
let contentsInPage = 0;

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

function createProjectsSectionRow (projects) {
    let div = document.createElement('div');
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.gap = "80px"
    div.style.marginBottom = '20px';

    for (const project of projects) {
        const projectItem = document.createElement("div");
        projectItem.className = "project-item";

        // Create flip-card structure
        const flipCard = document.createElement("div");
        flipCard.className = "flip-card";

        const flipCardInner = document.createElement("div");
        flipCardInner.className = "flip-card-inner";

        // Front side of the card
        const flipCardFront = document.createElement("div");
        flipCardFront.className = "flip-card-front";

        const projectTitle = document.createElement("h3");
        projectTitle.className = "project-title";
        projectTitle.textContent = project.title;
        flipCardFront.appendChild(projectTitle);

        const projectContentDiv = document.createElement("div");
        projectContentDiv.className = "project-content-div";

        const projectContent = document.createElement("p");
        projectContent.textContent = project.description;
        projectContent.style.fontSize = '1.2rem';
        projectContent.style.color = REGULAR_TXT_CLR;
        projectContent.style.fontFamily = '"Inter", sans-serif';
        projectContent.style.textAlign = 'center';
        projectContent.style.letterSpacing = '0.2rem';
        projectContent.style.marginTop = '8px';
        projectContent.style.fontWeight = "600"
        projectContentDiv.appendChild(projectContent);

        flipCardFront.appendChild(projectContentDiv);

        // Back side of the card
        const flipCardBack = document.createElement("div");
        flipCardBack.className = "flip-card-back";

        const projectTitleBack = document.createElement("h3");
        projectTitleBack.className = "project-title";
        projectTitleBack.textContent = project.title;
        flipCardBack.appendChild(projectTitleBack);

        const toolsContainer = document.createElement("div");
        const toolsList = document.createElement("ul");
        toolsList.className = "project-tools-list";
        project.tools.forEach(tool => {
            let toolItem = document.createElement("li");
            toolItem.textContent = tool;
            toolItem.style.fontWeight = "600";
            toolItem.style.fontFamily = '"Viga", sans-serif';
            toolsList.appendChild(toolItem);
        });
        toolsContainer.appendChild(toolsList);

        flipCardBack.appendChild(toolsContainer);

        // Assemble flip card
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        flipCard.appendChild(flipCardInner);
        projectItem.appendChild(flipCard);

        // Create project links section
        const projectLinks = document.createElement("div");
        projectLinks.className = "project-links";

        // Demo link
        if (project.demo.hasDemo) {
            const demoLink = document.createElement("a");
            demoLink.href = project.demo.link;
            demoLink.className = "project-link";
            demoLink.id = "project-demo";
            demoLink.target = "_blank";
            demoLink.textContent = "Demo";
            projectLinks.appendChild(demoLink);
        }

        // Code link
        const codeLink = document.createElement("a");
        codeLink.href = project.code;
        codeLink.className = "project-link";
        codeLink.target = "_blank";
        codeLink.textContent = "Code";
        projectLinks.appendChild(codeLink);

        // Website link
        if (project.website.hasWebsite) {
            const websiteLink = document.createElement("a");
            websiteLink.href = project.website.link;
            websiteLink.className = "project-link";
            websiteLink.display = 'inline-block';
            websiteLink.target = "_blank";
            websiteLink.textContent = "Website";
            projectLinks.appendChild(websiteLink);
        }
    

        // Append links section to main container
        projectItem.appendChild(projectLinks);
        div.appendChild(projectItem);
        contentsInPage += 1;
    }
    return div;
}

function loadDisplayProjects() {
    projectsDisplayDiv.innerHTML = '';
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
        let projectSlice = projectsDisplay.slice(projectIndexStart, projectIndexEnd);
        let row = createProjectsSectionRow(projectSlice);
        projectsDisplayDiv.appendChild(row);
        projectIndexStart = projectIndexEnd;
        projectIndexEnd += 2;
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
    toggleDisplay(searchValue);
}

function handleSearch(event) {
    if (event.target.value.trim().length === 0) {
        searchValue.innerHTML = "";
        projectsDisplay = projects;
        projectIndexStart = 0;
        projectIndexEnd =  2;
        loadDisplayProjects();
        prev.style.display = 'none';
        showNextButton(next);
    } else {
        let colorCoded = [];
        let new_list = [];
        let matchedKeys = [];
        if (searchValues === undefined) {
            searchValues = JSON.parse(sessionStorage.getItem('search-obj'));
        } 
        let searchTerms = event.target.value.toLowerCase().trim().split(/\s+/);
        for (const term of searchTerms) {
            let present = false;
            for (const key in searchValues) {
                if (searchValues[key].includes(term) && !present) {
                    colorCoded.push(`<span style="color: green;">${term}</span>`);
                    present = true
                }
                if (!matchedKeys.includes(key)) {
                    if(searchValues[key].includes(term)) {
                        new_list.push(projects[key]);
                        matchedKeys.push(key);
                    }
                } 
            }
            if (!present) {
                colorCoded.push(`<span style="color: red;">${term}</span>`);
            }
        }
        searchValue.innerHTML = colorCoded.join(" ");
        projectsDisplay = new_list;
        projectIndexStart = 0;
        projectIndexEnd =  2;
        loadDisplayProjects();
        prev.style.display = 'none';
        showNextButton(next);
    }
}

function generateSearchValues() {
    const searchObj = {}
    let i = 0
    for (const project of projects) {
        let key = project.title.toLowerCase().trim().split(" ")
        const cleanedDescription = project.description.replaceAll('"', "")
                .replaceAll("!", "")
                .toLocaleLowerCase().trim().split(" ");
        key.push(...cleanedDescription);
        project.tools.forEach(tool => {
            key.push(tool.toLowerCase().trim())
        });
        searchObj[i] = key
        i += 1;
    }
    sessionStorage.setItem('search-obj', JSON.stringify(searchObj))
}

function showNextButton(btn) {
    if (projectsDisplay.length > 2) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


// click listeners
mail.addEventListener("click", (event)=> {
    event.preventDefault();
    contactButtonClicked("mail")
} );
github.addEventListener("click", (event) => {
    event.preventDefault();
    contactButtonClicked("github")
});
linkedin.addEventListener("click", (event) => {
    event.preventDefault();
    contactButtonClicked("linkedin")
});
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

let navDiv = document.createElement('div');
navDiv.style.height = "20px";
projectsDisplayDiv.appendChild(navDiv);
navDiv.style.display = "flex";
navDiv.style.alignItems = "center";
navDiv.style.justifyContent = "center";
navDiv.style.gap = "16px";

let prev = document.createElement('p');
prev.style.color = NAV_TXT_CLR;
prev.style.fontFamily = NAV_FONT;
prev.style.fontSize = "1.25rem";
prev.textContent = "PREV";
prev.style.display = "none";
prev.addEventListener('mouseenter', () => {
prev.style.color = NAV_TXT_HVR_CLR;
    prev.style.cursor = 'pointer';
});
prev.addEventListener('mouseleave', () => {
    prev.style.color = NAV_TXT_CLR;
});

navDiv.append(prev);

let next = document.createElement('p');
next.textContent = 'NEXT';
next.style.color = NAV_TXT_CLR;
next.style.fontFamily = NAV_FONT;
next.style.fontSize = "1.25rem";

projectsDiv.appendChild(navDiv);

showNextButton(next)
navDiv.append(next);

next.addEventListener('mouseenter', () => {
    next.style.color = NAV_TXT_HVR_CLR;
    next.style.cursor = 'pointer';
});
next.addEventListener('mouseleave', () => {
    next.style.color = NAV_TXT_CLR;
});

next.addEventListener('click', () => {
    contentsInPage = 0;
    loadDisplayProjects();
    prev.style.display = "block";
    if (projectIndexStart >= projectsDisplay.length) {
        next.style.display = 'none'; 
    }
});

prev.addEventListener('click', () => {
    if (contentsInPage === 2) {
        projectIndexStart = projectIndexStart - (contentsInPage + 2);
    } else if (contentsInPage === 1) {
        projectIndexStart = projectIndexStart - (contentsInPage + 3);
    }
    projectIndexEnd = projectIndexStart + 2;
    contentsInPage = 0;
    loadDisplayProjects();
    next.style.display = 'block';
    if (projectIndexStart == 2) {
        prev.style.display = 'none';
    }
});

if (sessionStorage.getItem('search-obj') === null) {
    generateSearchValues();
}