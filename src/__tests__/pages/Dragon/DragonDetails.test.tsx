import DragonDetails from "../../../pages/Dragon/Details";
import { render, screen } from "@testing-library/react";


jest.mock('@services/api', () => ({
  get: jest.fn().mockResolvedValue({ 
    id: 1, 
    name: 'Smaug',
    type: "Fogo",
    createdAt: '2025-01-23T17:24:24.763Z',
    histories: ['teste1', 'teste2']
  }),
}));

describe('DragonDetails', () => {
  test('should render correctly', async () => {
    render(<DragonDetails />);
    expect(await screen.findByText("Detalhes do Dragão")).toBeInTheDocument();
  });

  test('should show Dragon information', async () => {
    render(<DragonDetails />);
    
    expect(await screen.findByText("Smaug")).toBeInTheDocument();
    expect(await screen.findByText("Fogo")).toBeInTheDocument();
    expect(await screen.findByText("23/01/2025")).toBeInTheDocument();
    expect(await screen.findByText("teste1")).toBeInTheDocument();
    expect(await screen.findByText("teste2")).toBeInTheDocument();
  });
})