import React, { useState } from 'react'
import MapPicker from 'react-google-map-picker'

const GMap = () => {
    const [defaultLocation, setDefaultLocation] = useState({ lat: 52.862952310169106, lng: -2.548346314187373 });

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(6);

    const handleChangeLocation = (lat, lng) => {
        setLocation({ lat: lat, lng: lng });
    }
    const handleChangeZoom = (newZoom) => {
        setZoom(newZoom);
    }

    return (
        <>
            <label>Latitute:</label><input type='text' value={location.lat} disabled />
            <label>Longitute:</label><input type='text' value={location.lng} disabled />

            <MapPicker defaultLocation={defaultLocation}
                zoom={zoom}
                style={{ height: '60vh', width: '40vw' }}
                onChangeLocation={handleChangeLocation}
                onChangeZoom={handleChangeZoom}
                apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' />
        </>
    );
};

export default GMap;