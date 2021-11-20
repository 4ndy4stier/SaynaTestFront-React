import './App.css';
import CreateCard from './components/createCard/CreateCard';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Card from './components/card/Card.jsx';


function App() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="others">
          <CreateCard />
          <Card money={'1242 USD'} number={'5323 5654 8974 6542'} date={'05/20'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
