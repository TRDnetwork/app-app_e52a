import '../src/styles/global.css';

// Global CSS variables
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'warm',
    values: [
      { name: 'warm', value: '#faf8f5' },
      { name: 'surface', value: '#e9e5dd' },
    ],
  },
};

// Apply font families globally
const withTheme = (Story) => (
  <div style={{ fontFamily: 'Satoshi, sans-serif' }}>
    <Story />
  </div>
);

export const decorators = [withTheme];