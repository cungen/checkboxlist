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
        const {
            name,
            total,
            checked,
            onCateCheck
        } = this.props;

        const styles = {
            root: {
                position: 'relative',
                color: 'white',
                height: '40px',
                lineHeight: '40px',
                paddingRight: '60px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
            },
            toggle: {
                marginLeft: '15px'
            },
            badge: {
                position: 'absolute',
                right: '0',
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
                    <input
                        type="checkbox"
                        style={styles.checkbox}
                        checked={checked}
                        onChange={this._handleChange}
                        ref="isCateCheck" />
                    <span className="symbol"></span>
                    <span>{name}</span>
                    <span style={styles.toggle}>﹀</span>
                </label>
                <span style={styles.badge}>{total}</span>
            </div>
        )
    },

    _handleChange() {
        this.props.onCateCheck(this.refs.isCateCheck.checked);
    }
});

export default ListCategory;