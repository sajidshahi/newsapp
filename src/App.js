import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=12;
  country='in'
  state={
    progress:0
  }
  setProgress =(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
<BrowserRouter>
<Navbar/>
<LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country={this.country} category="general"/>}/>
          <Route exact path="/home" element={<News setProgress={this.setProgress}  key="home" pageSize={this.pageSize} country={this.country}category="general"/>}/>
          <Route exact path="business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country={this.country} category="business"/>}/>
          <Route exact path="entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment"/>}/>
          <Route exact path="health" element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country={this.country} category="health"/>}/>
          <Route exact path="science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country={this.country}category="science"/>}/>
          <Route exact path="sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country={this.country} category="sports"/>}/>
          <Route exact path="technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country={this.country} category="technology"/>}/>
      </Routes>
    </BrowserRouter>
        
    






       
      </div>
    )
  }
}
