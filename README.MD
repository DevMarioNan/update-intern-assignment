# Update Company Assignment

This project is an assignment for Update Company, built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the Project:**
   ```bash
   git clone https://github.com/DevMarioNan/update-intern-assignment.git
   cd update-intern-assignment
   ```

2. **Run the Client:**
   - Go to the client folder:
     ```bash
     cd client
     ```
   - Run the development server:
     ```bash
     npm run dev
     ```

3. **Configure Server:**
   - Go to the server folder:
     ```bash
     cd ../server
     ```
   - Create a `.env` file with the following attributes:
     ```env
     DB_URL=your_mongodb_connection_url
     PORT=5000  # Choose a port number
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Run the Server:**
   - Run the development server:
     ```bash
     npm run dev
     ```

Now, your Update Company Assignment project should be up and running locally.

## Authorization

This project uses JSON Web Tokens (JWT) for authorization. Ensure that you provide a secure JWT secret key in the `.env` file.

## Project Structure

- `client`: Contains the React frontend.
- `server`: Contains the Node.js backend.

## Technologies Used

- MongoDB: Database
- Express.js: Backend framework
- React: Frontend library
- Redux: Frontend State manager
- Node.js: Runtime environment
- JSON Web Tokens (JWT): Authorization
