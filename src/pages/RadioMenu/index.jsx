import PropTypes from 'prop-types';
import { useState } from 'react';
import '../../styles/Radio.css';
import {radiostations} from '../../assets/json/radio.json'

function RadioMenu({ selectedStation, setSelectedStation })  {
    const stations = radiostations;

      const [selected, setSelected] = useState(null);
      console.log(radiostations);

      const handleStationChange = (url) => {
          if (selected === url) {
            // If the button is already selected, unselect it
            setSelected(null);
            setSelectedStation(null);
          } else {
            // Otherwise, select the button
            setSelected(url);
            setSelectedStation(url);
          }
        };

      return (
        <div>
          <h1>Radio</h1>
          <div className='RadioList'>
            {stations.map((station, index) => (
              <div key={index}>
                <button
                  id={`station${index + 1}`}
                  name="station"
                  value={station.url}
                  onClick={() => handleStationChange(station.url)}
                  className={station.url === selectedStation ? 'selected' : ''}
                >
                  {station.name}
                </button>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      );
    }

RadioMenu.propTypes = {
    selectedStation: PropTypes.string,
    setSelectedStation: PropTypes.func.isRequired,
};

export default RadioMenu
