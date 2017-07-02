export class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    };
  }

  static getLessons() {
    return Promise.resolve([
      {
        name: 'foo',
        label: 'foo',
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      },
      {
        name: 'blah',
        label: 'blah',
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      },
      {
        name: 'ta',
        label: 'ta',
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      },
      {
        name: 'mu',
        label: 'mu',
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      },
    ]);
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {
    const host = 'http://momo.com';
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = Api.headers();
    return fetch(url, options).then(resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => { throw err });
    }).then(json => json.results);
  }
}