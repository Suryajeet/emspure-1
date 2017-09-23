import React, { Component } from 'react';
import { InputText,DropDown,StandardButton } from './Forms';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state.formData = {};
  }

  updateForm(key) {
    this.state.formData[key] = value;
  }

  render() {
    const config = [
      {
        type: 'text',
        label: 'Username/Email',
        key: 'username',
        value: '',
        display: 'block',
        errorMessage: 'Please enter your user name'
      },
      {
        type: 'password',
        label: 'Password',
        key: 'password',
        value: '',
        display: 'block',
        errorMessage: 'Please enter your password'
      },
      {
        type: 'button',
        label: 'Sign In',
        value: '',
        display: 'block',
        onClick: () => {}
      }
    ]
    return (
      <div>
        {
          config.map(data => {
            let comp = null;
            if(data.type==='text' || data.type==='password') {
              comp = <InputText key={data.key} {...data} onChange={this.updateForm(data.key)} />;
            } else if(data.type==='select') {
              comp = <DropDown key={data.key} {...data} />;
            } else if(data.type==='button') {
              comp = <StandardButton key={data.label} {...data} />;
            }
            return comp;
          })
        }
      </div>
    );
  }
}

export default Form;
