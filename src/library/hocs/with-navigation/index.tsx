import React from 'react';
import Header from '../../components/header';

const withNavigation = (WrappedComponent: React.ComponentType) => {
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
