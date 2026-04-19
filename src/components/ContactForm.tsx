import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      console.log('Bot detected via honeypot');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 600);
  };

  return (
    <motion.section
      className="py-16 slide-up"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1.1 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          {isSubmitted && (
            <div
              className="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              Message sent successfully!
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus-glow"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus-glow"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus-glow"
            />
          </div>
          <div className="hidden">
            <label htmlFor="honeypot">Don’t fill this out</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-medium pulse-hover focus-glow transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              style={{ backgroundColor: 'var(--accent)' }}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;

---