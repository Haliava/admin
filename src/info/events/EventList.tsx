import * as React from 'react';
import { List, Datagrid, TextField, DateField, ListProps, ImageField, EditButton } from 'react-admin';

export const EventList = (props: ListProps) => (
  <List {...props} filter={{ bar_id: 1 }} >
    <Datagrid rowClick="show">
      <TextField source="event_id" />
      <TextField source="short_name" />
      <TextField source="description" />
      {/* <ImageField 
        source="img_path"   
        src='img_path' 
        sx={{ "& .RaImageField": { width: "auto" } }} 
      /> */}
      <DateField source="datetime" />
      <TextField source="bar_id" />
      <TextField source="place" />
      <TextField source="age_restriction" />
      <TextField source="event_type" />
      <TextField source="price" />
      <EditButton />
    </Datagrid>
  </List>
);
