import Login from "../../pages/Login";
import { render, screen } from "../../helpers/test-utils";

describe('Login', () => {

  test('should render the login form', () => {
    render(<Login />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });
})