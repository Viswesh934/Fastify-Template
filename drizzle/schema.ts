import { pgTable, pgSchema, foreignKey, unique, uuid, text, boolean, timestamp, smallint, uniqueIndex, varchar, interval, integer, type AnyPgColumn, date, char, numeric } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const pplFirst = pgSchema("ppl_first");


export const masterdataInPplFirst = pplFirst.table("masterdata", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	code: text().notNull(),
	datagroup: text().notNull(),
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
	masterDataRank: smallint("master_data_rank").default(0).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.datagroup, table.tenant],
			foreignColumns: [datagroupInPplFirst.code, datagroupInPplFirst.tenant],
			name: "fk_group_code_datagroup"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "masterdata_createdtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "masterdata_createduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "masterdata_tenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "masterdata_updatedtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "masterdata_updateduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	unique("uq_masterdata_id_tenant").on(table.id, table.tenant),
]);

export const companyMasterdataMapInPplFirst = pplFirst.table("company_masterdata_map", {
	companyMasterdataMapId: uuid("company_masterdata_map_id").defaultRandom().primaryKey().notNull(),
	companyId: uuid("company_id").notNull(),
	objectType: text("object_type").notNull(),
	objectValue: text("object_value").notNull(),
	tenant: uuid().notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid(),
	updateduser: uuid(),
	createdtenant: uuid(),
	updatedtenant: uuid(),
	isactive: boolean().default(true),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_cmd_company"
		}),
	foreignKey({
			columns: [table.objectType, table.tenant],
			foreignColumns: [datagroupInPplFirst.code, datagroupInPplFirst.tenant],
			name: "fk_cmd_datagroup"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.objectValue, table.tenant],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_cmd_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
	unique("uq_cmd_company_object_tenant").on(table.companyId, table.objectType, table.objectValue, table.tenant),
]);

