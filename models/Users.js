import mongoose from 'mongoose';
import validator from 'mongoose-validator';

const userSchema = mongoose.Schema({
    avatar: String,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        validate: validator({
            validator: 'isEmail',
            message: 'Introduce un email válido, por favor.'
        })
    },
    password: String,
    products: {
        type: [],
        default: []
    }

});

const userModel = mongoose.model('user', userSchema);

export default userModel;