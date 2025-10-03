import React, { useState, useEffect } from 'react';
import styles from './Users.css';
import Header from '../../components/Header/Header';
import Modal from '../../modules/Modal/ui';
import User from '../../components/User/User';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HEADERS } from './consts';

export const useUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [activeRole, setActiveRole] = useState('admins');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (err) {
      console.error('Ошибка при загрузке пользователей:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      alert('Пользователь удален');
      fetchUsers();
    } catch (error) {
      toast.error('Ошибка при удалении пользователя');
      console.error(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    console.log('open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onCreatUser = async (formValues) => {
    const response = await axios.post('http://localhost:5000/users', formValues);
    fetchUsers();
  };
  const [serchText, setSerchText] = useState('');
  const handleSearch = (e) => {
    setSerchText(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const keys = Object.keys(user);
    console.log(keys);

    let isMatch = false;

    keys.forEach((key) => {
      if (user[key].includes(serchText)) {
        isMatch = true;
      }
    });
    if (activeRole === 'admins') {
      isMatch = user.role === 'admin';
    } else {
      isMatch = user.role === 'client';
    }
    return isMatch;
  });
  const sortedUsers = filteredUsers.sort((a, b) => {});

  return {
    isModalOpen,
    handleSearch,
    handleDeleteUser,
    serchText,
    openModal,
    closeModal,
    onCreatUser,
    sortedUsers,
    filteredUsers,
    setActiveRole,
    activeRole
  };
};
