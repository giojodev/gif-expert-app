import {render} from '@testing-library/react';
import { GifItem } from '../../src/components';


describe('Pruebas en GiftItem', () => {
    test('Debe de hacer match con el snapshot', () => {
        const titulo= 'Saitama';
        const url2 = 'https://onepunch.com/saitam.jpg';
        const { asFragment } = render(<GifItem title={titulo} url={url2} />);
      
          expect(asFragment).toMatchSnapshot();
    });
});