import * as React from 'react';
import { List, Datagrid, TextField, BooleanField, ShowButton, ArrayField, ChipField, WithListContext, EditButton } from 'react-admin';

export const TicketList: React.FC = (props) => (
    <List {...props}>
        <Datagrid rowClick="show" sx={{ '& column-activation_status': {width: '50px'} }} bulkActionButtons={false}>
            <TextField source="id" />
                <TextField source="client_chat_id" />
                <BooleanField source="activation_status" />
                <ArrayField source="friends">
                <Datagrid bulkActionButtons={false}>
                    <TextField source="name" />
                    <TextField source="username" />
                </Datagrid>
                </ArrayField>
            <TextField source="event_id" />
            <EditButton />
        </Datagrid>
    </List>
);