# Palasio Icons

This project provides a comprehensive guide and tools to build your own icons
library, publish it on npm as a package, and use it in your applications. Follow
this guide to create a customizable and reusable icons library for your
projects.

## Introduction

This repository is a step-by-step guide to help you create your own icons
library. You'll learn how to:

- Build and organize your icon components
- Publish the icons library to npm
- Integrate and use the library in your applications

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or later)
- npm (v6 or later) or yarn

## Setup

1 . Clone the repository:

```bash
git clone https://github.com/rahulyadav139/palasio-icons
cd palasio-icons
```

2 . Install dependencies:

```bash
npm install
```

## Building the Icons Library

**1. Keeps your SVG files ready:**

Add your SVG files in the `assets` directory. You can create sub-directories for
better management.

**2. Build the library:**

Run the build script to compile your icons library:

```bash
  npm run build:icons
```

## Publishing to npm

**1. Login to npm:**

```bash
npm login
```

**2. Publish the package:**

```bash
npm publish ./build
```

Ensure the `lib/package.json` file is correctly configured with your package
name, version, and other metadata.

## Using Your Icons Library

Once published, you can install and use your icons library in any project:

**1. Install your icons library:**

```bash
npm install your-icons-library
```

**2. Import and use an icon:**

```js
import React from 'react';
import { IconName } from 'your-icons-library';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <IconName fontSize="1.5rem" color="#000" />
    </div>
  );
}

export default App;
```

You can also use default exported instead of named export.

```js
import BinIcon from 'your-icons-library/Bin
```

## Customization

Customize your icons by passing props such as fontSize, color, and className.
Here are the available props:

**fontSize**: Specifies the size of the icon. Default is `1em`. **color**:
Specifies the color of the icon. Default is currentColor. **className**: Adds
custom class names to the icon.

Along with the above metioned props, you can provide any `SVGProps` to modify an
icon.

## Contributing

Contributions are welcome! If you have any ideas or find issues, feel free to
open an issue or submit a pull request.

- Fork the repository
- Create a new branch (`git checkout -b feature/YourFeature`)
- Commit your changes (`git commit -m 'Add some feature'`)
- Push to the branch (`git push origin feature/YourFeature`) Open a pull request
