import AddUser from "./Components/AddUser";
import Crud from "./Components/Crud";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
 
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Crud/>} />
          <Route path='/adduser' element={<AddUser/>} />
          <Route path='/users' element={<Users/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
