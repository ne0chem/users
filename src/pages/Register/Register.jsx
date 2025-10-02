import styles from './register.module.css';
import Socials from '../../components/Social/Socials';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../utiles/validation';

const Register = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (formValues) => {
    alert('Вы успешно зарегистрированы');
    console.log(formValues);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Создать аккаунт</h1>
          <p className={styles.subtitle}>Присоединяйтесь к нам сегодня</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Имя</label>
            <input {...register('name')} className={styles.input} placeholder="Введите ваше имя" type="text" />
            <p className={styles.error}>{formState.errors.name?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input {...register('email')} className={styles.input} placeholder="Введите email адрес" type="email" />
            <p className={styles.error}>{formState.errors.email?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Логин</label>
            <input {...register('login')} className={styles.input} placeholder="Придумайте логин" type="text" />
            <p className={styles.error}>{formState.errors.login?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Пароль</label>
            <input {...register('password')} className={styles.input} placeholder="Придумайте пароль" type="password" />
            <p className={styles.error}>{formState.errors.password?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Подтвердите пароль</label>
            <input {...register('repeatPassword')} className={styles.input} placeholder="Повторите пароль" type="password" />
            <p className={styles.error}>{formState.errors.repeatPassword?.message}</p>
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input {...register('terms')} type="checkbox" />
              <span className={styles.checkmark}></span>Я согласен с{' '}
              <a href="#" className={styles.termsLink}>
                условиями использования
              </a>{' '}
              и{' '}
              <a href="#" className={styles.termsLink}>
                политикой конфиденциальности
              </a>
            </label>
            <p className={styles.error}>{formState.errors.terms?.message}</p>
          </div>

          <button type="submit" className={styles.submitButton}>
            Зарегистрироваться
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Уже есть аккаунт?
            {''}
            <Link to="/login" className={styles.link}>
              Войти
            </Link>
          </p>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Register;
