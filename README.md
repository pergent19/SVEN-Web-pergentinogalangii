SVEN-Web Project
This repository contains both the frontend and backend of the SVEN-Web project, providing a web-based solution to manage bookings.

Table of Contents
Technologies Used

Installation

Prerequisites

Steps to Set Up Frontend

Steps to Set Up Backend

Running the Application

Frontend

Backend

Troubleshooting

License

Technologies Used
Frontend: React.js

Backend: Node.js, PostgreSQL

Database Tools: pgAdmin

Installation
Prerequisites
Install Node.js and npm (Node Package Manager). You can download them here. npm will be installed automatically.

Install PostgreSQL and pgAdmin. You can use a local SQL server like pgAdmin.

Steps to Set Up Frontend
Navigate to the frontend directory:

bash
cd Ari-Lash-Luxe
npm install
npm run dev
Configure the API URL for communication with the backend: Create a .env file in the root of the frontend project with the following variable:

VITE_API_URL=http://localhost:5000/api
Replace http://localhost:5000 with your backend URL if necessary.

Steps to Set Up Backend
Navigate to the backend directory:

bash
cd server
npm install
npm run dev
Create a .env file in the root of the backend project with the following variables:

PG_USER=postgres
PG_HOST=localhost
PG_DATABASE=booking_db
PG_PASSWORD=root
PG_PORT=5432
PORT=5000
Replace the values with your backend configuration if necessary.

Running the Application
Start the Backend:

Running on: http://localhost:5000.

Start the Frontend:

Running on: http://localhost:3000.

Both components should be connected, allowing the frontend to communicate with the backend via the API.

Frontend
The frontend, built with React.js, handles the user interface and communicates with the backend via API calls.

Backend
The backend, built with Node.js, handles the server-side operations and interacts with the PostgreSQL database.

Troubleshooting
Ensure the backend and frontend environment variables are correctly set up.

Verify that all dependencies are installed with npm install.

Check the server logs for errors if any part fails to start.

License
This project is licensed under [Your License Name]. Replace with the actual license details.

Does this layout suit your needs?