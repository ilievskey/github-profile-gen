import React, {useState} from 'react';

const Experiences = () => {

    const [fields, setFields] = useState([
        {text1: "Hi! My name is", text2: "Joe Swanson"},
    ]);

    const handleChange = (index, fieldKey, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...fields];
        updatedFields[index][fieldKey] = event.target.value;
        setFields(updatedFields);
    };

    const addField = () => {
        setFields([
            ...fields,
            {text1: "Hi! My name is", text2: "Joe Swanson"}
        ]);
    };

    return (
        <div>
            <h1 className="text-xl">Experiences</h1>
            {fields.map((field, index) => (
                <div key={index} className="m-2">
                    <div className="flex">
                        <input
                            type="text"
                            value={field.text1}
                            onChange={(event) => handleChange(index, 'text1', event)}
                        />
                        <input
                            type="text"
                            value={field.text2}
                            onChange={(event) => handleChange(index, 'text2', event)}
                        />
                    </div>
                </div>
            ))}
            <button
                onClick={addField}
                className="m-4 px-4 py-2 add"
            >Add another</button>
        </div>
    );
};

export default Experiences;