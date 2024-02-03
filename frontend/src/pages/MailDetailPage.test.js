import userEvent from "@testing-library/user-event"
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
// import ResetPassword from './ResetPassword';
import MailDetailPage from "./MailDetailsPage";
import { renderWithProviders } from "../utils-for-tests";


describe('MyComponent', () => {

    test('renders Subject',  () => {
      renderWithProviders(<MailDetailPage />);
      
        const linkElement = screen.getByText(/Regarding/i);
        expect(linkElement).toBeInTheDocument();
      });
  
    test('renders text', () => {
      // Test case 2
      renderWithProviders(<MailDetailPage />);
      
        const linkElement = screen.getByText(/mail/i);
        expect(linkElement).toBeInTheDocument();
    });

  });