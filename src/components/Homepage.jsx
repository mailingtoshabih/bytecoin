import { Header } from "./Header";
import { Simpletable } from "./Simpletable";
import { Topcoins } from './Topcoins';


export const Homepage = () => {
  return (
    <>

      <div>
        <Header />
      </div>


      <div>
         <Simpletable/>
      </div>

      <>
        <Topcoins />
      </>

      <>
        {/* News slider component */}
      </>

    </>
    )
}
