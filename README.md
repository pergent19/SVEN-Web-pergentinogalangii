# SVEN-Web Project

This repository contains both the frontend and backend of the SVEN-Web project, providing a web-based solution to manage bookings.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps to Set Up Frontend](#steps-to-set-up-frontend)
  - [Steps to Set Up Backend](#steps-to-set-up-backend)
- [Running the Application](#running-the-application)
  - [Frontend](#frontend)
  - [Backend](#backend)

---

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, PostgreSQL
- **Database Tools**: pgAdmin

---

## Installation

### Prerequisites

- **Node.js** and **npm** (Node Package Manager): You can download and install them from [here](https://nodejs.org/). npm will be installed automatically with Node.js.
- **PostgreSQL** and **pgAdmin**: Install PostgreSQL for database management and pgAdmin as a graphical tool for interacting with the database. You can download pgAdmin from [here](https://www.pgadmin.org/).

### Steps to Set Up Frontend

1. **Navigate to the frontend directory**:

   ```bash
   cd Ari-Lash-Luxe

2. **Install dependencies:**:
    ```bash
    npm install

3. **Run the frontend in development mode**:
    ```bash
    npm run dev

4. **Configure the API URL for communication with the backend**:
    Create a .env file in the root of the frontend project and add the following variable:
    ```env
    VITE_API_URL=http://localhost:5000/api

    Replace http://localhost:5000 with your backend URL if necessary.


### Steps to Set Up Backend

1. **Navigate to the backend directory**:

   ```bash
   cd server
2. **Install dependencies:**:
    ```bash
    npm install

3. **Run the backend in development mode**:
    ```bash
    npm run dev

4. **Set up the environment variables**:
    Create a .env file in the root of the backend project with the following variables:
    ```env
    PG_USER=postgres
    PG_HOST=localhost
    PG_DATABASE=booking_db
    PG_PASSWORD=root
    PG_PORT=5432
    PORT=5000

### Running the Application 

## Start the Backend
The backend should be running on: http://localhost:5000.

## Start the Frontend
The frontend should be running on: http://localhost:5173/.

Both the frontend and backend should now be connected, allowing the frontend to communicate with the backend via the API.

## Frontend
The frontend is built with Vite React.js and handles the user interface of the application. It communicates with the backend through API calls to manage bookings.

## Backend
The backend is built with Node.js and ExpressJS and handles server-side operations. It interacts with a PostgreSQL database to store and retrieve booking data.