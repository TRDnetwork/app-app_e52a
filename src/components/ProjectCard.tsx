import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  const isValidImage = (url: string) => {
    try {
      const parsed = new URL(url, window.location.origin);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  };

  const imgSrc = isValidImage(image) ? image : '/placeholder-image.jpg';

  return (
    <motion.div
      className="bg-[var(--surface)] p-6 rounded-lg shadow-sm hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.6 }}
      role="article" /* a11y fix: semantic role for project card */
      tabIndex={0} /* a11y fix: make card focusable for keyboard users */
      aria-label={`Project: ${title}`} /* a11y fix: describe card content */
    >
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover rounded mb-4"
        loading="lazy" /* a11y fix: defer offscreen image loading */
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-dim">{description}</p>
    </motion.div>
  );
}