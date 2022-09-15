import { useState, React } from 'react'
import { useForm } from "react-hook-form";
import './Style.css'
import Logo from './assets/form_logo.jpg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("o nome é obrigatório"),
  email: yup.string().email().required("Digite um email valido"),
  password: yup.string().min(6,"Digite um senha com pelo menos 6 digitos").required("A senha é obrigatória"),
  confirmPassword: yup.string().required("Senhas diferentes").oneOf([yup.ref("passsword")]),
  
}).required();


function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  console.log(watch("name"));
  
  function onSubmit( userdata ){
    console.log(userdata)
  }


  return (
    <form onSubmit = { handleSubmit(onSubmit) }>
     <img src = { Logo } alt= "logo-imagem"/>
     <label>
      Nome
      <input type="text" {...register("name", { required: true })}  />
      {errors.name && <span>{errors.name?.message}</span> }
      
     </label>

     <label>
      E-mail
      <input type="text"  {...register("email")} />
      <span>{errors.email?.message}</span> 
     </label>

     <label>
      Senha
      <input type="password" {...register("password")} />
       <span>{errors.password?.message}</span> 
     </label>

     <label>
      Confirmar Senha
      <input type="password" {...register("confirmPassword")}  />
      <span>{errors.confirmPassword?.message}</span> 
     </label>

     <button type= "submit" >Cadastrar-se</button>
    </form>
  )
}

export default App
