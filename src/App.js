import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
    <>
      <Navbar webName="TextTools" about="About" contact="Contact Us" privacy="Privaciy"></Navbar>
      <TextBox heading="Paste Text Here"></TextBox>
    </>
  );
}

export default App;
