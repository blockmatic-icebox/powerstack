import { gql } from "graphql-request";
import { client } from "./base";

import { describe, test } from "@jest/globals";

describe("api endpoints", () => {
  test("status query returns data", async () => {
    const statusQuery = gql`
      query {
        __schema {
          types {
            name
          }
        }
      }
    `;

    try {
      const response: any = await client.request(statusQuery);
      expect(response.__schema.types).toBeTruthy();
    } catch (error: any) {
      throw new Error("Server is not running" + error.message, error);
    }
  });
});
