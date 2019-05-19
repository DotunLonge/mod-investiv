import React from "react";
import ReactDOM from "react-dom";
import { polyfillLoader } from 'polyfill-io-feature-detection';

var psuedoReduxStore = {

};

// This function load polyfills only if needed. By default it uses polyfill.io
if (typeof window !== "undefined") {
    polyfillLoader({
      "features": "IntersectionObserver",
      "onCompleted": main
    });
} else {
    main();
}
// Your top level component
import App from "./App";

// Export your top level component as JSX (for static rendering)
export default App;

function main(){
    // Render your app
    if (typeof document !== "undefined") {
      const renderMethod = module.hot
        ? ReactDOM.render
        : ReactDOM.hydrate || ReactDOM.render;
      const render = Comp => {
        renderMethod(<Comp />, document.getElementById("root"));
      };

      // Render!
      render(App);
    }
}