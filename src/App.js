import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import AddTask from './addTask'; // Import your AddTask component
import ListTask from './ListTask'; // Import your ListTask component

function App() {
  return (
    <Provider store={store}> {/* Provide the Redux store */}
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask /> {/* Render the AddTask component */}
        <ListTask /> {/* Render the ListTask component */}
      </div>
    </Provider>
  );
}

export default App;

