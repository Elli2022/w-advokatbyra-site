# W Advokatbyrå React Application

## Overview
This repository contains the source code for the W Advokatbyrå website, a comprehensive React application designed to present the firm's information, services, and updates in a visually appealing and user-friendly manner. The application includes multiple components and pages, integrating video backgrounds, image displays, and dynamic news content. This project is a hobby endeavor for a Swedish law firm.

## Mobile-first and deployment

- The current UI is structured mobile-first and scales upward for tablet and desktop.
- Netlify build settings live in `netlify.toml`.
- Continuous validation and optional Netlify deployment live in `.github/workflows/netlify-deploy.yml`.
- Versioning guidance for keeping releases in the same repository lives in `docs/versioning-and-deploy.md`.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Pages](#pages)
- [Functions](#functions)
- [Styles](#styles)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/w-advokatbyra.git
   cd w-advokatbyra
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## Usage
To use the components and pages provided in this repository, ensure you have a React environment set up. Import and integrate the components as needed into your application.

## Components
### 1. Banner
A simple black banner component.
```jsx
import React from 'react';

function Banner() {
  return <div style={{ backgroundColor: 'black', width: '100%', height: '30px' }}></div>;
}

export default Banner;
```

### 2. Container
A padded container for wrapping other components.
```jsx
import React from 'react';

function Container({ children }) {
  return <div style={{ padding: '20px' }}>{children}</div>;
}

export default Container;
```

### 3. Video
A component for displaying background videos that switch every 5 seconds.
```jsx
import React, { useState, useEffect, useRef } from 'react';
import BackgroundVideo1 from '../videos/BackgroundVideo1.mp4';
import BackgroundVideo2 from '../videos/BackgroundVideo2.mp4';
import BackgroundVideo3 from '../videos/BackgroundVideo3.mp4';
import BackgroundVideo4 from '../videos/BackgroundVideo4.mp4';

function Video() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [BackgroundVideo1, BackgroundVideo2, BackgroundVideo3, BackgroundVideo4];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const switchToNextVideo = () => {
    setCurrentVideo((currentVideo + 1) % videos.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(switchToNextVideo, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentVideo]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <video key={currentVideo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted>
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
        <h1>MALMÖ</h1>
        <p>Mångfald, möten och möjligheter</p>
      </div>
    </div>
  );
}

export default Video;
```

### 4. Logo
A component for displaying the company logo.
```jsx
import React from 'react';
import logo from '../images/law-balance-symbol-libra-in-flat-design-png-image_3254506.jpg';

function Logo() {
  return <img src={logo} alt="Company Logo" style={{ width: '30px', height: '30px' }} />;
}

export default Logo;
```

## Pages
### 1. Home
The main landing page that includes a navbar, banners, video background, news section, and footer.
```jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LargeBanner from '../components/LargeBanner';
import Video from '../components/Video';
import NewsSection from '../components/NewsSection';
import HorisontalRule from '../components/HorisontalRule';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <LargeBanner />
      <Video />
      <NewsSection />
      <HorisontalRule />
      <Footer />
    </>
  );
}

export default Home;
```

### 2. About
A page that provides detailed information about the firm, including images and sections about their values and team.
```jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Employes from '../components/Employes';
import HorisontalRule from '../components/HorisontalRule';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <Banner />
      <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: 28, fontFamily: 'adobe-caslon-pro,times,georgia,serif' }}>
        <h1 style={{ fontSize: '60px', fontFamily: 'Caslon224Std-Book,times,georgia,serif' }}>Om byrån</h1>
      </div>
      <Container>
        <p style={{ color: 'white', display: 'flex', justifyContent: 'center', fontFamily: 'MonumentGrotesk-Regular,helvetica,arial,sans-serif', fontSize: 'calc(18px + 0.5vw)', maxWidth: '800px', lineHeight: '1.6', margin: '26px auto', padding: '10px' }}>
          W Advokatbyrå strävar efter att vara det självklara valet inom affärsjuridik på våra marknader...
        </p>
        {/* Additional content */}
      </Container>
      <Employes />
      {/* Additional content */}
      <HorisontalRule />
      <Footer />
    </>
  );
}

export default About;
```

### 3. Contact
A page that provides the contact details of the firm.
```jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <Title />
      <Banner />
      <div style={{ color: 'white', fontFamily: 'adobe-caslon-pro,times,georgia,serif', textAlign: 'center', fontSize: 28 }}>
        <p>Kontakt</p>
        <p>Lilla Varvsgatan 21D</p>
        <p>211 76</p>
      </div>
      <Container>
        <p><strong style={{ color: 'white', display: 'flex', justifyContent: 'center', fontFamily: 'adobe-caslon-pro,times,georgia,serif' }}>Hitta hit:</strong></p>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
```

## Functions
### 1. news-proxy.js
A serverless function to fetch news articles related to law.
```js
const axios = require('axios');

exports.handler = async function(event) {
  const API_KEY = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=juridik&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify(error.response.data),
    };
  }
};
```

## Styles
### Global CSS (App.css)
```css
* {
  background-color: black;
}

.navbar-list li a {
  color: white !important;
  text-decoration: none;
  padding: 40px;
  flex-wrap: wrap;
}

img {
  align-items: center;
}

p {
  color: white;
  font-family: "adobe-caslon-pro,times,georgia,serif";
  font-size: calc(18px + 0.5vw);
  max-width: 100%;
  line-height: 1.6;
  margin: 26px 0;
  padding: 10px;
}

@media (min-width: 1201px) {
  p {
    max-width: 800px;
    margin: 26px auto;
   

 background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }
}

.föräldrarelement {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  position: relative;
}

.buttonStyle {
  display: inline-block;
  padding: 15px 32px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-family: "MonumentGrotesk-Regular,helvetica,arial,sans-serif";
  letter-spacing: .5px;
  margin: -35px -15px;
  min-width: 246px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 0;
  position: absolute;
}

.buttonStyle:hover {
  background-color: white;
  color: black !important;
}

video.fading {
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

body .news-section h1, body .news-section h2, body .news-section h3, body .news-section h4, body .news-section h5, body .news-section h6 {
  color: white !important;
}

a {
  color: white !important;
}
```

## Testing
### App.test.tsx
Contains basic tests for the application.
```jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Contributing
We welcome contributions! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Create a pull request.

## License
This project is licensed under the MIT License.
