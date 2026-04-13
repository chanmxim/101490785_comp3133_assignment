# Employee Management App (COMP3133 Assignment 2)

A Employee Management application with **Angular** implementing **GraphQL**

---

## Deployment

https://101490785-comp3133-assignment-deplo.vercel.app/

## Instructions to Run Locally

1. **Clone the repository**  

2. **Navigate to the backend folder**

3. **Start the application**
```bash
npm run start
```
---

4. **Navigate to the frontend folder**

3. **Start the application**
```bash
ng serve
```
---

## Existing user for testing

username: "test"
email: "test@gmail.com"
password: "123456"

**Troubleshooting**  
- If there are any errors, they are most likely related to the database connection.  
- If the app cannot connect to the provided MongoDB Atlas, replace the connection string in `.env` with your own MongoDB Atlas URI.  
- Ensure that a database named `comp3133_101490785_Assigment2` exists in your MongoDB cluster.