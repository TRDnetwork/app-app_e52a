import { render, screen } from '@testing-library/react';
import Toast from '@/components/Toast';
import userEvent from '@testing-library/user-event';

describe('Toast', () => {
  test('renders with provided message', () => {
    render(<Toast message="Test message" onClose={() => {}} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  test('calls onClose after duration expires', () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
    render(<Toast message="Test message" duration={3000} onClose={onClose} />);
    
    jest.advanceTimersByTime(3000);
    expect(onClose).toHaveBeenCalledTimes(1);
    
    jest.useRealTimers();
  });

  test('cleanup prevents memory leaks', () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
    const { unmount } = render(<Toast message="Test message" duration={3000} onClose={onClose} />);
    
    unmount();
    jest.advanceTimersByTime(3000);
    
    expect(onClose).not.toHaveBeenCalled();
    
    jest.useRealTimers();
  });

  test('has correct CSS classes for styling', () => {
    render(<Toast message="Test message" onClose={() => {}} />);
    const toast = screen.getByText('Test message').parentElement;
    expect(toast).toHaveClass('toast');
  });
});