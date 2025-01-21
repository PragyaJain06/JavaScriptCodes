
import './App.css';
import CreateForm from './components/CreateForm';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Read from './components/Read';
import Update from './components/Update';
import ShimmerUI from './ShimmerUI';
import Routing from './Routing';
import Login from './Login';
import Team from './Team';
import { Protected } from './Protected';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route  path='/' element={<CreateForm/>}/>
        <Route exact path='/read' element={<Read/>}/>
        <Route exact path='/edit/:id' element={<Update/>}/>
      </Routes>/
      </BrowserRouter> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ShimmerUI/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<Protected/>}>
      <Route path='/team' element={<Team/>}/>
      <Route path='/about' element={<Routing/>}/>
      </Route>

   
      

     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
