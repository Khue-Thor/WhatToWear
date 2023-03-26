export default class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handleResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(`Error: ${response.status} ${response.statusText}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleResponse);
  }

  getItem = async () => {
    return await this._request(`${this.baseUrl}/items`, {
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  addItem = async ({name, imageUrl, weather}) => {
    return await this._request(`${this._baseUrl}/items`, {
      method: "POSt",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        imageUrl,
        weather,
      }),
    });
  };

  deleteItem = async (id) => {
    return await this._request(`${this._baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
  };
}

export const api = new Api({
  baseUrl: "https://my-json-server.typicode.com/Khue-Thor/WhatToWear",
})