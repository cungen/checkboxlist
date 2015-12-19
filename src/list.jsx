import React from 'react';
import ListCategory from './list-category';
import ListItem from './list-item';

const List = React.createClass({
    getDefaultProps() {
        return {

        };
    },

    getInitialState() {
        return {
            list: []
        }
    },

    render() {
        return (
            <div>
                <ListCategory></ListCategory>
                {
                    list.map((node, i) => {
                        <ListItem></ListItem>
                    })
                }
            </div>
        )
    }
});


export default List;