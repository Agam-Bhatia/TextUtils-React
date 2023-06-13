import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    <> {/* since 'props.alert &&' is used for evaluating so it will be considered in js, so to let this code evaluate in jsx we need to wrap it in {}. In earlier versions you could do this without using {}. */}
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </>
  )
}

export default Alert
