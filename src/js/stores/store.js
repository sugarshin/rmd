import EventEmitter from 'eventemitter3';

import dispatcher from '../dispatcher/dispatcher';
import { INPUT_TEXT, API_FETCH } from '../constants/constant';

export default class Store extends EventEmitter {

  constructor() {
    super();

    this.state = {};

    dispatcher.register(this.handler.bind(this));
  }

  // save() {
  //   localStorage.setItem('rmd', this.state.text);
  // }
  //
  // fetch() {
  //   this.state.text = localStorage.getItem('rmd');
  // }

  getText() {
    return {
      text: this.state.text
    };
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

  handler(action) {
    switch(action.actionType) {
      case INPUT_TEXT:
        this.changeText(action.value);
        this.emitChange();
        break;

      case API_FETCH:
        this.changeText(action.value);
        this.emitChange();
        break;

      default:
    }
  }

}
