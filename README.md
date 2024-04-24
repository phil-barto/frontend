# Phil's Support Ticket System

This repo contains the frontend and backend for a simple support ticket system. You can do the following:
- create a support ticket
- have admin login via the super secure "admin" tab
- view tickets
- "respond" to a ticket via a super handy `console.log`
- update the status of a ticket

Website: You can find the app [here](https://full-stack-six-puce.vercel.app/). 

## Tech Stack

The frontend is built with [NextJS](https://render.com/), a React Framework built by Vercel. It resides in the [frontend](./frontend/) folder. 

The backend is an [Express](https://expressjs.com/en/api.html) API backed by a postgres DB. The API is deployed via [Render](https://docs.render.com/web-services) while the DB is deployed via [Supabase](https://supabase.com/docs). You can find it in the [backend](/backend/) folder.

## Local Development

This repo supports somewhat local development. While the frontend and backend can be deployed locally, you **must** have a supabase deployed postgres DB. See below for specific instructions on how to deploy and access the app. The URL also has to be changed from the RENDER URl to `http://localhost:8080`


Prerequisites:
- have docker installed
- have npm installed
- run `make docker`

### Setting up Supabase for local dev
In order to develop locally, you must have a deployed PostGres DB in SupaBase. This is because this application relies on the [supabase javascript client](https://supabase.com/docs/reference/javascript/introduction) to connect. Once you create the database, you should have a page like [this](supabase_helper.png)

Create a `.env` file inside the `backend` directory with the following keys:
```
SUPABASE_URL=<insert_url_here>
SUPABASE_ANON_KEY=<insert_anon_key_here>
```

Improvements:

This was spun up in a short amount of time, so tradeoffs were considered when creating a MVP. See below for improvements.

Repo level:
- formatting and linting

Backend:
- Lack of unit tests
- Lack of acceptance tests
- Using TypeScript instead JavaScript

Frontend:
- Using TypeScript instead of JavaScript
- Using the `api` folder to proxy requests
- Lack of user testing
- There's some optimizations with how the list of tickets is re-rendered which isn't ideal. I'm just doing a blanket reload but obviously reloading the data would be more optimal.
