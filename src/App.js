import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import { RoomProvider } from "./context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import SavedHouses from "./pages/SavedHouses";

function App() {
  return (
   <RoomProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/saved" element={<SavedHouses />} />
          <Route path="/rooms/:id" element={<SingleRoom />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>

   </RoomProvider>
     
   
  );
}

export default App;
