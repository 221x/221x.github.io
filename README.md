Here’s a well-structured `README.md` for your GitHub project, including a file tree with the structure you’ve described:

---

# 221x Ohio Clan Website

Welcome to the 221x Ohio Clan Website repository! This project contains the official site for the Roblox 221x Ohio Clan, providing details about members, allies, enemies, and a recruitment form for new applicants.

## Table of Contents
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Project Structure

Below is the file tree of the project, showing the structure and relationships between the files:

```bash
221x-Ohio-Clan-Website/
├── allies/
│   ├── index.html
│   └── styles.css
├── apply/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── kill_list/
│   ├── index.html
│   └── styles.css
├── members/
│   ├── index.html
│   └── styles.css
├── README.md
└── .gitignore
```

### Folders and Files

- **allies/**: Displays a list of our clan's allies.
  - `index.html`: The HTML file containing the page layout for allies.
  - `styles.css`: Styles specific to the allies page.
  
- **apply/**: Contains a form where new applicants can apply to join the clan.
  - `index.html`: The HTML form for recruitment.
  - `styles.css`: Styling specific to the recruitment page.
  - `script.js`: JavaScript code that handles form submission to the Discord webhook.

- **kill_list/**: Lists our enemies in Roblox Ohio.
  - `index.html`: HTML file for the enemies list.
  - `styles.css`: Styles specific to the enemies page.

- **members/**: Contains the list of our clan members.
  - `index.html`: HTML file displaying the list of members.
  - `styles.css`: Styles specific to the members page.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/221x-Ohio-Clan-Website.git
   ```

2. Navigate into the project folder:
   ```bash
   cd 221x-Ohio-Clan-Website
   ```

3. Open the HTML files in your browser to view the site or use a local development server.

## Features

- **Members Page**: View the current list of 221x clan members.
- **Allies Page**: Check out the clans that have allied with us.
- **Enemies Page**: View a list of rival clans.
- **Apply Page**: New players can apply to join the clan through a form that submits directly to a Discord webhook.

## How to Contribute

Feel free to fork this repository and make pull requests. If you encounter any issues, please open an issue in the repository, and we will look into it.

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
