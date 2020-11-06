import React from 'react';
import './css/Home.css';
import cover from './images/shoe_cover.jpg';
import Product from './Product';
import nike from './images/Nike.png';
import nikeshoe from './images/nikeshoe.png';
// import nikeultra from './images/nikeultra.png';
// import party from './images/party.png';
// import running from './images/running.png';
// import woodland from './images/woodland.png';

function Home() {
    return (
        <div className="home">
          {/**Image */}
            <img className="home__image" src={cover} alt="Cover banner" />
             {/**Products */}
              <div className="home__row">
                <Product
                id="1235434"
                title="Nike Piscart Shoes"
                price={122}
                img={nike}
                rating={3} />
                <Product
                id="456333322"
                title="Nike Buffer Shoes"
                price={321}
               img={nikeshoe}
                rating={2} />
              </div>
        </div>

    )
}

export default Home;
