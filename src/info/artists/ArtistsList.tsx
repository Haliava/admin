import * as React from 'react';
import { List, Datagrid, TextField, ListProps, ImageField, EditButton, NumberField } from 'react-admin';

export const ArtistsList = (props: ListProps) => (
  <List {...props} filter={{ artist_id: 0 }}>
    <Datagrid rowClick="edit">
      <NumberField source="artist_id" />
      <TextField source="name" />
      <TextField source="description" />
      <ImageField source="img_path" src='img_path' />
      <EditButton />
    </Datagrid>
  </List>
);
