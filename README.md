
# Web Application Security Enhancement Project
This project focuses on enhancing the security of a web application by implementing various measures such as input validation, password hashing, authentication mechanisms, and penetration testing. The goal is to identify and mitigate potential vulnerabilities, ensuring the application adheres to legal and professional standards.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Security Measures](#security-measures)
- [Penetration Testing](#penetration-testing)
- [Logging](#logging)
- [Contributing](#contributing)
- [License](#license)


![alt text](https://github.com/FaizAlam/user-management-system/blob/master/Images/Img1.png?raw=true)
![alt text](https://github.com/FaizAlam/user-management-system/blob/master/Images/Img2.png?raw=true)
![alt text](https://github.com/FaizAlam/user-management-system/blob/master/Images/Img3.png?raw=true)

## Project Description

The User Management System aims to improve the security posture of a Node.js-based web application. By integrating best practices such as input validation, password hashing using bcrypt, token-based authentication with JSON Web Tokens (JWT), and conducting basic penetration testing, the project seeks to identify and address potential security risks. Additionally, the implementation of logging mechanisms using the winston library facilitates monitoring and auditing of application activities.

## Features

- Input validation to prevent injection attacks
- Password hashing using bcrypt for secure storage
- Token-based authentication with JWT
- Basic penetration testing using Nmap
- Logging of application activities with winston

## Prerequisites

- Node.js installed
- npm (Node Package Manager)
- MongoDB database

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AbdulKarim-developer/User-Management-System.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd user-management-system
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

## Usage

1. **Start the application:**

   ```bash
   npm start
   ```

2. **Access the application:**

   Open your browser and navigate to `http://localhost:3000`.

## Security Measures

- **Input Validation:** Implemented to prevent SQL injection and cross-site scripting (XSS) attacks.

- **Password Hashing:** Passwords are hashed using bcrypt before storage to enhance security.

- **Authentication:** Implemented token-based authentication using JWT to ensure secure user sessions.

## Penetration Testing

Basic penetration testing was conducted using Nmap to identify open ports and potential vulnerabilities. The results were analyzed, and necessary security measures were implemented to mitigate identified risks.

## Logging

Application activities are logged using the winston library, facilitating monitoring and auditing. Logs are stored in `security.log` for review.

## Contributing

Contributions are welcome. Please fork the repository and create a pull request with your proposed changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
