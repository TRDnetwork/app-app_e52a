import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[var(--surface)] p-6 rounded-lg shadow-sm border border-transparent hover:border-current hover-lift slide-up" style={{ borderColor: 'var(--surface)', borderWidth: '1px' }}>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
        loading="lazy"
        width="400"
        height="192"
      />
      <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
      <p className="text-dim mb-4">{description}</p>
      <a href="#" className="text-[var(--accent)] hover:underline font-medium">View Project →</a>
    </div>
  );
};

export default ProjectCard;

---