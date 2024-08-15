import { proxy } from "valtio";

/*
    valtio is the state management library that 
    provide the approach  to managing state in your React applications
*/

const state = proxy({
    intro: true, //are we currently on the home page or not
    color: '#EFBD48',
    isLogoTexture: true, // are we displaying the logo on the shirt
    isFullTexture: false,
    logoDecal: './threejs.png', //default logo on the shirt
    fullDecal: './threejs.png',
});

export default state;