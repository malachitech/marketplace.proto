import React from 'react';
import Header from './Header/Header';

function Layout(props) {
  return (
    <div>
      <Header />

      <div style={{padding: "40px 120px"}}>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;