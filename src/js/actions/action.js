import dispatcher from '../dispatcher/dispatcher';
import { INPUT_TEXT, API_FETCH } from '../constants/constant';
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
        actionType: API_FETCH,
        value: value
      });
    });
  }

}

export default new Action
