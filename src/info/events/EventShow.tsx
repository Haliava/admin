import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, ShowProps } from 'react-admin';

export const EventShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="event_id" label="ID события" />
      <TextField source="short_name" label="Название ивента" />
      <TextField source="description" label="Описание ивента" />
      <TextField source="img_path" label="Путь до превью-картинки" />
      <DateField source="datetime" label="Дата и время начала" />
      <TextField source="bar_id" label="ID бара" />
      <TextField source="place" label="Место" />
      <TextField source="age_restriction" label="Возрастное ограничение" />
      <TextField source="event_type" label="Тип Ивента" />
      <TextField source="price" label="Цена" />
    </SimpleShowLayout>
  </Show>
);

export default EventShow;
