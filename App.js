import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './config';

export default class App extends Component {

constructor(){
super();
this.state = {teamsRank:[],};

}
showTeamsRank = ()=>  {
var teams = [];
var teamRef = db.ref('teams/'); 
teamRef.on('value',(data)=>{
var teamList = data.val();
for (var team in teamList ){
if(teamList[team]["isButtonPressed"]=== true){
teamList[team]["teamName"]=team;  
teams.push(teamList[team]) 
}

}
teams.sort(function(team1,team2){
return team1.timeStamp-team2.timeStamp 
})
this.setState({teamsRank:teams});
teams = [];
});

 }
componentDidMount(){
this.showTeamsRank();

}
resetDb = ()=> {
var resetDatabase = db.ref('teams/')
.set({
red:{
isButtonPressed :false,
timeStamp:0,
},  
blue:{
isButtonPressed :false,
timeStamp:0,
},  
green:{
isButtonPressed :false,
timeStamp:0,
},  
yellow:{
isButtonPressed :false,
timeStamp:0,
},  
})
this.setState({teamsRank:[]});
}

  render() {
    return (
      <View style={{flex:1}}>
      <View>
      {this.state.teamsRank.map((team)=>(
      <View
      style = {{
      width:140,height:55,borderWidth:2,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:team.teamName  
      }}>
      <Text>{team.teamName.toUpperCase()}</Text>
      </View>  
      ))}
       </View>
       <Button title = "RESET"
       style = {{
       width:100,height:100  
       }}
       onPress= {this.resetDb}
       />        
      </View>
    );
  }
}
