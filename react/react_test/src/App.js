import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameList from './NameList';
import { render } from 'react-dom';

class App extends Component {
  render() {
    const store=[
      {username:'java',age:'20'},
      {username:'javascript',age:'20'},
      {username:'php',age:'10'},
      {username:'python',age:'24'},
      {username:'css',age:'13'},
      {username:'ruby',age:'16'}
    ]
    // const arr = ['react', 'js', 'java', 'cpp', 'php'];
    // const eleArr = arr.map((ele, i) => {
    //   return <li key={i}>{ele}</li>
    // });

    return (
      <div className="App">
        {
          store.map((item,i)=>{
            return (<NameList username={item.username} key={i}/>)
          })
        }
      </div>
    )
  }
  // render() {
  //   return (

  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

}

export default App;
