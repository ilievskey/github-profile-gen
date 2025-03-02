import React, {useState} from 'react';

type Field = {
    text1: string;
    text2: string;
};

const Experiences = () => {

    const [fields, setFields] = useState([
        {text1: "Noteworthy project I've done is", text2: ""}
    ]);

    const handleChange = (index: number, fieldKey: keyof Field, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...fields];
        updatedFields[index][fieldKey] = event.target.value;
        setFields(updatedFields);
    };

    const addField = () => {
        setFields([
            ...fields,
            {text1: "Currently working on", text2: ""}
        ]);
    };

    return (
        <div className="card-bg">
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
                            placeholder="Project here"
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