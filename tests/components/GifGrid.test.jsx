import { render, screen } from "@testing-library/react";
import {GifGrid} from '../../src/components/GifGrid'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {
    
    const  category = 'One Punch';
    test('Debe de mostrar el loading inicialmente', () => {
        render(<GifGrid category={category}/>)
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs()', () => {
        
        const gifs =[{
            id:'ABC',
            title:'Saintama',
            url:'https:'
        },{
            id:'ABC',
            title:'Saintama',
            url:'https:'
        }]
        
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:false
        })
       
        render(<GifGrid category={category}/>)
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});