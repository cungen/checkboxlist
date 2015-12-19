import React from 'React';

const ListCategory = React.createClass({
    getDefaultProps() {
        return {

        };
    },

    getInitialState() {
        return {

        };
    },

    render() {
        // U+2303  ︿ 〉 UP ARROWHEAD
        return (
            <div>
                <label>
                    <input type="checkbox"/>
                    <span>Mac开发工程师</span>
                    <span className="toggle-display">﹀</span>
                </label>
                <div className="badge"></div>
            </div>
        )
    }
});

export default ListCategory;