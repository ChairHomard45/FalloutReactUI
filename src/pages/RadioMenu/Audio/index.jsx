import PropTypes from 'prop-types';

function Audio({ selectedStation }) {
    return (
        <audio
            src={selectedStation ? selectedStation : ''}
            controlsList="nodownload"
            autoPlay
            preload="auto"
        ></audio>
    );
}

Audio.propTypes = {
    selectedStation: PropTypes.string,
}

export default Audio;
