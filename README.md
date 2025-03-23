# Nutritionist App
Welcome to the **Nutritionist App**! This application helps you manage your nutrition, track meals, set health goals, and get personalized recommendations using AI-powered analysis.
---
## How to Use
### 1. **Install Dependencies**
Make sure you have Python 3.8+ installed. Then, install the required packages by running:
```bash
pip install -r requirements.txt
```
### 2. **Set Up Environment Variables**
- Create a `.env` file in the root directory.
- Add the following variables to the `.env` file:
  ```plaintext
  GOOGLE_API_KEY=your_google_api_key
  FIREBASE_CREDENTIALS=your_firebase_credentials_json
  ```
  -Firebase Example=
  -FIREBASE_CREDENTIALS = '''
{
  "type": "service_account",
  "project_id": "your_project_id",
  "private_key_id": "your_private_key_id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your_client_email",
  "client_id": "your_client_id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your_client_email"
}
'''
  - Replace `your_google_api_key` with your actual Google API key.
  - Replace `your_firebase_credentials_json` with your Firebase credentials in JSON format.
### 3. **Run the App**
Start the app by running:
```bash
streamlit run main.py
```
### 4. **Access the App**
- Open your web browser and go to `http://localhost:8501`.
- Use the sidebar to navigate between different features:
  - **Food Analysis**: Upload food images and get detailed analysis.
  - **Profile Management**: Update your personal profile.
  - **Meal Tracking**: Log and track your meals.
  - **Goal Setting**: Set and manage your health goals.
  - **Nutrition Chatbot**: Chat with the AI nutritionist for advice and recommendations.
---
## Firebase Setup
1. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and add a web app to it.
   - Download the Firebase credentials JSON file.
2. **Add Firebase Credentials**:
   - Copy the contents of the Firebase credentials JSON file and paste it into the `.env` file as the `FIREBASE_CREDENTIALS` variable.
---
## Google API Key
1. **Get a Google API Key**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Enable the Gemini API and generate an API key.
2. **Add the Google API Key**:
   - Add the API key to the `.env` file as the `GOOGLE_API_KEY` variable.
---
## Screenshots
![Food Analysis](screenshots/food_analysis.png)  
*Analyze your food and get nutritional information.*
![Meal Tracking](screenshots/meal_tracking.png)  
*Track your meals and monitor your daily intake.*
![Nutrition Chatbot](screenshots/chatbot.png)  
*Get personalized advice from the AI nutritionist.*
---
## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.
---
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
---
## Support
If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/your-repo/nutritionist-app/issues).
---
Enjoy using the Nutritionist App! 🥗
