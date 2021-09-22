import Header from "./components/Header";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";

function App() {
  return (
    // style={{ background: "url('https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')" }}
    <div className="App w-screen h-full bg-fixed bg-no-repeat bg-gradient-to-t from-black via bg-gray-900" >
     <NavBar />
     <Header />
     <MovieList />
    </div>
  );
}

export default App;
