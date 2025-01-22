import React, { useState } from 'react';
import './styles.scss';
import { DragonSchema } from '@helpers/validations';
import { z } from 'zod';
import { useForm } from '@hooks/useForm';
import toast from 'react-hot-toast';
import { Controller } from 'react-hook-form';
import Input from '@components/Input';
import Button from '@components/Button';

type DragonData = z.infer<typeof DragonSchema>;

const AddDragon: React.FC = () => {

 const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(DragonSchema);
  
  const onSubmit = async (data: DragonData) => {
  }
  
  return (
    <div className="add-dragon">
      <h1 className="title">Adicionar Dragão</h1>
      <div className="form">
        <div className="form-group">
          <Controller
            control={control}
            name='name'
            render={({ field: { value, onChange }}) => (
              <Input
                name='name'
                label='Nome'
                type="text"
                variant='primary'
                value={value}
                 onChange={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />
        </div>
        <div className="form-group">
          <Controller
            control={control}
            name='createdAt'
            render={({ field: { value, onChange }}) => (
              <Input
                name='name'
                label='Data de criação'
                type="date"
                variant='primary'
                value={value}
                 onChange={onChange}
                errorMessage={errors.createdAt?.message}
              />
            )}
          />
        </div>
        <div className="form-group">
          <Controller
            control={control}
            name='type'
            render={({ field: { value, onChange }}) => (
              <Input
                name='type'
                label='Tipo'
                type="text"
                variant='primary'
                value={value}
                 onChange={onChange}
                errorMessage={errors.type?.message}
              />
            )}
          />
        </div>
        <div className="form-group">
          <Controller
            control={control}
            name='histories'
            render={({ field: { value, onChange }}) => (
              <Input
                name='histories'
                label='Historias'
                type="text"
                variant='primary'
                value={value}
                onChange={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />
        </div>
        <Button onClick={handleSubmit(onSubmit)}>
          Adicionar Dragão
        </Button>
      </div>
    </div>
  );
};

export default AddDragon;
