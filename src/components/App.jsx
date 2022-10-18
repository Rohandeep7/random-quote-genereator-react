import { useEffect, useState } from "react";

function App() {

  const [apiData,setData]=useState([])
  useEffect(()=>{
    const fetchQuote=async ()=>{
      const response=await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      const data=await response.json()
      console.log(data);
      setData(data.data)
    }
     fetchQuote()   
  },[])

  return (
    <div className="App">
      {apiData.map(quote=>{
        return <h1 key={quote._id}>{quote.quoteText}</h1>
      })}
    </div>
  );
}

export default App;
