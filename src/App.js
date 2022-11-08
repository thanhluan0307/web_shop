import axios from './axios'
import './App.css';

function App() {
  axios.get('/product/get-all-products')
  .then(res => console.log(res))
  .catch(error => console.log(error))
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
