import { DataProvider } from 'react-admin';

const apiUrl = 'http://158.160.97.73:8000/api/event/${event_id}'; // old API

const httpClient = async (url: string, options: any = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  } else {
      options.headers = new Headers(options.headers);
  }
  const response = await fetch(url, options);
  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...params.filter,
            _sort: field,
            _order: order,
            _start: (page - 1) * perPage,
            _end: page * perPage,
        };
        const url = `${apiUrl}/${resource}?${new URLSearchParams(query)}`;
        const headers = { Accept: 'application/json' };
        const response = await httpClient(url, { headers });
        return {
            data: response,
            total: parseInt(response.headers.get('content-range')!.split('/').pop(), 10),
        };
    },

    getOne: async (resource, params) => {
        if (resource !== 'events') {
            throw new Error(`Unsupported resource: ${resource}`);
        }

        const { id } = params;

        const url = `${apiUrl}/api/event/${id}`;

        const response = await httpClient(url);

        return {
            data: response,
        };
    },

    getMany: async (resource, params) => {
        const url = `${apiUrl}/${resource}?id=${params.ids}`;
        return { data: await httpClient(url) };
    },

    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...params.filter,
            [params.target]: params.id,
            _sort: field,
            _order: order,
            _start: (page - 1) * perPage,
            _end: page * perPage,
        };
        const url = `${apiUrl}/${resource}?${new URLSearchParams(query)}`;
        const headers = { Accept: 'application/json' };
        const response = await httpClient(url, { headers });
        return {
            data: response,
            total: parseInt(response.headers.get('content-range')!.split('/').pop(), 10),
        };
    },

    create: async (resource, params) => {
        const url = `${apiUrl}/${resource}`;
        const options = {
            method: 'POST',
            body: JSON.stringify(params.data),
            headers: { 'Content-Type': 'application/json' },
        };
        return { data: await httpClient(url, options) };
    },

    update: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const options = {
            method: 'PUT',
            body: JSON.stringify(params.data),
            headers: { 'Content-Type': 'application/json' },
        };
        return { data: await httpClient(url, options) };
    },

    updateMany: async (resource, params) => {
        const url = `${apiUrl}/${resource}`;
        const options = {
            method: 'PUT',
            body: JSON.stringify(params.data),
            headers: { 'Content-Type': 'application/json' },
        };
        return { data: await httpClient(url, options) };
    },

    delete: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const options = {
            method: 'DELETE',
        };
        return { data: await httpClient(url, options) };
    },

    deleteMany: async (resource, params) => {
        const url = `${apiUrl}/${resource}`;
        const options = {
            method: 'DELETE',
            body: JSON.stringify(params.ids),
            headers: { 'Content-Type': 'application/json' },
        };
        return { data: await httpClient(url, options) };
    },
};

export default dataProvider;
