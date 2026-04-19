import { render, screen } from '@testing-library/react';
import ProjectCard from '@/components/ProjectCard';

describe('ProjectCard', () => {
  const defaultProps = {
    title: 'Test Project',
    description: 'This is a test project description',
    image: 'https://example.com/test-image.jpg',
  };

  test('renders project title and description', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  test('renders project image with correct alt text', () => {
    render(<ProjectCard {...defaultProps} />);
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', defaultProps.image);
  });

  test('applies hover-lift class for animation', () => {
    render(<ProjectCard {...defaultProps} />);
    const card = screen.getByRole('article');
    expect(card).toHaveClass('hover-lift');
  });

  test('handles invalid image URL gracefully', () => {
    render(<ProjectCard {...defaultProps} image="invalid-url" />);
    const image = screen.getByAltText('Test Project');
    expect(image).toHaveAttribute('src', '/placeholder-image.jpg');
  });

  test('has correct structure with proper spacing', () => {
    render(<ProjectCard {...defaultProps} />);
    const card = screen.getByRole('article');
    const image = screen.getByAltText('Test Project');
    const title = screen.getByText('Test Project');
    const description = screen.getByText('This is a test project description');
    
    expect(card).toContainElement(image);
    expect(card).toContainElement(title);
    expect(card).toContainElement(description);
  });
});