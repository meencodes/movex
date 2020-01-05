import React, { Component } from 'react';
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    Marker
} from 'react-google-maps'
import axios from 'axios';
import logo from "../assets/images/cryptomap/cryptomaplogo.png"

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
                defaultZoom={3}
                defaultCenter={{ lat: 42.847038, lng: 18.1102372 }}
            > 

                {this.state.data.map(item => (
                    <Marker 
                        key={item.store_id}
                        position={{
                            lat: parseFloat(item.lat),
                            lng: parseFloat(item.lon)
                        }}

                        icon={{
                            url: logo,
                            scaledSize: {width: 20, height: 20}
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