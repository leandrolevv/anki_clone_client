import logo from './logo.svg';
import './style.css';
import {Component} from 'react'

class Home extends Component{
  state = {
    status: "",
    statusV1: "",
    statusV2: ""
  }

  loadPosts = async () => {
    const postHome = fetch('http://localhost:5065/');
    const postHomeV1 = fetch('http://localhost:5065/v1');
    const postHomeV2 = fetch('http://localhost:5065/v2');
    
    const [status, statusV1, statusV2] = await Promise.all([postHome,  postHomeV1, postHomeV2])
    this.setState({status: status.statusText, statusV1: statusV1.statusText, statusV2: statusV2.statusText});
  }

  componentDidMount(){
    this.loadPosts();
  }

  render(){
    const {status, statusV1, statusV2} = this.state;
    return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <p>Status API raíz: {status}</p>
        <p>Status API v1: {statusV1}</p>
        <p>Status API v2: {statusV2}</p>
      </div>
    </header>
  </div>)
  }
}

export default Home;
