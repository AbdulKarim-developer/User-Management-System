# User Management System - Secured Web App

This project focuses on enhancing the security of a web application by implementing advanced security measures such as input validation, password hashing, API rate limiting, CORS configuration, content security policies, penetration testing, logging, and real-time monitoring. The goal is to identify, mitigate, and prevent vulnerabilities, ensuring the application adheres to professional cybersecurity standards.

![alt text](https://github.com/FaizAlam/user-management-system/blob/master/Images/Img1.png?raw=true)
![alt text](https://github.com/FaizAlam/user-management-system/blob/master/Images/Img2.png?raw=true)
![alt text](https://github.com/FaizAlam/user-management-system/blob/master/Images/Img3.png?raw=true)

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Security Measures](#security-measures)
- [Penetration Testing](#penetration-testing)
- [Logging](#logging)
- [Advanced Security Enhancements](#advanced-security-enhancements)

## Project Description

The User Management System is a Node.js-based web application integrated with MongoDB for user data management.
This project implements modern cybersecurity practices including input validation, protection against XSS and NoSQL Injection, secure API development, logging, penetration testing, and real-time monitoring to strengthen the system’s defenses.

## Features

- Input validation to prevent XSS and NoSQL Injection attacks.
- API rate limiting to mitigate brute-force attacks.
- CORS configuration to restrict unauthorized API access.
- Password hashing using bcrypt (future enhancement for login-based systems).
- Secure HTTP headers with Helmet.js.
- Real-time monitoring simulation with Winston logs.
- Penetration testing using Nmap and security analysis tools.
- Logging of security events into security.log file.

## Prerequisites

- Node.js installed
- npm (Node Package Manager)
- MongoDB installed or access to a MongoDB Atlas cluster

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your_username/User-Management-System.git
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

- **Input Validation & Sanitization** using Validator.js.

- **Rate Limiting** using Express Rate Limit middleware to prevent brute-force attacks.

- **CORS Restriction** to allow only trusted domains to access APIs.

- **API Key Authentication** for protected endpoints.

- **Content Security Policy (CSP)** enforced with Helmet.js.

- **Strict-Transport-Security (HSTS)** enabled for HTTPS enforcement.

- **NoSQL Injection Prevention** by validating MongoDB ObjectIds.

## Penetration Testing

- Conducted **Nmap scans** to identify open ports and ensure minimal service exposure.

- Simulated **SQL Injection** attacks and fixed vulnerabilities using prepared statements.

- Simulated **CSRF** attacks and protected forms using CSURF middleware.

- Conducted basic security audits using OWASP ZAP and Nikto scanners.

## Logging

- Application events (failed login attempts, API misuse) are recorded using **Winston logger**.

- Logs are written to both console output and security.log file.

- Helps in intrusion detection and monitoring suspicious activities.

## Advanced Security Enhancements

- Simulated real-time monitoring (similar to Fail2Ban behavior).

- Implemented CSP directives to control allowed sources.

- Used Helmet.js to secure common HTTP headers.

- API secured with rate-limiting, CORS policy, and API Key authorization.

- Ethical hacking exercises performed and documented.
