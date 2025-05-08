import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TodoApp from './components/TodoApp';
import PayPage from './components/PayPage'; 
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Todo Pay</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/pay"
            element={
              <PrivateRoute>
                <PayPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/todo"
            element={
              <PrivateRoute>
                <TodoApp />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;