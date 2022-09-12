import { ClientResolver } from "./client.resolver";
import { ProjectResolver } from "./project.resolver";
export const resolvers = [ClientResolver, ProjectResolver] as const;
