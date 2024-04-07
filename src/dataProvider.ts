// dataProvider.ts
import { fetchUtils, DataProvider, Identifier, GetManyReferenceParams, GetManyReferenceResult, RaRecord } from 'react-admin';
import { apiUrl, exampleUUID, Resource, resourceIdFieldMap, resourcesCreateUtlMap } from './shared/constants';

const httpClient = fetchUtils.fetchJson;

interface MyRecord {
  id: Identifier;
}

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const barId = params.filter.bar_id;
    const clientsChatId = params.filter.client_chat_id;
    console.log(resource, params)
    const testId = params.filter.id;
    let url = '';
    switch (resource) {
      case 'event':
        url = `${apiUrl}/${barId}/${resource}s/`;
        const { json } = await httpClient(url);
        return ({
          data: json.map((record: { event_id: number; }) => ({ ...record, id: record.event_id })),
          total: json.length,
        });
      case 'ticket':
        url = `${apiUrl}/${resource}s/${exampleUUID}`;
        const { json: json_1 } = await httpClient(url);
        console.log(json_1);
        return ({
          data: json_1,
          total: json_1.length,
        });
      case 'artist':
        url = `${apiUrl}/${resource}s/get_all`;
        const { json: json_2 } = await httpClient(url);
        return ({
          data: json_2.map((record_2: { artist_id: number; }) => ({ ...record_2, id: record_2.artist_id })),
          total: json_2.length,
        });
      case 'test':
        url = `${apiUrl}/test/results`;
        const { json: json_3 } = await httpClient(url);
        return ({
          data: json_3.map((record_3: { id: number; }) => ({ ...record_3, id: record_3.id })),
          total: json_3.length,
        });
      default:
        return Promise.reject(new Error(`Unknown resource: ${resource}`)); 
    }
  },

  getOne: async (resource, params) => {
    const idField = resourceIdFieldMap.get(resource as Resource);
    let url = '';
    if (resource === 'test') {
      let resourceId = params.id;
      url = `${apiUrl}/${resource}/result_by_chat_id/${resourceId}`;
    } else {
      let resourceId = params.id;
      url = `${apiUrl}/${resource}/${resourceId}`;
    }
    console.log(`Making a GET request to: ${url}`);

    const { json } = await httpClient(url);
    console.log('Response data:', json);

    if (json.message && json.message === "Resource doesn't exist") {
      throw new Error(json.message);
    }

    return {
      data: { ...json, id: json[idField!] },
    };
  },

  getMany: async (resource, params) => {
    const barId = resource;
    const url = `${apiUrl}/${barId}/events/`;
    const { json } = await httpClient(url);
    console.log(params.ids);
    return ({
      data: json.filter((record: { event_id: number; }) => params.ids.includes(record.event_id)),
    });
  },

  update: async (resource, params) => {
    const idField = resourceIdFieldMap.get(resource as Resource);
    const url = `${apiUrl}/${resource}/update`;

    console.log(url, params);
    const options = {
      method: 'PATCH',
      body: JSON.stringify({ ...params.data, [idField!]: params.data.id }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    };
    console.log(options.body);

    const { json } = await httpClient(url, options);
    if (!json[idField!]) {
      json[idField!] = params.data.id;
    }

    return { data: { ...json, id: json[idField!] } };
  },

  updateMany: async (resource, params) => {
    const idField = resourceIdFieldMap.get(resource as Resource);
    const url = `${apiUrl}/${resource}/update/`;
    console.log(url, "<-----");

    const promises = params.ids.map(id => {
      const options = {
        method: 'PATCH',
        body: JSON.stringify({ ...params.data, [idField!]: id }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      };
      return httpClient(url, options);
    });

    const responses = await Promise.all(promises);
    return {
      data: responses.map(({ json }) => ({ ...json, id: json[idField!] })),
    };
  },

  create: async (resource, params) => {
    if (params.data.datetime instanceof Date) {
      params.data.datetime = params.data.datetime.toISOString();
    }

    if (typeof params.data.datetime === 'string') {
      params.data.datetime = params.data.datetime.replace('Z', '');
    }

    const url = `${apiUrl}/${resource}/${resourcesCreateUtlMap.get(resource as Resource)}/`;
    console.log(`Making a POST request to: ${url}`);

    const requestBody = JSON.stringify(params.data);
    console.log('Request body:', requestBody);

    const { json } = await httpClient(url, {
      method: 'POST',
      body: requestBody,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    return { data: { ...json, id: json.event_id } };
  },

  delete: (resource, params) => {
    let url = '';

    switch (resource) {
      case 'event':
        url = `${apiUrl}/${resource}/delete?event_id=${params.id}`;
        break;
      case 'ticket':
        url = `${apiUrl}/${resource}/delete/${params.id}`;
    }
    console.log(`Отправляется DELETE запрос на: ${url}`);
    return httpClient(url, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json }));
  },

  deleteMany: (resource, params) => {
    const promises = params.ids.map(id => {
      const url = `${apiUrl}/${resource}/delete?event_id=${id}`;
      return httpClient(url, {
        method: 'DELETE',
      });
    });
    return Promise.all(promises).then(responses => ({
      data: responses.map(({ json }) => json.id) 
    }));
  },

  getActiveQuizzesCount: async () => {
    const url = `${apiUrl}/test/results/`;
    const { json } = await httpClient(url);
    return ({
      data: json.length,
    });
  },
  getManyReference: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error('Function not implemented.');
  }
};


export default dataProvider;