import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';

function App() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A full-stack admin panel with real-time analytics, user management, and order tracking built using React, Node.js, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Task Management App",
      description: "A collaborative to-do app with drag-and-drop interface, team sharing, and deadline reminders. Built with TypeScript and Firebase.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Weather Forecast Tool",
      description: "A responsive weather application pulling live data from OpenWeather API, featuring location search and 7-day forecasts.",
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <motion.section
        className="py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Alex Rivera</h1>
          <p className="text-xl text-dim max-w-2xl mx-auto">
            Full-Stack Developer crafting clean, performant web experiences with React, Node, and modern JavaScript.
          </p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 slide-up">About Me</h2>
          <p className="text-dim max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with over 5 years of experience building scalable web applications.
            I specialize in frontend architecture and backend integration, always focusing on user experience,
            performance, and maintainable code. When I'm not coding, you can find me hiking, reading sci-fi novels,
            or experimenting with new recipes in the kitchen.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 slide-up">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.image}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default App;

---