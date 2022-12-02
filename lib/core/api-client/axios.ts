import Axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * @description AxiosClient with singleton
 * @class AxiosClient
 */
export class AxiosClient {
  private static instance: AxiosClient;
  private axiosClient: AxiosInstance;
  private authorization: string;
  private urlBase: string;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor(API_URL: string, token: string) {
    this.authorization = token;
    this.urlBase = API_URL;
    this.axiosClient = Axios.create({
      baseURL: API_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        ...(this.authorization
          ? { Authorization: `Bearer ${this.authorization}` }
          : {})
      }
    });
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(urlBase?: string, token?: string): AxiosClient {
    if (!AxiosClient.instance) {
      AxiosClient.instance = new AxiosClient(urlBase || '', token || '');
    }

    return AxiosClient.instance;
  }

  /**
   * Method setter headers
   */
  public setAuthorization(token: string): void {
    AxiosClient.instance = new AxiosClient(this.urlBase, token);
  }

  /**
   * Method Get
   */
  public async get<T, Q>({
    path,
    params,
    query
  }: {
    path: string;
    params?: string[];
    query?: Q;
  }): Promise<
    Partial<AxiosResponse<T, any>> & { error?: boolean; message?: string }
  > {
    // Query query
    const p = params ? `/${params?.join('/')}` : '';
    return this.axiosClient.get(`${path}${p}`, { params: query });
  }

  /**
   * Method Post
   */
  public async httpMethod<T, R, Q>({
    path,
    args,
    query,
    params,
    method,
    formData
  }: {
    path: string;
    args?: T;
    query?: Q;
    params?: string[];
    method?: 'PUT' | 'POST' | 'DELETE' | 'PATCH';
    formData?: boolean;
  }): Promise<
    Partial<AxiosResponse<R, any>> & { error?: boolean; message?: string }
  > {
    // Query query
    const p = params ? `/${params?.join('/')}` : '';

    // PATCH METHOD
    if (method === 'PATCH')
      return this.axiosClient.patch(
        `${path}${p}`,
        formData ? args : JSON.stringify(args),
        { params: query }
      );
    // DELETE METHOD
    else if (method === 'DELETE') return this.axiosClient.delete(`${path}${p}`);
    // PUT METHOD
    else if (method === 'PUT') return this.axiosClient.delete(`${path}${p}`);

    // POST METHOD
    return this.axiosClient.post(
      `${path}${p}`,
      formData ? args : JSON.stringify(args),
      { params: query }
    );
  }
}
