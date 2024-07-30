// src/BackOfficePanel.js
import React, { useState } from 'react';
import Login from './login';
import Users from './users';
import TaskLists from './taskLists';
import Tasks from './tasks';

const BackOfficePanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState('users');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <nav>
            <button onClick={() => setActiveMenu('users')}>Users</button>
            <button onClick={() => setActiveMenu('taskLists')}>Task Lists</button>
            <button onClick={() => setActiveMenu('tasks')}>Tasks</button>
          </nav>
          {activeMenu === 'users' && <Users />}
          {activeMenu === 'taskLists' && <TaskLists />}
          {activeMenu === 'tasks' && <Tasks />}
        </div>
      )}
    </div>
  );
};

export default BackOfficePanel;
