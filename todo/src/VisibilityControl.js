import React from 'react';

function VisibilityControl({description, isChecked, callback})
{
    return (
   <div className="form-check">
    <input
        className="form-check-input"
        type="checkbox"
        checked= { isChecked }
        onChange={ (e) => callback(e.target.checked) } />
 <label
                className="form-check-label">
                    Show { description }
                </label>
        </div>
    );
}

export default VisibilityControl;