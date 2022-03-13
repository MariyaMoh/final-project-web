import React from 'react';

import TodoForm from './TodoForm';

export default { component: TodoForm, title: 'TodoForm' };

const Template = (args) => <TodoForm {...args} />;
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0)
  }
};
