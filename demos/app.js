import React from 'react';
import ReactDOM from 'react-dom';
import List from '../src/list';

let listArray = [{
        name: '工程研发部门',
        total: 120,
        children: [{
            name: 'Mac 开发工程师',
            number: 9
        }, {
            name: 'IOS App 测试工程师',
            number: 17
        }, {
            name: 'Android 远程控制工程师',
            number: 61
        }, {
            name: 'Web 前端工程师',
            number: 31
        }, {
            name: 'Android 多媒体软件开发工程师',
            number: 2
        }]
    }, {
        name: '产品设计部门',
        total: 136,
        children: [{
            name: '网页设计师',
            number: 47
        }, {
            name: 'ID/工业设计师',
            number: 39
        }, {
            name: '视觉设计师/GUI界面设计师',
            number: 42
        }, {
            name: '平面设计师',
            number: 8
        }]
    }];

let App = React.createClass({
    getInitialState() {
        return {
            listArray: listArray
        };
    },

    render() {
        const styles = {
            aside: {
                width: '400px',
                height: '100%',
                padding: '50px 40px',
                backgroundColor: '#687c8a',
                overflow: 'hidden'
            },
            title: {
                display: 'inline-block',
                fontSize: '26px',
                color: '#cbd2d7',
                margin: '0 0 15px 0'
            },
            clear: {
                float: 'right',
                fontSize: '16px',
                color: 'white'
            }
        };

        return (
            <div style={styles.aside}>
                <div>
                    <h2 style={styles.title}>招聘职位</h2>
                    <div style={styles.clear} onClick={this._cleanCheck}>清空</div>
                </div>
                {
                    this.state.listArray.map((node, i) => {
                        return (
                            <List
                                data={node}
                                key={i}
                                checked={node.checked}
                                onCateCheck={this._handleCateCheck}
                                onChildCheck={this._handleChildCheck} />)
                    })
                }
            </div>
        )
    },

    /**
     * Toggle子项的选中状态,如果全部子项选中,则Toggle整个分类列表
     * @param context 选中的子项位置的list上下文
     * @param child 选中的子项位置
     * @param isCheck 选中子项的状态
     * @private
     */
    _handleChildCheck(context, child, isCheck) {
        let index = this.state.listArray.indexOf(context.props.data),
            selList = listArray[index],
            checkNumber = 0;
        selList.children[child].checked = isCheck;
        listArray[index].children.map((item) => {
            if ('undefined' !== typeof item.checked && item.checked) {
                checkNumber++;
            }
        });
        checkNumber === selList.children.length ? (selList.checked = true) : (selList.checked = false);
        this.setState({
            listArray: listArray
        });
    },

    /**
     * Toggle分类列表时的响应事件
     * @param context list上下文
     * @param isCheck Cate是否选中
     * @private
     */
    _handleCateCheck(context, isCheck) {
        var index = this.state.listArray.indexOf(context.props.data),
            selList = listArray[index];
        selList.checked = isCheck;
        selList.children.map((item) => {
            item.checked = isCheck;
        });
        this.setState({
            listArray: listArray
        });
    },

    /**
     * 清空所有选中状态
     * @private
     */
    _cleanCheck() {
        listArray.forEach((item) => {
            item.checked = false;
            item.children.map((c) => {
                c.checked = false;
            });
        });
        this.setState({
            listArray: listArray
        });
    }
});

ReactDOM.render(<App />, document.getElementById('aside'));
