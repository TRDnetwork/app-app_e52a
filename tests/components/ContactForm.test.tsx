import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '@/components/ContactForm';

describe('ContactForm', () => {
  test('renders all form fields correctly', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  test('honeypot field is hidden and present', () => {
    render(<ContactForm />);
    const honeypot = screen.getByLabelText('Don’t fill this out');
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveClass('hidden');
    expect(honeypot).toHaveAttribute('type', 'text');
    expect(honeypot).toHaveAttribute('name', 'bot-field');
  });

  test('shows success toast when form is submitted', async () => {
    render(<ContactForm />);
    const button = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(button);
    expect(await screen.findByText('Message sent successfully!')).toBeInTheDocument();
  });

  test('resets form fields after submission', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } });
    
    const button = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(button);
    
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });

  test('blocks submission when honeypot field is filled', () => {
    render(<ContactForm />);
    const honeypot = screen.getByLabelText('Don’t fill this out');
    const button = screen.getByRole('button', { name: 'Send Message' });
    
    fireEvent.change(honeypot, { target: { value: 'bot' } });
    fireEvent.click(button);
    
    // No toast should appear since submission is blocked
    expect(screen.queryByText('Message sent successfully!')).not.toBeInTheDocument();
  });
});