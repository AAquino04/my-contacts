import APIError from '../../errors/APIError';

// import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(route, options) {
    return this.performRequest(route, {
      method: 'GET',
      headers: options?.headers,
    });
  }

  post(route, options) {
    return this.performRequest(route, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }

  put(route, options) {
    return this.performRequest(route, {
      method: 'PUT',
      body: options?.body,
      headers: options?.headers,
    });
  }

  delete(route, options) {
    return this.performRequest(route, {
      method: 'DELETE',
      headers: options?.headers,
    });
  }

  async performRequest(route, options) {
    // await delay(2000);

    const headers = new Headers();

    // Avoids preflight for GET requests
    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value);
      });
    }

    const response = await fetch(`${this.baseUrl}${route}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
