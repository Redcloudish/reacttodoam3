import React, { Component } from 'react';

function TodoBanner({userName, todoItems})
{
    return (
    <h4 className="bg-primary text-white text-center p-2">
        {userName }'s to DO List
        ({ todoItems.filter(t => !t.don).length } items to do)
    </h4>
    );
}

export default TodoBanner;