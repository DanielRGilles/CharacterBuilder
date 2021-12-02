import { render, screen } from '@testing-library/react';
import Display from './Display';

it('should render display component with supplied catchphrases', () => {
    const { container } = render( <Display phrases={['yum', 'bark', 'hhey']}/> );
    expect(container).toMatchSnapshot();
})