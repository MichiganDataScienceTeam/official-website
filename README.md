# [MDST Website](https://michigandatascienceteam.github.io/website-redesign/)

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

### Change the Homepage

the file `config/homepage.json` defines the "Recent Projects" section. This should be limited to 3 items.

```json
[
    {
        "name": "name of project",
        "description": "short description of project",
        "image": "image.png",
        // this file should exsist in the directory
        // public/images/sponsors/
        "link": "/projects/group/name_of_file"
        // path of project file without file extension
        // its under
        // public/
    }, ...
]
```

the file `config/sponsors.json` defines the sponsor section of the homepage. More details are under [Change Sponsors](#change-our-sponsors) section.

### Change Projects

The projects page is rendered based on the `public/projects` folder. The sub folders within `public/projects` create sections for the different projects and the name of the folder is rendered to the site without "\_". For every file .pdf and .md file within these sub folders a page is generated and the link is displayed on the projects paged as the name of the file wihtout the extension and "\_"s.

### Change Resources page

The main content of this page is rendered markdown from the `config/resources.md`

### Change Our Team

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
        // this file should exsist in the directory
        // public/images/team/
        "linkedin": "link to their linkedin (optional)",
        "github": "link to their github (optional)",

      }, ...
    ]
  }, ...
]
```

### Change Our Sponsors

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
        // this file should exsist in the directory
        // public/images/sponsors/
      }, ...
    ]
  }, ...
]
```

### Change Join page

The main content of this page is rendered markdown from the `config/join.md`

### Change contact

TODO

## Technologies Used

This website is a [Next.js](https://nextjs.org) app that statically generates pages that are then deployed to Github Pages Via Github actions.

Styling is done with [Tailwind.css](https://tailwindcss.com/)

Icons are done with Ionicons 4 through [React-Icons](https://react-icons.github.io/react-icons/icons?name=io)

Fonts are done with Next.js and [Google Fonts](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