export const certificationProvidersInPplFirst = pplFirst.table("certification_providers", {
	providerId: uuid("provider_id").defaultRandom().primaryKey().notNull(),
	tenantId: uuid("tenant_id").notNull(),
	providerName: varchar("provider_name", { length: 255 }).notNull(),
	description: text(),
	website: varchar({ length: 255 }),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	uniqueIndex("ux_cert_providers_tenant_name").using("btree", table.tenantId.asc().nullsLast().op("text_ops"), table.providerName.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_cp_created_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_cp_created_user"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_cp_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_cp_updated_tenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_cp_updated_user"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const contentInPplFirst = pplFirst.table("content", {
	id: text().primaryKey().notNull(),
	title: text().notNull(),
	description: text().notNull(),
	url: text().notNull(),
	publishedby: text().notNull(),
	contenttype: text().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	contentsubtype: text().notNull(),
	tenant: uuid().notNull(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "content_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "content_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "content_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "content_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "content_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const companyMasterdataHierarchyInPplFirst = pplFirst.table("company_masterdata_hierarchy", {
	companyMasterdataHierarchyId: uuid("company_masterdata_hierarchy_id").defaultRandom().primaryKey().notNull(),
	companyId: uuid("company_id").notNull(),
	masterdataId: uuid("masterdata_id").notNull(),
	parentMasterdataId: uuid("parent_masterdata_id"),
	tenant: uuid().notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid(),
	updateduser: uuid(),
	createdtenant: uuid(),
	updatedtenant: uuid(),
	isactive: boolean().default(true),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_cmh_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.masterdataId],
			foreignColumns: [masterdataInPplFirst.id],
			name: "fk_cmh_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.parentMasterdataId],
			foreignColumns: [masterdataInPplFirst.id],
			name: "fk_cmh_parent_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
	unique("uq_cmh_company_masterdata_tenant").on(table.companyId, table.masterdataId, table.parentMasterdataId, table.tenant),
]);

export const datagroupInPplFirst = pplFirst.table("datagroup", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	code: text().notNull(),
	iseditable: boolean().default(true).notNull(),
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
	isdefault: boolean().default(true).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "datagroup_createdtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "datagroup_createduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "datagroup_tenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "datagroup_updatedtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "datagroup_updateduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const datagrouphierarchyInPplFirst = pplFirst.table("datagrouphierarchy", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	code: text().notNull(),
	parentcode: text().notNull(),
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
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "datagrouphierarchy_createdtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "datagrouphierarchy_createduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "datagrouphierarchy_tenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "datagrouphierarchy_updatedtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "datagrouphierarchy_updateduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.code, table.tenant],
			foreignColumns: [datagroupInPplFirst.code, datagroupInPplFirst.tenant],
			name: "fk_code_code_datagroup"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.parentcode, table.tenant],
			foreignColumns: [datagroupInPplFirst.code, datagroupInPplFirst.tenant],
			name: "fk_parentcode_code_datagroup"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const certificationsInPplFirst = pplFirst.table("certifications", {
	certificationId: uuid("certification_id").defaultRandom().primaryKey().notNull(),
	tenantId: uuid("tenant_id").notNull(),
	providerId: uuid("provider_id").notNull(),
	certificationName: varchar("certification_name", { length: 255 }).notNull(),
	description: text(),
	defaultValidity: interval("default_validity"),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	uniqueIndex("ux_certs_tenant_provider_name").using("btree", table.tenantId.asc().nullsLast().op("text_ops"), table.providerId.asc().nullsLast().op("uuid_ops"), table.certificationName.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_certs_created_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_certs_created_user"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.providerId],
			foreignColumns: [certificationProvidersInPplFirst.providerId],
			name: "fk_certs_provider"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_certs_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_certs_updated_tenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_certs_updated_user"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const companyAgencyMapInPplFirst = pplFirst.table("company_agency_map", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	companyId: uuid("company_id").notNull(),
	agencyMasterId: uuid("agency_master_id").notNull(),
	serviceMasterdataId: uuid("service_masterdata_id").notNull(),
	tenant: uuid().notNull(),
	isactive: boolean().default(true),
	createddatetime: timestamp({ mode: 'string' }).defaultNow(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid(),
	updateduser: uuid(),
	createdtenant: uuid(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.agencyMasterId],
			foreignColumns: [agencyMasterInPplFirst.id],
			name: "company_agency_map_agency_master_id_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "company_agency_map_company_id_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.serviceMasterdataId],
			foreignColumns: [masterdataInPplFirst.id],
			name: "company_agency_map_service_masterdata_id_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const modulemasterInPplFirst = pplFirst.table("modulemaster", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	description: text(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	currency: text().notNull(),
	unitprice: integer().notNull(),
	tenant: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "modulemaster_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "modulemaster_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "modulemaster_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "modulemaster_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "modulemaster_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const notificationsInPplFirst = pplFirst.table("notifications", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	notificationType: text("notification_type").notNull(),
	notificationText: text("notification_text").notNull(),
	isActive: boolean("is_active").default(true).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createdUser: uuid("created_user").notNull(),
	updatedUser: uuid("updated_user"),
	createdTenant: uuid("created_tenant").notNull(),
	updatedTenant: uuid("updated_tenant"),
	notificationTemplateName: text("notification_template_name"),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "notifications_company_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.createdTenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "notifications_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdUser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "notifications_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.notificationType],
			foreignColumns: [masterdataInPplFirst.code],
			name: "notifications_notification_type_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "notifications_tenant_id_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedTenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "notifications_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updatedUser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "notifications_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const agencyMasterInPplFirst = pplFirst.table("agency_master", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	agencyName: text("agency_name").notNull(),
	agencyCode: text("agency_code").notNull(),
	tenant: uuid().notNull(),
	billingAddress: text("billing_address"),
	shippingAddress: text("shipping_address"),
	pinCode: text("pin_code"),
	gstNumber: text("gst_number"),
	contactPersonName: text("contact_person_name"),
	contactPersonEmail: text("contact_person_email"),
	contactPersonPhone: text("contact_person_phone"),
	website: text(),
	isactive: boolean().default(true),
	createddatetime: timestamp({ mode: 'string' }).defaultNow(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid(),
	updateduser: uuid(),
	createdtenant: uuid(),
	updatedtenant: uuid(),
}, (table) => [
	unique("agency_master_agency_code_key").on(table.agencyCode),
]);

export const companyMasterInPplFirst = pplFirst.table("company_master", {
	companyId: uuid("company_id").defaultRandom().primaryKey().notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyCode: varchar("company_code", { length: 50 }).notNull(),
	companyName: varchar("company_name", { length: 255 }).notNull(),
	parentCompanyId: uuid("parent_company_id"),
	incorporationDate: date("incorporation_date"),
	industrySector: varchar("industry_sector", { length: 100 }),
	taxIdentifier: varchar("tax_identifier", { length: 50 }),
	defaultCurrency: char("default_currency", { length: 3 }),
	numberOfEmployees: integer("number_of_employees"),
	websiteUrl: varchar("website_url", { length: 255 }),
	contactName: varchar("contact_name", { length: 100 }),
	contactPhone: varchar("contact_phone", { length: 30 }),
	contactEmail: varchar("contact_email", { length: 255 }),
	logoUrl: varchar("logo_url", { length: 255 }),
	timeZone: varchar("time_zone", { length: 50 }),
	addressLine1: varchar("address_line1", { length: 255 }),
	addressLine2: varchar("address_line2", { length: 255 }),
	city: varchar({ length: 100 }),
	stateProvince: varchar("state_province", { length: 100 }),
	postalCode: varchar("postal_code", { length: 20 }),
	country: varchar({ length: 100 }),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid().notNull(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid().notNull(),
}, (table) => [
	uniqueIndex("ux_company_master_tenant_code").using("btree", table.tenantId.asc().nullsLast().op("uuid_ops"), table.companyCode.asc().nullsLast().op("uuid_ops")),
	uniqueIndex("ux_company_master_tenant_name").using("btree", table.tenantId.asc().nullsLast().op("text_ops"), table.companyName.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_company_master_created_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_company_master_created_user"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.parentCompanyId],
			foreignColumns: [table.companyId],
			name: "fk_company_master_parent"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_company_master_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_company_master_updated_tenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_company_master_updated_user"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const masterdatahierarchyInPplFirst = pplFirst.table("masterdatahierarchy", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	code: text().notNull(),
	parentcode: text().notNull(),
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
}, (table) => [
	foreignKey({
			columns: [table.code, table.tenant],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_code_code_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.parentcode, table.tenant],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_parentcode_code_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "masterdatahierarchy_createdtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "masterdatahierarchy_createduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "masterdatahierarchy_tenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "masterdatahierarchy_updatedtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "masterdatahierarchy_updateduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const policyInPplFirst = pplFirst.table("policy", {
	id: uuid().defaultRandom().notNull(),
	tenant: uuid().notNull(),
	companyId: uuid("company_id").notNull(),
	title: text().notNull(),
	content: text().notNull(),
	version: text(),
	effectiveFromDate: date("effective_from_date").notNull(),
	effectiveToDate: date("effective_to_date"),
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
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "policy_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "policy_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "policy_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "policy_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "policy_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const rolepermissionInPplFirst = pplFirst.table("rolepermission", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenant: uuid().notNull(),
	role: text().notNull(),
	permission: text().notNull(),
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
}, (table) => [
	foreignKey({
			columns: [table.tenant, table.role],
			foreignColumns: [roleInPplFirst.tenant, roleInPplFirst.code],
			name: "fk_role_code_role"
		}),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "rolepermission_createdtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "rolepermission_createduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "rolepermission_tenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "rolepermission_updatedtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "rolepermission_updateduser_user_id_fk"
		}),
]);

export const onboardingReferencesInPplFirst = pplFirst.table("onboarding_references", {
	referenceId: uuid("reference_id").defaultRandom().primaryKey().notNull(),
	onboardingId: uuid("onboarding_id").notNull(),
	referenceType: text("reference_type").notNull(),
	refereeName: varchar("referee_name", { length: 255 }).notNull(),
	refereeEmail: varchar("referee_email", { length: 255 }).notNull(),
	refereeOccupation: varchar("referee_occupation", { length: 255 }),
	refereeRelationship: text("referee_relationship"),
	refereeCompany: varchar("referee_company", { length: 255 }),
	refereeEmployeeId: varchar("referee_employee_id", { length: 100 }),
	consentToContact: boolean("consent_to_contact").default(false).notNull(),
	referenceStartDate: date("reference_start_date"),
	referenceEndDate: date("reference_end_date"),
	tenant: uuid().notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	isactive: boolean().default(true).notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "onboarding_references_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "onboarding_references_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.onboardingId],
			foreignColumns: [userOnboardingInPplFirst.id],
			name: "onboarding_references_onboarding_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "onboarding_references_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "onboarding_references_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	unique("uq_onboard_ref").on(table.onboardingId, table.refereeEmail),
]);

export const permissionInPplFirst = pplFirst.table("permission", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenant: uuid().notNull(),
	name: text().notNull(),
	code: text().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	notes: text(),
	filepath: text(),
	previousid: text(),
}, (table) => [
	uniqueIndex("permission_code_unique1").using("btree", table.tenant.asc().nullsLast().op("text_ops"), table.code.asc().nullsLast().op("uuid_ops")),
	uniqueIndex("uq_permission_tenant_code").using("btree", table.tenant.asc().nullsLast().op("text_ops"), table.code.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "permission_createdtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "permission_createduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "permission_tenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "permission_updatedtenant_tenant_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "permission_updateduser_user_id_fk"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const subscriptionmasterInPplFirst = pplFirst.table("subscriptionmaster", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	description: text(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	currency: text().notNull(),
	unitprice: integer().notNull(),
	tenant: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "subscriptionmaster_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "subscriptionmaster_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "subscriptionmaster_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "subscriptionmaster_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "subscriptionmaster_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const subscriptionpricingInPplFirst = pplFirst.table("subscriptionpricing", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	type: text().notNull(),
	submoduleid: uuid().notNull(),
	unitprice: integer().notNull(),
	currency: text().notNull(),
	unit: text().notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	isactive: boolean().default(true).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "subscriptionpricing_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "subscriptionpricing_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.submoduleid],
			foreignColumns: [submodulemasterInPplFirst.id],
			name: "subscriptionpricing_submoduleid_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "subscriptionpricing_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "subscriptionpricing_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const supportTicketAttachmentInPplFirst = pplFirst.table("support_ticket_attachment", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	supportTicketId: uuid("support_ticket_id").notNull(),
	fileName: text("file_name").notNull(),
	filePath: text("file_path").notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid(),
	updateduser: uuid(),
	createdtenant: uuid(),
	updatedtenant: uuid(),
	isactive: boolean().default(true),
}, (table) => [
	foreignKey({
			columns: [table.supportTicketId],
			foreignColumns: [supportTicketInPplFirst.id],
			name: "fk_ticket_attachment_ticket"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const submodulemasterInPplFirst = pplFirst.table("submodulemaster", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	description: text(),
	tenant: uuid().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	currency: text().notNull(),
	unitprice: integer().notNull(),
	module: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "submodulemaster_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "submodulemaster_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.module],
			foreignColumns: [modulemasterInPplFirst.id],
			name: "submodulemaster_module_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "submodulemaster_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "submodulemaster_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "submodulemaster_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const supportTicketInPplFirst = pplFirst.table("support_ticket", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenant: uuid().notNull(),
	reporterUser: uuid("reporter_user").notNull(),
	assignedUser: uuid("assigned_user"),
	subject: text().notNull(),
	description: text(),
	status: text().notNull(),
	priority: text(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	ticketType: text("ticket_type"),
	module: text(),
}, (table) => [
	foreignKey({
			columns: [table.priority],
			foreignColumns: [masterdataInPplFirst.code],
			name: "fk_priority_type_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.ticketType],
			foreignColumns: [masterdataInPplFirst.code],
			name: "fk_ticket_type_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.assignedUser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "support_ticket_assigned_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "support_ticket_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "support_ticket_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.priority],
			foreignColumns: [masterdataInPplFirst.code],
			name: "support_ticket_priority_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.reporterUser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "support_ticket_reporter_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.status],
			foreignColumns: [masterdataInPplFirst.code],
			name: "support_ticket_status_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "support_ticket_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "support_ticket_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "support_ticket_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const subscriptiondetailsInPplFirst = pplFirst.table("subscriptiondetails", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	subscriptionmasterid: text(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	module: uuid().notNull(),
	subscription: uuid().notNull(),
	submodule: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "subscriptiondetails_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "subscriptiondetails_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.module],
			foreignColumns: [modulemasterInPplFirst.id],
			name: "subscriptiondetails_module_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.submodule],
			foreignColumns: [submodulemasterInPplFirst.id],
			name: "subscriptiondetails_submodule_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.subscription],
			foreignColumns: [subscriptionmasterInPplFirst.id],
			name: "subscriptiondetails_subscription_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "subscriptiondetails_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "subscriptiondetails_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveyInPplFirst = pplFirst.table("survey", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	name: text(),
	description: text(),
	language: text().notNull(),
	startdate: timestamp({ mode: 'string' }).notNull(),
	enddate: timestamp({ mode: 'string' }).notNull(),
	note: text(),
	order: integer(),
	isactive: boolean().default(false).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveyConditionalQuestionInPplFirst = pplFirst.table("survey_conditional_question", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	surveyOptionId: uuid("survey_option_id").notNull(),
	followupQuestionId: uuid("followup_question_id"),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	order: integer().notNull(),
	isactive: boolean().default(false).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	notes: text(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_cond_question_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_cond_question_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_cond_question_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.followupQuestionId],
			foreignColumns: [surveyQuestionInPplFirst.id],
			name: "fk_survey_cond_question_followup"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.surveyOptionId],
			foreignColumns: [surveyOptionInPplFirst.id],
			name: "fk_survey_cond_question_option"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_cond_question_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_cond_question_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_cond_question_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveyQuestionInPplFirst = pplFirst.table("survey_question", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	surveySectionId: uuid("survey_section_id").notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	order: integer().notNull(),
	text: text(),
	surveyquestiontype: text(),
	charlimit: integer(),
	minvalue: integer(),
	maxvalue: integer(),
	isactive: boolean().default(false).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_question_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_question_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_question_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.surveySectionId],
			foreignColumns: [surveySectionInPplFirst.id],
			name: "fk_survey_question_section"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_question_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_question_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_question_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveyLinkedEntityInPplFirst = pplFirst.table("survey_linked_entity", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	surveyId: uuid("survey_id").notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	entityType: text("entity_type").notNull(),
	entityValue: text("entity_value").notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_linked_entity_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_linked_entity_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_linked_entity_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.surveyId],
			foreignColumns: [surveyInPplFirst.id],
			name: "fk_survey_linked_entity_survey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_linked_entity_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_linked_entity_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_linked_entity_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveySectionInPplFirst = pplFirst.table("survey_section", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	surveyId: uuid("survey_id").notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	name: text(),
	description: text(),
	order: integer().notNull(),
	isactive: boolean().default(false).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_section_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_section_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_section_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.surveyId],
			foreignColumns: [surveyInPplFirst.id],
			name: "fk_survey_section_survey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_section_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_section_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_section_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveyInstanceInPplFirst = pplFirst.table("survey_instance", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	surveyId: uuid("survey_id").notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	isactive: boolean().default(false).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_instance_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_instance_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_instance_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.surveyId],
			foreignColumns: [surveyInPplFirst.id],
			name: "fk_survey_instance_survey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_instance_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_instance_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_instance_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveyOptionInPplFirst = pplFirst.table("survey_option", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	surveyQuestionId: uuid("survey_question_id").notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	order: integer().notNull(),
	text: text(),
	isactive: boolean().default(false).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_option_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_option_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_option_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.surveyQuestionId],
			foreignColumns: [surveyQuestionInPplFirst.id],
			name: "fk_survey_option_question"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_option_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_option_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_option_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveyUserInPplFirst = pplFirst.table("survey_user", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	surveyId: uuid("survey_id").notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	userType: text("user_type").notNull(),
	variant: text(),
	isactive: boolean().default(false).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_user_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_user_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_user_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.surveyId],
			foreignColumns: [surveyInPplFirst.id],
			name: "fk_survey_user_survey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_user_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_user_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_user_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const surveyResponseInPplFirst = pplFirst.table("survey_response", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	surveyInstanceId: uuid("survey_instance_id").notNull(),
	surveyQuestionId: uuid("survey_question_id").notNull(),
	tenantId: uuid("tenant_id").notNull(),
	companyId: uuid("company_id").notNull(),
	response: text(),
	notes: text(),
	isactive: boolean().default(false).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	previousid: text(),
}, (table) => [
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_survey_response_company"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_response_createdtenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_response_createduser"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.surveyInstanceId],
			foreignColumns: [surveyInstanceInPplFirst.id],
			name: "fk_survey_response_instance"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.surveyQuestionId],
			foreignColumns: [surveyQuestionInPplFirst.id],
			name: "fk_survey_response_question"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_response_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_survey_response_updatedtenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_survey_response_updateduser"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const supportTicketCommentInPplFirst = pplFirst.table("support_ticket_comment", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	ticketId: uuid("ticket_id").notNull(),
	comment: text().notNull(),
	commentedBy: uuid("commented_by").notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.commentedBy],
			foreignColumns: [usermasterInPplFirst.id],
			name: "stc_commentedby_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "stc_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "stc_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.ticketId],
			foreignColumns: [supportTicketInPplFirst.id],
			name: "stc_ticket_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "stc_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "stc_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const supportTicketSlaInPplFirst = pplFirst.table("support_ticket_sla", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	ticketType: text("ticket_type").notNull(),
	priority: text().notNull(),
	module: text(),
	responseTime: interval("response_time").notNull(),
	resolutionTime: interval("resolution_time").notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid(),
	createdtenant: uuid(),
	isactive: boolean().default(true),
}, (table) => [
	foreignKey({
			columns: [table.priority],
			foreignColumns: [masterdataInPplFirst.code],
			name: "fk_sla_priority_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.ticketType],
			foreignColumns: [masterdataInPplFirst.code],
			name: "fk_sla_ticket_type_masterdata"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const supportTicketStatusHistoryInPplFirst = pplFirst.table("support_ticket_status_history", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	ticketId: uuid("ticket_id").notNull(),
	previousStatus: text("previous_status"),
	newStatus: text("new_status").notNull(),
	changedBy: uuid("changed_by").notNull(),
	changedAt: timestamp("changed_at", { precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.changedBy],
			foreignColumns: [usermasterInPplFirst.id],
			name: "stsh_changedby_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "stsh_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "stsh_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.newStatus],
			foreignColumns: [masterdataInPplFirst.code],
			name: "stsh_newstatus_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.previousStatus],
			foreignColumns: [masterdataInPplFirst.code],
			name: "stsh_prevstatus_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.ticketId],
			foreignColumns: [supportTicketInPplFirst.id],
			name: "stsh_ticket_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "stsh_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "stsh_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const tenantpaymentInPplFirst = pplFirst.table("tenantpayment", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	paymentduedate: timestamp({ precision: 3, mode: 'string' }).notNull(),
	paymentstatus: text().notNull(),
	paymentdate: timestamp({ precision: 3, mode: 'string' }).notNull(),
	amount: integer().notNull(),
	currency: text().notNull(),
	invoiceid: text().notNull(),
	invoicedate: timestamp({ precision: 3, mode: 'string' }).notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	tenantsubscription: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantpayment_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenantpayment_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenantsubscription],
			foreignColumns: [tenantsubscriptionInPplFirst.id],
			name: "tenantpayment_tenantsubscription_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantpayment_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenantpayment_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const tenantInPplFirst = pplFirst.table("tenant", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	loginname: text(),
	loginmethod: text().notNull(),
	loginchannel: text().notNull(),
	logindomain: text().notNull(),
	contactname: text().notNull(),
	primarylogo: text().notNull(),
	secondarylogo: text().notNull(),
	primarycolor: text().notNull(),
	storagebucket: text().notNull(),
	usercodeprefix: text().notNull(),
	gstno: text(),
	sequence: integer(),
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
	tenanttype: text().default('LEGAL').notNull(),
	shortname: text().notNull(),
	contactperson: text().notNull(),
	favicon: text().default('').notNull(),
	iconpic: text(),
	parenttenant: uuid().notNull(),
}, (table) => [
	uniqueIndex("tenant_sequence_key").using("btree", table.sequence.asc().nullsLast().op("int4_ops")),
	uniqueIndex("tenant_usercodeprefix_unique").using("btree", table.usercodeprefix.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [table.id],
			name: "tenant_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenant_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.parenttenant],
			foreignColumns: [table.id],
			name: "tenant_parenttenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [table.id],
			name: "tenant_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenant_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const tenantcontactInPplFirst = pplFirst.table("tenantcontact", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenant: uuid().notNull(),
	tenantcontacttype: text().notNull(),
	value: text().notNull(),
	isverified: boolean().default(false).notNull(),
	verifiedby: text(),
	verifieddatetime: timestamp({ precision: 6, mode: 'string' }),
	isprimarycontact: boolean().default(false).notNull(),
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
	addressline1: text().notNull(),
	addressline2: text(),
	city: text().notNull(),
	block: text(),
	district: text(),
	state: text().notNull(),
	country: text().notNull(),
	pincode: text().notNull(),
	lattitude: text(),
	longitude: text(),
	isprimaryaddress: boolean().default(false).notNull(),
	iconpic: text(),
}, (table) => [
	foreignKey({
			columns: [table.tenant, table.tenantcontacttype],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_type_code_masterdata"
		}),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantcontact_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenantcontact_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantcontact_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantcontact_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenantcontact_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const tenantsubscriptionpricingInPplFirst = pplFirst.table("tenantsubscriptionpricing", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenant: uuid().notNull(),
	tenantsubid: uuid().notNull(),
	submoduleid: uuid().notNull(),
	unitprice: integer().notNull(),
	currency: text().notNull(),
	min: integer().notNull(),
	max: integer().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantsubscriptionpricing_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenantsubscriptionpricing_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.submoduleid],
			foreignColumns: [submodulemasterInPplFirst.id],
			name: "tenantsubscriptionpricing_submoduleid_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantsubscriptionpricing_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenantsubid],
			foreignColumns: [tenantsubscriptionInPplFirst.id],
			name: "tenantsubscriptionpricing_tenantsubid_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantsubscriptionpricing_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenantsubscriptionpricing_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const userInPplFirst = pplFirst.table("user", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text(),
	email: text(),
	emailverified: timestamp({ precision: 3, mode: 'string' }),
	image: text(),
	usermaster: uuid(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	uniqueIndex("user_email_key").using("btree", table.email.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_usermaster_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const userOnboardingInPplFirst = pplFirst.table("user_onboarding", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenant: uuid().notNull(),
	companyId: uuid("company_id").notNull(),
	userId: uuid("user_id").notNull(),
	startDate: date("start_date").default(sql`CURRENT_DATE`).notNull(),
	onboardingStatus: text("onboarding_status"),
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
	jobId: text("job_id"),
	candidateId: text("candidate_id"),
}, (table) => [
	foreignKey({
			columns: [table.onboardingStatus],
			foreignColumns: [masterdataInPplFirst.code],
			name: "fk_user_onboarding_onboarding_status"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "uob_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "uob_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "uob_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "uob_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "uob_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [usermasterInPplFirst.id],
			name: "uob_user_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const userLanguageInPplFirst = pplFirst.table("user_language", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	usermasterId: uuid("usermaster_id").notNull(),
	languageCode: text("language_code").notNull(),
	speakingLevel: text("speaking_level").notNull(),
	readingLevel: text("reading_level").notNull(),
	writingLevel: text("writing_level").notNull(),
	tenant: uuid().notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	isactive: boolean().default(true).notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_language_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_language_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.languageCode],
			foreignColumns: [masterdataInPplFirst.code],
			name: "user_language_language_code_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_language_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_language_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermasterId],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_language_usermaster_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	unique("uq_user_lang").on(table.usermasterId, table.languageCode),
]);

export const userbankingInPplFirst = pplFirst.table("userbanking", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	accountno: text().notNull(),
	accountname: text().notNull(),
	backname: text().notNull(),
	branchname: text().notNull(),
	accounttype: text().notNull(),
	ifsccode: text().notNull(),
	micrcode: text().notNull(),
	isprimary: boolean().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	tenant: uuid().notNull(),
	usermaster: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userbanking_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userbanking_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userbanking_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userbanking_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userbanking_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userbanking_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const userOnboardingAssignmentInPplFirst = pplFirst.table("user_onboarding_assignment", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	onboardingId: uuid("onboarding_id").notNull(),
	assignedPersonCode: text("assigned_person_code").notNull(),
	assignedUserId: uuid("assigned_user_id").notNull(),
	tenant: uuid().notNull(),
	companyId: uuid("company_id").notNull(),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	notes: text(),
	previousid: text(),
	isactive: boolean().default(true).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.assignedUserId],
			foreignColumns: [usermasterInPplFirst.id],
			name: "uoa_assigneduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "uoa_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "uoa_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.onboardingId],
			foreignColumns: [userOnboardingInPplFirst.id],
			name: "uoa_onboarding_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "uoa_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "uoa_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "uoa_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const userOnboardingDocumentInPplFirst = pplFirst.table("user_onboarding_document", {
	id: text().primaryKey().notNull(),
	onboardingId: uuid("onboarding_id").notNull(),
	documenttype: text().notNull(),
	validuntil: timestamp({ precision: 3, mode: 'string' }).notNull(),
	url: text().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	tenant: uuid().notNull(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	documentNumber: text("document_number"),
	issuedBy: text("issued_by"),
}, (table) => [
	foreignKey({
			columns: [table.onboardingId],
			foreignColumns: [userOnboardingInPplFirst.id],
			name: "uoa_onboarding_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userdocument_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userdocument_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userdocument_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userdocument_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userdocument_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const userBgvAssignmentInPplFirst = pplFirst.table("user_bgv_assignment", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	agencyId: uuid("agency_id").notNull(),
	assignedDatetime: timestamp("assigned_datetime", { mode: 'string' }).defaultNow().notNull(),
	status: text().notNull(),
	statusDatetime: timestamp("status_datetime", { mode: 'string' }).defaultNow().notNull(),
	comment: text(),
	tenant: uuid().notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid().notNull(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid().notNull(),
	isactive: boolean().default(true).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.agencyId],
			foreignColumns: [agencyMasterInPplFirst.id],
			name: "user_bgv_assignment_agency_id_fkey"
		}),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_bgv_assignment_createdtenant_fkey"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_bgv_assignment_createduser_fkey"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_bgv_assignment_tenant_fkey"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_bgv_assignment_updatedtenant_fkey"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_bgv_assignment_updateduser_fkey"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_bgv_assignment_user_id_fkey"
		}),
]);

export const usercontactInPplFirst = pplFirst.table("usercontact", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	usermaster: uuid().notNull(),
	tenant: uuid().notNull(),
	usercontacttype: text().notNull(),
	value: text().notNull(),
	isverified: boolean().default(false).notNull(),
	verifiedby: text(),
	verifieddatetime: timestamp({ precision: 6, mode: 'string' }),
	isprimarycontact: boolean().default(false).notNull(),
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
	relationship: text(),
	contactname: text(),
	emergencycontactname: text(),
}, (table) => [
	uniqueIndex("uk_ucontact").using("btree", table.value.asc().nullsLast().op("uuid_ops"), table.tenant.asc().nullsLast().op("text_ops"), table.usermaster.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.tenant, table.usercontacttype],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_type_code_masterdata"
		}),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usercontact_createdtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usercontact_createduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usercontact_tenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usercontact_updatedtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usercontact_updateduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usercontact_user_user_id_fk"
		}),
]);

export const usercontentInPplFirst = pplFirst.table("usercontent", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	content: text().notNull(),
	iscompleted: boolean().default(false).notNull(),
	completepercentage: integer().default(0).notNull(),
	viewcount: integer().default(0).notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	usermaster: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	uniqueIndex("usercontent_content_usermaster_key").using("btree", table.content.asc().nullsLast().op("text_ops"), table.usermaster.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.content],
			foreignColumns: [contentInPplFirst.id],
			name: "usercontent_content_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usercontent_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usercontent_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usercontent_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usercontent_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usercontent_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const userCertificationsInPplFirst = pplFirst.table("user_certifications", {
	userCertificationId: uuid("user_certification_id").defaultRandom().primaryKey().notNull(),
	tenantId: uuid("tenant_id").notNull(),
	userId: uuid("user_id").notNull(),
	certificationId: uuid("certification_id").notNull(),
	certificationNumber: varchar("certification_number", { length: 255 }),
	issuedDate: date("issued_date").notNull(),
	expiryDate: date("expiry_date"),
	verificationStatus: varchar("verification_status", { length: 50 }).notNull(),
	verificationDate: date("verification_date"),
	evidenceUrl: varchar("evidence_url", { length: 2048 }),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	uniqueIndex("ux_user_certs_tenant_user_cert").using("btree", table.tenantId.asc().nullsLast().op("uuid_ops"), table.userId.asc().nullsLast().op("uuid_ops"), table.certificationId.asc().nullsLast().op("uuid_ops")),
	foreignKey({
			columns: [table.certificationId],
			foreignColumns: [certificationsInPplFirst.certificationId],
			name: "fk_uc_cert"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_uc_created_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_uc_created_user"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenantId],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_uc_tenant"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "fk_uc_updated_tenant"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_uc_updated_user"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [usermasterInPplFirst.id],
			name: "fk_uc_user"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const userdocumentInPplFirst = pplFirst.table("userdocument", {
	id: text().primaryKey().notNull(),
	documenttype: text().notNull(),
	validuntil: timestamp({ precision: 3, mode: 'string' }).notNull(),
	url: text().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	tenant: uuid().notNull(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	usermaster: uuid().notNull(),
	documentNumber: text("document_number"),
	issuedBy: text("issued_by"),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userdocument_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userdocument_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userdocument_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userdocument_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userdocument_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userdocument_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const usereducationInPplFirst = pplFirst.table("usereducation", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	qualification: text().notNull(),
	stream: text().notNull(),
	subject: text().notNull(),
	completionyear: integer().notNull(),
	institution: text().notNull(),
	mark: text().notNull(),
	sequence: integer().default(1).notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	usermaster: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	instituteLocation: text("institute_location"),
	instituteContact: text("institute_contact"),
	boardName: text("board_name"),
	boardLocation: text("board_location"),
	enrollmentNumber: text("enrollment_number"),
	periodFrom: date("period_from"),
	periodTo: date("period_to"),
	graduationStatus: text("graduation_status"),
	courseType: text("course_type"),
	courseName: text("course_name"),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usereducation_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usereducation_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usereducation_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usereducation_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usereducation_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const usereducationDocumentInPplFirst = pplFirst.table("usereducation_document", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	usereducationId: uuid("usereducation_id").notNull(),
	documentType: text("document_type").notNull(),
	fileUrl: text("file_url"),
	remarks: text(),
	tenant: uuid().notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid().notNull(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid().notNull(),
	isactive: boolean().default(true).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usereducation_document_createdtenant_fkey"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usereducation_document_createduser_fkey"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usereducation_document_tenant_fkey"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usereducation_document_updatedtenant_fkey"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "usereducation_document_updateduser_fkey"
		}),
	foreignKey({
			columns: [table.usereducationId],
			foreignColumns: [usereducationInPplFirst.id],
			name: "usereducation_document_usereducation_id_fkey"
		}),
]);

export const userexperienceInPplFirst = pplFirst.table("userexperience", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	orgname: text().notNull(),
	designation: text().notNull(),
	primaryskill: text(),
	fromdate: timestamp({ precision: 3, mode: 'string' }).notNull(),
	todate: timestamp({ precision: 3, mode: 'string' }).notNull(),
	exitreason: text(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	currentlyemployed: boolean().default(false).notNull(),
	experience: integer().notNull(),
	sequence: integer().default(1).notNull(),
	createdtenant: uuid().notNull(),
	createduser: uuid().notNull(),
	tenant: uuid().notNull(),
	usermaster: uuid().notNull(),
	updateduser: uuid(),
	updatedtenant: uuid(),
	jobSummary: text("job_summary"),
	companyStatus: text("company_status"),
	companyAddress: text("company_address"),
	contactNumber: text("contact_number"),
	city: text(),
	state: text(),
	supervisorName: text("supervisor_name"),
	supervisorDesignation: text("supervisor_designation"),
	supervisorContact: text("supervisor_contact"),
	department: text(),
	supervisorEmail: text("supervisor_email"),
	remuneration: numeric(),
	hrContact1: text("hr_contact_1"),
	hrContact2: text("hr_contact_2"),
	employeeId: text("employee_id"),
	employmentType: text("employment_type"),
	natureOfEmployment: text("nature_of_employment"),
	thirdPartyDetails: text("third_party_details"),
	canContactNow: boolean("can_contact_now"),
	contactDate: date("contact_date"),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userexperience_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userexperience_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userexperience_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userexperience_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userexperience_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userexperience_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const useraddressInPplFirst = pplFirst.table("useraddress", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	usermaster: uuid().notNull(),
	tenant: uuid().notNull(),
	useraddresstype: text().notNull(),
	addressline1: text().notNull(),
	addressline2: text(),
	city: text().notNull(),
	block: text(),
	district: text(),
	state: text().notNull(),
	country: text().notNull(),
	pincode: text().notNull(),
	lattitude: text(),
	longitude: text(),
	isprimaryaddress: boolean().default(false).notNull(),
	isverified: boolean(),
	verifiedby: uuid(),
	verifieddatetime: timestamp({ precision: 6, mode: 'string' }),
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
	iconpic: text(),
}, (table) => [
	foreignKey({
			columns: [table.tenant, table.block],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_block_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.city],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_city_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.country],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_country_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.district],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_district_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.state],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_state_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.useraddresstype],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_type_code_masterdata"
		}),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "useraddress_createdtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "useraddress_createduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "useraddress_tenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "useraddress_updatedtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "useraddress_updateduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "useraddress_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.verifiedby],
			foreignColumns: [usermasterInPplFirst.id],
			name: "useraddress_verifiedby_user_id_fk"
		}),
]);

export const userDirectorshipInPplFirst = pplFirst.table("user_directorship", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	companyName: text("company_name").notNull(),
	companyStatus: text("company_status"),
	knownAs: text("known_as"),
	address: text(),
	contactNumber: text("contact_number"),
	city: text(),
	state: text(),
	dateOfJoining: date("date_of_joining"),
	dateOfExit: date("date_of_exit"),
	reasonForLeaving: text("reason_for_leaving"),
	dinNumber: text("din_number"),
	tenant: uuid().notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid().notNull(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid().notNull(),
	isactive: boolean().default(true).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_directorship_createdtenant_fkey"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_directorship_createduser_fkey"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_directorship_tenant_fkey"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "user_directorship_updatedtenant_fkey"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_directorship_updateduser_fkey"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_directorship_user_id_fkey"
		}),
]);

export const userimmigrationInPplFirst = pplFirst.table("userimmigration", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	visatype: text().notNull(),
	visacountry: text().notNull(),
	issueddate: timestamp({ precision: 3, mode: 'string' }).notNull(),
	issuingauthority: text().notNull(),
	validutil: timestamp({ precision: 3, mode: 'string' }).notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	visaid: text().notNull(),
	tenant: uuid().notNull(),
	usermaster: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userimmigration_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userimmigration_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userimmigration_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userimmigration_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userimmigration_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userimmigration_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const userlogInPplFirst = pplFirst.table("userlog", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	usermaster: uuid(),
	tenant: uuid(),
	event: text(),
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
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userlog_createdtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userlog_createduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userlog_tenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userlog_updatedtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userlog_updateduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userlog_user_user_id_fk"
		}),
]);

export const userskillInPplFirst = pplFirst.table("userskill", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	domain: text().notNull(),
	skill: text().notNull(),
	isprimary: boolean().notNull(),
	tool: text().notNull(),
	proficiency: text().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	tenant: uuid().notNull(),
	usermaster: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userskill_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userskill_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userskill_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userskill_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userskill_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userskill_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const userprofileDojHistoryInPplFirst = pplFirst.table("userprofile_doj_history", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tenant: uuid().notNull(),
	companyId: uuid("company_id").notNull(),
	userId: uuid("user_id").notNull(),
	previousDateofjoining: date("previous_dateofjoining").notNull(),
	newDateofjoining: date("new_dateofjoining").notNull(),
	reason: text().notNull(),
	changedBy: uuid("changed_by").notNull(),
	changedAt: timestamp("changed_at", { precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.changedBy],
			foreignColumns: [usermasterInPplFirst.id],
			name: "dojhist_changedby_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "dojhist_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "dojhist_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "dojhist_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "dojhist_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "dojhist_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [userprofileInPplFirst.id],
			name: "dojhist_user_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const userrolemapInPplFirst = pplFirst.table("userrolemap", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	usermaster: uuid().notNull(),
	tenant: uuid().notNull(),
	role: text().notNull(),
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
	iconpic: text(),
}, (table) => [
	uniqueIndex("uk_usermaster_role").using("btree", table.usermaster.asc().nullsLast().op("text_ops"), table.role.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.role],
			foreignColumns: [roleInPplFirst.code],
			name: "fk_role_code_role"
		}),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userrole_createdtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userrole_createduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userrole_tenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userrole_updatedtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userrole_updateduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userrole_user_user_id_fk"
		}),
]);

export const userprofileInPplFirst = pplFirst.table("userprofile", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	usermaster: uuid().notNull(),
	tenant: uuid().notNull(),
	firstname: text().notNull(),
	middlename: text(),
	lastname: text(),
	band: text(),
	city: text(),
	company: text(),
	department: text(),
	designation: text(),
	empstatus: text(),
	gender: text(),
	dob: timestamp({ precision: 3, mode: 'string' }),
	usercode: text().notNull(),
	branch: text(),
	isactive: boolean().default(true).notNull(),
	dateofjoining: timestamp({ precision: 3, mode: 'string' }),
	createddatetime: timestamp({ precision: 6, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 6, mode: 'string' }),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	notes: text(),
	filepath: text(),
	previousid: text(),
	baselocation: text(),
	worklocation: text(),
	officeaddress: text(),
	profilesummary: text(),
	signatory: boolean().default(false).notNull(),
	nationality: text(),
	serviceline: text(),
	timetype: text(),
	workforcegroup: text(),
	workertype: text(),
	totalexperience: integer(),
	l1Manager: uuid("l1_manager"),
	l2Manager: uuid("l2_manager"),
	dl1Manager: text("dl1_manager"),
	dl2Manager: text("dl2_manager"),
	baseCampus: text("base_campus"),
	workCampus: text("work_campus"),
	bloodGroup: text("blood_group"),
	uanNumber: text("uan_number"),
	pfNumber: text("pf_number"),
	maritalStatus: text("marital_status"),
	hrbp: uuid(),
}, (table) => [
	uniqueIndex("uk_uprofile").using("btree", table.tenant.asc().nullsLast().op("text_ops"), table.usercode.asc().nullsLast().op("text_ops")),
	uniqueIndex("userprofile_usercode_unique").using("btree", table.usercode.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.tenant, table.band],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_band_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.branch],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_branch_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.city],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_city_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.company],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_company_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.department],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_department_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.designation],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_designation_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.empstatus],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_empstatus_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.gender],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_gender_code_masterdata"
		}),
	foreignKey({
			columns: [table.tenant, table.baselocation],
			foreignColumns: [datagroupInPplFirst.code, datagroupInPplFirst.tenant],
			name: "fk_workarea_code_datagroup"
		}),
	foreignKey({
			columns: [table.tenant, table.worklocation],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_worklocation_code_masterdata"
		}),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userprofile_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userprofile_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.hrbp],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userprofile_hrbp_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.l1Manager],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userprofile_l1_manager_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.l2Manager],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userprofile_l2_manager_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userprofile_tenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userprofile_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userprofile_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userprofile_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const userexperienceDocumentInPplFirst = pplFirst.table("userexperience_document", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userexperienceId: uuid("userexperience_id").notNull(),
	documentType: text("document_type").notNull(),
	fileUrl: text("file_url"),
	remarks: text(),
	tenant: uuid().notNull(),
	createddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid().notNull(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid().notNull(),
	isactive: boolean().default(true).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userexperience_document_createdtenant_fkey"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userexperience_document_createduser_fkey"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userexperience_document_tenant_fkey"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userexperience_document_updatedtenant_fkey"
		}),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userexperience_document_updateduser_fkey"
		}),
	foreignKey({
			columns: [table.userexperienceId],
			foreignColumns: [userexperienceInPplFirst.id],
			name: "userexperience_document_userexperience_id_fkey"
		}),
]);

