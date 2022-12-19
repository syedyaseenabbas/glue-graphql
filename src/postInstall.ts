import { copyToTarget } from "./copyToTarget";
//@ts-ignore
import services from "../meta/services.json";

export async function postInstall(targetFolder: string) {
  const graphql = services.filter((service: any) => {
    return service.name === "graphql";
  })[0];
  if (graphql.directory) {
    await copyToTarget(
      `${process.cwd()}/node_modules/@gluestack/graphql/${graphql.directory}`,
      targetFolder,
    );
  }
}
