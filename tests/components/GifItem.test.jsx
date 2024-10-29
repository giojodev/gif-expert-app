import {render} from '@testing-library/react';
import {screen} from '@testing-library/dom'
import { GifItem } from '../../src/components';


describe('Pruebas en GiftItem', () => {
    const titulo= 'Saitama';
    const url2 = 'https://onepunch.com/saitam.jpg';
    
    test('Debe de hacer match con el snapshot', () => {
       
        const { asFragment } = render(<GifItem title={titulo} url={url2} />);
      
          expect(asFragment).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el ALT indicado', () => {
        render(<GifItem title={titulo} url={url2} />);

        // expect(screen.getByRole('img').src).toBe(url2);
        // expect(screen.getByRole('img').alt).toBe(titulo);

        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url2);
        expect(alt).toBe(titulo);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={titulo} url={url2} />);
        expect(screen.getByText(titulo)).toBeTruthy();
    });
});