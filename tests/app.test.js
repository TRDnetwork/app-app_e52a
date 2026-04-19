import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('Portfolio App', () => {
  test('renders hero section with name and role', () => {
    render(<App />);
    expect(screen.getByText('Alex Rivera')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument();
  });

  test('renders about section with descriptive paragraph', () => {
    render(<App />);
    const aboutSection = screen.getByText(/I'm a passionate developer/i).parentElement;
    expect(aboutSection).toHaveClass('bg-[var(--surface)]');
  });

  test('displays three project cards in responsive grid', () => {
    render(<App />);
    const projectCards = screen.getAllByRole('article');
    expect(projectCards).toHaveLength(3);
    
    const grid = screen.getByRole('list');
    expect(grid).toHaveClass('project-grid');
  });

  test('contact form submits successfully and shows toast', () => {
    render(<App />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello' } });
    
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
  });

  test('contact form validates required fields', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });
});