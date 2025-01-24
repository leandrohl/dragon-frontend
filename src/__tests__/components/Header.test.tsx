import { render, fireEvent, screen } from '@testing-library/react';
import Header from '../../components/Header';

const mockNavigate = jest.fn();
const mockOnLogout = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
  }));

describe('Header', () => {
  it('renders the title correctly', () => {
    render(<Header onLogout={mockOnLogout}/>);
    const home = screen.getByText('Home');
    fireEvent.click(home);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(mockNavigate).toHaveBeenCalledWith("/dragons");
  });

  it('calls onAddDragon when "Adicionar Dragão" button is clicked', () => {
    render(<Header onLogout={mockOnLogout}/>);
    const addDragonButton = screen.getByTestId('add-dragon');
    fireEvent.click(addDragonButton);
    expect(mockNavigate).toHaveBeenCalledWith("/dragon/add");
  });

  it('calls onLogout when "Sair" button is clicked', () => {
    render(<Header onLogout={mockOnLogout}/>);
    const logoutButton = screen.getByText('Sair');
    fireEvent.click(logoutButton);
    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });
});
