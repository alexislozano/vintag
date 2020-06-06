# VINTAG

Simple clone of Vinted using Vue.js and Express.js

Warning : This project was created to explain front-end development, do not use the back-end in production, it is highly insecure (passwords in clear...)

## Domain objects

### User

* Name
* Password
* ProfilePic
* BankNumber
* Address
* Country
* Gender
* NightMode

### Product

* Name
* Picture
* Brand
* LikesNumber
* User
* Category

### Category

* Icon
* Name

### Like

* User
* Product

## Pages

* Signup
* Signin
* Home
* Search
* Profile

## Features

* Sign up
* Sign in
* Home shows all products
* Search shows a form and filters
* Profile shows editable user
* Products are likable

## Routes

| Command | Route | Input |
| --- | --- | --- |
| POST | /auth/signin | {name: string, password: string} |
| POST | /auth/signup | {name: string, password: string, profile_pic: string, bank_number: string, address: string, country: string, gender: string, night_mode: bool} |
| GET | /products | |
| GET | /products?search=:search:&category=:category: | |
| GET | /categories | |
| PUT | /users/:id: | {name: string, profile_pic: string, bank_number: string, address: string, country: string, gender: string, night_mode: bool} |
| POST | /likes | {user_id: int, product_id: int} | |
| DELETE | /likes/:id: | |
