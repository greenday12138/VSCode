import React,{Component} from 'react';

class NameList extends Component{
    constructor(){
        super();
        this.state={show:true}
    }
    del=()=>{
        this.setState({show:false})
    }

    render(){
        const style={
            display:'inline-block',
            width:'100px',
            paddingRight:'20px',
            height:'50px'
        }

        if(this.state.show){
            return(
                <div>
                    <span style={style}>{this.props.username}</span>
                    <span style={style}>{this.props.age}</span>
                    <input type="button" onClick={this.del} value="Delete"></input>
                </div>
            )
        }else{
            return null;
        }
    }
}

export default NameList;