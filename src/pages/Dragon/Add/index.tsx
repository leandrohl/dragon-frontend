import './styles.scss';
import { DragonSchema } from '@helpers/validations';
import { z } from 'zod';
import { useForm } from '@hooks/useForm';
import toast from 'react-hot-toast';
import { Controller, useFieldArray } from 'react-hook-form';
import Input from '@components/Input';
import Button from '@components/Button';
import api from '@services/api';
import { useNavigate } from 'react-router-dom';

type DragonData = z.infer<typeof DragonSchema>;

function AddDragon () {
  const navigate = useNavigate();

 const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(DragonSchema);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "histories"
  });
  
  const onSubmit = async (data: DragonData) => {
    try {
      await api.post(`/dragon`, {
        name: data.name,
        type: data.type,
        histories: data.histories.map(h => h.history),
        createdAt: new Date(),
      });
      toast.success('Dragão adicionado com sucesso')

      navigate("/dragons")
    } catch {
      toast.error('Houve um erro ao adicionar o dragão. Por favor, tente novamente!')
    }
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
                    name={`histories.${index}`}
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
          Adicionar Dragão
        </Button>
      </div>
    </div>
  );
};

export default AddDragon;
