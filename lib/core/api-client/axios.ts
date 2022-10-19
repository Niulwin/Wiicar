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
  public async get<T>(
    path: string,
    args?: any
  ): Promise<
    Partial<AxiosResponse<T, any>> & { error?: boolean; message?: string }
  > {
    return this.axiosClient.get(path, { params: args });
  }

  /**
   * Method Post
   */
  public async post<T, R>({
    path,
    args,
    formData
  }: {
    path: string;
    args?: T;
    formData?: boolean;
  }): Promise<
    Partial<AxiosResponse<R, any>> & { error?: boolean; message?: string }
  > {
    return this.axiosClient.post(path, formData ? args : JSON.stringify(args));
  }
}
