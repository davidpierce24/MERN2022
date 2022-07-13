import express from "express";
import { faker } from '@faker-js/faker';

// const express = require("express");
// const faker = require("faker");
// const faker = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const userObject = () => {
    const newUser = {
        password:faker.internet.password(), 
        email:faker.internet.email(), 
        phoneNumber:faker.phone.phoneNumber(),
        lastName:faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id:faker.random.numeric(),
    }
    return newUser;
}


const companyObject = () => {
    const newCompany = {
        _id:faker.random.numeric(),
        name:faker.company.companyName(),
        address: {
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country(),
        }
    }
    return newCompany;
}

const newFakeUser = userObject()
console.log(newFakeUser);

const newFakeCompany = companyObject()
console.log(newFakeCompany);

app.get("/api/user/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/company/new", (req, res) => {
    res.json(companyObject());
});

app.get("/api/user/company", (req, res) => {
    res.json({user:userObject(), company:companyObject()});
});





app.listen( port, () => console.log(`Listening on port: ${port}`) );