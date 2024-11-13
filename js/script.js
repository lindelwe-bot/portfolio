

//array of projects
const projects = [
    {
        title: 'Lindelwe projets',
        description: 'show case of my web dev first project.',
        url: ''
    },
    {
        title: 'Lindelwe projets',
        description: 'show case of my web dev first project.',
        url: ''
    },
    {
        title: 'Lindelwe projets',
        description: 'show case of my web dev first project.',
        url: ''
    },
    {
        title: 'Lindelwe projets',
        description: 'show case of my web dev first project.',
        url: ''
    },
    {
        title: 'Lindelwe projets',
        description: 'show case of my web dev first project.',
        url: ''
    },
];
//function to load projects
function loadProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
<h2>${project.title}</h2>
<p>${project.description}</p>
})
<iframe src="${project.url}" title="${project.title}" class="project-iframe"></iframe>
`;
        projectList.appendChild(projectCard);
    });
}

//load the project when the dom is loaded
document.addEventListener('DOMContentLoaded', loadProjects);

