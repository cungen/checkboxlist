import React from 'react';

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
        const styles = {
            root: {
                color: 'white',
                height: '40px',
                lineHeight: '40px',
                fontWeight: 'bold'
            },
            toggle: {
                marginLeft: '15px'
            },
            badge: {
                display: 'inline-block',
                float: 'right',
                padding: '0 12px',
                marginTop: '4px',
                color: '#b2bdc4',
                lineHeight: '32px',
                borderRadius: '24px',
                backgroundColor: '#596a76'
            }
        };
        return (
            <div style={styles.root}>
                <label>
                    <input type="checkbox" style={styles.checkbox}/>
                    <span className="symbol"></span>
                    <span>工程研发部门</span>
                    <span style={styles.toggle}>﹀</span>
                </label>
                <span style={styles.badge}>120</span>
            </div>
        )
    }
});

export default ListCategory;