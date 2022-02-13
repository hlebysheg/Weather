import { ChangeEvent, useState } from 'react';

export const UseInput = () => {
    const [value, setValue] = useState<string>('');
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}