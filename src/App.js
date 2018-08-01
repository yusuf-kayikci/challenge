import React, { Component } from 'react';
import {MyTable} from './MyTable';
import {Query} from './Query';
import ApiCaller from './provider/ApiCaller'

var username;
var password;
var uri = "https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions?";
class App extends Component {
  constructor(props){
    super(props);
    username = "code-challenge";
    password = "payvisioner";
    this.state = {};
    this.createQuery = this.createQuery.bind(this);
  }
  
  cleanParameters(){
    uri = "https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions?";
  }

  callApi(myUri){
    console.log(myUri);
    var headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    fetch(myUri, {
        headers: headers
    })
    .then((response) => {
      response.json().then(data=>{
        this.setState({transaction:data})
        console.log(this.state.transaction);
      })
    })
  }

  componentDidMount(){
    this.callApi(uri);
  }
  
  createQuery(val){
    var isAdd = false;
    for(var i = 0;i<3;i++){
      if(val[i] !=  0){
        if(isAdd == true){
          uri += "&";
        }
        if(i == 0){
          uri += "action=" + val[i];
          isAdd = true;
        }
        else if(i == 1){
          uri += "currencyCode=" + val[i];
          isAdd = true;
        }
        else{
          uri += "orderBy=" + val[i];
        }  
      }
    }
    this.callApi(uri);
    this.cleanParameters();
  }
  
  

  render() {
    return (
      <div className = "body">
        <div className = "context">
          <Query query={this.createQuery}/>
          <MyTable tr={this.state.transaction}/>
      </div>
      </div>
    
    );
  }
}
export default App;
