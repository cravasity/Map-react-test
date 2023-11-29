import styles from './styles.module.css';
import Map from '../Map/Map';

const MapContainer = () => {
    return (
    <div className={styles.mapContainer}>
        <Map />
    </div>)
}

export default MapContainer;