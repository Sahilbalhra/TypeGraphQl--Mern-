import {
  Resolver,
  Query,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { Client, ClientModel, Project, ProjectModel } from "../entities";
import {
  DeleteProjectInput,
  GetProjectInput,
  ProjectInput,
  UpdateProjectInput,
} from "../inputs";

@Resolver(Project)
export class ProjectResolver {
  @Query(() => [Project])
  async projects() {
    return await ProjectModel.find();
  }

  @Mutation(() => Project)
  async addProject(@Arg("input", () => ProjectInput) input: ProjectInput) {
    const { name, description, status, clientId } = input;
    return await ProjectModel.create({ name, description, status, clientId });
  }

  // @Mutation(() => Project)
  // async getProject(
  //   @Arg("input", () => GetProjectInput) input: GetProjectInput
  // ) {
  //   const { _id } = input;
  //   return await ProjectModel.findById(_id);
  // }

  @Query(() => Project)
  async getProject(@Arg("id") id: string) {
    return await ProjectModel.findById(id);
  }
  // @Mutation(() => Project)
  // async deleteProject(
  //   @Arg("input", () => DeleteProjectInput) input: DeleteProjectInput
  // ) {
  //   const { _id } = input;
  //   return await ProjectModel.findByIdAndRemove(_id);
  // }
  @Mutation(() => Project)
  async deleteProject(@Arg("id") id: string) {
    return await ProjectModel.findByIdAndRemove(id);
  }

  @Mutation(() => Project)
  async updateProject(
    @Arg("input", () => UpdateProjectInput) input: UpdateProjectInput
  ) {
    const { _id, name, description, status, clientId } = input;

    return await ProjectModel.findByIdAndUpdate(_id, {
      name,
      description,
      status,
      clientId,
    });
  }

  @FieldResolver(() => Client)
  async client(@Root() root: any) {
    const client = await ClientModel.findById(root.clientId);

    return client;
  }
}
