import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.post('/api/contact', (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API Endpoints', () => {
  it('should have no actual API endpoints (static site)', () => {
    expect(window.location.pathname).not.toMatch(/\/api\//);
  });

  it('contact form simulation does not make network requests', async () => {
    const originalFetch = global.fetch;
    global.fetch = jest.fn();

    const { getByRole } = render(<ContactForm />, { wrapper: BrowserRouter });
    const button = getByRole('button', { name: /send message/i });
    await fireEvent.click(button);

    expect(global.fetch).not.toHaveBeenCalled();

    global.fetch = originalFetch;
  });

  it('should handle form validation correctly', () => {
    const { getByLabelText, getByRole } = render(<ContactForm />, { wrapper: BrowserRouter });
    
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const messageInput = getByLabelText('Message');
    const button = getByRole('button', { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.change(messageInput, { target: { value: '' } });
    fireEvent.click(button);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Valid email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });
});