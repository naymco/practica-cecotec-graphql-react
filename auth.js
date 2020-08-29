import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const auth = {
    getToken:  ({ _id}, SECRET)=>{
        const token = jwt.sign({_id}, SECRET, { expiresIn: '5d'});

        return token;
    },
    login: async (email, password, Users, SECRET)=>{
       
        const user = await Users.findOne({ email });
        if(!user){
            return {
                success: false, 
                errors: [{ path: 'email', message: 'Email o password incorrectos' }]
            }
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            return {
                success: false,
                errors: [ { path: 'password', message: 'Email o password incorrectos' }]
            }
        }

        const token = auth.getToken(user, SECRET);
        console.log(token);

        return{
            success: true,
            token: token,
            errors: []
        }
    }
}

export default auth;