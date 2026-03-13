# GuideLight

GuideLight is a **voice-first indoor navigation assistant for visually impaired users**.  
It helps users navigate large indoor spaces like malls using **voice interaction, camera guidance, and safety alerts**.

---

## Problem

Millions of visually impaired people face difficulty navigating indoor public spaces such as malls because GPS does not work indoors and most navigation systems rely on visual interfaces.

---

## Solution

GuideLight enables users to **navigate malls independently** through voice interaction and camera-based guidance.

---

## Features

- Voice-first interaction designed for visually impaired users  
- Mall selection and destination selection through voice prompts  
- Camera-based navigation guidance  
- Obstacle warning alerts  
- Step-by-step voice navigation instructions  
- Emergency **SOS alert system**

---

## Tech Stack

- **Frontend:** React Native (Expo)
- **Backend:** Firebase
- **Computer Vision:** OpenCV *(planned for full implementation)*
- **AI Models:** TensorFlow Lite *(planned for obstacle detection)*
- **Voice Interaction:** Speech APIs

---

## Project Structure

```
GuideLight
│
├── app
│   ├── splash.tsx        # Splash screen when the app starts
│   ├── mall.tsx          # Voice interaction for mall and destination selection
│   ├── camera.tsx        # Camera navigation and obstacle guidance
│   ├── navigation.tsx    # Navigation guidance screen
│   ├── voice.tsx         # Voice interaction logic
│
├── app.json              # Expo configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
```

---

## Application Flow

```
Open App
↓
Splash Screen
↓
Voice Assistant Prompt
↓
Mall Selection
↓
Destination Selection
↓
Camera Navigation Guidance
↓
Obstacle Detection Alerts
↓
Destination Reached
```

---

## Running the Project

### Install dependencies

```bash
npm install
```

### Start the app

```bash
npx expo start
```

Open the project using **Expo Go** on your mobile device.

---

## Future Improvements

- Real-time speech recognition
- AI-based obstacle detection
- Indoor positioning using Bluetooth beacons
- Dynamic indoor route navigation

---

## Hackathon Project

This project was developed as part of a **college hackathon focused on improving accessibility and independence for visually impaired individuals**.