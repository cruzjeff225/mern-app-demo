import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import { token } from "morgan";
import {createAccessToken} from '../libs/jwt.js'

export const register =  async (req, res) => {
    const {email, pass, username} = req.body

    try {
        const passHash = await bcrypt.hash(pass, 10)

        const newUser = new User ({
            username,
            email,
            pass: passHash,
        });
        const userSaved = await newUser.save();
        const token = await createAccessToken({id:userSaved._id})

        res.cookie('token', token)
        res.json({
        id: userSaved._id,

        
        username: userSaved.username,
        email: userSaved.email,
        createdAt: userSaved.createdAt,
        updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const login =  async (req, res) => {
    const {email, pass} = req.body;

    try {

        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({message: "User not found"});
        const isMatch= await bcrypt.compare(pass, userFound.pass);

        if (!isMatch) 
            return res.status(400).json({message : "Incorrect password"});

        const token = await createAccessToken({id:userFound._id});

        res.cookie('token', token)
        res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};