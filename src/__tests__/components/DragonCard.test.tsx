import { render, screen, fireEvent } from '@testing-library/react';
import DragonCard from '../../components/DragonCard';

test('should render dragon card and handle button clicks', () => {
  const dragon = { id: "1", name: 'Smaug', type: 'Fire' };

  const onViewDetails = jest.fn();
  const onEditDragon = jest.fn();
  const onDeleteDragon = jest.fn();

  render(
    <DragonCard
      dragon={dragon}
      onViewDetails={onViewDetails}
      onEdit={onEditDragon}
      onDelete={onDeleteDragon}
    />
  );

  expect(screen.getByText('Smaug')).toBeInTheDocument();
  expect(screen.getByText('Fire')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('view-dragon-1'));
  fireEvent.click(screen.getByTestId('edit-dragon-1'));
  fireEvent.click(screen.getByTestId('delete-dragon-1'));

  expect(onViewDetails).toHaveBeenCalledWith("1");
  expect(onEditDragon).toHaveBeenCalledWith("1");
  expect(onDeleteDragon).toHaveBeenCalledWith("1");
});
