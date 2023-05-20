import './App.css';

function App() {
  function showMessage(str) {
    console.log(`Hello there, ${str}! :)`)
  }
  let string = "Ben";
  return (
    <div className="App">
      <h1>Init title</h1>
      <img src='https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDTWOAcYCJ6BDI3AtISL-AAxTdrD17pig6WXJMdLTfJI7RcUyF-eF7Ohblmr_66Q39-ukvbJBwNzhoRcZnRj7G5ywC3xdkSNVkMNJRrhWmaVq1roSBxh0BC0DcYkdDAvdpJw5oKnvF6URN-rtIRi=w919-h516-p-k-no-nu' alt='Background img'/>    
      <br/>
      <button className='button' onClick={showMessage(string)}>I`m not working</button>
      <button className='button' onClick={() => showMessage(string)}>Click me, I`m working</button>
    </div>
  );
}

export default App;
