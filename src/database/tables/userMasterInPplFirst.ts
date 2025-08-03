import { uuid, text, boolean, timestamp,pgSchema } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
export const pplFirst = pgSchema("ppl_first");

export const usermasterInPplFirst = pplFirst.table("usermaster", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	login: text().notNull(),
	password: text().notNull(),
	tenant: uuid().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	notes: text(),
	filepath: text(),
	previousid: text(),
	companyId: uuid("company_id").notNull(),
});