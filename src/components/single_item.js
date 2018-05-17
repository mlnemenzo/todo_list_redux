import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import { connect } from 'react-redux';
import { getSingleItem, deleteSingleItem, toggleItem } from '../actions'; 

class SingleItem extends Component {

    componentDidMount() {
        

        this.props.getSingleItem(this.props.match.params.id);

    }

    async deleteSingleItem() {
            
        await this.props.deleteSingleItem(this.props.match.params.id);

        this.props.history.push('/');
    }

    async handleToggleItem() {
        
        await this.props.toggleItem(this.props.match.params.id);
    }
    
    timeCreated(created) {
                const time = new Time(this.props.id.created);

    }

    render() {
        console.log("Single Props: ", this.props);
        const { title, details, completed, complete, created } = this.props.item;


        return (
            <div>
                <h1 className = "center">To Do Item</h1>
                <div className= "row center">
                    <Link to ="/" className ="btn blue-grey">View Full List</Link>
                    
                </div>
                <div className = "row center">  
                    <h4>{title}</h4>
                    <p>{details}</p>
                    <button onClick = {this.deleteSingleItem.bind(this)}>Delete Item</button>
                    <button onClick = {this.handleToggleItem.bind(this)}>Complete Item</button>
                    <p>{completed}</p>
                    <p>{`Add Completed: ${complete}`}</p>
                    <p>{created}</p>
                </div>
            </div>
        )
    }
}

// display time completed, time created, and if completed   const time = new Date(time generated); 
// add 2 buttons, one toggles whethere its completed or not, (change complete to "true")
//change text on button whether its completed or not (extra)
//2nd button: delete button it should redirect you back in the list, same as in the add item, which it directs you back to the list.

function mapStateToProps(state) {
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getSingleItem, deleteSingleItem, toggleItem})(SingleItem);