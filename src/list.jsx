import React from 'react';
import ListCategory from './list-category';
import ListItem from './list-item';

const List = React.createClass({
    getDefaultProps() {
        return {
            checked: false,
            children: []
        };
    },

    getInitialState() {
        return {
        };
    },

    componentWillReceiveProps() {
    },

    render() {
        const {
            name,
            total,
            children,
            checked,
            onChildCheck,
            onCateCheck
        } = this.props.data;
        return (
            <div className="checkbox-list">
                <ListCategory
                    name={name}
                    total={total}
                    checked={checked}
                    onCateCheck={this._handleCateCheck} />
                {
                    children.map((node, i) => {
                        return (
                            <ListItem
                                name={node.name}
                                number={node.number}
                                order={i}
                                checked={node.checked}
                                onToggleCheck={this._handleToggleCheck}
                                key={i}></ListItem>);
                    })
                }
            </div>
        )
    },

    /**
     * 单个元素的选中事件, 通知上层更新状态
     * @param index 子项位置
     * @param isChecked 子项的选中状态
     */
    _handleToggleCheck(index, isChecked) {
        this.props.onChildCheck(this, index, isChecked);
    },

    /**
     * Toggle整个List的响应事件
     * @param isChecked List选中状态
     */
    _handleCateCheck(isChecked) {
        this.props.onCateCheck(this, isChecked);
    }

});


export default List;