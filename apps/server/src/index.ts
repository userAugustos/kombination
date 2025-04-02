import { Elysia } from 'elysia'


const x = process.env.PORT;

const app = new Elysia()
  .get('/', () => 'Hello Kombination')
  .listen(process.env.PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
