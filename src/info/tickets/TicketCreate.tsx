import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, CreateProps, BooleanInput, ArrayInput, SimpleFormIterator } from 'react-admin';

export const TicketCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="client_chat_id" label="Client Chat ID" />
      <TextInput source="qr_path" label="QR Code Path" />
      <BooleanInput source="activation_status" label="Is Activated" />
      <ArrayInput source="friends">
          <SimpleFormIterator inline>
              <TextInput source="name" />
              <TextInput source="username" />
          </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="hashcode" label="Hashcode" />
      <NumberInput source="event_id" label="Event ID" />
    </SimpleForm>
  </Create>
);
