import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(route) {
    const response = await fetch(`${this.baseUrl}${route}`);

    await delay(2000);

    return response.json();
  }
}

export default HttpClient;
