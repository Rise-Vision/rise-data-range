import { RiseElement } from "rise-common-component/src/rise-element.js";
import { version } from "./rise-data-range-version.js";

export default class RiseDataRange extends RiseElement {

  static get properties() {
    return {
      min: {
        type: String
      },
      max: {
        type: String
      },
      value: {
        type: String,
        observer: "_valueChanged"
      },
      format: {
        type: String
      }
    }
  }

  // Event name constants
  static get EVENT_DATA_UPDATE() {
    return "data-update";
  }

  constructor() {
    super();

    this._setVersion( version );
  }

  _valueChanged(newValue) {
    super._sendEvent( RiseDataRange.EVENT_DATA_UPDATE, {value: newValue});
  }
}

customElements.define("rise-data-range", RiseDataRange);
