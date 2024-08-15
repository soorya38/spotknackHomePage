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
        <button className='login-btn'>Login</button>
    );
}

function Logo() {
    return (
        <h1>Spotknack</h1>
    );
}

export default TopBar;