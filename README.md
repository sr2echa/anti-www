Certainly! Here's an updated version of the README file that includes instructions on how to install an unpacked extension in various browsers:

```markdown
# HTTPS Enforcement and Apex Domain Redirection Browser Extension

This browser extension helps enforce secure HTTPS connections and redirects websites to their apex domain, removing the 'www' subdomain. This enhances the security and consistency of website access for users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How to Install Unpacked Extension](#how-to-install-unpacked-extension)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In an era where website security is of utmost importance, ensuring that users access websites over HTTPS and consistently use the apex domain (i.e., example.com instead of www.example.com) can improve both security and user experience. This browser extension simplifies this process for users.

## Features

- **HTTPS Enforcement**: Automatically redirects users to the HTTPS version of websites if they access the HTTP version.
- **Apex Domain Redirection**: Removes the 'www' subdomain from the website URL, promoting a consistent domain structure.
- **Customization**: Users can configure the extension to exclude specific websites or choose not to enforce HTTPS or apex domain redirection on select domains.
- **Security**: Protects users from potential security risks associated with unencrypted HTTP connections.

## Installation

To install this browser extension, follow these steps:

1. Clone or download this repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/https-apex-extension.git
   ```

2. Open your browser and navigate to the extensions or add-ons page.

3. Enable "Developer Mode."

4. Click "Load Unpacked" or similar, and select the directory where you cloned/downloaded this extension.

5. The extension should now be installed and active.

## Usage

1. Once installed, the extension will automatically take care of HTTPS enforcement and apex domain redirection when you browse websites.

2. You can configure the extension's settings to exclude specific websites or customize its behavior as per your preferences.

3. Enjoy a safer and more consistent browsing experience!

## How to Install Unpacked Extension

### Google Chrome

1. Open Google Chrome.

2. Type `chrome://extensions/` in the address bar and press Enter.

3. Enable "Developer mode" in the top right corner.

4. Click "Load unpacked."

5. Select the directory where you cloned/downloaded this extension and click "Open."

### Mozilla Firefox

1. Open Mozilla Firefox.

2. Type `about:debugging` in the address bar and press Enter.

3. Click "This Firefox" on the left sidebar.

4. Click "Load Temporary Add-on."

5. Select the `manifest.json` file inside the directory where you cloned/downloaded this extension and click "Open."

### Microsoft Edge

1. Open Microsoft Edge.

2. Type `edge://extensions/` in the address bar and press Enter.

3. Enable "Developer mode" in the bottom left corner.

4. Click "Load unpacked."

5. Select the directory where you cloned/downloaded this extension and click "Select Folder."

### Other Browsers

For other browsers, please refer to their specific documentation on how to install unpacked extensions.

## Contributing

We welcome contributions to this project. If you'd like to improve this browser extension, please follow these steps:

1. Fork this repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and commit them.

4. Push to your fork and submit a pull request.

5. We'll review your changes and merge them if they align with the project's goals.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as needed.

---

**Disclaimer**: This browser extension is provided as-is and may not work with all websites or under all circumstances. Use it at your own discretion.

For support or inquiries, please contact [your@email.com](mailto:your@email.com).

Thank you for using the HTTPS Enforcement and Apex Domain Redirection Browser Extension!
```

I've added a section on how to install an unpacked extension for Google Chrome, Mozilla Firefox, Microsoft Edge, and mentioned that other browsers should be installed following their specific documentation.
## Todo

- [ ] add icon
- [ ] fix `manifest.json` (with all parameters like author blablabla)
