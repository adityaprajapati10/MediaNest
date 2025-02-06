import {ApiError} from "../utils/ApiError";
import {asyncHandler} from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import {user} from "../models/user.model";
import { ApiError } from '..';
import { ApiError } from '..';

export const verifyJWT = asyncHandler(async(req,res, next) => {
    try {
        req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")
    
        if(!token){
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, proccess.env.ACCESS_TOKEN_SECRET)
    
        await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401, "Invaild Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invaild access token")
    }

})