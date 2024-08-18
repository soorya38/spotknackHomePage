import badgeImage from './images/badgeImage.jpg';

function HighlightFeatures() {
    return (
        <div className='outer-container-features'>
            <h2 className='hf-title' style={{padding: '20px'}}>Highlight Features</h2>
            <div className='features'>
                <Headline />
                <Headline />
                <Headline />
                <Headline />
            </div>
        </div>
    );
}

function Headline() {
    return (
        <div className='headline'>
            <img src={badgeImage} className='headlineImage' />
            <p>headline</p>
        </div>
    );
}

export default HighlightFeatures;