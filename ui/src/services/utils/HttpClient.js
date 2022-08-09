import APIError from '../../errors/APIError';

import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(route) {
    await delay(2000);

    const response = await fetch(`${this.baseUrl}${route}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
