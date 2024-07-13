import { supabase } from "@/lib/supabase";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'credentials',
        credentials: {
          username: { label: 'username', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials) {
            // validate the user from DB
            // validate the credentials. if yes, nextauth creates a JWT with the user details + secret
            // next-auth sends the JWT to clinet as response for the first time
            // clinet stores the JWT in cookies
            // for each req client send the cookie
            // on server, nextauth decodes the received cookie (jwt) with secret key and verifies
            // thus, session management is achieved 
            console.log(credentials);
            const {username, password} = credentials
            
             // Hash the password before comparing
             const hashedPassword = await hashPassword(password);

             const { data, error } = await supabase
               .from('users')
               .select('*')
               .eq('username', username)
               .eq('password', hashedPassword);
 
             if (data && data.length > 0) {
               return {
                 name: username,
               };
             }
 
             return null;
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }