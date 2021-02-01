import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                {/* <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img> */}


                <div className="home_row">
                
                
                <Product 
                id="12321341"
                title="MisFit Swarovski Shine Slake Set
Activity & Sleep Monitor (Various..."
                
                
                price={24.44} 
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                rating={4}></Product>

                <Product 
                id="49538094"
                title="MisFit Swarovski Shine Slake Set
Activity & Sleep Monitor (Various..."
                
                price={24.44} 
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 

                rating={4}></Product>


                </div>



                <div className="home_row">
                
                
                <Product 
                id="4903850"
                title="Smart-watch Sweatproof Smart
Watch Phone /bluetooth 4.0/Easy
connection/ for Apple Iphone..."
                
                price={199.99} 
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                rating={3}></Product>

               <Product 
               id="23445930"
                title="MisFit Swarovski Shine Slake Set
Activity & Sleep Monitor (Various..."
                
                
                price={24.44} 
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                rating={5}>

                </Product>

              <Product 
              id="3254354345"
               title="MisFit Swarovski Shine Slake Set
Activity & Sleep Monitor (Various..."
                
                
                price={598.99} 
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                rating={4}></Product>
                
                 </div>
                <div className="home_row">
                <Product 
              id="90829332"
               title="MisFit Swarovski Shine Slake Set
Activity & Sleep Monitor (Various..."
                
                
                price={1094.98} 
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                rating={4}></Product>
                </div>
            </div>
</div>
    )
}

export default Home
