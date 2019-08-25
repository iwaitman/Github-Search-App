import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role='alert'
      >
        <strong>{alert.msg}</strong>
        <button
          type='button'
          class='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    )
  );
};

export default Alert;
