'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Cart from './Cart';
function AppBar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    signIn(null, { callbackUrl: '/' });
  };

  const handleSignUp = () => {
    router.push('/signup');
  };
  const userIcon = "/profile-icon-9.png";
  let username = JSON.stringify(session?.user.name);
  return (
    <div>
      {
        status != "authenticated" && <div>
        <button onClick={handleSignIn} className='mr-4 py-1 px-2 border border-gray-400 rounded-md text-sm bg-black text-white  focus:outline-none'>Sign In</button>
        <button onClick={handleSignUp} className='py-1 px-2 border border-gray-400 rounded-md text-sm bg-black text-white  focus:outline-none'>Sign Up</button>
      </div>
      }
     
      <div className='flex justify-center items-center'>
      <div>
        {
            status == "authenticated" && (
                <div className='flex'>
                    <div>
                        <Image alt="" width={30} height={30} className="" src={userIcon} priority ></Image>
                    </div>
                    <div className='mt-1'>
                    {username}
                    </div>
                    <div>
                        <Cart></Cart>
                        {/* <Counter></Counter> */}
                        
                    </div>
                </div> 
            )

        }
      </div>
      {status === 'authenticated' && (
        <div>
          <button onClick={signOut} className='ml-4 py-1 px-2 border border-gray-400 rounded-md text-sm bg-black text-white  focus:outline-none'>Sign Out</button>
        </div>
      )}
      
      </div>



    </div>
  );
}

export default AppBar;
