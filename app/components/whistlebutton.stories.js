import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
    title: 'whistle button',
    component: 'whistlebutton',
    excludeStories: /.*Data$/,
  };


  const Template = args => ({
    template: hbs`<Whistlebutton @name ={{this.button.name}} @size={{this.button.size}} @info={{this.button.info}} @sucess={{this.button.sucess}} @warning={{this.button.warning}} @danger={{this.button.danger}} @pill={{this.button.pill}}
    />`,
    context: args,
  });

  export const Default = Template.bind({});
  Default.args = {
    button: {
      
     name: "default",
      size: 'w-20',
     
    },
  };

  export const Info = Template.bind({});
Info.args = {
  button: {
    name: "Info",
    info: true,
    size: "w-20",
  },
};


export const Sucess = Template.bind({});
Sucess.args = {
  button: {
    name: "sucess",
    sucess: true,
    size: "w-20",
  },
};


export const Warning = Template.bind({});
Warning.args = {
  button: {
    name: "warning",
    warning: true,
    size: "w-20",
  },
};

export const Danger = Template.bind({});
Danger.args = {
  button: {
    name: "danger",
    danger: true,
    size: "w-20",
  },
};

export const Pill = Template.bind({});
Pill.args = {
  button: {
    name: "pill",
    pill: true,
    size: "w-20",
  },
};

