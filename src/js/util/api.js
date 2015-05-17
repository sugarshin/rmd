import Promise from 'native-promise-only';

const DEFAULT_TEXT = `# rmd\n\nis Markdown editor`;

class API {

  fetch(callback) {
    this._fetch()
    .then((text) => {
      callback(text);
    })
    .catch(this._onError);
  }

  save(value, callback) {
    this._save(value)
    .then((text) => {
      if (typeof callback === 'function') {
        callback(text);
      }
    })
    .catch(this._onError);
  }

  fetchSync() {
    return localStorage.getItem('rmd') || DEFAULT_TEXT;
  }

  _fetch() {
    return new Promise((resolve, reject) => {
      try {
        resolve( localStorage.getItem('rmd') || '' );
      } catch (err) {
        reject(err);
      }
    });
  }

  _save(value) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem('rmd', value);
        resolve(value);
      } catch (err) {
        reject(err);
      }
    });
  }

  _onError(err) {
    console.error(err);
  }

}

export default new API
