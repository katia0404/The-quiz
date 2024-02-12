import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь вы можете выполнить логику отправки данных на сервер
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Имя пользователя</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          {/* Добавьте остальные поля */}
          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
