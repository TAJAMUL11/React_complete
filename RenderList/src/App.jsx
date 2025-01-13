import List from './List.jsx';

function App() {
  const fruits = [{id : 1, name :'Apples', calories : 98},
                  {id : 2, name :'oranges',calories :10},
                  {id : 3, name :'Bananas', calories :49},
                  {id : 4, name :'Pineapple', calories :2}];
  const Vegetables = [{id : 11, name :'Potatoes', calories : 98},
                      {id : 12, name :'Onion',calories :20},
                      {id : 13, name :'cabbage', calories :19},
                      {id : 14, name :'Tomatoes', calories :12}];
  return(
    <>
      {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>}
      {Vegetables.length > 0 && <List items = {Vegetables} category = "Vegetables"/>}
    </>
  );
}

export default App
