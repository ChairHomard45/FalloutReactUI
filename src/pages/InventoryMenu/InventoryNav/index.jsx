import { NavLink } from 'react-router-dom'

function InventoryNav() {
    return (
        <nav>
            <NavLink to="Weapons" className={"NavLinks"}>
                WEAPONS
            </NavLink>
            <NavLink to="Apparel" className={"NavLinks"}>
                APPAREL
            </NavLink>
            <NavLink to="Aid" className={"NavLinks"}>
                AID
            </NavLink>
            <NavLink to="Misc" className={"NavLinks"}>
                MISC
            </NavLink>
            <NavLink to="Junk" className={"NavLinks"}>
                JUNK
            </NavLink>
            <NavLink to="Mods" className={"NavLinks"}>
                MODS
            </NavLink>
            <NavLink to="Ammo" className={"NavLinks"}>
                AMMO
            </NavLink>
        </nav>
    )
}

export default InventoryNav