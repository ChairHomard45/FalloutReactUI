import '../../styles/InventoryMenu.css'
import { Route, Routes } from 'react-router-dom'
import { InventoryNav, InventoryCategory } from '../index'

function InventoryMenu() {

  return(
    <div>
      <InventoryNav />
      <Routes>
        <Route path="Weapons" element={<InventoryCategory category="Weapons" />} />
        <Route path="Apparel" element={<InventoryCategory category="Apparel" />} />
        <Route path="Aid" element={<InventoryCategory category="Aid" />} />
        <Route path="Misc" element={<InventoryCategory category="Misc" />} />
        <Route path="Junk" element={<InventoryCategory category="Junk" />} />
        <Route path="Mods" element={<InventoryCategory category="Mods" />} />
        <Route path="Ammo" element={<InventoryCategory category="Ammo" />} />
        {/* Render the Inventory page content if no sub-route is matched */}
        <Route index element={<div>Inventory page content here</div>} />
      </Routes>
    </div>
  );
}

export default InventoryMenu
