export async function http(path, config) {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  config.headers = { "Content-Type": "application/json" };

  return fetch(baseUrl + path, config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject();
    })
    .catch((error) => error.message);
}

export class Api {
  static async get({ path, config }) {
    const initConfig = { method: "get", ...config };
    return http(path, initConfig);
  }

  static async post({ path, body, config }) {
    const initConfig = {
      method: "post",
      body: JSON.stringify(body),
      ...config,
    };
    return http(path, initConfig);
  }

  static async put({ path, body, config }) {
    const initConfig = {
      method: "put",
      body: JSON.stringify(body),
      ...config,
    };
    return http(path, initConfig);
  }

  static async delete({ path, config }) {
    const initConfig = { method: "delete", ...config };
    return http(path, initConfig);
  }
}
