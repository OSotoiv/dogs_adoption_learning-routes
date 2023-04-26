import './App.css';
import { Route, Routes } from 'react-router-dom';
import dogProps from './defaultProps';
import Dog from './Dog';
import DogNav from './DogNav';
import Home from './Home'

App.defaultProps = dogProps;
function App(props) {
  const { dogs } = props;
  return (
    <div className="App">
      <DogNav dogs={dogs} />
      <Routes>
        <Route path='/' element={<Home dogs={dogs} />} />
        {dogs.map(dog => {
          return <Route path={dog.src} element={<Dog key={dog.name} name={dog.name} age={dog.age} srcImg={dog.src} facts={dog.facts} />} />
        })}
      </Routes>
    </div>
  );
}

export default App;
