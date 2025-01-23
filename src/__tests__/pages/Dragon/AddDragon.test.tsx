import AddDragon from "../../../pages/Dragon/Add";
import { render, screen, fireEvent, waitFor } from "../../../helpers/test-utils";
import toast from "react-hot-toast";

jest.mock('@services/api', () => ({
  post: jest.fn().mockResolvedValue(true),
}));

describe('AddDragon', () => {
  test('should render correctly', async () => {
    render(<AddDragon />);
  });

  test('should fill out the form  correctly and submit', async () => {
    const toastSpy = jest.spyOn(toast, 'success');
    
    render(<AddDragon />);

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

    await waitFor(() => expect(toastSpy).toHaveBeenCalledWith('Dragão adicionado com sucesso'));
  });
})