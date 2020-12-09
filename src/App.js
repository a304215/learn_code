import './App.css';

function App() {
  return (
    <div className = 'login_from'>
      <div className = 'login_header'>
        <h1>歡迎來到程式的世界，請先登入</h1>
      </div>
      <div className = 'login_data'>
        <div className = 'login_row'>
          <label>帳號</label>
          <input type = 'text' style = {{height:'2vh',borderRadius:5px}}></input>
        </div>
        <div className = 'login_row'>
          <label>密碼</label>
          <input type = 'text' style = {{height:'2vh',borderRadius:'5px',borderWidth:'1px'}}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
