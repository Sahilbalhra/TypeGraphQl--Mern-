// import dotenv from "dotenv";
// dotenv.config();
import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers/index";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { connectToMongo } from "./utils/mongo";

async function bootstrap() {
  //build the schema
  const schema = await buildSchema({
    resolvers,
  });

  //Init express
  const app = express();

  //create the apollo server
  const server = new ApolloServer({
    schema,
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  //server start
  await server.start();

  //apply middleware to server
  server.applyMiddleware({ app });
  //app.listen on express server
  app.listen({ port: 4000 }, () => {
    console.log("App is listening on http://localhost:4000/graphql");
  });
  //connect to mongodb
  connectToMongo();
}
bootstrap();
