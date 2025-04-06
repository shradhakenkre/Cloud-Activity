# ☁️ Cloud-Activity

## 📝 Task Management API

A simple Node.js application that provides an API for task management and serves static HTML files for the user interface.
![Deployment Status](https://deploy-badge.vercel.app/api?url=https://your-deployment-url.com)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Cors](https://img.shields.io/badge/Cors-0000FF?style=for-the-badge)
![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge)

## 🌐 Live Demo

Check out the application: [Cloud-Activity Live](https://cloud-activity-1.onrender.com/)

## ✨ Features

- **Task Management**: Easily add tasks to the system.

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime environment that executes server-side code.
- **Express.js**: Web application framework for Node.js, used to build the RESTful API.
- **MongoDB Atlas**: Cloud-based NoSQL database for storing task data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: Loads environment variables from a `.env` file.

## 🚀 Deployment

The application is deployed on [Render](https://render.com/), a cloud platform for hosting web services. To ensure proper functionality:

- **Environment Variables**: Set the `MONGODB_URI` environment variable in your Render service with your MongoDB Atlas connection string. This allows your application to connect securely to the database.

- **IP Whitelisting**: Add Render's static outbound IP addresses to your MongoDB Atlas IP Access List. This ensures that your Render service can communicate with your MongoDB Atlas cluster. For detailed steps, refer to Render's documentation on [Connecting to MongoDB Atlas](https://render.com/docs/connect-to-mongodb-atlas).

## 🗄️ Data Storage with MongoDB Atlas

The application utilizes [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for data storage. MongoDB Atlas is a fully managed cloud database service that offers scalability and flexibility. Ensure that your MongoDB Atlas cluster is properly configured to accept connections from your Render service by following the deployment steps mentioned above.
