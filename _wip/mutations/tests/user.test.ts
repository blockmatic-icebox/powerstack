import { gql } from "graphql-request";
import { client } from "./base";
import { describe, test } from "@jest/globals";
import logger from "../src/utils/logger";
import { usersSeed } from "./seed";

describe("User", () => {
  test("createUser", async () => {
    const createUserMutation = gql`
      mutation createUser($data: UserInput!) {
        createUser(data: $data) {
          id
          email
          name
          firstName
          lastName
        }
      }
    `;

    const variables: any = {
      data: usersSeed[0],
    };
    // create a random email address
    variables.data.email = `${variables.data.email}${Math.floor(
      Math.random() * 1000000
    )}@example.com`;
    delete variables.data.id;

    try {
      const response: any = await client.request(createUserMutation, variables);
      expect(response.createUser).toHaveProperty("id");
      expect(response.createUser.email).toBe(usersSeed[0].email);
      expect(response.createUser.name).toBe(usersSeed[0].name);
    } catch (error) {
      logger.error({
        message: "Error creating user",
        error,
        variables,
      });
      throw error;
    }
  });
});
