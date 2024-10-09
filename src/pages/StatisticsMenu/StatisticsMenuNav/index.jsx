import { NavLink } from 'react-router-dom'

function StatisticsMenuNav() {
    return (
        <nav className='SubNavLinks'>
            <NavLink to="Status" className={"NavLinks"}>
                STATUS
            </NavLink>
            <NavLink to="Specials" className={"NavLinks"}>
                SPECIALS
            </NavLink>
            <NavLink to="Perks" className={"NavLinks"}>
                PERKS
            </NavLink>
        </nav>
    )
}

export default StatisticsMenuNav