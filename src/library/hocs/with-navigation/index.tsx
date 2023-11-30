import React, { ComponentType } from 'react';
import Header from '../../components/header';

const withNavigation = (WrappedComponent: ComponentType) => {
  return (
    function WithModalContainer() {
      return (
        <>
          <Header />
          <WrappedComponent />
        </>
      );
    }
  )
};

export default withNavigation;
