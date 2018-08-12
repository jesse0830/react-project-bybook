import React,{Component} from 'react';
import List from './List';
class KanbanBoard extends Component{
    render(){
        return(
            <div className="app">
                <List id='todo' title='To do' cards={
                    /**
                     * cards的值为cardslist json数据中status为todo的数组
                     * javascript filter函数表示数组执行方法之后返回的一个新数组，
                     * 因此返回status为'todo'的数组，长度当然只有一个
                     */
                    this.props.cards.filter((card) =>card.status === "todo")
                }/>
                <List id='in-progress' title='In Progress' cards={
                    this.props.cards.filter((card) =>card.status === "in-progress")
                }/>
                <List id='done' title='Done' cards={
                    this.props.cards.filter((card) =>card.status === "done")
                }/>
            </div>
        );
    }
}
export default KanbanBoard;