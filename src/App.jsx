
import Greeting from "./components/Greeting"
import Profile from "./components/Profile"

function App() {
  
  return (
    <>
      <div className="flex pt-10 ps-24 gap-x-32 pe-16">
        <Greeting/>
        <Profile/>
      </div>
    </>
  );
}

export default App;
