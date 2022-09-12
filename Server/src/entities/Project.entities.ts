import { Schema, model } from "mongoose";
import { Field, ObjectType } from "type-graphql";
import { Client } from "./Client.entities";

export interface IProject {
  _id: string;
  name: string;
  description: string;
  status: string;
  clientId: string;
}

@ObjectType()
export class Project implements IProject {
  @Field() _id: string;
  @Field() name: string;
  @Field() description: string;
  @Field() status: string;
  @Field() clientId: string;
}

@ObjectType()
export class ExtendedProject extends Project {
  @Field(() => Client) client: Client;
}

export const ProjectSchema = new Schema({
  name: { type: String, required: false, trim: true },
  description: { type: String, required: false, trim: true },
  status: { type: String, required: false, trim: true },
  clientId: { type: Schema.Types.ObjectId, required: false, trim: true },
});

export const ProjectModel = model<Project>("projects", ProjectSchema);
