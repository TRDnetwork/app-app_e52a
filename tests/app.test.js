import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';

describe('Portfolio App', () => {
  test('renders hero section with name and role', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText('Alex Rivera')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer crafting clean, performant web experiences with React, Node, and modern JavaScript.')).toBeInTheDocument();
  });

  test('renders about section with descriptive paragraph', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/I'm a passionate developer with over 5 years of experience building scalable web applications./i)).toBeInTheDocument();
  });

  test('renders three project cards', () => {
    render(<App />, { wrapper: BrowserRouter });
    const projects = screen.getAllByRole('article');
    expect(projects).toHaveLength(3);
  });

  test('contact form shows success message on submit', () => {
    render(<App />, { wrapper: BrowserRouter });
    const button = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(button);
    expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
  });

  test('contact form includes honeypot field', () => {
    render(<App />, { wrapper: BrowserRouter });
    const honeypot = screen.getByLabelText('Don’t fill this out');
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveClass('hidden');
  });
});