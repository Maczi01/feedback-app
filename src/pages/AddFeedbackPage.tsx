import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MainTemplate from '../templates/MainTemplate';

const AddFeedbackPage: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [result, setResult] = useState('');

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <MainTemplate>
      <form onSubmit={onSubmit}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...register('firstName')} placeholder="Bill" />

        <p>{result}</p>
        <input type="submit" />
      </form>
    </MainTemplate>
  );
};

export default AddFeedbackPage;
