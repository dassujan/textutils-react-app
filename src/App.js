import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    <Navbar title="TextUtils"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below"/>
    {/* <About/> */}
    </div>
    {/* <Navbar/> */}
    </>
  );
}

export default App;
