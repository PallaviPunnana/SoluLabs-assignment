
## Installation of packages

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

```
## Consuming the APIs
After running the application,  open the below link in the browser, it has the swagger documentation and through this, we can consume the APIs in this project.
http://localhost:3000/api

## Test

```bash
# unit tests
$ npm run test:watch
```

## Description of the project
The aim of the project is to create APIs to record a payment made by a client when requested by a buyer on any purchase.
This project has 3 modules.
Client
Buyer
Payment
In client module, we provide the login credentials of the client so that he can login and create a payment for the buyer. 
In buyer module, we check if the credit card details given by the user are valid or not.
In payment module, we create a payment for the buyer. Auth token of the client is required in this step as only client can initiate the payment. The transaction details are stored in an array in this project. This API returns the transactionId of the transaction, which can be used to get the payment details.
To get the details of the payment, we give transaction Id that is obtained in the previous API.

The payment processing is mimicked, if the type given is 'boleto', the status of the payment is set to 'pending'; if the type is 'card', a status is assigned 'success' or 'failure' randomly.

