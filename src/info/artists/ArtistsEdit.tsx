import React from 'react';
import { Edit, SimpleForm, TextInput, DateTimeInput, NumberInput, EditProps } from 'react-admin';

export const ArtistsEdit = (props: EditProps) => (
  <Edit {...props} >
    <SimpleForm>
      <NumberInput source="artist_id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="img_path" />
    </SimpleForm>
  </Edit>
);
