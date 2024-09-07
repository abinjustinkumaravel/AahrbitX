import Navbar from "./components/navbar.js";
import Lefttext from "./components/lefttextbar.js"
import Social from "./components/socials.js"
import Circle from "./components/circle.js"

function App() {
  return (

    <div>
    <Navbar/>
    <Circle/>
    <div className="flex items-center justify-between h-screen bg-black bg-gradient-to-r from-black via-[#0c0116] to-black">
    <Lefttext/>
      <div className=" text-center">
        <h2 className="text-[30px] m-[20px] text-white tracking-[30px]"><span className="text-violet-600 tracking-[30px]">Launching</span> soon</h2>
        <h1 className="tracking-[50px] m-[50px] font-extrabold text-4xl text-white">ALMOST  THERE</h1>
        <h3 className="tracking-[10px] m-[50px] text-1xl text-white">You're Gonna Like Our Website</h3>
      </div>
     <Social/> 
    </div>

    </div>
  );
}

export default App;
