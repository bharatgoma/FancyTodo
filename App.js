import './App.css';
import Todos from './components/Todos';

import TodosWrapper from './components/TodosWrapper';

function App() {
  return (
    <div className="App">
       <TodosWrapper/>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TodosWrapper from './components/TodosWrapper';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<TodosWrapper />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

