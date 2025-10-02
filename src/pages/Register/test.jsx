const dateSchema = yup
  .date()
  .required('Дата обязательна')
  .min(new Date(), 'Дата не может быть в прошлом')
  .max(new Date(2025, 0, 1), 'Дата не может быть после 2025 года');
