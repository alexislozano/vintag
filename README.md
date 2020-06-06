# VINTAG

Simple clone of Vinted using Vue.js and Express.js

Warning : This project was created to explain front-end development, do not use the back-end in production, it is highly insecure (passwords in clear...)

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
* picture: string
* brand: string
* *user_name*
* *category_name*

### Category

* **name**: string
* icon: string

### Like

* **id**: int
* *user_name*
* *product_name*

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
| GET | /products?search=:search:&category=:category_name: | |
| GET | /categories | |
| PUT | /users/:name: | {name: string, profile_pic: string, bank_number: string, address: string, country: string, gender: string, night_mode: bool} |
| POST | /likes | {user_name: int, product_name: int} | |
| DELETE | /likes/:id: | |
