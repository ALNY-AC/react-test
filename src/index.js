import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: ['陈芬'],
        };
    }


    render() {
        return (
            <div className="card">
                <div>您输入的是：{this.state.value}</div>
                <input placeholder="请输入您要添加的员工" type="text" value={this.state.value} onChange={event => { this.setState({ value: event.target.value }) }} />
                <button onClick={() => this.add()}>添加</button>
                {this.state.list.map((el, i) => {
                    return (
                        <div className="item-card" key={i}>
                            <div className="item">{el}</div>
                            <div className="del" onClick={() => this.del(i)}>删除</div>
                        </div>
                    )
                })}
            </div >

        );
    }
    del(i) {
        this.state.list.splice(i, 1);
        this.setState({ list: this.state.list });
    }
    add() {
        if (!this.state.value) {
            alert('姓名不能为空！');
            return;
        }
        this.state.list.push(this.state.value);
        this.setState({ list: this.state.list });
        this.setState({ value: '' });
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
