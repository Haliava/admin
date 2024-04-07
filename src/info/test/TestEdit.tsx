import React from 'react';
import { Edit, SimpleForm, TextInput, DateTimeInput, NumberInput, EditProps, BooleanInput } from 'react-admin';

export const TestEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id" label="id" />
      <NumberInput source="chat_id" label="chat_id" />
      <NumberInput source="test_id" label="test_id" />
      <NumberInput source="correct_cnt" label="correct_cnt" />
      <NumberInput source="total_cnt" label="total_cnt" />
      <BooleanInput source="get_reward" label="get_reward" />
      <NumberInput source="promo" label="promo" />
      <BooleanInput source="is_first_try" label="is_first_try" />
    </SimpleForm>
  </Edit>
);
