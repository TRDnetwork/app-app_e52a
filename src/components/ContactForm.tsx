import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error on change
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData['bot-field']) {
      console.log('Bot submission detected and blocked');
      return;
    }

    if (!validateForm()) return;

    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    setFormData({ name: '', email: '', message: '', 'bot-field': '' });
  };

  return (
    <section id="contact" className="py-16" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <h2 id="contact-heading" className="text-3xl font-bold mb-8 slide-up">Get In Touch</h2>
        {isSubmitted && (
          <div
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            Message sent successfully!
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-2xl mx-auto space-y-6"
          aria-describedby={formErrors && "form-errors-summary"}
        >
          {/* Error summary (hidden until needed) */}
          {Object.keys(formErrors).length > 0 && (
            <div id="form-errors-summary" className="bg-red-50 border-l-4 border-red-500 p-4 text-red-800 text-sm" role="alert">
              <p>Please correct the following errors:</p>
              <ul className="list-disc list-inside">
                {Object.values(formErrors).map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <input
            type="text"
            name="bot-field"
            className="hidden"
            autoComplete="off"
            value={formData['bot-field']}
            onChange={handleChange}
            tabIndex={-1}
            aria-hidden="true"
          />

          <div>
            <label htmlFor="name" className="block mb-2 text-dim">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-invalid={!!formErrors.name}
              aria-describedby={formErrors.name ? "name-error" : undefined}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus-glow"
            />
            {formErrors.name && (
              <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">
                {formErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-dim">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? "email-error" : undefined}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus-glow"
            />
            {formErrors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
                {formErrors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-dim">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              aria-invalid={!!formErrors.message}
              aria-describedby={formErrors.message ? "message-error" : undefined}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus-glow"
            />
            {formErrors.message && (
              <p id="message-error" className="text-red-600 text-sm mt-1" role="alert">
                {formErrors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[var(--accent)] text-white px-6 py-2 rounded hover-lift pulse-hover transition focus-glow"
            aria-describedby={isSubmitted ? "toast-message" : undefined}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}