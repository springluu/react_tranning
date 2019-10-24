import React from 'react';
import ReactDOM from 'react-dom';
import AppColor from './AppColor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppColor />, div);
  ReactDOM.unmountComponentAtNode(div);
});
