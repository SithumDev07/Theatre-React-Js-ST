import Header from "./components/NavBar";

function App() {
  return (
    <div className="App w-screen h-screen bg-cover bg-no-repeat bg-gradient-to-t from-black via-black" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')" }}>
     <Header />
    </div>
  );
}

export default App;
