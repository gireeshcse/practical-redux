import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import selectEntities from './redux/selectors';

const mapStateToProps = (state,ownProps) => {
    return {
        pilots : selectEntities.pilots(state)
    }
}

function App() {
  return (
    <div className="App">
      Practical Redux
    </div>
  );
}

export default connect(mapStateToProps)(App);
