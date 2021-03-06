import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Latest from './pages/Latest';
import Movies from './pages/Movies';
import MyList from './pages/MyList';
import TvShows from './pages/TvShows';
import ShowMovie from './components/ShowMovie';
import CreateMovie from './pages/CreateMovie';
import DeleteMovie from './pages/DeleteMovie';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router className='h-full'>
      <div className="App w-screen h-full bg-fixed bg-no-repeat bg-gradient-to-t from-black via bg-gray-900">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tvshows">
            <TvShows />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/mylist">
            <MyList />
          </Route>
          <Route path="/movie/:id" component={ShowMovie} />
          <Route path="/create" component={CreateMovie} />
          <Route path="/edit/:id" component={CreateMovie} />
          <Route path="/delete/:id" component={DeleteMovie} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
