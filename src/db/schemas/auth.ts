import {
  pgTable,
  varchar,
  text,
  uuid,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  username: varchar("username", { length: 255 }).unique().notNull(),
  password_hash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { precision: 3 }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { precision: 3 }).notNull().defaultNow(),
});

export const sessions = pgTable("session", {
  id: uuid("id").defaultRandom().primaryKey(),
  expiresAt: integer("expires_at").notNull(),
  createdAt: timestamp("created_at", { precision: 3 }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { precision: 3 }).notNull().defaultNow(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
});
