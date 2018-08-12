import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KanbanBoard from './KanbanBoard'
import registerServiceWorker from './registerServiceWorker';
let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        status:"in-progress",
        tasks:[]
    },
    {
        id:1,
        name:"Code along with the samples in the book",
        status: "todo",
        tasks:[
            {
                id:1,
                name:"ContactList Example",
                done:true
            },
            {
                id:2,
                name:"Kanban Example",
                done:false
            },
            {
                id:3,
                name:"My own experiments",
                done:false
            }
        ]
    }
];
ReactDOM.render(<KanbanBoard cards={cardsList}/>, document.getElementById('root'));
registerServiceWorker();
