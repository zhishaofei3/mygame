import logo from './logo.svg';
import './App.css';

function App() {

  window.dataLayer = window.dataLayer || []

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'reactCustomEvent', // 这个名字要和你在 GTM 中定义的事件名称一致
      category: 'Button',        // 自定义参数，选择性添加
      action: 'Click',
      label: 'Submit Button'
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Submit</button>
      </header>
    </div>
  );
}

export default App;
