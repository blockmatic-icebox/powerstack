alter table "public"."addresses"
  add constraint "addresses_account_id_fkey"
  foreign key ("account_id")
  references "public"."accounts"
  ("account_id") on update restrict on delete restrict;
