# Project Name - Unsplash News Feed and Profile Web App

This project is a web application built using Next.js that provides functionality similar to Instagram's news feed and profile section. It fetches random photos from the Unsplash API for the news feed and allows users to view a user's profile with their uploaded photos. The application uses custom CSS for styling and follows a well-defined folder structure.

## Getting Started

## Installation and Setup

To run this project locally, follow these steps:

Clone the repository:

```git clone https://github.com/rahulkushwaha-in/Groww.git```
#### Change  directory
```cd groww```

## Install the dependencies:
```npm install```
### or
```yarn install```
## Start the development server:
```npm run dev```
### or
```yarn dev```

Open your web browser and navigate to ```http://localhost:3000``` to see the application running.

## Features
### News Feed: 
It fetches 10 random photos from Unsplash API and supports infinite scroll for more content.

### Profile Section: 
Clicking on the user info section redirects to the users profile page, where it fetches the user details based on the username from the API and displays all the photos uploaded by the user in a grid structure view.

### Switching Views: 
The profile section allows users to switch between grid view and list view for the images selected.

### Caching: 
API responses are cached for a certain amount of time after the initial load to reduce redundant API calls.

### Routing: 
Dynamic routing is used to configure routes for user profiles dynamically.

### State Management: 
The application uses Zustand for state management.

### Loading States: 
Handles loading, empty, and error states for all scenarios.

### Responsive Design: 
The UI is made responsive and mobile-friendly.





