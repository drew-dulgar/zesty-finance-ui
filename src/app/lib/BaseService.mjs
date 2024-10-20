
class BaseService {
  baseUrl;
  baseEndpoint;

  constructor(baseEndpoint = '/', baseUrl = import.meta.env.APP_API_URL) {
    this.baseUrl = baseUrl;
    this.baseEndpoint = baseEndpoint;
  }

  buildUrl(endpoint, queryParams = {}) {
    let url = `${this.baseUrl}${(this.baseEndpoint + '/' + endpoint).replace('//', '/')}`;
      
    if (url.charAt(url.length - 1) === '/') {
      url = url.slice(0, -1);
    }
  
    if (Object.keys(queryParams).length > 0) {
      Object.keys(queryParams).forEach((key) => {
        if (typeof queryParams[key] === 'undefined') {
          delete queryParams[key];
        }
      });

      url += `?${new URLSearchParams(queryParams)}`;
    }
    
    return url;
  }

  async doFetch(url, method = 'GET', {
    body = {},
    headers = {},
  } = {}) {
    const defaultHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const options = {
      credentials: 'include',
      method,
      headers: {
        ...defaultHeaders,
        ...headers
      }
    };

    if (Object.keys(body).length > 0) {
      options.body = JSON.stringify(body);
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  }

  GET(endpoint, queryParams = {}) {
    const url = this.buildUrl(endpoint, queryParams);

    return this.doFetch(url, 'GET');
  }

  POST(endpoint, body = {}) {
    const url = this.buildUrl(endpoint);

    return this.doFetch(url, 'POST', { body });
  }

  PUT(endpoint, body = {}) {
    const url = this.buildUrl(endpoint);

    return this.doFetch(url, 'PUT', { body });
  }

  PATCH(endpoint, body = {}) {
    const url = this.buildUrl(endpoint);

    return this.doFetch(url, 'PATCH', { body });
  }

  DELETE(endpoint, body = {}) {
    const url = this.buildUrl(endpoint);

    return this.doFetch(url, 'DELETE', { body });
  }
}

export default BaseService;