import React from 'react';
import ReactDOM from 'react-dom';

// HOC (Higher Order Component)

const Info = props => {
  return <div>This is a info component: {props.info}</div>;
};

const withAdminWarning = WrappedComponent => {
  // This return is HOC
  return props => {
    return (
      <div>
        {props.isAdmin && <p>This is a admin message.</p>}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Not a valid user. </p>}
      </div>
    );
  }
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info='This is info...' />,
//   document.getElementById('app')
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info='This is info...' />,
  document.getElementById('app')
);
