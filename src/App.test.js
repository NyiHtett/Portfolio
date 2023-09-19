import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the useHistory hook from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    const homeLink = screen.getByText('Home');
    const projectsLink = screen.getByText('Projects');
    const aboutLink = screen.getByText('About');
    const certificationsLink = screen.getByText('Certifications');
    const contactLink = screen.getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(certificationsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('toggles theme and changes image on button click', () => {
    render(<App />);

    const toggleButton = screen.getByLabelText('toggle');
    const profileImage = screen.getByAltText('Profile Image');

    // Initial theme and image check
    expect(profileImage).toHaveAttribute('src', expect.stringContaining('port.jpg'));

    // Click the toggle button to change theme and image
    fireEvent.click(toggleButton);

    // Check if the theme has changed
    const darkThemeApp = screen.getByTestId('dark-theme-app');
    expect(darkThemeApp).toBeInTheDocument();

    // Check if the profile image has changed
    expect(profileImage).toHaveAttribute('src', expect.stringContaining('moon.png'));

    // Click the toggle button again to revert theme and image
    fireEvent.click(toggleButton);

    // Check if the theme has reverted
    const lightThemeApp = screen.getByTestId('light-theme-app');
    expect(lightThemeApp).toBeInTheDocument();

    // Check if the profile image has reverted
    expect(profileImage).toHaveAttribute('src', expect.stringContaining('port.jpg'));
  });

  it('navigates to different routes when links are clicked', () => {
    render(<App />);
    const homeLink = screen.getByText('Home');
    const projectsLink = screen.getByText('Projects');
    const aboutLink = screen.getByText('About');
    const certificationsLink = screen.getByText('Certifications');
    const contactLink = screen.getByText('Contact');

    fireEvent.click(homeLink);
    expect(screen.getByText('"Aspiring web developer"')).toBeInTheDocument();

    fireEvent.click(projectsLink);
    expect(screen.getByText('Projects Page')).toBeInTheDocument();

    fireEvent.click(aboutLink);
    expect(screen.getByText('About Page')).toBeInTheDocument();

    fireEvent.click(certificationsLink);
    expect(screen.getByText('Certifications Page')).toBeInTheDocument();

    fireEvent.click(contactLink);
    expect(screen.getByText('Contact Page')).toBeInTheDocument();
  });

  // You can write more tests for other functionality as needed
});
