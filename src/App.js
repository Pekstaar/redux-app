import './App.css';
import InputFile from './components/InputFile';
import university from './img/university.jpg'

function App() {
  return (
    <div className="container">

      <div className="col-1">
        <div className="title">
          <h4>Student Registration</h4>
          <div className="logo">
            <img src={university} alt=""/>
          </div>
        </div>

        <div className="body">
          <div className="error"></div>
          <InputFile/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
