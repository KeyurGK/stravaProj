const express = require("express");
const {pool}=require("../../config/db")


const signUp = async(req,res)=>{
    const {firstName, lastName,emailId,password}=req.body;
    try{
        const createUserQuery = `
        CREATE TABLE IF NOT EXISTS USERS(
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(20) NOT NULL,
        lastName VARCHAR(20),
        emailId VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(15) NOT NULL)`;
        await pool.query(createUserQuery);

        const insertUserQuery = `
        INSERT INTO USERS(firstName,lastName,emailId,password)
        VALUES ($1,$2,$3,$4)`;
        const values = [firstName,lastName,emailId,password];
        const insertResult = await pool.query(insertUserQuery,values);
        res.status(200).json({
            success:"true",
            message:"Signup Succesful"
        })
    }catch(error){
        console.error(error);
        if(error.code==='23505'){
            res.status(200).json({
                success:"true",
                message:"Signup Succesful"
            })
        }else{
            
        }
    }
}

