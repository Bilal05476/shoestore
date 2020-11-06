import React from 'react';
import './css/Home.css';
import Product from './Product';
import nike from './images/Nike.png';
import nikeshoe from './images/nikeshoe.png';
import nikeultra from './images/nikeultra.png';
import party from './images/party.png';
import running from './images/running.png';
import woodland from './images/woodland.png';

function ProductItems() {
    return (
      
        <div className="home"><br /><br /><br />
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

              <div className="home__row">
                <Product
                id="78933334"
                title="Nike Ultra Shoes"
                price={190}
                img={nikeultra}
                rating={5} />
                <Product
                id="0104433"
                title="Nike Party Shoes"
                price={150}
                img={party}
                rating={3} />
              </div>

              <div className="home__row">
               <Product
                id="020222344"
                title="Running Shoes"
                price={123}
                img={running}
                rating={4} />
                <Product
                id="030333334"
                title="Woodland Shoes"
                price={450}
                img={woodland}
                rating={4} />
              </div>
        </div>

    )
}

export default ProductItems;
