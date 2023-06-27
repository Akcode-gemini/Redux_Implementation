import logo from './logo.svg';
import './App.css';
import GetData from './components/GetData/GetData';
import DisplayData from "./components/DisplayData/DisplayData"
import { useSelector } from 'react-redux';
import { submitData, submitUser } from './slice';

function App() {
  const isSubmit = useSelector(submitUser)
  return (
    <>
    {isSubmit? <DisplayData/>:<GetData/>}
 
    </>
  );
}

export default App;
// 