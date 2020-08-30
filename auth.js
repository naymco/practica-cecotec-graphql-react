import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import models from "./models";

const auth = {

  checkHeaders: async (req, res, next) => {
    const token = await req.headers["x-token"];
    // console.log(req._id)
    if (token) {
      try {
        const { _id } =  jwt.verify(token, process.env.SECRET);
        req._id = _id;
    //    console.log(req._id)
      } catch (error) {
        const newToken = await auth.checkToken(token);
        // console.log(newToken)
         req._id = newToken.user;
         
        if(newToken.token){
             res.set("Access-Control-Expose-Headers", "x-token");
             res.set("x-token", newToken.token);
        }      
      }
    }
    next();
  },

  checkToken: async (token) => {
    let userId = null;
    // console.log("userId", userId)
    try {
      const { _id } = await jwt.decode(token);
      userId = _id;
      
    } catch (error) {

      return {};
    }

    const user = await models.Users.findOne({ _id: userId });
    //  console.log("User", user)
    const [newToken] = auth.getToken(user);
    
    
    return {
        user: user._id,
        token: newToken
    }
  },

  getToken: ({ _id }) => {
    const newToken =  jwt.sign({_id,},process.env.SECRET,{expiresIn: "5d"});
// console.log(newToken)
    return [newToken];
  },

  login: async (email, password, Users) => {
    const user = await Users.findOne({ email });
    if (!user) {
      return {
        success: false,
        errors: [
          {
            path: "email",
            message: "Email o password incorrectos",
          },
        ],
      };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return {
        success: false,
        errors: [
          {
            path: "password",
            message: "Email o password incorrectos",
          },
        ],
      };
    }

    const [newToken] = auth.getToken(user);
    

    return {
      success: true,
      token: newToken,
      errors: [],
    };
  },
};

export default auth;
