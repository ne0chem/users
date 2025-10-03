import React from 'react';
import styles from './style.css';
import { addUser } from '../../utiles/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useModalForm } from './model';

function Modal({ onClose, onCreatUser }) {
  const { register, handleSubmit, formState, onSubmit } = useModalForm(onClose, onCreatUser);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Добавить пользователя</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal__content">
            <input {...register('name')} type="text" placeholder="Имя пользователя" className="name" />
            <p className="error">{formState.errors.name?.message}</p>

            <input {...register('email')} type="email" placeholder="Введите Email" className="email" />
            <p className="error">{formState.errors.email?.message}</p>

            <input {...register('role')} type="text" placeholder="Укажите свою роль" className="role" />
            <p className="error">{formState.errors.role?.message}</p>

            <input {...register('created')} type="date" placeholder="Введите дату создания" className="created" />
            <p className="error">{formState.errors.created?.message}</p>

            <input {...register('status')} type="text" placeholder="Укажите статус" className="status" />
            <p className="error">{formState.errors.status?.message}</p>
          </div>

          <div className="modal-actions">
            <button type="submit">Добавить</button>
            <button type="button" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
