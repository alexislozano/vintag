# VINTAG

Simple clone of Vinted using Vue.js and Express.js

Warning : This project was created to explain front-end development, do not use the back-end in production, it is highly insecure (passwords in clear...)

## Run front

```bash
>> npm install
>> npm run serve
```

It should run on <http://localhost:8080>

## Run back

Install sqlite on your computer

```bash
>> npm install
>> npm run init #this will create base.db and populate it
>> npm run serve
```

It should run on <http://localhost:3000>

## Domain objects

### User

* **name**: string
* password: string
* profile_pic: string
* bank_number: string
* address: string
* country: string
* gender: string
* night_mode: bool

### Product

* **name**: string
* price: int
* picture: string
* brand: string
* *user_name*
* *category_name*

### Category

* **name**: string
* icon: string

### Like

* ***user_name***
* ***product_name***

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
| GET | /products?search=:search:&category=:category_name: | |
| GET | /categories | |
| PUT | /users/:name: | {profile_pic: string, bank_number: string, address: string, country: string, gender: string, night_mode: bool} |
| POST | /likes | {user_name: string, product_name: string} | |
| DELETE | /likes/:user_name:/:product_name | |
