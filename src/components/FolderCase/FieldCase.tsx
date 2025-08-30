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
        }
        if (!meaning.trim()) {
        setField({ ...field, property : ''});
        }
        setField({ ...field, [property] : meaning})
        setProperty('');
        setMeaning('');
    };

    return<>
            <form onSubmit={(e) => { e.preventDefault(); handleClick();}}> 
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
                <Button type="button" className={styles.btn} onClick ={handleClick}>Создать поле в объекте</Button>
            </form>
            <div>
                {`Объект: ${JSON.stringify(field, null, 2)}`}
            </div>
        </>

}


