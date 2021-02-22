import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import MovieProvider from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
