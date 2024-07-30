// src/Users.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'email', headerName: 'Email id', width: 150 },
    { field: 'password', headerName: 'Password', width: 150 },
    { field: 'signupTime', headerName: 'Signup Time', width: 150 },
    { field: 'ip', headerName: 'IP', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={users} columns={columns} pageSize={5} />
    </div>
  );
};

export default Users;
