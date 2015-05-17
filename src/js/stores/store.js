import EventEmitter from 'eventemitter3';

import dispatcher from '../dispatcher/dispatcher';
import { INPUT_TEXT, FETCH_TEXT } from '../constants/constant';

class Store extends EventEmitter {

  constructor() {
    super();

    this.state = {
      text: ''
    };

    dispatcher.register(this.handler.bind(this));
  }

  getText() {
    return this.state.text;
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.off('change', callback);
  }

  _emitChange() {
    this.emit('change');
  }

  _changeText(val) {
    this.state.text = val;
  }

  handler(action) {
    switch(action.actionType) {
      case INPUT_TEXT:
        this._changeText(action.value);
        this._emitChange();
        break;

      case FETCH_TEXT:
        this._changeText(action.value);
        this._emitChange();
        break;

      default:
    }
  }

}

export default new Store
