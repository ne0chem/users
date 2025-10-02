// utils/validation.js
import { boolean, object, string, ref, date } from 'yup';

export const addUser = object({
  name: string().required('Имя обязательно'),
  email: string().email('Некорректный email').required('Email обязателен'),
  role: string().required('Роль обязательна'),
  created: date().required('Дата создания обязательна'),
  status: string().required('Статус обязателен')
});

export const loginSchema = object({
  login: string().required('Логин обязательное поле'),
  password: string().required('Пароль обязательное поле'),
  checkbox: boolean().isTrue('Согласие с условиями обязательное поле')
});

export const registerSchema = object({
  name: string().required('Имя обязательное поле').min(2, 'Имя должно содержать минимум 2 символа'),

  login: string().min(3, 'Логин должен содержать минимум 3 символа').max(10, 'Логин должен содержать максимум 10 символов').required('Логин обязательное поле'),

  email: string().email('Введите корректный email').required('Email обязательное поле'),

  password: string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязательное поле'),

  repeatPassword: string()
    .required('Подтверждение пароля обязательно')
    .oneOf([ref('password')], 'Пароли не совпадают'),

  terms: boolean().isTrue('Вы должны согласиться с условиями использования')
});
