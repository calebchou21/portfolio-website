const projects = [
    {
      title: "Bookdle",
      description: "Bookdle was a daily book guessing game where you had 5 attempts to guess a book from it's quotes.",
      tools: ["TypeScript", "React", "DynamoDB", "AWS"],
      image: "imgs/projects/bookdle.png",
      sourceCode: "fill this in later"
    },
  ];
  
  const container = document.createElement('section');
  container.id = "projects";
  
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
  
    const toolsHTML = p.tools.map(tool => `<span class="tool-chip">${tool}</span>`).join('');
  
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="project-image" />
      <div class="project-info">
        <h2 class="project-title">${p.title}</h2>
        <p class="project-description">${p.description}</p>
        <div class="project-tools">${toolsHTML}</div>
        <a class="project-link" href="${p.sourceCode}" target="_blank">
          <img src="imgs/icons/github-mark-white.svg" alt="GitHub Icon" width="40"/>
        </a>
      </div>
    `;
  
    container.appendChild(card);
  });
  
  
  document.getElementById('card-container').appendChild(container);
  