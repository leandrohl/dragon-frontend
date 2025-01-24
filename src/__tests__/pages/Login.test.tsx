import Login from "../../pages/Login";
import { fireEvent, render, screen, waitFor } from "../../helpers/test-utils";
import toast from "react-hot-toast";

describe('Login', () => {

  test('should render the login form', () => {
    render(<Login />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  test('should fill out the form  correctly and submit', async () => {
    const toastSpy = jest.spyOn(toast, 'success');
    render(<Login />);

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: 'teste@gmail.com'}})
    
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: '123456'}})

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => expect(toastSpy).toHaveBeenCalledWith('Login realizado com sucesso'));
  });

  test('should fill out the form with incorrect login and submit', async () => {
    const toastSpy = jest.spyOn(toast, 'error');
    render(<Login />);

    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: 'joao@gmail.com'}})
    
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: '202020'}})

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => expect(toastSpy).toHaveBeenCalledWith('Credenciais inválidas. Verifique seu email e senha.'));
  });
})