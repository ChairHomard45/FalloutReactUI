import { NavLink } from 'react-router-dom';
import VaultTechLogo from '../../assets/images/VaultTecLogo.png';

function Header() {
    return (
        <div className='header'>
            <nav className='MainNavLinks'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active MNavLinks' : 'MNavLinks-img')}>
                    <img  src={VaultTechLogo} alt="Vault Tec Logo" height={60} />
                </NavLink>
                <NavLink to="/Stats" className={({ isActive }) => (isActive ? 'active MNavLinks' : 'MNavLinks')}>
                    STATS
                </NavLink>
                <NavLink to="/Inventory" className={({ isActive }) => (isActive ? 'active MNavLinks' : 'MNavLinks')}>
                    INVENTORY
                </NavLink>
                <NavLink to="/Data" className={({ isActive }) => (isActive ? 'active MNavLinks' : 'MNavLinks')}>
                    DATA
                </NavLink>
                <NavLink to="/Map" className={({ isActive }) => (isActive ? 'active MNavLinks' : 'MNavLinks')}>
                    MAP
                </NavLink>
                <NavLink to="/Radio" className={({ isActive }) => (isActive ? 'active MNavLinks' : 'MNavLinks')}>
                    RADIO
                </NavLink>
            </nav>
        </div>
    )
}

export default Header