import React from 'react';
import ListCategory from './list-category';
import ListItem from './list-item';

const List = React.createClass({
    getDefaultProps() {
        return {
            list: [{
                key: 1
            }, {
                key: 2
            }, {
                key: 3
            }]
        };
    },

    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <div className="checkbox-list">
                <ListCategory></ListCategory>
                {
                    this.props.list.map((node, i) => {
                        return (<ListItem key={i}></ListItem>);
                    })
                }
            </div>
        )
    }
});


export default List;