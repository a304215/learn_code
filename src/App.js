import './App.css';
import { Router, Route, Link, hashHistory } from 'react-router'
function App() {
  return (
      <div className = 'login_from'>
        <div className = 'login_header'>
          <h1>歡迎來到程式的世界，請先登入</h1>
        </div>
        <div className = 'login_data'>
          <div className = 'login_row'>
            <label>帳號</label>
            <input type = 'text' style = {{height:'2vh',borderRadius:'5px',borderWidth:'1px'}}></input>
          </div>
          <div className = 'login_row'>
            <label>密碼</label>
            <input type = 'text' style = {{height:'2vh',borderRadius:'5px',borderWidth:'1px'}}></input>
          </div>
          <div>
            <input type = 'button' value = '登入'></input>
            {/* <link to='/register/' style = {{color:'red'}}>
              <div>還沒註冊嗎?請前往註冊</div>
            </link> */}
          </div>
        </div>
      </div>
  );
}

export default App;
