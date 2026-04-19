// Mock Supabase client
const mockSupabase = {
  from: jest.fn().mockReturnThis(),
  select: jest.fn().mockReturnThis(),
  insert: jest.fn().mockReturnThis(),
  eq: jest.fn().mockReturnThis(),
  single: jest.fn().mockReturnThis(),
  then: jest.fn()
};

// Mock the supabase import
jest.mock('../src/lib/supabase', () => ({
  supabase: mockSupabase
}));

describe('API Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('form submission calls Supabase insert with correct data', async () => {
    const { handleSubmit } = require('../src/components/ContactForm');
    
    const mockData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello'
    };
    
    await handleSubmit(mockData);
    
    expect(mockSupabase.from).toHaveBeenCalledWith('contact_messages');
    expect(mockSupabase.insert).toHaveBeenCalledWith(mockData);
  });

  test('handles Supabase error during form submission', async () => {
    mockSupabase.then.mockImplementationOnce((onSuccess, onError) => {
      return onError({ error: 'Network error' });
    });
    
    const { handleSubmit } = require('../src/components/ContactForm');
    
    const result = await handleSubmit({
      name: 'Test',
      email: 'test@example.com',
      message: 'Hello'
    });
    
    expect(result).toEqual({ error: 'Network error' });
  });

  test('fetches projects from Supabase correctly', async () => {
    const mockProjects = [
      { id: 1, title: 'Project 1', description: 'Description 1' }
    ];
    
    mockSupabase.then.mockImplementationOnce((callback) => {
      return callback({ data: mockProjects, error: null });
    });
    
    const { fetchProjects } = require('../src/App');
    const result = await fetchProjects();
    
    expect(mockSupabase.from).toHaveBeenCalledWith('projects');
    expect(mockSupabase.select).toHaveBeenCalledWith('*');
    expect(result).toEqual(mockProjects);
  });
});