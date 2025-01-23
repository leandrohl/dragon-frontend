import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import toast from "react-hot-toast";
import DragonList from "../../../pages/Dragon";

const mockNavigate = jest.fn();

jest.mock('@services/api', () => ({
  get: jest.fn().mockResolvedValue([
    { id: 1, name: 'Smaug' },
    { id: 2, name: 'Draco' },
    { id: 3, name: 'Alduin' },
  ]),
  delete: jest.fn().mockResolvedValue(true),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('DragonList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', async () => {
    render(<DragonList />);
    
    expect(await screen.findByText("Lista de Dragões")).toBeInTheDocument();
  });

  test('should render name dragons', async () => {
    render(<DragonList />);

    expect(await screen.findByText("Smaug")).toBeInTheDocument();
    expect(await screen.findByText("Draco")).toBeInTheDocument();
    expect(await screen.findByText("Alduin")).toBeInTheDocument();
  });

  test('should navigate to add dragon when click in Adicionar Dragão', async () => {
    render(<DragonList />);

    const button = await screen.findByTestId("add-dragon");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/dragon/add");
  });

  test('should navigate to view details when click in Vizualizar', async () => {
    render(<DragonList />);

    const button = await screen.findByTestId("view-dragon-1");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/dragon/1");
  });

  test('should navigate to edit dragon when click in Alterar', async () => {
    render(<DragonList />);

    const button = await screen.findByTestId("edit-dragon-1");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/dragon/edit/1");
  });

  test('should delete dragon when click in Excluir', async () => {
    const toastSpy = jest.spyOn(toast, 'success');

    render(<DragonList />);

    const button = await screen.findByTestId("delete-dragon-1");
    fireEvent.click(button);

    await waitFor(() => expect(toastSpy).toHaveBeenCalledWith('Dragão excluído com sucesso'));
  });
});
