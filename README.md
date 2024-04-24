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

This repo supports somewhat local development. While the frontend and backend can be deployed locally, you **must** have a supabase deployed postgres DB. See below for specific instructions on how to deploy and access the app.

Prerequisites:
- have docker installed
- have npm installed
- run `make docker`