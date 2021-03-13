import logo from './logo.svg';

function Content(){
    return (
        <div className="App">
            <div className="App-sidebar-left">
	        <p>Navbar</p>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Website under construction...
                </p>
                <p
                className="App-link"
                >
                2021
                </p>
        </header>
        <div className="App-sidebar-right">
	        <p>Navbar</p>
        </div>
      </div>
    )
}

export default Content;