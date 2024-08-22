function Components() {
    return (
        <>
            <br />
            <div className="components">
                <LeftComponent />
                <RightComponent />
            </div>
        </>
    );
}

function LeftComponent() {
    return (
        <div className="left-component">
            <h1 className="t">Collect your components under variant sections for developers to access them during development.</h1>
        </div>
    );
}

function RightComponent() {
    return (
        <div className="right-component">
            <p className="tr">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequit
            </p>
        </div>
    );
}

export default Components;