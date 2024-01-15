// https://developer.scrypted.app/#getting-started
// package.json contains the metadata (name, interfaces) about this device
// under the "scrypted" key.
import { Brightness, OnOff, ScryptedDeviceBase } from '@scrypted/sdk';
import axios from 'axios';

class TypescriptLight extends ScryptedDeviceBase implements OnOff, Brightness {
    constructor(nativeId?: string) {
        super(nativeId);
        this.on = this.on || false;
        this.brightness = this.brightness || 60;
    }

    async setBrightness(brightness: number) {
        this.brightness = brightness;
        const level = await axios.post('http://10.0.1.236:5112/brightness', { "value": this.brightness});

    }
    async turnOff() {
        const level = await axios.post('http://10.0.1.236:5112/off');
        this.on = false;
    }
    async turnOn() {
        const level = await axios.post('http://10.0.1.236:5112/on');
        this.on = true;
    }
}

export default TypescriptLight;
