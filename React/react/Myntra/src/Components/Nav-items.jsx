import MenDropdown from './Navbar-Dropdown/MenDropdown.jsx';
import WomenDropdown from './Navbar-Dropdown/WomenDropdown.jsx';
import KidsDropdown from './Navbar-Dropdown/KidsDropdown.jsx';
import HomeDropdown from './Navbar-Dropdown/HomeDropdown.jsx';
import BeautyDropdown from './Navbar-Dropdown/BeautyDropdown.jsx';
import StudioDropdown from './Navbar-Dropdown/StudioDropdown.jsx';

function Nav_items(props) {
    let Dropdown;
    let opacity='0';
    if(props.name=="MEN"){
        Dropdown = <MenDropdown />
    }
    if(props.name=="WOMEN"){
        Dropdown = <WomenDropdown/>
    }
    if(props.name=="KIDS"){
        Dropdown = <KidsDropdown/>
    }
    if(props.name=="HOME & LIVING"){
        Dropdown = <HomeDropdown/>
    }
    if(props.name=="BEAUTY"){
        Dropdown = <BeautyDropdown/>
    }
    if(props.name=="STUDIO"){
        Dropdown = <StudioDropdown/>
    }
    return (
        <li className="nav-item">
            <span className="nav-link px-2 py-4">
                <span>{props.name}<sup style={{ fontSize: '10px', color: 'red' }}>{props.sup}</sup></span>
                {Dropdown}
            </span>
        </li>
    );
}
export default Nav_items;