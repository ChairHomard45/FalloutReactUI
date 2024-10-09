import React,{ useState } from 'react'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'
/* Components */
import {Header, Error, Footer} from './components'
/* Pages */
import {Home, Stats, Inventory, Data, Map, Radio, StatsStatus, StatsSpecials, StatsPerks, InventoryCategory, Audio} from './pages'
/* CSS */
import './styles/index.css'

function App(){
    const [selectedStation, setSelectedStation] = useState('');

    return(<React.StrictMode>
        <div className="main-div">
          <div className='screen-reflection'></div>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Stats/*" element={<Stats />}>
                <Route path="Status" element={<StatsStatus />}/>
                <Route path="Special" element={<StatsSpecials />}/>
                <Route path="Perks" element={<StatsPerks />}/>
            </Route>
            <Route path="/Inventory/*" element={<Inventory />}>
                <Route path="Weapons" element={<InventoryCategory category="Weapons" />} />
                <Route path="Apparel" element={<InventoryCategory category="Apparel" />} />
                <Route path="Aid" element={<InventoryCategory category="Aid" />} />
                <Route path="Misc" element={<InventoryCategory category="Misc" />} />
                <Route path="Junk" element={<InventoryCategory category="Junk" />} />
                <Route path="Mods" element={<InventoryCategory category="Mods" />} />
                <Route path="Ammo" element={<InventoryCategory category="Ammo" />} />
              </Route>
            <Route path="/Data" element={<Data />}/>
            <Route path="/Map" element={<Map />}/>
            <Route path="/Radio" element={<Radio setSelectedStation={setSelectedStation} selectedStation={selectedStation} />}/>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer/>
          {selectedStation && <Audio selectedStation={selectedStation}/>}
        </Router>
        </div>
      </React.StrictMode>
      );
}

export default App;