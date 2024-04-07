import React from 'react';
import { Create, SimpleForm, TextInput, DateTimeInput, NumberInput, CreateProps, SelectInput } from 'react-admin';

export const EventCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="short_name" label="Название ивента" />
      <TextInput source="description" label="Описание ивента" />
      <TextInput source="img_path" label="Путь до картинки" />
      <DateTimeInput source="datetime" label="Дата и время начала" />
      <NumberInput source="bar_id" label="ID бара" />
      <TextInput source="place" label="Место" />
      <NumberInput source="age_restriction" label="Возрастное ограничение" />
      <SelectInput source="event_type" label="Тип Ивента" choices={[
        {id: 'free', name: 'бесплатная вечеринка'},
        {id: 'event', name: 'ивент'},
        {id: 'deposit', name: 'вечеринка с депозитом'},
      ]} />
      <NumberInput source="price" label="Цена" />
    </SimpleForm>
  </Create>
);
