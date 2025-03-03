import React from 'react';

const ProjectCard = ({ Projectname, title, TechnologyUsed, TechnologyName, img, GitHubRepositoryLink, GithubAc }) => {
  return (
    <div className="project-card">
      <p>{Projectname}</p>
      <p>{title}</p>
      <p>{TechnologyUsed} {TechnologyName}</p>
      <img src={img} alt={title} />

      {/* Render the Github link dynamically */}
      <p>{GitHubRepositoryLink} <a href={GithubAc} target="_blank" rel="noopener noreferrer">Click Here</a></p>
    </div>
  );
};

export default ProjectCard;
