import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Mainarea from './Mainarea'
class App extends React.Component { 

  render() {
    return (
      <div>       
        <Header></Header>
        <Mainarea></Mainarea>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;