import * as React from 'react';
import { Show, SimpleShowLayout, TextField, BooleanField, ArrayField, Datagrid } from 'react-admin';

export const TicketShow: React.FC = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="client_chat_id" />
            <TextField source="qr_path" />
            <BooleanField source="activation_status" />
            <ArrayField source="friends">
                <Datagrid>
                    <TextField source="name" />
                    <TextField source="username" />
                </Datagrid>
            </ArrayField>
            <TextField source="hashcode" />
            <TextField source="event_id" />
        </SimpleShowLayout>
    </Show>
);