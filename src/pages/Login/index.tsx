import { useForm } from '@hooks/useForm';
import { Controller } from 'react-hook-form';
import { z } from 'zod';
import { LoginSchema } from '@helpers/validations';
import './styles.scss';
import Input from '@components/Input';
import Button from '@components/Button';
import toast from 'react-hot-toast';
import { login } from '@redux/userSlice';
import { useAppDispatch } from '@hooks/useRedux';
import { useNavigate } from "react-router";

type LoginData = z.infer<typeof LoginSchema>;

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(LoginSchema);

  const onSubmit = async (data: LoginData) => {
    if (data.email === 'teste@gmail.com' && data.password === '123456') {
      dispatch(
        login({
          user: {
            email: data.email,
            password: data.password
          }
        })
      );
      toast.success('Login realizado com sucesso');

      navigate("/dragons");
    } else {
      toast.error('Erro ao realizar login')
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <Controller
            control={control}
            name='email'
            render={({ field: { value, onChange }}) => (
              <Input
                name='email'
                label='Email'
                type="text"
                variant='primary'
                value={value}
                 onChange={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </div>
        <div className="form-group">
          <Controller
            control={control}
            name='password'
            render={({ field: { value, onChange }}) => (
              <Input
                name='password'
                label='Senha'
                type="password"
                variant='primary'
                value={value}
                onChange={onChange}
                errorMessage={errors.password?.message}
                autocomplete="current-password"
                // disabled={loading}
              />
            )}
          />
        </div>
        <div className='button-container'>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant='primary'
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
