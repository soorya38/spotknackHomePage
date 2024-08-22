import './index.css';
import logo from './images/logo.png';

function TopBar() {
    const content = [
        "Home",
        "Features",
        "Why Us",
        "About Us"
    ];

    return (
        <>
            <ul className='topbar-content'>
                <li className='logo'><Logo /></li>
                {content.map((i, index) => (
                <li key={index} className='topbar-items'>
                    <h2>{i}</h2>
                </li>
                ))}
                <li className='login-btn'><LoginButton /></li>
            </ul>
        </>
    );
}

function LoginButton() {
    return (
        <button className="login-btn" style={{ backgroundColor: '#FF5722' }}>Login</button>
    );
}

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
        </div>
    );
}

export default TopBar;