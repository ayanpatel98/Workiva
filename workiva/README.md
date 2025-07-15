## AI Chat Frontend

Created a React JS frontend application that integrates OpenAI's API using Bootstrap styling and fetch calls.

## Tech Stack
- React JS 19 
- Bootstrap 5
- OpenAI API | used model: gpt-3.5-turbo

## Features Implemented
- Text area for AI prompts and Ask AI buttom
- Display AI Response
- Responsive Bootstrap design
- Real-time AI responses (GPT-3.5)
- Chat history with timestamps
- Clear conversation history
- Loading states and error handling

## Project Structure
- App.js is the main component
- The 'components' folder include 'ChatUI.js' (contains the whole chat section) and 'ChatHistory.js' (for displaying conversation) components.
- 'service' folder contains the api calls.

## Steps to setup the project:
# 1. Project Setup
    - Run `npm install` command in the root directory of the project to install dependencies
    - After installing, run `npm start` to start the server

# 2. Set Up / Modify the OpenAI API Key
    -> Getting an OpenAI API KEY:
    - Go to [platform.openai.com](https://platform.openai.com/api-keys)
    - Sign up or log in
    - Navigate to API Keys section
    - Create a new API key

    -> Adding it in the project:
    - Navigate to the '.env' file in the root directory
    - The value of 'REACT_APP_OPENAI_API_KEY' attribute is the API Key, modify it to use another API Key.
    - Make sure your API key is valid and has credits
    - Restart the development server after modifying the API key

# 3. Open Browser
    - Navigate to `http://localhost:3000`

