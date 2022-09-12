import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { Client, ClientModel } from "../entities";
import {
  ClientInput,
  DeleteClientInput,
  GetClientInput,
  UpdateClientInput,
} from "../inputs";

@Resolver(Client)
export class ClientResolver {
  @Query(() => [Client])
  async clients(): Promise<Client[]> {
    console.log(await ClientModel.find());
    // return {
    //   name: "Sahil",
    //   email: "sahilbalhra0@gmail.com",
    //   phone: "1273812639",
    // };
    return await ClientModel.find();
    // return clientData;
  }

  @Mutation(() => Client)
  async addClient(@Arg("input", () => ClientInput) input: ClientInput) {
    const { name, email, phone } = input;
    return await ClientModel.create({ name: name, phone: phone, email: email });
  }

  // @Mutation(() => Client)
  // async getClient(@Arg("input", () => GetClientInput) input: GetClientInput) {
  //   const { _id } = input;
  //   return await ClientModel.findById(_id);
  // }
  @Query(() => Client)
  async getClient(@Arg("id") id: string) {
    return await ClientModel.findById(id);
  }
  // @Mutation(() => Client)
  // async getClient(@Arg("id") id: string) {
  //   return await ClientModel.findById(id);
  // }

  // @Mutation(() => Client)
  // async deleteClient(
  //   @Arg("input", () => DeleteClientInput) input: DeleteClientInput
  // ) {
  //   const {id } = input;
  //   return await ClientModel.findByIdAndRemove(id);
  // }

  @Mutation(() => Client)
  async deleteClient(@Arg("id") id: string) {
    return await ClientModel.findByIdAndRemove(id);
  }

  @Mutation(() => Client)
  async updateClient(
    @Arg("input", () => UpdateClientInput) input: UpdateClientInput
  ) {
    const { _id, name, email, phone } = input;
    return await ClientModel.findByIdAndUpdate(_id, { name, email, phone });
  }
}
