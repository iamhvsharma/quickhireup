## Backend Building Step by Step process

### Step 1: Project Initialization and File Structure

- npm init -y
- mkdir public\temp
- Make .gitignore
- touch .env
- Install Dependencies 
``` bash
npm i -D nodemon prettier
```
- touch .prettierrc .prettierignore ( and define them)
- Make Folder Structure
``` bash 
mkdir src
cd src
mkdir controllers, db, middlewares, modals, routes, utils
```
- Initialize files in src
``` bash
cd src
touch app.js constants.js index.js
```

### Step 2: Write code for database connection
- Install dependencies 
```bash
npm i express mongoose 
``` 
- Write code in constants.js
```js 
export const DB_NAME = "quickhireup";
```

- Write code in db/index.js for Database connection 
``` js 
import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(`\n MONGODB Connection Successful!! ${connectionInstance.connection.host} `)
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};



export default connectDB;
```


### Step 3: Initializing the Express app in app.js
``` js 
import express from "express"

// Creating App

const app = express();

export { app }
```

- Define connectDB function in src/index.js
``` js
connectDB()
  .then(() => {
    // Listening for error before app.listen
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB Connection failed !!!`, err);
  });
```



### Step 4: Installing Dependencies and configuring middlewares

- Install Packages
```bash 
npm install cookie-parser cors
```

- Import both packages in app.js

``` js
import cors from "cors";
import cookie-parser from "cookie-parser";

// Configuring Cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Adding express.json middleware
app.use(express.json({ limit: "16kb" }));

// Adding URLencoded middleware
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Adding Cookie Parser Middleware
app.use(cookieParser());
```

### Step 5: Creating Utilities 
- Create a file named as asyncHandler.js in utils directory

- asyncHandler Function is a Highorder function which accepts another function as a parameter 

```js 
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).
    catch((err) => next(err))
  }
}
```

// Another Approach (Not production level)
```js 
const asyncHandler = (func) => async(req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        res.status(err.code || 500).json({
            success: false, 
            message: err.message
        })
    }
}
```

### Step 6: Standardization of API Error and Response

- Create a Utility named as Apierror for Standardizing API Error handling
``` js
class Apierror extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if(stack){
        this.stack = stack;
    } else {
        Error.captureStackTrace(this, this.constructor)
    }
}
}



export { Apierror }
```

- Create a utility named as ApiResponse for standardizing the Api responses

```js
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }

}

export  {ApiResponse}
```


### Step 7: 

Creating routes

