import { useState } from "react";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button";
import styles from  './style.module.css';

export const FieldCase  = () => {

    const [property, setProperty] = useState('');
    const [meaning, setMeaning] = useState('');
    const [field, setField] = useState<Record<string, string>>({});

    const handlePropertyChange = (value: string) => {
         setProperty(value);
    };

    const handleMeaningChange = (value: string) => {
        setMeaning(value);
    };

   const handleClick = () => {
        if (!property.trim()) {
            setMeaning('');
            return
        };
        setField(prev => ({ ...prev, [property] : meaning}));
        setProperty('');
        setMeaning('');
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleClick();
    };

    return<>
        <form onSubmit={handleSubmit}> 
            <Input
                id="property"
                value={property}
                onChange={handlePropertyChange}
                label="Название поля:"
            />
            <Input
                id="meaning"
                value={meaning}
                onChange={handleMeaningChange}
                label="Значение поля:"
            />
            <Button type="submit" className={styles.btn}>Создать поле в объекте</Button>
        </form>
        <div>
            {`Объект: ${JSON.stringify(field, null, 2)}`}
        </div>
    </>
};


