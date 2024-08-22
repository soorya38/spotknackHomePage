import badgeImage from './images/badgeImage.png';

function HighlightFeatures() {
    return (
        <>
            <div className='outer-container-features'>
                <h2 className='hf-title' style={{padding: '20px'}}>Highlight Features</h2>
                <div className='features'>
                    <Headline color={'#FFCC45'}/>
                    <Headline color={'#34B2FE'}/>
                    <Headline color={'#3365FF'}/>
                    <Headline color={'#F7641F'}/>
                </div>
            </div>
        </>
    );
}

function Headline({ color }) {
    return (
        <div className='headline'>
            <div className='iii' style={{backgroundColor: color}}>
                <img src={badgeImage} className='headlineImage'  />
            </div>
            <p>headline</p>
        </div>
    );
}

export default HighlightFeatures;