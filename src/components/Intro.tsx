const Intro = () => {
    return (
        <div className="p-4 my-4 bg-zinc-50 shadow-2xl text-neutral-950">
            <div>
                <h1 className="text-xl">Intro</h1>
                <div className="flex">
                    <input type="text" value="Hi! My name is"/>
                    <input type="text" placeholder="Joe Swanson"/>
                </div>
            </div>
            <div>
                <h1 className="text-xl">Description</h1>
                <div className="flex">
                    <input type="text" placeholder="I'm a passionate Full-Stack Dev"/>
                </div>
            </div>
        </div>
    );
};

export default Intro;