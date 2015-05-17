import dispatcher from '../dispatcher/dispatcher';
import { INPUT_TEXT, FETCH_TEXT } from '../constants/constant';
import api from '../util/API';

class Action {

  inputText(value) {
    dispatcher.dispatch({
      actionType: INPUT_TEXT,
      value: value
    });

    api.save(value);
  }

  fetch() {
    api.fetch((value) => {
      dispatcher.dispatch({
        actionType: FETCH_TEXT,
        value: value
      });
    });
  }

  fetchSync() {
    dispatcher.dispatch({
      actionType: FETCH_TEXT,
      value: api.fetchSync()
    });
  }

}

export default new Action
