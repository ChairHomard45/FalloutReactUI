import '../../styles/StatisticsMenu.css'
import { Route, Routes } from 'react-router-dom'
import { StatsNav, StatsStatus, StatsSpecials, StatsPerks } from '../index'

function StatisticsMenu() {
  return (
    <div>
      <StatsNav />
      <Routes>
        <Route
          path="Status"
          element={<StatsStatus/>}
        />
        <Route
          path="Specials"
          element={<StatsSpecials/>}
        />
        <Route path="Perks" element={<StatsPerks/>} />
        <Route index element={<div>Stats page content here</div>} />
      </Routes>
    </div>
  )
}

export default StatisticsMenu
