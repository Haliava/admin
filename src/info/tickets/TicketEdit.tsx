import React from 'react';
import { Edit, SimpleForm, TextInput, EditProps, BooleanInput, ArrayInput, Datagrid, SimpleFormIterator } from 'react-admin';

export const TicketEdit = (props: EditProps) => (
  <Edit {...props} >
    <SimpleForm>
      <TextInput source="client_chat_id" />
      <TextInput source="qr_path" />
      <BooleanInput source="activation_status" />
      <ArrayInput source="friends">
          <SimpleFormIterator inline>
              <TextInput source="name" />
              <TextInput source="username" />
          </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="hashcode" />
      <TextInput source="event_id" />
    </SimpleForm>
  </Edit>
);
