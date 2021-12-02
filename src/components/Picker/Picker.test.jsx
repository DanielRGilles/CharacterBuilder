import {screen, render} from '@testing-library/react';
import Picker from './Picker';

it('should render our Picker component', () => {
  //Render component you want to run the test on
  const {container} = render(<Picker />);

  const selectHead = screen.getByLabelText(/head/);
  const selectMiddle = screen.getByLabelText(/middle/);
  const selectLeg = screen.getByLabelText(/legs/);
  const input = screen.getByLabelText(/CatchPhrase/);

  expect(selectHead).toBeInTheDocument();
  expect(selectLeg).toBeInTheDocument();
  expect(selectMiddle).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});