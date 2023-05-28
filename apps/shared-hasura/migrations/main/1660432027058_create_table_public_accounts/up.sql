CREATE TABLE "public"."accounts" ("account_id" uuid NOT NULL DEFAULT gen_random_uuid(), "username" text NOT NULL, PRIMARY KEY ("account_id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
