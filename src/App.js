import React from 'react';
import "./styles.css";
import Logo from "./assets/2.png"


function App() {
  return (
    <div className="App">
    <img id="1000345081_cpa_testing" src="https://ads.trafficjunky.net/tj_ads_pt?a=1000345081&member_id=1004325931&cb=
    [RANDOM_NUMBER]&cti=[TRANSACTION_UNIQ_ID]&ctv=[VALUE_OF_THE_TRANSACTION]&ctd=[TRANSACTION_DESCRIPTION]"
    width="1" height="1" border="0" style={{display:"none"}}  alt=''  />
      <div className='container'>
        <div className='row'>
            <div className='col-1'>
                <h3>Amy wants you to send <br /> these memes to her, join <br /> her and 3 million+ meme <br/> lovers
                 </h3>
                <button className='btn'> Download Now</button>
            </div>
            <div className='col-2'>
              <img 
              src={Logo} 
              className="sideimg"
              alt=' '
              />
              <div className='color-box'></div>
              
            </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
