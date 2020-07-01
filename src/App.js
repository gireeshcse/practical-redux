import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import selectEntities from './redux/selectors';
import Pilots from './components/Pilots';
import API from './services/API';

const mapStateToProps = (state,ownProps) => {
    return {
        pilots : selectEntities.pilots(state)
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
      savePilots : (data) => dispatch(savePilots(data))
    }
}

function App(props) {

  function getPilots(){
    return new Promise(resolve => {
      API.fetchPilots().then((data)=>{
        resolve(data);
      });
    });
  }

  if(props.pilots.length === 0)
        getPilots().then((data=>props.savePilots(data)));
  
  return (
    <div className="App">
      Practical Redux1
        <div className="container">
          <Pilots pilots={props.pilots} />
        </div>
    </div>
  );
}

function savePilots(data)
{
  return {payload:data,type:'CREATE_PILOTS'};
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
