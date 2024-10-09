import '../../styles/Map.css';
import Map from '../../assets/images/World_map_blank_gmt.svg.png';

function MapMenu() {
  return (
    <div className="Map-Div">
      <img src={Map} height={'525vh'} alt='World Map'></img>
    </div>
  );
}

export default MapMenu
