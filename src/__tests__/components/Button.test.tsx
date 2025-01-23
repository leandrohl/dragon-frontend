import { render, screen } from '../../helpers/test-utils';
import Button from '../../components/Button';

describe('Button', () => {
  test('renders children correctly', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('disables the button when disabled is true', () => {
    render(
      <Button onClick={() => {}} disabled>
        Click Me
      </Button>
    );
    const button = screen.getByText('Click Me') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  test('applies the fullWidth class when fullWidth is true', () => {
    render(
      <Button onClick={() => {}} fullWidth>
        Click Me
      </Button>
    );
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('fullWidth');
  });
})
