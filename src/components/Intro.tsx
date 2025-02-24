import React, {useState} from "react";

type Field = {
    intro: string;
    name: string;
    desc: string;
};

const Intro = () => {
    const [fields, setFields] = useState([
        {intro: "Hi! My name is", name: "", desc: " A passionate dev looking forward to "}
    ]);

    const handleChange = (index: number, fieldKey: keyof Field, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...fields];
        updatedFields[index][fieldKey] = event.target.value;
        setFields(updatedFields);
    }

    return (
        <div className="p-4 my-4 bg-zinc-50 shadow-2xl text-neutral-950">
            {fields.map((field, index) => (
                <div>
                    <div>
                        <h1 className="text-xl">Intro</h1>
                        <div className="flex">
                            <input
                                type="text"
                                value={field.intro}
                                onChange={event => handleChange(index, "intro", event)}
                            />
                            <input
                                type="text"
                                placeholder="Joe Swanson"
                                onChange={event => handleChange(index, "name", event)}
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl">Description</h1>
                        <div className="flex">
                            <input
                                type="text"
                                value={field.desc}
                                onChange={event => handleChange(index, "desc", event)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Intro;