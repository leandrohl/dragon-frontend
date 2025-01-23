import EditDragon from "../../../pages/Dragon/Edit";
import { fireEvent, render, screen, waitFor } from "../../../helpers/test-utils";
import toast from "react-hot-toast";

jest.mock('@services/api', () => ({
  put: jest.fn().mockResolvedValue(true),
  get: jest.fn().mockResolvedValue({ 
    id: 1, 
    name: 'Smaug',
    type: "Fogo",
    createdAt: '2025-01-23T17:24:24.763Z',
    histories: ['teste1', 'teste2']
  }),
}));

describe('EditDragon', () => {
  test('should render correctly', () => {
    render(<EditDragon />);
  });

  test('should fill out the form correctly and submit', async () => {
    const toastSpy = jest.spyOn(toast, 'success');
    
    render(<EditDragon />);

    const nameInput = screen.getByTestId("name-input");
    fireEvent.change(nameInput, { target: { value: 'Dragon'}})
    
    const typeInput = screen.getByTestId("type-input");
    fireEvent.change(typeInput, { target: { value: 'Fogo'}})

    const addHistory = screen.getByTestId("add-history");
    fireEvent.click(addHistory);

    const historyInput1 = screen.getByTestId("history-input-0");
    fireEvent.change(historyInput1, { target: { value: 'teste 1'}})

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => expect(toastSpy).toHaveBeenCalledWith('Dragão editado com sucesso'));
  });
})