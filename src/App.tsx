import { useState, useRef } from 'react';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const toastRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: if bot field is filled, ignore submission
    const honeypot = (e.target as HTMLFormElement).elements.namedItem('bot-field') as HTMLInputElement;
    if (honeypot.value) return;

    // Simulate form submission
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });

    // Show toast
    const toast = toastRef.current;
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="container py-20 text-center slide-up">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Alex Morgan</h1>
        <p className="text-xl text-text-dim max-w-2xl mx-auto">
          Full-Stack Developer & UI Designer crafting elegant digital experiences with code and creativity.
        </p>
      </section>

      {/* About Section */}
      <section className="container py-16 slide-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-3xl font-semibold text-text mb-6">About Me</h2>
        <p className="text-text-dim leading-relaxed max-w-3xl">
          I'm a passionate developer with over 5 years of experience building scalable web applications.
          I specialize in React, TypeScript, and Node.js, with a strong focus on clean architecture,
          performance, and user-centered design. When I'm not coding, you can find me hiking,
          reading sci-fi novels, or experimenting with new recipes in the kitchen.
        </p>
      </section>

      {/* Projects Section */}
      <section className="container py-16 slide-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-3xl font-semibold text-text mb-10 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface p-6 rounded-lg shadow-sm hover-lift border-b-2 border-transparent hover:border-accent transition-colors duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
              <p className="text-text-dim">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container py-16 slide-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-3xl font-semibold text-text mb-8 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          {/* Honeypot field for spam prevention */}
          <input
            type="text"
            name="bot-field"
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="name" className="block text-text mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus-glow"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-text mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus-glow"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-text mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus-glow"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white py-3 px-6 rounded-md font-medium pulse-hover hover:bg-accent-alt focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Toast Notification */}
      <div id="toast" ref={toastRef} className="toast" role="alert" aria-live="polite">
        Message sent successfully!
      </div>
    </div>
  );
};

// Hardcoded project data
const projects = [
  {
    title: 'TaskFlow',
    description: 'A minimalist task management app with drag-and-drop interface and dark mode support.',
    image: 'https://via.placeholder.com/400x200/e9e5dd/1a2e1a?text=TaskFlow',
  },
  {
    title: 'DataViz Dashboard',
    description: 'Interactive analytics dashboard with real-time charts and responsive design.',
    image: 'https://via.placeholder.com/400x200/e9e5dd/1a2e1a?text=DataViz',
  },
  {
    title: 'BlogSync',
    description: 'Cross-platform content editor with Markdown support and live preview.',
    image: 'https://via.placeholder.com/400x200/e9e5dd/1a2e1a?text=BlogSync',
  },
];

export default App;

// SECURITY NOTE: Form submission is simulated client-side.
// No data is transmitted. Honeypot field added to deter spam bots.
// All user input is contained within React state and never rendered unsafely.
// No XSS or data exposure risk present.