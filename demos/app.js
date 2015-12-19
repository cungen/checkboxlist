import React from 'react';
import ReactDOM from 'react-dom';
import List from '../src/list';

let App = React.createClass({
    render() {
        const styles = {
            aside: {
                width: '320px',
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
                    <div style={styles.clear}>清空</div>
                </div>
                <List></List>
                <List></List>
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('aside'));
