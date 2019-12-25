import React, { Component } from 'react';
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    Marker
} from 'react-google-maps'
import axios from 'axios';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    pushDataFromCryptomap(){
        axios.get(`https://api.cryptomap.org/api/stores/on_map/pearl`).then((res) => {
    
            let obj = res.data.store_data
            // console.log(obj);
            this.setState({ data: obj })
        })
    }

    componentDidMount() {
        this.pushDataFromCryptomap();
    }
    render() {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 13.7112531, lng: 100.6536093 }}
            > 

                {this.state.data.map(item => (
                    <Marker 
                        key={item.category}
                        position={{
                            lat: parseFloat(item.lat),
                            lng: parseFloat(item.lon)
                        }}
                    />
    
                ))}

            </GoogleMap>
        )
    }
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)