import React from 'React';

const ListItem = React.createClass({
    getDefaultProps() {
        return {

        };
    },

    getInitialState() {
        return {

        };
    },

    render() {
        return (
            <div>
                <label>
                    <input type="checkbox"/>
                    <span>Mac开发工程师</span>
                </label>
                <div className="badge"></div>
            </div>
        )
    }
});

export default ListItem;