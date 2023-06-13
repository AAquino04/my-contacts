# MyContacts

## 💡 Project

This project is a simple contact list manager to help you handle your contacts with a little more ease! <br />
I developed this in order to practice my JavaScript and React knowledge and learn better coding practices / patterns. It helped me a lot while learning to create SPAs using React by practicing the use of important tools such as React Router (v5), styled components, the awesome presentational / container pattern (and even a better alternative to it) as well as many useful techniques like creating custom hooks to reuse code, creating reusable animations, etc. <br />
This project also features a very simple yet useful API connected to a PostgreSQL database in order to persist contacts. <br />
Overall, it was a very important project in my development as a software developer and I had a lot of fun coding it. It's still somewhat in development, as I intend to add a feature to register contact categories, a "dark mode", pt-br and en-us support and also publish this project on AWS.

## 💻 Techs Used

- Node.js v18.15.0
- JavaScript
- [React](https://react.dev/)
- [Express.js](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)

## ❔ How to run it (locally)

- [Install Node.js LTS Version](https://nodejs.org/en/download)
- [Install Docker](https://docs.docker.com/engine/install/)
- Create a PostgreSQL container by running the following command: <br />
  `docker run --name pg -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres`;
- Run the command `docker exec -it pg bash` on the terminal to access the PostgreSQL container's terminal
- Log in using the command: `psql -U postgres`
- Run the scripts located on `api/src/database/schema.sql`
- If you don't have `Yarn` installed, run `npm install --global yarn` on the terminal, otherwise, skip this step
- On the terminal, navigate to the `/api` folder, and run the commands `yarn install`, and then `yarn dev` to start the API
- Finally, navigate to the `/ui` folder, run `yarn install` and then `yarn start`

The application should be running on http://localhost:3000/
