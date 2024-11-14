const { renderHook, waitFor } = require("@testing-library/react");
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGif', () => {
    test('debe de regresar el estado inicial', () => {
        const {result} = renderHook(()=> useFetchGifs('One Punch'));
        const {images,isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    test('debe de regresar el estado inicial', async () => {
        const {result} = renderHook(()=> useFetchGifs('One Punch'));
        
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0),
        );
        
        const {images,isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
});