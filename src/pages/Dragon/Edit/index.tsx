/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './styles.scss';
import { DragonSchema } from '@helpers/validations';
import { z } from 'zod';
import { useForm } from '@hooks/useForm';
import toast from 'react-hot-toast';
import { Controller, useFieldArray } from 'react-hook-form';
import Input from '@components/Input';
import Button from '@components/Button';
import api from '@services/api';
import { useNavigate, useParams } from 'react-router-dom';

type DragonData = z.infer<typeof DragonSchema>;

function EditDragon() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

 const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm(DragonSchema);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "histories"
  });

  const handleSearchDragonById = async () => {
    try {
      const response = await api.get(`/dragon/${id}`);
      
      setValue("name", response.name);
      setValue("type", response.type);
      console.log(response.histories)
      setValue("histories", response.histories.map((h: string) => {
        return { history: h }
      }));
    } catch {
      toast.error('Erro ao buscar detalhes do dragão')
    }
  }

  useEffect(() => {
    handleSearchDragonById()
  }, [])
  
  const onSubmit = async (data: DragonData) => {
    try {
      await api.put(`/dragon/${id}`, {
        name: data.name,
        type: data.type,
        histories: data.histories.map(h => h.history),
        createdAt: new Date(),
      });
      toast.success('Dragão editado com sucesso')

      navigate("/dragons")
    } catch {
      toast.error('Houve um erro ao adicionar o dragão. Por favor, tente novamente!')
    }
  }
  
  return (
    <div className="edit-dragon">
      <h1 className="title">Editar Dragão</h1>
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
                testId='name-input'
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
                testId='type-input'
              />
            )}
          />
        </div>
        <div className="histories-input">
          <p className="title-history">Histórias:</p>
          {fields.map((field, index) => (
            <div key={field.id} className="history-item">
              <Controller
                control={control}
                name={`histories.${index}.history`}
                render={({ field: { value, onChange } }) => (
                  <Input
                    name={`histories.${index}.history`}
                    onChange={onChange}
                    value={value || ""}
                    label={`História ${index + 1}`}
                    errorMessage={errors.histories?.[index]?.message}
                    testId={`history-input-${index}`}
                  />
                )}
              />
              <Button
                onClick={() => remove(index)}
              >
                Remover
              </Button>
            </div>
          ))}
          <Button
            onClick={() => append({ history: "" })}
            fullWidth
            className='add-history'
            testid='add-history'
          >
            Adicionar História
          </Button>
        </div>
        <Button 
          onClick={handleSubmit(onSubmit)} 
          testid='submit-button'
          fullWidth
        >
          Editar Dragão
        </Button>
      </div>
    </div>
  );
};

export default EditDragon;
