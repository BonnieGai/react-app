import React, { Component, Fragment  } from "react";

class Xiaojiejie extends Component {
    // js的构造函数，由于其他任何函数执行
    constructor(props){
        // 调用父类的构造函数，固定写法
        super(props) 
        this.state={
            // inputValue:'BonnieGai', // input中的值
            // list:['吃饭', '睡觉'], // 服务列表
            inputValue:'', // input中的值
            list:[], // 服务列表
        }
        console.log('this.state:', this.state);
    }
    render() {
        return (
            <Fragment >
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button type="button" onClick={this.addList.bind(this)} className="btn btn-large btn-block btn-default">增加服务
                    </button>
                    <ul >
                        {
                            this.state.list.map((item, index) => {
                                // 页面中可能会有多个循环，所以要确保key值的唯一性
                                return (
                                    <li key={index+item}
                                    onClick={this.deleteItem.bind(this, index)}
                                    >{item}</li>
                                )
                            }) 
                        }
                    </ul>
                
                </div>
            </Fragment >
        )
    }
    inputChange(e){
        console.log(e.target.value);
        // this.state.inputValue=e.target.value;
        // 改变状态的方法要用下面的方式 setState
        this.setState({
            inputValue:e.target.value
        })
    }
    addList() {
        // 运算扩展运算符
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        }) 
    }
    //删除单项服务
    deleteItem(index){
        console.log(index);
        // 1.大坑  React是禁止直接操作state的
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie;