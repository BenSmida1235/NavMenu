import React, { Component } from "react";
import "./css/liste.css";
import Me from "./components/mlist";
import Sm from "./components/subm";



class App extends Component{
  state={ 
    title1:[{ name: " home ",lien1: "action1",lien2: "action2",lien3:"action3"}],
    title2:[{ name:" service ",lien1: "action4",lien2: "action5",lien3:"action6"}],
    title3:[ { name: " contact ",lien1: "action7",lien2: "action8",lien3:"action9"}]
}
render(){
  return (
    <div className="App">
      
      <div className="nav1"> 
       <ul className="titre">
          {this.state.title1.map((me)=>{ return(<Me><a className="a30">{me.name}</a></Me>) })}
    
    <div className="Lien1">
         {
             this.state.title1.map((sm)=>{ return(
             <Sm>
               <a>{sm.lien1}</a><br/>
             <a>{sm.lien2}</a><br/>
             <a>{sm.lien3}</a><br/>
             </Sm>); })
          
         }
        </div>
        </ul>
        </div>
    <div className="nav2">
    <ul className="titre">
      { this.state.title2.map((me)=>{ return(<Me><a className="a30">{me.name}</a></Me>) })}
         <div className="Lien2">
         {
             this.state.title2.map((sm)=>{ return(
             <Sm>
              <a> {sm.lien1}</a><br/>
              <a>{sm.lien2}</a><br/>
             <a>{sm.lien3}</a><br/>
             </Sm>); })
          
         }
        </div>
        </ul>
        </div>
        <div className="nav3">
    <ul className="titre">{this.state.title3.map((me)=>{ return(<Me><a className="a30">{me.name}</a></Me>)})}
    <div className="Lien3">
         {
             this.state.title3.map((sm)=>{ return(
             <Sm>
               <a>{sm.lien1}</a><br/>
            <a> {sm.lien2}</a><br/>
            <a> {sm.lien3}</a><br/>
          
             </Sm>); })
          
         }
        </div>
        </ul>
      </div>
     
    
   </div>
  );
}
}
export default App;
