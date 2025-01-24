import { render, screen } from '@testing-library/react';
import Loading from '../../components/Loading';

describe('Loading', () => {
  test('should render the spinner', () => {
    render(<Loading />);

    const overlay = screen.getByTestId('loading-overlay');
    const spinner = screen.getByTestId('spinner-circle');

    expect(overlay).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });
});
