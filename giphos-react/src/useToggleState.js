import { useCallback, useState } from 'react';

export const useToggleState = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => {
        setValue(value => !value);
    }, []);
    return [value, toggle];
}

