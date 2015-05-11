import EventEmitter from 'eventemitter3';

import dispatcher from '../dispatcher/dispatcher';
import { INPUT_TEXT, API_FETCH } from '../constants/constant';

class Store extends EventEmitter {

  constructor() {
    super();

    this.state = {};

    dispatcher.register(this.handler.bind(this));
  }

  getText() {
    return this.state.text;
  }

  getInitialText() {
    return this.state.initialText;
  }

  addListener(callback) {
    this.on('change', callback);
  }

  removeListener(callback) {
    this.off('change', callback);
  }

  emitChange() {
    this.emit('change');
  }

  changeText(val) {
    this.state.text = val;
  }

  changeInitialText(val) {
    this.state.initialText = val;
  }

  handler(action) {
    switch(action.actionType) {
      case INPUT_TEXT:
        this.changeText(action.value);
        this.emitChange();
        break;

      case API_FETCH:
        this.changeInitialText(action.value);
        this.emitChange();
        break;

      default:
    }
  }

}

export default new Store
