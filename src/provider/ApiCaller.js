import React from 'react'


const username = "code-challenge";
const password = "payvisioner"; 
const uri = "https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions?"; 
export default class ApiCaller extends React.Component{
    constructor(props){
        super(props);
    }
    callApi(){
        var headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        fetch(uri, {
            headers: headers
        })
        .then((response) => {
          response.json().then(data=>{
              return data;
        })
      })
    }
    //UriBuilder
    createQuery(val){
        var isAdd = false;
        for(var i = 0;i<3;i++){
          if(val[i] !=  0){
            if(isAdd == true){
              this.uri += "&";
            }
            if(i == 0){
              this.uri += "action=" + val[i];
              isAdd = true;
            }
            else if(i == 1){
              this.uri += "currencyCode=" + val[i];
              isAdd = true;
            }
            else{
              this.uri += "orderBy=" + val[i];
            }  
          }
        }
        this.callApi(uri);
        this.cleanParameters();
    }
    cleanParameters(){
        this.uri = "https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions?";
    }
    
}