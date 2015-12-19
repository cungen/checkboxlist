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
        const {
            name,
            number,
            checked,
            order,
            onToggleCheck
        } = this.props;

        const styles = {
            root: {
                position: 'relative',
                color: '#d8ddda',
                height: '40px',
                lineHeight: '40px',
                paddingLeft: '45px',
                paddingRight: '60px',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
            },
            badge: {
                position: 'absolute',
                right: '0',
                display: 'inline-block',
                padding: '0 12px',
                color: '#b2bdc4'
            }
        };
        return (
            <div style={styles.root}>
                <label>
                    <input
                        type="checkbox"
                        ref="isItemCheck"
                        checked={checked}
                        onChange={this._handleChange} />

                    <span className="symbol"></span>
                    <span>{name}</span>
                </label>
                <span style={styles.badge}>{number}</span>
            </div>
        );
    },

    _handleChange() {
        this.props.onToggleCheck(this.props.order, this.refs.isItemCheck.checked);
    }
});

export default ListItem;