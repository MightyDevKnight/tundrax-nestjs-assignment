## Cat Adoption Agency RESTful API

Welcome to the Cat Adoption Agency RESTful API! This API allows you to manage cat profiles and user interactions for an adoption agency.

### Key Features

1. **Cat Profiles**: Create, read, update, and delete profiles for cats available for adoption.
2. **User Authentication**: Secure user registration and login functionality.
3. **Favorites**: Allow authenticated users to mark cats as favorites.

### Technical Specifications

- **Database**: PostgreSQL with TypeORM for data persistence.
- **Authentication**: Passport.js with JWT tokens.
- **Validation**: Utilizes class-validator and class-transformer for input validation and serialization.

### Endpoints

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Authenticate a user and return a JWT.
- **GET /cats**: Retrieve a list of all cats.
- **POST /cats**: Create a new cat profile (admin only).
- **GET /cats/{id}**: Retrieve a cat profile by ID.
- **PUT /cats/{id}**: Update a cat profile by ID (admin only).
- **DELETE /cats/{id}**: Delete a cat profile by ID (admin only).

### Submission Guidelines

1. **GitHub Repository**: Push the code to your GitHub repository and send the link to us.
2. **README.md**: Include setup instructions, how to run the application, and a summary of the technologies used.

### Evaluation Criteria

- **Functionality**: Ensure all endpoints work as expected and meet the requirements.
- **Code Quality**: Maintain clean, organized, and well-documented code.
- **Security**: Proper implementation of authentication and authorization checks.
- **Testing**: Include unit and integration tests for key components and endpoints.

### Setup Instructions

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Set up a PostgreSQL database and load connection information from the environment file.
4. Run the application using `npm start`.
5. Access the API endpoints using a tool like Postman or a web browser.

### Technologies Used

- Node.js
- Nest.js
- PostgreSQL
- TypeORM
- Passport.js
- JWT Tokens
- Class-validator
- Class-transformer## Cat Adoption Agency RESTful API

Welcome to the Cat Adoption Agency RESTful API! This API allows you to manage cat profiles and user interactions for an adoption agency.

### Key Features

1. **Cat Profiles**: Create, read, update, and delete profiles for cats available for adoption.
2. **User Authentication**: Secure user registration and login functionality.
3. **Favorites**: Allow authenticated users to mark cats as favorites.

### Technical Specifications

- **Database**: PostgreSQL with TypeORM for data persistence.
- **Authentication**: Passport.js with JWT tokens.
- **Validation**: Utilizes class-validator and class-transformer for input validation and serialization.

### Endpoints

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Authenticate a user and return a JWT.
- **GET /cats**: Retrieve a list of all cats.
- **POST /cats**: Create a new cat profile (admin only).
- **GET /cats/{id}**: Retrieve a cat profile by ID.
- **PUT /cats/{id}**: Update a cat profile by ID (admin only).
- **DELETE /cats/{id}**: Delete a cat profile by ID (admin only).

### Submission Guidelines

1. **GitHub Repository**: Push the code to your GitHub repository and send the link to us.
2. **README.md**: Include setup instructions, how to run the application, and a summary of the technologies used.

### Evaluation Criteria

- **Functionality**: Ensure all endpoints work as expected and meet the requirements.
- **Code Quality**: Maintain clean, organized, and well-documented code.
- **Security**: Proper implementation of authentication and authorization checks.
- **Testing**: Include unit and integration tests for key components and endpoints.

### Setup Instructions

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Set up a PostgreSQL database and load connection information from the environment file.
4. Run the application using `npm start`.
5. Access the API endpoints using a tool like Postman or a web browser.

### Technologies Used

- Node.js
- Nest.js
- PostgreSQL
- TypeORM
- Passport.js
- JWT Tokens
- Class-validator
- Class-transformer