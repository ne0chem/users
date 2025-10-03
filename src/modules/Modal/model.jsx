import { addUser } from '../../utiles/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import axios from 'axios';

export const useModalForm = (onClose, onCreatUser) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(addUser)
  });

  const onSubmit = async (formValues) => {
    try {
      onCreatUser(formValues);
      reset();
      alert('Пользователь добавлен');
      console.log(formValues);
      onClose();
    } catch (error) {
      toast.error('Ошибка при добавлении пользователя');
      console.error(error);
    }
  };
  return { register, handleSubmit, formState, onSubmit };
};
