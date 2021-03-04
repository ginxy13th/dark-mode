import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('true');

    useEffect(() => {
        if (value === true) {
            return document.body.classList.add('dark-mode');
        }
        return document.body.classList.remove('dark-mode')
    }, [value]);

    return [value, setValue];
}