export const userskilltoolInPplFirst = pplFirst.table("userskilltool", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	tool: text().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	userskill: uuid().notNull(),
	tenant: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
	usermaster: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userskilltool_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userskilltool_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userskilltool_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userskilltool_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userskilltool_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userskilltool_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.userskill],
			foreignColumns: [userskillInPplFirst.id],
			name: "userskilltool_userskill_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const userworkpreferenceInPplFirst = pplFirst.table("userworkpreference", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	worklocation1: text().notNull(),
	worklocation2: text().notNull(),
	worklocation3: text().notNull(),
	expectedctc: integer().notNull(),
	employmenttype: text().notNull(),
	shiftwork: boolean().notNull(),
	willingtotravel: boolean().notNull(),
	workmode: boolean().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	usermaster: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userworkpreference_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userworkpreference_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userworkpreference_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userworkpreference_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userworkpreference_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const userfeedbackInPplFirst = pplFirst.table("userfeedback", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	training: text(),
	course: text(),
	rating: integer().default(1).notNull(),
	scale: integer().notNull(),
	comment: text().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	tenant: uuid().notNull(),
	usermaster: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userfeedback_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userfeedback_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userfeedback_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "userfeedback_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userfeedback_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.usermaster],
			foreignColumns: [usermasterInPplFirst.id],
			name: "userfeedback_usermaster_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const agencyServiceMapInPplFirst = pplFirst.table("agency_service_map", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	agencyMasterId: uuid("agency_master_id").notNull(),
	serviceMasterdataId: uuid("service_masterdata_id").notNull(),
	tenant: uuid().notNull(),
	isactive: boolean().default(true),
	createddatetime: timestamp({ mode: 'string' }).defaultNow(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid(),
	updateduser: uuid(),
	createdtenant: uuid(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.agencyMasterId],
			foreignColumns: [agencyMasterInPplFirst.id],
			name: "agency_service_map_agency_master_id_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.serviceMasterdataId],
			foreignColumns: [masterdataInPplFirst.id],
			name: "agency_service_map_service_masterdata_id_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

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
}, (table) => [
	uniqueIndex("user_login_unique").using("btree", table.login.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.companyId],
			foreignColumns: [companyMasterInPplFirst.companyId],
			name: "fk_usermaster_company"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usermaster_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [table.id],
			name: "usermaster_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usermaster_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "usermaster_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [table.id],
			name: "usermaster_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const roleInPplFirst = pplFirst.table("role", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
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
	approvertype: text(),
	iseditable: boolean().default(true).notNull(),
	iconpic: text(),
	code: text().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.tenant, table.approvertype],
			foreignColumns: [masterdataInPplFirst.code, masterdataInPplFirst.tenant],
			name: "fk_role_approvertype_masterdata_code"
		}),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "role_createdtenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "role_createduser_user_id_fk"
		}),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "role_tenant_tenant_id_fk"
		}),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "role_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "role_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const tenantsubscriptionInPplFirst = pplFirst.table("tenantsubscription", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	startdate: timestamp({ precision: 3, mode: 'string' }).notNull(),
	enddate: timestamp({ precision: 3, mode: 'string' }).notNull(),
	minusers: integer().notNull(),
	maxusers: integer().notNull(),
	unitprice: integer().notNull(),
	currency: text().notNull(),
	billingcycle: text().notNull(),
	isactive: boolean().default(true).notNull(),
	createddatetime: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updateddatetime: timestamp({ precision: 3, mode: 'string' }),
	notes: text(),
	iconpic: text(),
	previousid: text(),
	tenant: uuid().notNull(),
	subscription: uuid().notNull(),
	createduser: uuid().notNull(),
	updateduser: uuid(),
	createdtenant: uuid().notNull(),
	updatedtenant: uuid(),
}, (table) => [
	uniqueIndex("tenantsubscription_tenant_key").using("btree", table.tenant.asc().nullsLast().op("uuid_ops")),
	foreignKey({
			columns: [table.createdtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantsubscription_createdtenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.createduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenantsubscription_createduser_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.subscription],
			foreignColumns: [subscriptionmasterInPplFirst.id],
			name: "tenantsubscription_subscription_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.tenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantsubscription_tenant_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.updatedtenant],
			foreignColumns: [tenantInPplFirst.id],
			name: "tenantsubscription_updatedtenant_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.updateduser],
			foreignColumns: [usermasterInPplFirst.id],
			name: "tenantsubscription_updateduser_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const userAgencyMapInPplFirst = pplFirst.table("user_agency_map", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	agencyMasterId: uuid("agency_master_id").notNull(),
	tenant: uuid().notNull(),
	isactive: boolean().default(true),
	createddatetime: timestamp({ mode: 'string' }).defaultNow(),
	updateddatetime: timestamp({ mode: 'string' }).defaultNow(),
	createduser: uuid(),
	updateduser: uuid(),
	createdtenant: uuid(),
	updatedtenant: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.agencyMasterId],
			foreignColumns: [agencyMasterInPplFirst.id],
			name: "user_agency_map_agency_master_id_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [usermasterInPplFirst.id],
			name: "user_agency_map_user_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);
