import React,{Component} from 'react';
class ListItem extends Component{
    render(){
        return(
            <li>
                {this.props.quantity} * {this.props.name}
            </li>
        );
    }
}
export default ListItem;