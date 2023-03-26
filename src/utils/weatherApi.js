export default class WeatherApi {

  constructor({baseUrl, apiKey}) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _handleResponse(response) {
    return response.ok ? response.json()
  }
}