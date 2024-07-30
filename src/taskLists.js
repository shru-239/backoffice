// src/TaskLists.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const TaskLists = () => {
  const [taskLists, setTaskLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'taskLists'));
      const taskListsData = [];
      querySnapshot.forEach((doc) => {
        taskListsData.push({ id: doc.id, ...doc.data() });
      });
      setTaskLists(taskListsData);
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'title', headerName: 'Task List Title', width: 200 },
    { field: 'createdBy', headerName: 'Created By', width: 150 },
    { field: 'numberOfTasks', headerName: 'No of tasks', width: 150 },
    { field: 'creationTime', headerName: 'Creation Time', width: 150 },
    { field: 'lastUpdated', headerName: 'Last Updated', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={taskLists} columns={columns} pageSize={5} />
    </div>
  );
};

export default TaskLists;
