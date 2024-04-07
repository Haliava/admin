import * as React from 'react';
import { List, Datagrid, TextField, ListProps, ImageField, EditButton, NumberField, BooleanField } from 'react-admin';

export const TestList = (props: ListProps) => (
  <List {...props} filter={{ id: 0, chat_id: 0 }}>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <NumberField source="chat_id" />
      <NumberField source="test_id" />
      <NumberField source="correct_cnt" />
      <NumberField source="total_cnt" />
      <BooleanField source="get_reward" />
      <NumberField source="promo" />
      <BooleanField source="is_first_try" />
      <EditButton />
    </Datagrid>
  </List>
);
