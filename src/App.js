
import './App.css';
import data from './1-data';
import React from 'react';


function App() {
  
  
  function changeCurrencyINR()
  {
    fetch('https://api.exchangeratesapi.io/latest?base=INR')
    .then(function(result) {
      data.products.map(product=>{
      product.price=product.price*result;
      });
  })
}
function changeCurrencyUSD()
  {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(function(result) {
      data.products.map(product=>{
      product.price=product.price*result;
      });
  })
}


        
  return (
  
      <div className="grid-container">
        <header className="row">
          
        </header>
        <main>
          <div>
            <div className="row center">
              {
                data.products.map(product=>(
                  <div key={product._id} className="card">
                   
                    <img className="medium" src={product.image} alt={product.name} />
                    <h2 >{product.name}</h2>
                    <h2 >{product.price}</h2>
                    
                    

                    </div>

                    

                ))
                
              }
              <button onclick="changeCurrencyINR()">INR</button>
              <button onclick="changeCurrencyUSD()">USD</button>
     
            </div>
            
          </div>
        </main>
       
      </div>
  )
            }
export default App;
