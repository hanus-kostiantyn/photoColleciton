# Photo Collection

This is a simple photo collection web application built with React. The application allows users to browse through different categories of photos, filter them by name, and navigate through different pages of collections.

## Features

- **Category Filtering**: Users can filter photos based on predefined categories (e.g., All, Sea, Mountains, Architecture, Cities).
- **Search Functionality**: Users can search for photos by name using the search bar.
- **Pagination**: The application supports pagination, allowing users to browse through multiple pages of photo collections.
- **Responsive Design**: The app layout is designed to be responsive and user-friendly.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS/SCSS**: Used for styling the components.
- **MockAPI**: The application fetches data from a mock API to simulate backend functionality.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hanus-kostiantyn/photoColleciton.git
   ```

2. Navigate to the project directory:

   ```bash
   cd photoColleciton
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

### Folder Structure

- **public/**: Contains the static files such as `index.html`, icons, and the data file (`data.json`).
- **src/**: Contains the source code of the application.
  - **App.js**: The main component that manages the state and logic of the app.
  - **Collection.jsx**: A component responsible for rendering individual photo collections.
  - **index.js**: The entry point for rendering the React application.
  - **index.scss**: The main stylesheet for the application.

### Usage

- **Filter by Category**: Click on any category in the top bar to filter photos by that category.
- **Search by Name**: Use the search bar to filter photos by their name.
- **Pagination**: Use the pagination buttons at the bottom to navigate through different pages of photo collections.

### API

The application uses a mock API to fetch photo collections. The API endpoint used in this project:

```
https://66c1b7fdf83fffcb587a04e7.mockapi.io/photoCollection
```

### Contributing

If you wish to contribute to this project, feel free to fork the repository and submit a pull request.

### License

This project is open-source and available under the [MIT License](LICENSE).

### Acknowledgements

- Special thanks to [MockAPI](https://mockapi.io/) for providing the mock backend service.
```
