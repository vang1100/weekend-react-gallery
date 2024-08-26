import Header from "../Header/Header";

function App() {
    return (
      <div data-testid="app">
      
      <Header />

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
    );
}

export default App;
