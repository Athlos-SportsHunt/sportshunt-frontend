
function App() {
    console.log('App component is loaded');
    return (
        <div>
            <Navbar />
            <div>
                <h1>Welcome to SportsHunt</h1>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));


