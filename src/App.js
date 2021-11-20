import './App.css';
import CreateCard from './components/createCard/CreateCard';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Card from './components/card/Card.jsx';
import PieChart from './components/pieChart/PieChart';
import Activities from './components/activities/Activities';
import Payments from './components/payments/Payments';

const cardData = [
  {
    "moneyAmount": '1242 USD',
    "number": '5323 5654 8974 6542',
    "date" : '05/20'
  },
  {
    "moneyAmount": '249.00 EUR',
    "number": '5323 5654 8974 6542',
    "date" : '05/28'
  },
  {
    "moneyAmount": '1242 USD',
    "number": '5323 5654 8974 6542',
    "date" : '05/27'
  }
]
const cards = cardData.map(
  (val)=> {
    return <Card money={val.moneyAmount} number={val.number} date={val.date} />
  }
)

function App() {
  return (
    <div className="container">
{/* The sidebar element on the left of the screen  */}
      <Sidebar className="sidebar"/>

{/*
 Everything else on the right side of the screen 
*/}
      <div className="others">
        <CreateCard />
  {/* The card on the top */}
        <div className="cardContainer">
          {cards}
        </div>

  {/* All the things under the card container which is divided by two */}
        <div className="bottomContainer">

    {/* The container on the left */}
          <div className="containerLeft">
            <div className="pieContainer">
              <div>
                <PieChart rest={2000} used={1500} info={"Credit Limit"}/>
              </div>
              <div>
                <PieChart rest={1500} used={1324} info={"Online Limit"}/>
              </div>
            </div>

            <div>
              <Payments />
            </div>
          </div>


    {/* The container on the Right */}
          <div className="containerRight">
            <Activities />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
