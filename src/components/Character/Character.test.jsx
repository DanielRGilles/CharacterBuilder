import {screen, render} from '@testing-library/react';
import Character from './Character';

it('should display the Character component', () => {
  const {container} = render(<Character head='fox' middle='wings' leg='fish' />);

  const head = screen.getByLabelText(/head/);
  const middle = screen.getByLabelText(/middle/);
  const leg = screen.getByLabelText(/leg/);
  expect(head).toHaveStyle(`background-image: url(./fox-head.png)`);
  expect(middle).toHaveStyle(`background-image: url(./wings-middle.png)`);
  expect(leg).toHaveStyle(`background-image: url(./fish-legs.png)`);

  expect(container).toMatchSnapshot();
});