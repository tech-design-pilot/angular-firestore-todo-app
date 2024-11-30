Here’s a sample `README.md` file for your **Angular and Firestore To-Do App**:

---

# Angular Firestore To-Do App

A simple and intuitive To-Do application built with **Angular** and **Firestore**. This app allows users to create, update, delete, and manage tasks in real time using Firestore's powerful cloud database.

## Features
- Add, update, and delete tasks in real time.
- Persistent data storage with Firestore.
- Responsive and modern UI using Angular.
- Built for learning Angular and Firebase integration.

## Demo
![image](https://github.com/user-attachments/assets/3add1e33-b498-475e-8547-f50140892d63)
![image](https://github.com/user-attachments/assets/299c7072-faaa-4118-a641-d8bf51186c49)


## Prerequisites
- [Node.js](https://nodejs.org/) installed.
- Firebase account with a Firestore database.

## Getting Started
Follow these steps to set up the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/tech-design-pilot/angular-firestore-todo-app.git
cd angular-firestore-todo-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Setup
1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Enable Firestore in the Firebase dashboard.
3. Add a web app to your project and copy the Firebase configuration.

### 4. Add Firebase Config
Replace the content of `environment.ts` with your Firebase configuration:
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
  },
};
```

### 5. Run the Application
```bash
ng serve
```
Open [http://localhost:4200](http://localhost:4200) to see the app in action.

## Technologies Used
- **Angular**: Frontend framework.
- **Firebase Firestore**: Real-time database.
- **AngularFire**: Firebase integration for Angular.

## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Replace placeholders like `your-username` and `your-app-id` with actual values.
