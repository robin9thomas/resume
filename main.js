async function fetchProject(projectId) {
    try {
        const response = await fetch("./projects.json");

        if (!response.ok) {
            throw new Error("Erreur réseau");
        }

        const data = await response.json();
        const project = data.projects[projectId];

        console.log(project);
        return project;

    } catch (error) {
        console.error("Erreur :", error);
    }
}

function displayProject(projectId) {
    const project = fetchProject(projectId);

    resetProjectDisplay();

    project.then((project) => {
        document.getElementById("project-name").innerHTML = project.name;
        document.getElementById("project-context").innerHTML = project.description;
        document.getElementById("project-goal").innerHTML = project.goal;
        document.getElementById("project-technologies").innerHTML = project.technologies;
        document.getElementById("project-difficulty").innerHTML = project.difficulty;
        project.link ? document.getElementById("project-link").classList.remove("hidden") : document.getElementById("project-link").classList.add("hidden");
        document.getElementById("project-link").href = project.link;
        document.getElementById("project-link").innerHTML = "Visiter le site";
        document.getElementById("project-placeholder").classList.add("hidden");
        document.getElementById("project-presentation").classList.remove("hidden");
        document.getElementById("project-image").src = project.image;
    }); 

window.scrollTo({
  top: document.documentElement.scrollHeight - window.innerHeight - 300,
  behavior: "smooth",
});
}

function resetProjectDisplay() {
    document.getElementById("project-presentation").classList.add("hidden");
    document.getElementById("project-placeholder").classList.remove("hidden");
}   