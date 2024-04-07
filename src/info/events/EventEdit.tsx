import React from 'react';
import { Edit, SimpleForm, TextInput, DateTimeInput, NumberInput, EditProps, SelectInput } from 'react-admin';

export const EventEdit = (props: EditProps) => (
  <Edit {...props} >
    <SimpleForm>
      <TextInput source="short_name" label="Название" />
      <TextInput source="description" label="Описание" />
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
  </Edit>
);
