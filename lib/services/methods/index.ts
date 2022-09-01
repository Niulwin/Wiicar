import { AxiosClient } from '../config';
import { Response } from './types';

const Methods = class<T = any> {
  public service: string;

  constructor(service: string) {
    this.service = service;
    this.get = this.get.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  async get(id?: number | string) {
    if (!id) return;
    const res = await AxiosClient.get(`${this.service}/${id}`);
    return res.data;
  }

  async findAll(params?: any) {
    const res = await AxiosClient.get<Response<T[]>>(this.service, { params });
    return res.data;
  }

  async create(data: any, params: any) {
    const res = await AxiosClient.post<Response<T[]>>(this.service, data, {
      params
    });
    return res.data;
  }
  async update(id: number | string, data?: any, params?: any) {
    const res = await AxiosClient.put<Response<T>>(
      `${this.service}/${id}`,
      data,
      { params: { ...params } }
    );
    return res.data;
  }

  async remove(id: number | string) {
    const res = await AxiosClient.delete<Response<T>>(`${this.service}/${id}`, {
      params: { id }
    });
    return res.data;
  }
};

export default Methods;
