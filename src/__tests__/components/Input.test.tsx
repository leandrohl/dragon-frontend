import { fireEvent, render, screen } from '../../helpers/test-utils';
import Input from '../../components/Input';

describe('Input', () => {
  test('render input correctly', () => {
    const onChange = jest.fn();

    render(
      <Input 
        label='Nome'
        name='name'
        onChange={onChange}
        value=""
        testId='input-name'
      />
    );
    expect(screen.getByTestId('input-name')).toBeInTheDocument();
  });

  test('disables the input when disabled is true', () => {
    const onChange = jest.fn();

    render(
      <Input 
        label='Nome'
        name='name'
        onChange={onChange}
        value=""
        testId='input-name'
        disabled
      />
    );

    const input = screen.getByTestId('input-name');
    expect(input).toBeDisabled();
  });

  test('should render with error message', () => {
    const onChange = jest.fn();

    render(
      <Input 
        label='Nome'
        name='name'
        onChange={onChange}
        value=""
        testId='input-name'
        errorMessage='Campo obrigatório'
      />
    );

    const input = screen.getByTestId('input-name');
    expect(input).toHaveClass("error");
    expect(screen.getByText("Campo obrigatório")).toBeInTheDocument();
  });

  test('should change the text when the digit', () => {
    const onChange = jest.fn();

    render(
      <Input 
        label='Nome'
        name='name'
        onChange={onChange}
        value=""
        testId='input-name'
      />
    );

    const input = screen.getByTestId('input-name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Leandro" }});
    
    expect(onChange).toHaveBeenCalled();
  });
})
