import React, { Component } from 'react';

function TodoRow({item, toggle})
{

   const onToggle = () => {
      toggle(item);
   };

    return (
   <tr>
        <td>
            { item.action }
        </td>
        <td>
            <input
            type="checkbox"
            checked={ item.done }
            onChange={ onToggle}
            />
        </td>
   </tr>
    );
}

export default TodoRow;