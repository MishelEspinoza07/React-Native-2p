# Examen 2do Parcial de la Certificacion de React-Native

Este proyecto está creado con Expo CLI y aquí encontrarás las instrucciones para instalar y ejecutar la aplicación.

## Requisitos del Sistema

- **Node.js (LTS)**
- **macOS**, **Windows (Powershell y WSL 2)**, y **Linux** son compatibles.

## Instalación


### 1. Clonar el repositorio

Clona este repositorio en tu computadora local:
```sh
git https://github.com/MishelEspinoza07/React-Native-2p.git
cd SegundoParcial
```
## Para Frontend
### 1. Realizar los siguientes comandos
```sh
cd gallery-frontend
```
Asegúrate de tener Expo CLI instalado globalmente en tu sistema:
```sh
npm install -g expo-cli
```

Instala las dependencias del proyecto usando npm:
```sh
npm install
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context   
```
### 2. Levantar frontend
Inicia el servidor de desarrollo de Expo:
```sh
npm start
```
### 3. Escanea el codigo QR
Escanea el código QR que aparece con Expo Go (Android) o con la aplicación de Cámara (iOS).

## Para Backend
### 1. Realizar los siguientes comandos
```sh
cd gallery-backend
npm install firebase-admin --save    
npm install express
npm install nodemon   
npm install body-parser    
```
### 2. Levantar backend
```sh
npm run dev
```
