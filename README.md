# AI Chatbot

## Installation

1. Clone the repository:
```
git clone https://github.com/CodeFusionEhsan/Chatbot.git
```
2. Navigate to the project directory:
```
cd Chatbot
```
3. Install the required dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```

## Usage

The application provides an AI-powered chatbot that can assist users with product searches and recommendations. Users can interact with the chatbot by clicking the chat icon in the bottom right corner of the screen.

The chatbot supports the following features:

- Greeting and farewell messages
- Product search by brand, model, or price range
- Displaying a list of relevant products based on the user's query

## API

The backend of the application is built using Django and provides the following API endpoints:

- `POST /getProducts/`: Fetches a list of products based on the provided limit parameter.
- `POST /getProduct`: Fetches details of a specific product based on the provided product ID.
- `POST /chat`: Processes the user's chat input and returns a response or a list of relevant products.

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push your changes to your forked repository
5. Submit a pull request to the main repository

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To run the tests for the application, use the following command:

```
npm run test
```

This will execute the test suite and report the results.
