### SHOPIX

Ecommerce Web Application built with the MERN Stack. Inspired by Mpho Moipolai

### Software Requirements

Technology Stack: I have chosen the MERN stack, which is a popular choice for building web applications. MongoDB for the database, Express for the backend, React for the frontend, and JWT for authentication.

Deployment: GitHub and Render.

Styling: Bootstrap and React Bootstrap are excellent choices for styling as they provide pre-designed components and make UI development more efficient.

Application Workflow: I have described how the application will work, focusing on user interactions between the frontend (React) and the backend (Express, MongoDB). This provides a clear overview of the system's functionality.

Differentiation: My application is just a simple eccomerce web application, with a simple design, just focusing on helping the user
to easily find the way around the application.

### System Requirements Specifications:

### Functional Requirements:

1. User Registration and Authentication:

- User registration and login functionality.
- Password reset and recovery options.
- Secure authentication mechanisms.

2. Product Catalog:

- Display product listings with images, descriptions, and prices.
- Categorize products into different sections and categories.
- Provide search and filtering options for users to find products easily.

3. Shopping Cart:

- Allow users to add and remove products from their shopping cart.
- Display the total order amount and item count in the cart.
- Enable users to edit quantities and update the cart.

4. Checkout Process:

- Support a multi-step checkout process.
- Collect shipping and billing information.
- Offer various payment options (credit card, PayPal, etc.).
- Calculate taxes and shipping costs.
- Provide order review and confirmation before finalizing the purchase.

5. Payment Processing:

- Secure payment gateway integration.
- Handling of payment errors and declined transactions.
- Support for multiple currencies and payment methods.

6. User Profiles and Account Management:

- Allow users to manage their profiles and personal information.
- View order history and track shipments.
- Save multiple shipping addresses.

7. Product Reviews and Ratings:

- Allow customers to leave reviews and ratings for products.
- Display average ratings and user-generated content.

8. Inventory Management:

- Manage product availability and stock levels.
- Display "out of stock" notifications.
- Automatic restocking notifications for administrators.

9. Order Management:

- Provide administrators with tools to manage orders.
- Generate invoices and packing slips.
- Handle order cancellations and refunds.

10. Shipping and Logistics:

- Integration with shipping carriers for real-time shipping quotes.
- Order tracking for customers.
- Generate shipping labels and packing lists.

11. Security:

- Implement security measures to protect user data.
- Use HTTPS encryption for secure data transmission.
- Regularly update and patch software to prevent vulnerabilities.

12. Mobile Responsiveness:

- Ensure the website is mobile-friendly for users on smartphones and tablets.

13. Search Engine Optimization (SEO):

- Implement SEO best practices to improve visibility on search engines.
- Create SEO-friendly URLs and meta tags.

14. Analytics and Reporting:

- Integrate analytics tools to track user behavior and sales performance.
- Generate reports on website traffic, sales, and customer demographics.

15. Customer Support and Contact:

- Provide contact information and support channels (email, chat, phone).
- Include a FAQ section and knowledge base.

16. Social Media Integration:

- Allow users to share products on social media.
- Display social media feeds and links.

17. Multi-language and Multi-currency Support:

- Cater to a global audience by supporting multiple languages and currencies.

18. Accessibility:

- Ensure the website is accessible to users with disabilities (ADA compliance).

19. Content Management:

- Easily update and manage website content (product listings, banners, etc.).
- Support for blogs and news sections.

20. Recommendation Engine:

- Implement product recommendations based on user behavior and preferences.

21. Return and Refund Process:

- Provide a clear policy for returns and refunds.
- Allow users to initiate return requests.

22. Privacy and Data Protection:

- Comply with data protection regulations (e.g., GDPR, CCPA).
- Securely store and handle customer data.

23. Backup and Disaster Recovery:

- Regularly backup website data and implement disaster recovery procedures.

24. User Notifications:

- Send email notifications for order confirmations, shipping updates, and promotions.

### Non-Functional Requirements:

1. Performance:

- Response Time: Define maximum acceptable response times for different website functions (e.g., product search, page loading, checkout).
- Scalability: Ensure the website can handle increased traffic during peak periods without performance degradation.
- Concurrency: Specify the number of simultaneous users the system should support without performance issues.

2. Security

- Data Encryption: Implement encryption for sensitive data (e.g., payment information, user credentials).
- Access Control: Define roles and permissions for administrators and users.
- Firewalls and Intrusion Detection: Protect the website from unauthorized access and attacks.
- Regular Security Audits: Conduct security audits and vulnerability assessments periodically.

3. Data Management:

- Data Privacy: Comply with data protection regulations (e.g., GDPR, CCPA) and specify data retention policies.
- Data Backup: Define backup frequency and retention policies for customer and transaction data.

4. Localization:

- Consider non-functional requirements related to website localization, such as language and currency support.

5. Cost and Budget Constraints:

- Define budget constraints and cost-effective measures for hosting, maintenance, and development.

6. Mobile App Integration:

- Specify requirements for integration with mobile applications, if applicable.

### Installation

To run the client and server simultaneously, you can use concurrently to execute multiple commands in parallel. Add the following script to your package.json:

"dev": "concurrently -n 'server,frontend' \"node index.js\" \"npm run frontend\""

Alternatively, you can start the server and client separately:

Start the server:
npm start

Start the frontend:
cd frontend npm start

### Built with

ReactJS
Redux toolkit
NodeJS
ExpressJS
MongoDB
Bootstrap

### Deployment

I deployed both frontend and backend to render

### User Story

Title: User Registration

As a potential customer,

I want to create an account on the e-commerce website,

So that I can easily make purchases, track my orders, and receive updates on promotions and discounts.

## Acceptance Criteria:

1. When I visit the website's homepage, I see a "Sign Up" or "Create Account" button prominently displayed.
2. When I click on the "Sign Up" or "Create Account" button, I am directed to the registration page.
3. On the registration page, I see fields to enter my name, email address, and password.
4. The password field should provide feedback on password strength (e.g., weak, medium, strong).
5. I must enter a valid email address, and it should not already be associated with an existing account.
6. After entering my information, I can click a "Sign Up" or "Create Account" button to complete the registration process.
7. If I click the "Sign Up" or "Create Account" button without providing required information, I receive an error message prompting me to fill in all required fields.
8. Once I successfully register, I receive a confirmation email with a link to verify my email address.
9. I can log in using the credentials I just created.
