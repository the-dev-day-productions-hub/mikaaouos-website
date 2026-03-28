# 🌍 `mikaaouos-website`
[![Discord](https://img.shields.io/discord/1472914445968740536?logo=discord)](https://discord.gg/be4P5uve5Q) ![CodeQL](https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite/workflows/CodeQL/badge.svg) [![Vercel](https://img.shields.io/github/deployments/Skyline-College-Computer-Science-Club/project.ClubWebsite/production?&logo=vercel&label=Vercel%20Deployment)](https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite/deployments/Production)

**[mikaaouo](https://www.twitch.tv/mikaaouo)** is a professional, ever-evolving streamer on the popular Twitch streaming platform.

One of the cornerstones in nurturing a successful online career is by developing a strong, professional, and personable online presence. 

The goal of this project is to extend this capacity by building a personal website for our client, which at this current point in time aims to be a visually-striking and light-weight socials hub.

[Contributor To-do Notion Page](https://www.notion.so/Micah-s-Website-mikaaouo-30e807b2ff3f80be81a3fa4d0a9ce0f2) (requires special access)

> [!IMPORTANT]  
> This project is an active #DevDay product.

### 📊 Repository Contribution Activity

![Alt](https://repobeats.axiom.co/api/embed/6bbf44d228fca7a0d44cf04bbf590005ecc8fc2c.svg "Repobeats analytics image"))

> CURRENTLY PLACEHOLDER; TO BE CHANGED FOR PUBLIC RELEASE

## 🔰 Quick Setup / Getting Started

> Want to help design and add stuff to our project? Setup is easy and should take only ~5 minutes!

1. Clone this project's repository locally to your computer using [Git](https://git-scm.com/downloads).

- Confirm Git is installed by opening a new terminal and running:
```bash
git --version
```

- Cloning time! You can start this by clicking the green `<> Code` button above and copying the HTTPS URL. Then, use `git clone <URL>` in a terminal.
- Be sure to point your terminal to a folder that is somewhere easy to access, like your Desktop or Documents folder, to store the project folder.

<hr>

2. Open the cloned project folder in an IDE of your choice. Then via your terminal, `cd` into the directory of said folder.

- If using an external, standalone command-line shell, use the `cd` command like so:
```bash
# example if you keep your projects under your Documents folder
cd "C:\Users\<user_name>\Documents\<directory_to_wherever_your_projects_are>\mikaaouos-website"
```
- **Alternatively, if you use VSCode**: after opening the folder, you can open a built-in Terminal (via top-left bar); it will automatically navigate the terminal to the currently open directory. (see below)

<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/open_folder_and_terminal.gif" width=600></img>

<hr>

3. The only other manually user-installed dependency is the **[📘Node.js](https://nodejs.org/en) JavaScript runtime.**

- Confirm it's installed by opening a new terminal and running:

```bash
node --version
```

<hr>

5. After installing Node.js, `npm`, its default package manager, also gets installed. This project however, instead uses Yarn. In the terminal pointing to your project directory, run the following command to install Yarn globally:
```bash
npm install --global yarn
```
Then, run the following Yarn command in the directory of the downloaded project to install our project's required dependencies, which includes the Next.js framework:
```bash
yarn
```
After installation of the project dependencies, you should now see a new folder `node_modules`.

<hr>

5. Now that we have everything we need (libraries, modules and all), you are already ready to locally host the website on your computer using:

```bash
yarn dev
```

Steps 4 & 5 can be seen here:

<img src="https://github.com/Skyline-College-Computer-Science-Club/.github/blob/main/assets/tutorial_media/project.ClubWebsite/npm_install_and_run.gif" width=740></img>

- With it running, open http://localhost:3000 in any browser to see your locally hosted website. This URL will also be displayed to you in the terminal after running Step 5).

- Congrats! You can visually experiment now by modifying the home page under `src/page.tsx`. Subfolders of `src/` are subpages, while components are reusable parts of the site. Pages and components auto-updates every time you save the file.

> [!TIP]
> 💡 After this initial setup, you only need Step 5) when editing the project in the future. Just be sure your terminal is opened to the project's folder directory.

## 🗃️ Important Resources and Documentation

- Our project uses [**Node.js**](https://nodejs.org/en), the JavaScript runtime engine that powers the logic of our website.

- Our project uses [**React.js**](https://react.dev), our website's core HTML/TypeScript-orientated structuring framework.

- Our project uses [**Tailwind CSS**](https://tailwindcss.com), our website's core CSS styling library.

- Our project uses [**Framer Motion**](https://www.framer.com/motion/), a comprehensive, production-ready animation library for React.

- Our project uses [**Vercel**](https://vercel.com/), a cloud service that provides the infrastructure to integrate, build, scale, and deploy our website.

🧠 Our project **fundamentally** uses Next.js. To specifically **learn more** about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## ⚙️ Important Technical Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🔺 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
