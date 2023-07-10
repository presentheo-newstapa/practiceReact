// import React from 'react'
import { useForm } from 'react-hook-form'
// import { axios } from 'axios'
import { registerUser } from '../../store/thunkFunctions';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {

  const {
    register, 
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({mode: 'onChange'})

  const dispatch = useDispatch();

  const onSubmit = ({email, password, name}) => {

    const body = {
      email,
      password,
      name,
      image: 'https://placehold.co/600x400/EEE/31343C'
    }

    dispatch(registerUser(body))

    
    reset();
    
  }

  const userEmail = {
    required: "필수 필드입니다"
  }
  const userName = {
    required: "필수 필드입니다"
  }
  const userPassword = {
    required: "필수 필드입니다",
    minLength: {
      value: 6,
      message: "최소 6자 이상 입력해주세요"
    }
  }
  
  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">회원가입</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          {/* 이메일 입력 */}
          <div className="mb-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-800">Email</label>
            <input type="email" name="" id="email" className="w-full px-4 py-2 mt-2 bg-white border rounded-md" {...register('email', userEmail)}/>
            {
              errors?.email && 
              <div>
                <span className='text-red-500'>
                  {errors.email.message}
                </span>
              </div>
            }
          </div>
          {/* 이름 입력 */}
          <div className="mb-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-800">Name</label>
            <input type="text" name="" id="name" className="w-full px-4 py-2 mt-2 bg-white border rounded-md" {...register('name', userName)}/>
            {
              errors?.name && 
              <div>
                <span className='text-red-500'>
                  {errors.name.message}
                </span>
              </div>
            }
          </div>
          {/* 비밀번호 입력 */}
          <div className="mb-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-800">Password</label>
            <input type="password" name="" id="password" className="w-full px-4 py-2 mt-2 bg-white border rounded-md" {...register('password', userPassword)}/>
            {
              errors?.password && 
              <div>
                <span className='text-red-500'>
                  {errors.password.message}
                </span>
              </div>
            }
          </div>
          {/* 버튼 */}
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 font-semibold text-white duration-200 bg-black rounded-md hover:bg-gray-700">회원가입</button>
          </div>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            아이디가 있다면? {""}
            <a href="/login" className="font-medium hover:underline">로그인</a>
          </p>
        </form>
      </div>

    </section>
  )
}

export default RegisterPage