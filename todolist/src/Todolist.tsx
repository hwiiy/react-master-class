import { setDefaultResultOrder } from "dns";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

type IFormData = {
  toDo : string;
  UserName : string;
  errors: {
  email: {
  message: string;
  };
  };
  email:string;
  FirstName: string;
  LastName: string;

  password: string;
  password1: string;
  extraError ?:string;
 
}

const Error = styled.div`
  background-color: teal;
  color : black;
  margin-bottom:5px;
  font-size:20px;
`

function ToDoList() {
    const {register,
      handleSubmit,
      formState:{errors},setError
    }= useForm<IFormData>({
      defaultValues : {
        email:"@naver.com"
      }
    })
    
    const onValid = (data: IFormData) => {
      if (data.password !== data.password1) {
        setError(
          "password1",
          { message: "Password are not the same" },
          { shouldFocus: true }
        );
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo",{required:"toDo is required!"})} placeholder="to do" />
        <Error>
          {errors?.toDo?.message}
        </Error>
        <input {...register("UserName",{
          required:true,
          minLength:{
            value:10,
            message:"10 letters required!"},
         

        })} placeholder="UserName" />
        <Error>
          {errors?.UserName?.message}
        </Error>

        <input {...register("LastName",{required:true})} placeholder="LastName" />
        <Error>
          {errors?.LastName?.message}
        </Error>

        
        <input {...register("FirstName",
        {required:true,
          validate: (value)=> value.includes("hwiiy") ? "hwiiy is not allowed" : true}
        )} placeholder="FirstName" />
        <Error>
          {errors?.FirstName?.message}
        </Error>

        
        <input {...register("password",
        {required:"password is required",
        minLength:{
            value:5,
            message : "Your password is too short"
        }})} placeholder="password" />
        <Error>
          {errors?.password?.message}
        </Error>


        <input {...register("password1",{
          required: "Password is required",
          minLength: {
            value: 5,
            message:"password 1 message"
          },
        })} placeholder="password1">
        </input>
        <span>{errors?.password1?.message}</span>

        <input {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />

          <Error>
          {errors?.email?.message}
          </Error>

        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );

}

export default ToDoList;