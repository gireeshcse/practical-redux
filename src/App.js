import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import selectEntities from './redux/selectors';
import Pilots from './components/Pilots';

const mapStateToProps = (state,ownProps) => {
    return {
        pilots : selectEntities.pilots(state)
    }
}

function App() {
  return (
    <div className="App">
      Practical Redux
        <div className="container">
          <Pilots />
        </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
