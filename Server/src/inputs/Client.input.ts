import { Field, InputType } from "type-graphql";

@InputType()
export class ClientInput {
  @Field() name: string;
  @Field() email: string;
  @Field() phone: string;
}

@InputType()
export class GetClientInput {
  @Field() _id: string;
}
@InputType()
export class DeleteClientInput {
  @Field() id: string;
}
@InputType()
export class UpdateClientInput {
  @Field() _id: string;
  @Field() name: string;
  @Field() email: string;
  @Field() phone: string;
}
