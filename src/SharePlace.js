import { Modal } from "./UI/Modal";
import { Map } from './UI/Map';
import { getCoordsFromAddress } from "./Utility/Location";

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
        locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this))
    }

    selectPlace(coordinates) {
        if(this.map) {
            this.map.reRender(coordinates);
        } else {
            this.map = new Map(coordinates);
        }
    }

    locateUserHandler () {
        if(!navigator.geolocation){
            alert('Location not Supported by your Browser');
            return;
        }
        const modal = new Modal('loading-modal-content', 'Loading location please wait...');
        modal.show();
        navigator.geolocation.getCurrentPosition(success => {
            modal.hide();
            const coordinates = {
                lat: success.coords.latitude,
                long: success.coords.longitude,
            }
            this.selectPlace(coordinates);
        }, 
        error =>{
            modal.hide();
            alert('Could not locate. Enter address manually')
        })
    }

    async findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector('input').value;
        if(!address || address.trim().length === 0){
            alert('invalid address. please try again')
            return;
        }
        const modal = new Modal(
            'loading-modal-content',
            'loading location, please wait...'
        );
        modal.show();
           const coordinates = await getCoordsFromAddress(address);
           modal.hide();
           this.selectPlace({lat: coordinates.latitude, long: coordinates.longitude})
    }
}

const placeFInder = new PlaceFinder();