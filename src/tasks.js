// src/Tasks.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const tasksData = [];
      querySnapshot.forEach((doc) => {
        tasksData.push({ id: doc.id, ...doc.data() });
      });
      setTasks(tasksData);
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'title', headerName: 'Task Title', width: 200 },
    { field: 'description', headerName: 'Task Description', width: 200 },
    { field: 'taskListTitle', headerName: 'Task List Title', width: 200 },
    { field: 'createdBy', headerName: 'Created By', width: 150 },
    { field: 'creationTime', headerName: 'Creation Time', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={tasks} columns={columns} pageSize={5} />
    </div>
  );
};

export default Tasks;
