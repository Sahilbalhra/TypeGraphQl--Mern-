import { model, Schema } from "mongoose";
import { Field, ObjectType } from "type-graphql";

export interface IClient {
  _id:string
  name: string
  email: string
  phone: string
}

@ObjectType()
export class Client implements IClient {
  @Field() _id:string
  @Field() name: string;
  @Field() email: string;
  @Field() phone: string;
}

export const ClientSchema = new Schema({
  name: { type: String, required: false, trim: true },
  email: { type: String, required: false, trim: true },
  phone: { type: String, required: false, trim: true },
});

export const ClientModel = model<Client>("clients", ClientSchema);
