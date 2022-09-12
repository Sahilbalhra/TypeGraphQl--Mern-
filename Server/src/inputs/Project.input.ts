import { InputType,Field } from "type-graphql";

@InputType()
export class ProjectInput{
    @Field() name:string
    @Field() description:string
    @Field() status:string
    @Field() clientId:string
}

@InputType()
export class GetProjectInput{
    @Field() _id:string
}
@InputType()
export class DeleteProjectInput{
    @Field() _id:string
}

@InputType()
export class UpdateProjectInput{
    @Field() _id:string
    @Field() name:string
    @Field() description:string
    @Field() status:string
    @Field() clientId:string
}