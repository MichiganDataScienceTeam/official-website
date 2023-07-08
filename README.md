# MDST Website

This website was is designed with a few core criteria

- Modern and professional design
- Easy to edit and maintain without changing the code

## How to Contribute

### Cloning the Git Repository

1. Clone the Git repository by running the following command in your terminal:

```bash
git clone <repository-url>
```

2. Checkout a branch to make changes to website without effect main branch. You can use this command to create a new branch and check it out.

```bash
git checkout -b <branch-name>
```

### Installing Dependencies

1. Navigate to the cloned repository's directory using the `cd` command:

```bash
cd <repository-name>
npm install
```

### Starting the Development Server

1. Start the development server by running the following command:

```bash
npm run dev
```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the locally running Next.js app. The app should automatically reload when you make changes

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## What to Edit

This project is designed to highly customizable without digging into the code.

### Change Sponsors

the file `config/sponsors.json` defines how sponsors will be rendered on the site. The first element in the list will be displayed on the homepage. Every element will be displayed on the sponsors page in the order its listed in the array.

The file should follow this format

```json
[
  {
    "tier": "first sponsor tier",
    "sponsors": [
      {
        "name": "name of sponsor",
        "link": "website link",
        "image": "image.png"
        // this file should be exsist in the directory
        // public/images/sponsors/
      }, ...
    ]
  }, ...
]
```

### Change Team Members

the file `config/ourteam.json` defines the team members that show up on the team page.

```json
[
  {
    "groupName": "name of the group",
    "description": "short description of the group's roles",
    "members": [
      {
        "name": "name of team member",
        "title": "org title for this team member",
        "image": "image.png",
        // this file should be exsist in the directory
        // public/images/team/
        "linkedin": "link to their linkedin (optional)",
        "github": "link to their github (optional)",

      }, ...
    ]
  }, ...
]
```

## Technologies Used

This website is a [Next.js](https://nextjs.org) app that statically generates pages that are then deployed to Github Pages Via Github actions.
