import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import theme from '../theme/theme';
import Navbar from '../components/Navbar';

describe('<Navbar/>', () => {
  it('correctly render Navbar', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const navbar = screen.getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
  });
});
