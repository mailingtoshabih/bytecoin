import { MainPage } from "./components/MainPage";
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (
    // bg-gradient-to-r from-white via-purple-500 to-white-500 ... => apply this color after completion. and change button colors of header
    
    <div className="md:container mx-auto font-poppins">
      

      <BrowserRouter>
        <MainPage/>
      </BrowserRouter>


    </div>
  );
}



export default App;
