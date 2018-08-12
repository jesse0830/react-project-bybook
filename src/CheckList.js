import React,{Component} from 'react';
class CheckList extends Component{
    render(){
        console.log("this.props.tasks:::" + this.props.tasks);
        let tasks =this.props.tasks == null ? {} : this.props.tasks.map((tasks) => (
            <li className="checklist_task">
                <input type="checkbox" defaultChecked={tasks.done}/>
                <a href="#" className="checklist_task--remove"/>
            </li>
        ));
        console.log("tasks:::" + tasks);
        // let tasks = {};
        return(
            <div className="checklist">
                <ul>{tasks }</ul>
            </div>
        );
    }
}
export default CheckList;