import React from 'react';

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
        const styles = {
            root: {
                color: '#d8ddda',
                height: '40px',
                lineHeight: '40px',
                paddingLeft: '45px'
            },
            badge: {
                display: 'inline-block',
                float: 'right',
                padding: '0 12px',
                color: '#b2bdc4'
            }
        };
        return (
            <div style={styles.root}>
                <label>
                    <input type="checkbox"/>
                    <span className="symbol"></span>
                    <span>Mac开发工程师</span>
                </label>
                <span style={styles.badge}>20</span>
            </div>
        )
    }
});

export default ListItem;