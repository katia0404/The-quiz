import { FC, useState } from 'react';

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (

    <div className="mt-48 flex flex-col items-center justify-center bg-slate-900 | text-white">
      <h1 className="mb-16 text-center text-xl">

        {isLogin ? 'Login' : 'Registration'}
      </h1>

      <form className="mx-auto flex w-1/3 flex-col gap-5">
        <input type="text" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <button className="btn btn-green mx-auto">Submit</button>
      </form>

      <div className="flex justify-center mt-5">

        {isLogin ? (
          <button className='text-slate-300 hover:text-white'>
            
            You don't have an account?
          </button>
        ) : (
          // Button for creating an account would be here
        )}
      </div>
    </div>
  );
};
