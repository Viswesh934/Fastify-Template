-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE SCHEMA "ppl_first";
--> statement-breakpoint
CREATE TABLE "ppl_first"."masterdata" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"code" text NOT NULL,
	"datagroup" text NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"master_data_rank" smallint DEFAULT 0 NOT NULL,
	CONSTRAINT "uq_masterdata_id_tenant" UNIQUE("id","tenant")
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."company_masterdata_map" (
	"company_masterdata_map_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_id" uuid NOT NULL,
	"object_type" text NOT NULL,
	"object_value" text NOT NULL,
	"tenant" uuid NOT NULL,
	"createddatetime" timestamp DEFAULT now(),
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid,
	"updateduser" uuid,
	"createdtenant" uuid,
	"updatedtenant" uuid,
	"isactive" boolean DEFAULT true,
	CONSTRAINT "uq_cmd_company_object_tenant" UNIQUE("company_id","object_type","object_value","tenant")
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."certification_providers" (
	"provider_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"provider_name" varchar(255) NOT NULL,
	"description" text,
	"website" varchar(255),
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."content" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"url" text NOT NULL,
	"publishedby" text NOT NULL,
	"contenttype" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"contentsubtype" text NOT NULL,
	"tenant" uuid NOT NULL,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"createduser" uuid NOT NULL,
	"updateduser" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."company_masterdata_hierarchy" (
	"company_masterdata_hierarchy_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_id" uuid NOT NULL,
	"masterdata_id" uuid NOT NULL,
	"parent_masterdata_id" uuid,
	"tenant" uuid NOT NULL,
	"createddatetime" timestamp DEFAULT now(),
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid,
	"updateduser" uuid,
	"createdtenant" uuid,
	"updatedtenant" uuid,
	"isactive" boolean DEFAULT true,
	CONSTRAINT "uq_cmh_company_masterdata_tenant" UNIQUE("company_id","masterdata_id","parent_masterdata_id","tenant")
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."datagroup" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"code" text NOT NULL,
	"iseditable" boolean DEFAULT true NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"isdefault" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."datagrouphierarchy" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" text NOT NULL,
	"parentcode" text NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."certifications" (
	"certification_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"provider_id" uuid NOT NULL,
	"certification_name" varchar(255) NOT NULL,
	"description" text,
	"default_validity" interval,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."company_agency_map" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_id" uuid NOT NULL,
	"agency_master_id" uuid NOT NULL,
	"service_masterdata_id" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true,
	"createddatetime" timestamp DEFAULT now(),
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid,
	"updateduser" uuid,
	"createdtenant" uuid,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."modulemaster" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"currency" text NOT NULL,
	"unitprice" integer NOT NULL,
	"tenant" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."notifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"notification_type" text NOT NULL,
	"notification_text" text NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"created_user" uuid NOT NULL,
	"updated_user" uuid,
	"created_tenant" uuid NOT NULL,
	"updated_tenant" uuid,
	"notification_template_name" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."agency_master" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"agency_name" text NOT NULL,
	"agency_code" text NOT NULL,
	"tenant" uuid NOT NULL,
	"billing_address" text,
	"shipping_address" text,
	"pin_code" text,
	"gst_number" text,
	"contact_person_name" text,
	"contact_person_email" text,
	"contact_person_phone" text,
	"website" text,
	"isactive" boolean DEFAULT true,
	"createddatetime" timestamp DEFAULT now(),
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid,
	"updateduser" uuid,
	"createdtenant" uuid,
	"updatedtenant" uuid,
	CONSTRAINT "agency_master_agency_code_key" UNIQUE("agency_code")
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."company_master" (
	"company_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_code" varchar(50) NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"parent_company_id" uuid,
	"incorporation_date" date,
	"industry_sector" varchar(100),
	"tax_identifier" varchar(50),
	"default_currency" char(3),
	"number_of_employees" integer,
	"website_url" varchar(255),
	"contact_name" varchar(100),
	"contact_phone" varchar(30),
	"contact_email" varchar(255),
	"logo_url" varchar(255),
	"time_zone" varchar(50),
	"address_line1" varchar(255),
	"address_line2" varchar(255),
	"city" varchar(100),
	"state_province" varchar(100),
	"postal_code" varchar(20),
	"country" varchar(100),
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid NOT NULL,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."masterdatahierarchy" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" text NOT NULL,
	"parentcode" text NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."policy" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"tenant" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"version" text,
	"effective_from_date" date NOT NULL,
	"effective_to_date" date,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."rolepermission" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant" uuid NOT NULL,
	"role" text NOT NULL,
	"permission" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."onboarding_references" (
	"reference_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"onboarding_id" uuid NOT NULL,
	"reference_type" text NOT NULL,
	"referee_name" varchar(255) NOT NULL,
	"referee_email" varchar(255) NOT NULL,
	"referee_occupation" varchar(255),
	"referee_relationship" text,
	"referee_company" varchar(255),
	"referee_employee_id" varchar(100),
	"consent_to_contact" boolean DEFAULT false NOT NULL,
	"reference_start_date" date,
	"reference_end_date" date,
	"tenant" uuid NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	CONSTRAINT "uq_onboard_ref" UNIQUE("onboarding_id","referee_email")
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."permission" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant" uuid NOT NULL,
	"name" text NOT NULL,
	"code" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."subscriptionmaster" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"currency" text NOT NULL,
	"unitprice" integer NOT NULL,
	"tenant" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."subscriptionpricing" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" text NOT NULL,
	"submoduleid" uuid NOT NULL,
	"unitprice" integer NOT NULL,
	"currency" text NOT NULL,
	"unit" text NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"isactive" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."support_ticket_attachment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"support_ticket_id" uuid NOT NULL,
	"file_name" text NOT NULL,
	"file_path" text NOT NULL,
	"createddatetime" timestamp DEFAULT now(),
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid,
	"updateduser" uuid,
	"createdtenant" uuid,
	"updatedtenant" uuid,
	"isactive" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."submodulemaster" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"currency" text NOT NULL,
	"unitprice" integer NOT NULL,
	"module" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."support_ticket" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant" uuid NOT NULL,
	"reporter_user" uuid NOT NULL,
	"assigned_user" uuid,
	"subject" text NOT NULL,
	"description" text,
	"status" text NOT NULL,
	"priority" text,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"ticket_type" text,
	"module" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."subscriptiondetails" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"subscriptionmasterid" text,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"module" uuid NOT NULL,
	"subscription" uuid NOT NULL,
	"submodule" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"name" text,
	"description" text,
	"language" text NOT NULL,
	"startdate" timestamp NOT NULL,
	"enddate" timestamp NOT NULL,
	"note" text,
	"order" integer,
	"isactive" boolean DEFAULT false NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey_conditional_question" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"survey_option_id" uuid NOT NULL,
	"followup_question_id" uuid,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"order" integer NOT NULL,
	"isactive" boolean DEFAULT false NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey_question" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"survey_section_id" uuid NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"order" integer NOT NULL,
	"text" text,
	"surveyquestiontype" text,
	"charlimit" integer,
	"minvalue" integer,
	"maxvalue" integer,
	"isactive" boolean DEFAULT false NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey_linked_entity" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"survey_id" uuid NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"entity_type" text NOT NULL,
	"entity_value" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey_section" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"survey_id" uuid NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"name" text,
	"description" text,
	"order" integer NOT NULL,
	"isactive" boolean DEFAULT false NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey_instance" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"survey_id" uuid NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"isactive" boolean DEFAULT false NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey_option" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"survey_question_id" uuid NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"order" integer NOT NULL,
	"text" text,
	"isactive" boolean DEFAULT false NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey_user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"survey_id" uuid NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"user_type" text NOT NULL,
	"variant" text,
	"isactive" boolean DEFAULT false NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."survey_response" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"survey_instance_id" uuid NOT NULL,
	"survey_question_id" uuid NOT NULL,
	"tenant_id" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"response" text,
	"notes" text,
	"isactive" boolean DEFAULT false NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."support_ticket_comment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ticket_id" uuid NOT NULL,
	"comment" text NOT NULL,
	"commented_by" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."support_ticket_sla" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ticket_type" text NOT NULL,
	"priority" text NOT NULL,
	"module" text,
	"response_time" interval NOT NULL,
	"resolution_time" interval NOT NULL,
	"createddatetime" timestamp DEFAULT now(),
	"createduser" uuid,
	"createdtenant" uuid,
	"isactive" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."support_ticket_status_history" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ticket_id" uuid NOT NULL,
	"previous_status" text,
	"new_status" text NOT NULL,
	"changed_by" uuid NOT NULL,
	"changed_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."tenantpayment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"paymentduedate" timestamp(3) NOT NULL,
	"paymentstatus" text NOT NULL,
	"paymentdate" timestamp(3) NOT NULL,
	"amount" integer NOT NULL,
	"currency" text NOT NULL,
	"invoiceid" text NOT NULL,
	"invoicedate" timestamp(3) NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"tenantsubscription" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."tenant" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"loginname" text,
	"loginmethod" text NOT NULL,
	"loginchannel" text NOT NULL,
	"logindomain" text NOT NULL,
	"contactname" text NOT NULL,
	"primarylogo" text NOT NULL,
	"secondarylogo" text NOT NULL,
	"primarycolor" text NOT NULL,
	"storagebucket" text NOT NULL,
	"usercodeprefix" text NOT NULL,
	"gstno" text,
	"sequence" integer,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"tenanttype" text DEFAULT 'LEGAL' NOT NULL,
	"shortname" text NOT NULL,
	"contactperson" text NOT NULL,
	"favicon" text DEFAULT '' NOT NULL,
	"iconpic" text,
	"parenttenant" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."tenantcontact" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant" uuid NOT NULL,
	"tenantcontacttype" text NOT NULL,
	"value" text NOT NULL,
	"isverified" boolean DEFAULT false NOT NULL,
	"verifiedby" text,
	"verifieddatetime" timestamp(6),
	"isprimarycontact" boolean DEFAULT false NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"addressline1" text NOT NULL,
	"addressline2" text,
	"city" text NOT NULL,
	"block" text,
	"district" text,
	"state" text NOT NULL,
	"country" text NOT NULL,
	"pincode" text NOT NULL,
	"lattitude" text,
	"longitude" text,
	"isprimaryaddress" boolean DEFAULT false NOT NULL,
	"iconpic" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."tenantsubscriptionpricing" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant" uuid NOT NULL,
	"tenantsubid" uuid NOT NULL,
	"submoduleid" uuid NOT NULL,
	"unitprice" integer NOT NULL,
	"currency" text NOT NULL,
	"min" integer NOT NULL,
	"max" integer NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"email" text,
	"emailverified" timestamp(3),
	"image" text,
	"usermaster" uuid,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user_onboarding" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"start_date" date DEFAULT CURRENT_DATE NOT NULL,
	"onboarding_status" text,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"job_id" text,
	"candidate_id" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user_language" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"usermaster_id" uuid NOT NULL,
	"language_code" text NOT NULL,
	"speaking_level" text NOT NULL,
	"reading_level" text NOT NULL,
	"writing_level" text NOT NULL,
	"tenant" uuid NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	CONSTRAINT "uq_user_lang" UNIQUE("usermaster_id","language_code")
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userbanking" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"accountno" text NOT NULL,
	"accountname" text NOT NULL,
	"backname" text NOT NULL,
	"branchname" text NOT NULL,
	"accounttype" text NOT NULL,
	"ifsccode" text NOT NULL,
	"micrcode" text NOT NULL,
	"isprimary" boolean NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"tenant" uuid NOT NULL,
	"usermaster" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user_onboarding_assignment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"onboarding_id" uuid NOT NULL,
	"assigned_person_code" text NOT NULL,
	"assigned_user_id" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"previousid" text,
	"isactive" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user_onboarding_document" (
	"id" text PRIMARY KEY NOT NULL,
	"onboarding_id" uuid NOT NULL,
	"documenttype" text NOT NULL,
	"validuntil" timestamp(3) NOT NULL,
	"url" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"tenant" uuid NOT NULL,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"document_number" text,
	"issued_by" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user_bgv_assignment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"agency_id" uuid NOT NULL,
	"assigned_datetime" timestamp DEFAULT now() NOT NULL,
	"status" text NOT NULL,
	"status_datetime" timestamp DEFAULT now() NOT NULL,
	"comment" text,
	"tenant" uuid NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid NOT NULL,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."usercontact" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"usermaster" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"usercontacttype" text NOT NULL,
	"value" text NOT NULL,
	"isverified" boolean DEFAULT false NOT NULL,
	"verifiedby" text,
	"verifieddatetime" timestamp(6),
	"isprimarycontact" boolean DEFAULT false NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"relationship" text,
	"contactname" text,
	"emergencycontactname" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."usercontent" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content" text NOT NULL,
	"iscompleted" boolean DEFAULT false NOT NULL,
	"completepercentage" integer DEFAULT 0 NOT NULL,
	"viewcount" integer DEFAULT 0 NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"usermaster" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user_certifications" (
	"user_certification_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"certification_id" uuid NOT NULL,
	"certification_number" varchar(255),
	"issued_date" date NOT NULL,
	"expiry_date" date,
	"verification_status" varchar(50) NOT NULL,
	"verification_date" date,
	"evidence_url" varchar(2048),
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userdocument" (
	"id" text PRIMARY KEY NOT NULL,
	"documenttype" text NOT NULL,
	"validuntil" timestamp(3) NOT NULL,
	"url" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"tenant" uuid NOT NULL,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"usermaster" uuid NOT NULL,
	"document_number" text,
	"issued_by" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."usereducation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"qualification" text NOT NULL,
	"stream" text NOT NULL,
	"subject" text NOT NULL,
	"completionyear" integer NOT NULL,
	"institution" text NOT NULL,
	"mark" text NOT NULL,
	"sequence" integer DEFAULT 1 NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"usermaster" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"institute_location" text,
	"institute_contact" text,
	"board_name" text,
	"board_location" text,
	"enrollment_number" text,
	"period_from" date,
	"period_to" date,
	"graduation_status" text,
	"course_type" text,
	"course_name" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."usereducation_document" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"usereducation_id" uuid NOT NULL,
	"document_type" text NOT NULL,
	"file_url" text,
	"remarks" text,
	"tenant" uuid NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid NOT NULL,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userexperience" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"orgname" text NOT NULL,
	"designation" text NOT NULL,
	"primaryskill" text,
	"fromdate" timestamp(3) NOT NULL,
	"todate" timestamp(3) NOT NULL,
	"exitreason" text,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"currentlyemployed" boolean DEFAULT false NOT NULL,
	"experience" integer NOT NULL,
	"sequence" integer DEFAULT 1 NOT NULL,
	"createdtenant" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"usermaster" uuid NOT NULL,
	"updateduser" uuid,
	"updatedtenant" uuid,
	"job_summary" text,
	"company_status" text,
	"company_address" text,
	"contact_number" text,
	"city" text,
	"state" text,
	"supervisor_name" text,
	"supervisor_designation" text,
	"supervisor_contact" text,
	"department" text,
	"supervisor_email" text,
	"remuneration" numeric,
	"hr_contact_1" text,
	"hr_contact_2" text,
	"employee_id" text,
	"employment_type" text,
	"nature_of_employment" text,
	"third_party_details" text,
	"can_contact_now" boolean,
	"contact_date" date
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."useraddress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"usermaster" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"useraddresstype" text NOT NULL,
	"addressline1" text NOT NULL,
	"addressline2" text,
	"city" text NOT NULL,
	"block" text,
	"district" text,
	"state" text NOT NULL,
	"country" text NOT NULL,
	"pincode" text NOT NULL,
	"lattitude" text,
	"longitude" text,
	"isprimaryaddress" boolean DEFAULT false NOT NULL,
	"isverified" boolean,
	"verifiedby" uuid,
	"verifieddatetime" timestamp(6),
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"iconpic" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user_directorship" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"company_name" text NOT NULL,
	"company_status" text,
	"known_as" text,
	"address" text,
	"contact_number" text,
	"city" text,
	"state" text,
	"date_of_joining" date,
	"date_of_exit" date,
	"reason_for_leaving" text,
	"din_number" text,
	"tenant" uuid NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid NOT NULL,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userimmigration" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"visatype" text NOT NULL,
	"visacountry" text NOT NULL,
	"issueddate" timestamp(3) NOT NULL,
	"issuingauthority" text NOT NULL,
	"validutil" timestamp(3) NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"visaid" text NOT NULL,
	"tenant" uuid NOT NULL,
	"usermaster" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userlog" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"usermaster" uuid,
	"tenant" uuid,
	"event" text,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userskill" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"domain" text NOT NULL,
	"skill" text NOT NULL,
	"isprimary" boolean NOT NULL,
	"tool" text NOT NULL,
	"proficiency" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"tenant" uuid NOT NULL,
	"usermaster" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userprofile_doj_history" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant" uuid NOT NULL,
	"company_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"previous_dateofjoining" date NOT NULL,
	"new_dateofjoining" date NOT NULL,
	"reason" text NOT NULL,
	"changed_by" uuid NOT NULL,
	"changed_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userrolemap" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"usermaster" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"role" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"iconpic" text
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userprofile" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"usermaster" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"firstname" text NOT NULL,
	"middlename" text,
	"lastname" text,
	"band" text,
	"city" text,
	"company" text,
	"department" text,
	"designation" text,
	"empstatus" text,
	"gender" text,
	"dob" timestamp(3),
	"usercode" text NOT NULL,
	"branch" text,
	"isactive" boolean DEFAULT true NOT NULL,
	"dateofjoining" timestamp(3),
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"baselocation" text,
	"worklocation" text,
	"officeaddress" text,
	"profilesummary" text,
	"signatory" boolean DEFAULT false NOT NULL,
	"nationality" text,
	"serviceline" text,
	"timetype" text,
	"workforcegroup" text,
	"workertype" text,
	"totalexperience" integer,
	"l1_manager" uuid,
	"l2_manager" uuid,
	"dl1_manager" text,
	"dl2_manager" text,
	"base_campus" text,
	"work_campus" text,
	"blood_group" text,
	"uan_number" text,
	"pf_number" text,
	"marital_status" text,
	"hrbp" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userexperience_document" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userexperience_id" uuid NOT NULL,
	"document_type" text NOT NULL,
	"file_url" text,
	"remarks" text,
	"tenant" uuid NOT NULL,
	"createddatetime" timestamp DEFAULT now() NOT NULL,
	"updateddatetime" timestamp DEFAULT now() NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid NOT NULL,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userskilltool" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tool" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"userskill" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"usermaster" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userworkpreference" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"worklocation1" text NOT NULL,
	"worklocation2" text NOT NULL,
	"worklocation3" text NOT NULL,
	"expectedctc" integer NOT NULL,
	"employmenttype" text NOT NULL,
	"shiftwork" boolean NOT NULL,
	"willingtotravel" boolean NOT NULL,
	"workmode" boolean NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"usermaster" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."userfeedback" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"training" text,
	"course" text,
	"rating" integer DEFAULT 1 NOT NULL,
	"scale" integer NOT NULL,
	"comment" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"tenant" uuid NOT NULL,
	"usermaster" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."agency_service_map" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"agency_master_id" uuid NOT NULL,
	"service_masterdata_id" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true,
	"createddatetime" timestamp DEFAULT now(),
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid,
	"updateduser" uuid,
	"createdtenant" uuid,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."usermaster" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"login" text NOT NULL,
	"password" text NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"company_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."role" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(6),
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid,
	"notes" text,
	"filepath" text,
	"previousid" text,
	"approvertype" text,
	"iseditable" boolean DEFAULT true NOT NULL,
	"iconpic" text,
	"code" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."tenantsubscription" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"startdate" timestamp(3) NOT NULL,
	"enddate" timestamp(3) NOT NULL,
	"minusers" integer NOT NULL,
	"maxusers" integer NOT NULL,
	"unitprice" integer NOT NULL,
	"currency" text NOT NULL,
	"billingcycle" text NOT NULL,
	"isactive" boolean DEFAULT true NOT NULL,
	"createddatetime" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updateddatetime" timestamp(3),
	"notes" text,
	"iconpic" text,
	"previousid" text,
	"tenant" uuid NOT NULL,
	"subscription" uuid NOT NULL,
	"createduser" uuid NOT NULL,
	"updateduser" uuid,
	"createdtenant" uuid NOT NULL,
	"updatedtenant" uuid
);
--> statement-breakpoint
CREATE TABLE "ppl_first"."user_agency_map" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"agency_master_id" uuid NOT NULL,
	"tenant" uuid NOT NULL,
	"isactive" boolean DEFAULT true,
	"createddatetime" timestamp DEFAULT now(),
	"updateddatetime" timestamp DEFAULT now(),
	"createduser" uuid,
	"updateduser" uuid,
	"createdtenant" uuid,
	"updatedtenant" uuid
);
--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdata" ADD CONSTRAINT "fk_group_code_datagroup" FOREIGN KEY ("datagroup","tenant") REFERENCES "ppl_first"."datagroup"("code","tenant") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdata" ADD CONSTRAINT "masterdata_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdata" ADD CONSTRAINT "masterdata_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdata" ADD CONSTRAINT "masterdata_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdata" ADD CONSTRAINT "masterdata_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdata" ADD CONSTRAINT "masterdata_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_masterdata_map" ADD CONSTRAINT "fk_cmd_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_masterdata_map" ADD CONSTRAINT "fk_cmd_datagroup" FOREIGN KEY ("object_type","tenant") REFERENCES "ppl_first"."datagroup"("code","tenant") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_masterdata_map" ADD CONSTRAINT "fk_cmd_masterdata" FOREIGN KEY ("object_value","tenant") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certification_providers" ADD CONSTRAINT "fk_cp_created_tenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certification_providers" ADD CONSTRAINT "fk_cp_created_user" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certification_providers" ADD CONSTRAINT "fk_cp_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certification_providers" ADD CONSTRAINT "fk_cp_updated_tenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certification_providers" ADD CONSTRAINT "fk_cp_updated_user" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."content" ADD CONSTRAINT "content_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."content" ADD CONSTRAINT "content_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."content" ADD CONSTRAINT "content_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."content" ADD CONSTRAINT "content_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."content" ADD CONSTRAINT "content_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_masterdata_hierarchy" ADD CONSTRAINT "fk_cmh_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_masterdata_hierarchy" ADD CONSTRAINT "fk_cmh_masterdata" FOREIGN KEY ("masterdata_id") REFERENCES "ppl_first"."masterdata"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_masterdata_hierarchy" ADD CONSTRAINT "fk_cmh_parent_masterdata" FOREIGN KEY ("parent_masterdata_id") REFERENCES "ppl_first"."masterdata"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagroup" ADD CONSTRAINT "datagroup_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagroup" ADD CONSTRAINT "datagroup_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagroup" ADD CONSTRAINT "datagroup_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagroup" ADD CONSTRAINT "datagroup_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagroup" ADD CONSTRAINT "datagroup_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagrouphierarchy" ADD CONSTRAINT "datagrouphierarchy_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagrouphierarchy" ADD CONSTRAINT "datagrouphierarchy_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagrouphierarchy" ADD CONSTRAINT "datagrouphierarchy_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagrouphierarchy" ADD CONSTRAINT "datagrouphierarchy_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagrouphierarchy" ADD CONSTRAINT "datagrouphierarchy_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagrouphierarchy" ADD CONSTRAINT "fk_code_code_datagroup" FOREIGN KEY ("code","tenant") REFERENCES "ppl_first"."datagroup"("code","tenant") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."datagrouphierarchy" ADD CONSTRAINT "fk_parentcode_code_datagroup" FOREIGN KEY ("parentcode","tenant") REFERENCES "ppl_first"."datagroup"("code","tenant") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certifications" ADD CONSTRAINT "fk_certs_created_tenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certifications" ADD CONSTRAINT "fk_certs_created_user" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certifications" ADD CONSTRAINT "fk_certs_provider" FOREIGN KEY ("provider_id") REFERENCES "ppl_first"."certification_providers"("provider_id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certifications" ADD CONSTRAINT "fk_certs_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certifications" ADD CONSTRAINT "fk_certs_updated_tenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."certifications" ADD CONSTRAINT "fk_certs_updated_user" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_agency_map" ADD CONSTRAINT "company_agency_map_agency_master_id_fkey" FOREIGN KEY ("agency_master_id") REFERENCES "ppl_first"."agency_master"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_agency_map" ADD CONSTRAINT "company_agency_map_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_agency_map" ADD CONSTRAINT "company_agency_map_service_masterdata_id_fkey" FOREIGN KEY ("service_masterdata_id") REFERENCES "ppl_first"."masterdata"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."modulemaster" ADD CONSTRAINT "modulemaster_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."modulemaster" ADD CONSTRAINT "modulemaster_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."modulemaster" ADD CONSTRAINT "modulemaster_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."modulemaster" ADD CONSTRAINT "modulemaster_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."modulemaster" ADD CONSTRAINT "modulemaster_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."notifications" ADD CONSTRAINT "notifications_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."notifications" ADD CONSTRAINT "notifications_createdtenant_fkey" FOREIGN KEY ("created_tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."notifications" ADD CONSTRAINT "notifications_createduser_fkey" FOREIGN KEY ("created_user") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."notifications" ADD CONSTRAINT "notifications_notification_type_fkey" FOREIGN KEY ("notification_type") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."notifications" ADD CONSTRAINT "notifications_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."notifications" ADD CONSTRAINT "notifications_updatedtenant_fkey" FOREIGN KEY ("updated_tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."notifications" ADD CONSTRAINT "notifications_updateduser_fkey" FOREIGN KEY ("updated_user") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_master" ADD CONSTRAINT "fk_company_master_created_tenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_master" ADD CONSTRAINT "fk_company_master_created_user" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_master" ADD CONSTRAINT "fk_company_master_parent" FOREIGN KEY ("parent_company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_master" ADD CONSTRAINT "fk_company_master_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_master" ADD CONSTRAINT "fk_company_master_updated_tenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."company_master" ADD CONSTRAINT "fk_company_master_updated_user" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdatahierarchy" ADD CONSTRAINT "fk_code_code_masterdata" FOREIGN KEY ("code","tenant") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdatahierarchy" ADD CONSTRAINT "fk_parentcode_code_masterdata" FOREIGN KEY ("parentcode","tenant") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdatahierarchy" ADD CONSTRAINT "masterdatahierarchy_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdatahierarchy" ADD CONSTRAINT "masterdatahierarchy_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdatahierarchy" ADD CONSTRAINT "masterdatahierarchy_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdatahierarchy" ADD CONSTRAINT "masterdatahierarchy_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."masterdatahierarchy" ADD CONSTRAINT "masterdatahierarchy_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."policy" ADD CONSTRAINT "policy_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."policy" ADD CONSTRAINT "policy_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."policy" ADD CONSTRAINT "policy_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."policy" ADD CONSTRAINT "policy_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."policy" ADD CONSTRAINT "policy_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."rolepermission" ADD CONSTRAINT "fk_role_code_role" FOREIGN KEY ("tenant","role") REFERENCES "ppl_first"."role"("tenant","code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."rolepermission" ADD CONSTRAINT "rolepermission_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."rolepermission" ADD CONSTRAINT "rolepermission_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."rolepermission" ADD CONSTRAINT "rolepermission_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."rolepermission" ADD CONSTRAINT "rolepermission_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."rolepermission" ADD CONSTRAINT "rolepermission_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."onboarding_references" ADD CONSTRAINT "onboarding_references_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."onboarding_references" ADD CONSTRAINT "onboarding_references_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."onboarding_references" ADD CONSTRAINT "onboarding_references_onboarding_id_fkey" FOREIGN KEY ("onboarding_id") REFERENCES "ppl_first"."user_onboarding"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."onboarding_references" ADD CONSTRAINT "onboarding_references_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."onboarding_references" ADD CONSTRAINT "onboarding_references_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."permission" ADD CONSTRAINT "permission_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."permission" ADD CONSTRAINT "permission_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."permission" ADD CONSTRAINT "permission_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."permission" ADD CONSTRAINT "permission_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."permission" ADD CONSTRAINT "permission_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionmaster" ADD CONSTRAINT "subscriptionmaster_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionmaster" ADD CONSTRAINT "subscriptionmaster_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionmaster" ADD CONSTRAINT "subscriptionmaster_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionmaster" ADD CONSTRAINT "subscriptionmaster_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionmaster" ADD CONSTRAINT "subscriptionmaster_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionpricing" ADD CONSTRAINT "subscriptionpricing_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionpricing" ADD CONSTRAINT "subscriptionpricing_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionpricing" ADD CONSTRAINT "subscriptionpricing_submoduleid_fkey" FOREIGN KEY ("submoduleid") REFERENCES "ppl_first"."submodulemaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionpricing" ADD CONSTRAINT "subscriptionpricing_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptionpricing" ADD CONSTRAINT "subscriptionpricing_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_attachment" ADD CONSTRAINT "fk_ticket_attachment_ticket" FOREIGN KEY ("support_ticket_id") REFERENCES "ppl_first"."support_ticket"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."submodulemaster" ADD CONSTRAINT "submodulemaster_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."submodulemaster" ADD CONSTRAINT "submodulemaster_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."submodulemaster" ADD CONSTRAINT "submodulemaster_module_fkey" FOREIGN KEY ("module") REFERENCES "ppl_first"."modulemaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."submodulemaster" ADD CONSTRAINT "submodulemaster_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."submodulemaster" ADD CONSTRAINT "submodulemaster_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."submodulemaster" ADD CONSTRAINT "submodulemaster_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "fk_priority_type_masterdata" FOREIGN KEY ("priority") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "fk_ticket_type_masterdata" FOREIGN KEY ("ticket_type") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_assigned_fkey" FOREIGN KEY ("assigned_user") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_priority_fkey" FOREIGN KEY ("priority") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_reporter_fkey" FOREIGN KEY ("reporter_user") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_status_fkey" FOREIGN KEY ("status") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket" ADD CONSTRAINT "support_ticket_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptiondetails" ADD CONSTRAINT "subscriptiondetails_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptiondetails" ADD CONSTRAINT "subscriptiondetails_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptiondetails" ADD CONSTRAINT "subscriptiondetails_module_fkey" FOREIGN KEY ("module") REFERENCES "ppl_first"."modulemaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptiondetails" ADD CONSTRAINT "subscriptiondetails_submodule_fkey" FOREIGN KEY ("submodule") REFERENCES "ppl_first"."submodulemaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptiondetails" ADD CONSTRAINT "subscriptiondetails_subscription_fkey" FOREIGN KEY ("subscription") REFERENCES "ppl_first"."subscriptionmaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptiondetails" ADD CONSTRAINT "subscriptiondetails_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."subscriptiondetails" ADD CONSTRAINT "subscriptiondetails_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey" ADD CONSTRAINT "fk_survey_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey" ADD CONSTRAINT "fk_survey_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey" ADD CONSTRAINT "fk_survey_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey" ADD CONSTRAINT "fk_survey_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey" ADD CONSTRAINT "fk_survey_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey" ADD CONSTRAINT "fk_survey_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_conditional_question" ADD CONSTRAINT "fk_survey_cond_question_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_conditional_question" ADD CONSTRAINT "fk_survey_cond_question_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_conditional_question" ADD CONSTRAINT "fk_survey_cond_question_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_conditional_question" ADD CONSTRAINT "fk_survey_cond_question_followup" FOREIGN KEY ("followup_question_id") REFERENCES "ppl_first"."survey_question"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_conditional_question" ADD CONSTRAINT "fk_survey_cond_question_option" FOREIGN KEY ("survey_option_id") REFERENCES "ppl_first"."survey_option"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_conditional_question" ADD CONSTRAINT "fk_survey_cond_question_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_conditional_question" ADD CONSTRAINT "fk_survey_cond_question_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_conditional_question" ADD CONSTRAINT "fk_survey_cond_question_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_question" ADD CONSTRAINT "fk_survey_question_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_question" ADD CONSTRAINT "fk_survey_question_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_question" ADD CONSTRAINT "fk_survey_question_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_question" ADD CONSTRAINT "fk_survey_question_section" FOREIGN KEY ("survey_section_id") REFERENCES "ppl_first"."survey_section"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_question" ADD CONSTRAINT "fk_survey_question_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_question" ADD CONSTRAINT "fk_survey_question_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_question" ADD CONSTRAINT "fk_survey_question_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_linked_entity" ADD CONSTRAINT "fk_survey_linked_entity_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_linked_entity" ADD CONSTRAINT "fk_survey_linked_entity_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_linked_entity" ADD CONSTRAINT "fk_survey_linked_entity_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_linked_entity" ADD CONSTRAINT "fk_survey_linked_entity_survey" FOREIGN KEY ("survey_id") REFERENCES "ppl_first"."survey"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_linked_entity" ADD CONSTRAINT "fk_survey_linked_entity_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_linked_entity" ADD CONSTRAINT "fk_survey_linked_entity_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_linked_entity" ADD CONSTRAINT "fk_survey_linked_entity_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_section" ADD CONSTRAINT "fk_survey_section_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_section" ADD CONSTRAINT "fk_survey_section_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_section" ADD CONSTRAINT "fk_survey_section_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_section" ADD CONSTRAINT "fk_survey_section_survey" FOREIGN KEY ("survey_id") REFERENCES "ppl_first"."survey"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_section" ADD CONSTRAINT "fk_survey_section_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_section" ADD CONSTRAINT "fk_survey_section_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_section" ADD CONSTRAINT "fk_survey_section_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_instance" ADD CONSTRAINT "fk_survey_instance_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_instance" ADD CONSTRAINT "fk_survey_instance_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_instance" ADD CONSTRAINT "fk_survey_instance_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_instance" ADD CONSTRAINT "fk_survey_instance_survey" FOREIGN KEY ("survey_id") REFERENCES "ppl_first"."survey"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_instance" ADD CONSTRAINT "fk_survey_instance_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_instance" ADD CONSTRAINT "fk_survey_instance_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_instance" ADD CONSTRAINT "fk_survey_instance_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_option" ADD CONSTRAINT "fk_survey_option_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_option" ADD CONSTRAINT "fk_survey_option_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_option" ADD CONSTRAINT "fk_survey_option_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_option" ADD CONSTRAINT "fk_survey_option_question" FOREIGN KEY ("survey_question_id") REFERENCES "ppl_first"."survey_question"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_option" ADD CONSTRAINT "fk_survey_option_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_option" ADD CONSTRAINT "fk_survey_option_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_option" ADD CONSTRAINT "fk_survey_option_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_user" ADD CONSTRAINT "fk_survey_user_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_user" ADD CONSTRAINT "fk_survey_user_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_user" ADD CONSTRAINT "fk_survey_user_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_user" ADD CONSTRAINT "fk_survey_user_survey" FOREIGN KEY ("survey_id") REFERENCES "ppl_first"."survey"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_user" ADD CONSTRAINT "fk_survey_user_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_user" ADD CONSTRAINT "fk_survey_user_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_user" ADD CONSTRAINT "fk_survey_user_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_response" ADD CONSTRAINT "fk_survey_response_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_response" ADD CONSTRAINT "fk_survey_response_createdtenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_response" ADD CONSTRAINT "fk_survey_response_createduser" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_response" ADD CONSTRAINT "fk_survey_response_instance" FOREIGN KEY ("survey_instance_id") REFERENCES "ppl_first"."survey_instance"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_response" ADD CONSTRAINT "fk_survey_response_question" FOREIGN KEY ("survey_question_id") REFERENCES "ppl_first"."survey_question"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_response" ADD CONSTRAINT "fk_survey_response_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_response" ADD CONSTRAINT "fk_survey_response_updatedtenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."survey_response" ADD CONSTRAINT "fk_survey_response_updateduser" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_comment" ADD CONSTRAINT "stc_commentedby_fkey" FOREIGN KEY ("commented_by") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_comment" ADD CONSTRAINT "stc_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_comment" ADD CONSTRAINT "stc_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_comment" ADD CONSTRAINT "stc_ticket_fkey" FOREIGN KEY ("ticket_id") REFERENCES "ppl_first"."support_ticket"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_comment" ADD CONSTRAINT "stc_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_comment" ADD CONSTRAINT "stc_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_sla" ADD CONSTRAINT "fk_sla_priority_masterdata" FOREIGN KEY ("priority") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_sla" ADD CONSTRAINT "fk_sla_ticket_type_masterdata" FOREIGN KEY ("ticket_type") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_status_history" ADD CONSTRAINT "stsh_changedby_fkey" FOREIGN KEY ("changed_by") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_status_history" ADD CONSTRAINT "stsh_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_status_history" ADD CONSTRAINT "stsh_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_status_history" ADD CONSTRAINT "stsh_newstatus_fkey" FOREIGN KEY ("new_status") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_status_history" ADD CONSTRAINT "stsh_prevstatus_fkey" FOREIGN KEY ("previous_status") REFERENCES "ppl_first"."masterdata"("code") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_status_history" ADD CONSTRAINT "stsh_ticket_fkey" FOREIGN KEY ("ticket_id") REFERENCES "ppl_first"."support_ticket"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_status_history" ADD CONSTRAINT "stsh_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."support_ticket_status_history" ADD CONSTRAINT "stsh_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantpayment" ADD CONSTRAINT "tenantpayment_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantpayment" ADD CONSTRAINT "tenantpayment_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantpayment" ADD CONSTRAINT "tenantpayment_tenantsubscription_fkey" FOREIGN KEY ("tenantsubscription") REFERENCES "ppl_first"."tenantsubscription"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantpayment" ADD CONSTRAINT "tenantpayment_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantpayment" ADD CONSTRAINT "tenantpayment_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenant" ADD CONSTRAINT "tenant_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenant" ADD CONSTRAINT "tenant_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenant" ADD CONSTRAINT "tenant_parenttenant_fkey" FOREIGN KEY ("parenttenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenant" ADD CONSTRAINT "tenant_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenant" ADD CONSTRAINT "tenant_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantcontact" ADD CONSTRAINT "fk_type_code_masterdata" FOREIGN KEY ("tenant","tenantcontacttype") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantcontact" ADD CONSTRAINT "tenantcontact_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantcontact" ADD CONSTRAINT "tenantcontact_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantcontact" ADD CONSTRAINT "tenantcontact_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantcontact" ADD CONSTRAINT "tenantcontact_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantcontact" ADD CONSTRAINT "tenantcontact_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscriptionpricing" ADD CONSTRAINT "tenantsubscriptionpricing_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscriptionpricing" ADD CONSTRAINT "tenantsubscriptionpricing_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscriptionpricing" ADD CONSTRAINT "tenantsubscriptionpricing_submoduleid_fkey" FOREIGN KEY ("submoduleid") REFERENCES "ppl_first"."submodulemaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscriptionpricing" ADD CONSTRAINT "tenantsubscriptionpricing_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscriptionpricing" ADD CONSTRAINT "tenantsubscriptionpricing_tenantsubid_fkey" FOREIGN KEY ("tenantsubid") REFERENCES "ppl_first"."tenantsubscription"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscriptionpricing" ADD CONSTRAINT "tenantsubscriptionpricing_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscriptionpricing" ADD CONSTRAINT "tenantsubscriptionpricing_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user" ADD CONSTRAINT "user_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user" ADD CONSTRAINT "user_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user" ADD CONSTRAINT "user_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user" ADD CONSTRAINT "user_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user" ADD CONSTRAINT "user_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding" ADD CONSTRAINT "fk_user_onboarding_onboarding_status" FOREIGN KEY ("onboarding_status") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding" ADD CONSTRAINT "uob_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding" ADD CONSTRAINT "uob_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding" ADD CONSTRAINT "uob_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding" ADD CONSTRAINT "uob_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding" ADD CONSTRAINT "uob_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding" ADD CONSTRAINT "uob_user_fkey" FOREIGN KEY ("user_id") REFERENCES "ppl_first"."usermaster"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_language" ADD CONSTRAINT "user_language_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_language" ADD CONSTRAINT "user_language_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_language" ADD CONSTRAINT "user_language_language_code_fkey" FOREIGN KEY ("language_code") REFERENCES "ppl_first"."masterdata"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_language" ADD CONSTRAINT "user_language_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_language" ADD CONSTRAINT "user_language_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_language" ADD CONSTRAINT "user_language_usermaster_id_fkey" FOREIGN KEY ("usermaster_id") REFERENCES "ppl_first"."usermaster"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userbanking" ADD CONSTRAINT "userbanking_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userbanking" ADD CONSTRAINT "userbanking_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userbanking" ADD CONSTRAINT "userbanking_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userbanking" ADD CONSTRAINT "userbanking_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userbanking" ADD CONSTRAINT "userbanking_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userbanking" ADD CONSTRAINT "userbanking_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_assignment" ADD CONSTRAINT "uoa_assigneduser_fkey" FOREIGN KEY ("assigned_user_id") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_assignment" ADD CONSTRAINT "uoa_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_assignment" ADD CONSTRAINT "uoa_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_assignment" ADD CONSTRAINT "uoa_onboarding_fkey" FOREIGN KEY ("onboarding_id") REFERENCES "ppl_first"."user_onboarding"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_assignment" ADD CONSTRAINT "uoa_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_assignment" ADD CONSTRAINT "uoa_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_assignment" ADD CONSTRAINT "uoa_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_document" ADD CONSTRAINT "uoa_onboarding_fkey" FOREIGN KEY ("onboarding_id") REFERENCES "ppl_first"."user_onboarding"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_document" ADD CONSTRAINT "userdocument_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_document" ADD CONSTRAINT "userdocument_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_document" ADD CONSTRAINT "userdocument_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_document" ADD CONSTRAINT "userdocument_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_onboarding_document" ADD CONSTRAINT "userdocument_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_bgv_assignment" ADD CONSTRAINT "user_bgv_assignment_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "ppl_first"."agency_master"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_bgv_assignment" ADD CONSTRAINT "user_bgv_assignment_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_bgv_assignment" ADD CONSTRAINT "user_bgv_assignment_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_bgv_assignment" ADD CONSTRAINT "user_bgv_assignment_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_bgv_assignment" ADD CONSTRAINT "user_bgv_assignment_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_bgv_assignment" ADD CONSTRAINT "user_bgv_assignment_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_bgv_assignment" ADD CONSTRAINT "user_bgv_assignment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontact" ADD CONSTRAINT "fk_type_code_masterdata" FOREIGN KEY ("tenant","usercontacttype") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontact" ADD CONSTRAINT "usercontact_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontact" ADD CONSTRAINT "usercontact_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontact" ADD CONSTRAINT "usercontact_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontact" ADD CONSTRAINT "usercontact_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontact" ADD CONSTRAINT "usercontact_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontact" ADD CONSTRAINT "usercontact_user_user_id_fk" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontent" ADD CONSTRAINT "usercontent_content_fkey" FOREIGN KEY ("content") REFERENCES "ppl_first"."content"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontent" ADD CONSTRAINT "usercontent_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontent" ADD CONSTRAINT "usercontent_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontent" ADD CONSTRAINT "usercontent_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontent" ADD CONSTRAINT "usercontent_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usercontent" ADD CONSTRAINT "usercontent_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_certifications" ADD CONSTRAINT "fk_uc_cert" FOREIGN KEY ("certification_id") REFERENCES "ppl_first"."certifications"("certification_id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_certifications" ADD CONSTRAINT "fk_uc_created_tenant" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_certifications" ADD CONSTRAINT "fk_uc_created_user" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_certifications" ADD CONSTRAINT "fk_uc_tenant" FOREIGN KEY ("tenant_id") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_certifications" ADD CONSTRAINT "fk_uc_updated_tenant" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_certifications" ADD CONSTRAINT "fk_uc_updated_user" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_certifications" ADD CONSTRAINT "fk_uc_user" FOREIGN KEY ("user_id") REFERENCES "ppl_first"."usermaster"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userdocument" ADD CONSTRAINT "userdocument_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userdocument" ADD CONSTRAINT "userdocument_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userdocument" ADD CONSTRAINT "userdocument_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userdocument" ADD CONSTRAINT "userdocument_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userdocument" ADD CONSTRAINT "userdocument_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userdocument" ADD CONSTRAINT "userdocument_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation" ADD CONSTRAINT "usereducation_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation" ADD CONSTRAINT "usereducation_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation" ADD CONSTRAINT "usereducation_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation" ADD CONSTRAINT "usereducation_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation" ADD CONSTRAINT "usereducation_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation_document" ADD CONSTRAINT "usereducation_document_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation_document" ADD CONSTRAINT "usereducation_document_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation_document" ADD CONSTRAINT "usereducation_document_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation_document" ADD CONSTRAINT "usereducation_document_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation_document" ADD CONSTRAINT "usereducation_document_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."usereducation_document" ADD CONSTRAINT "usereducation_document_usereducation_id_fkey" FOREIGN KEY ("usereducation_id") REFERENCES "ppl_first"."usereducation"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience" ADD CONSTRAINT "userexperience_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience" ADD CONSTRAINT "userexperience_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience" ADD CONSTRAINT "userexperience_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience" ADD CONSTRAINT "userexperience_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience" ADD CONSTRAINT "userexperience_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience" ADD CONSTRAINT "userexperience_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "fk_block_code_masterdata" FOREIGN KEY ("tenant","block") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "fk_city_code_masterdata" FOREIGN KEY ("tenant","city") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "fk_country_code_masterdata" FOREIGN KEY ("tenant","country") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "fk_district_code_masterdata" FOREIGN KEY ("tenant","district") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "fk_state_code_masterdata" FOREIGN KEY ("tenant","state") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "fk_type_code_masterdata" FOREIGN KEY ("tenant","useraddresstype") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "useraddress_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "useraddress_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "useraddress_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "useraddress_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "useraddress_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "useraddress_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."useraddress" ADD CONSTRAINT "useraddress_verifiedby_user_id_fk" FOREIGN KEY ("verifiedby") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_directorship" ADD CONSTRAINT "user_directorship_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_directorship" ADD CONSTRAINT "user_directorship_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_directorship" ADD CONSTRAINT "user_directorship_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_directorship" ADD CONSTRAINT "user_directorship_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_directorship" ADD CONSTRAINT "user_directorship_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_directorship" ADD CONSTRAINT "user_directorship_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userimmigration" ADD CONSTRAINT "userimmigration_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userimmigration" ADD CONSTRAINT "userimmigration_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userimmigration" ADD CONSTRAINT "userimmigration_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userimmigration" ADD CONSTRAINT "userimmigration_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userimmigration" ADD CONSTRAINT "userimmigration_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userimmigration" ADD CONSTRAINT "userimmigration_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userlog" ADD CONSTRAINT "userlog_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userlog" ADD CONSTRAINT "userlog_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userlog" ADD CONSTRAINT "userlog_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userlog" ADD CONSTRAINT "userlog_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userlog" ADD CONSTRAINT "userlog_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userlog" ADD CONSTRAINT "userlog_user_user_id_fk" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskill" ADD CONSTRAINT "userskill_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskill" ADD CONSTRAINT "userskill_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskill" ADD CONSTRAINT "userskill_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskill" ADD CONSTRAINT "userskill_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskill" ADD CONSTRAINT "userskill_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskill" ADD CONSTRAINT "userskill_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile_doj_history" ADD CONSTRAINT "dojhist_changedby_fkey" FOREIGN KEY ("changed_by") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile_doj_history" ADD CONSTRAINT "dojhist_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile_doj_history" ADD CONSTRAINT "dojhist_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile_doj_history" ADD CONSTRAINT "dojhist_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile_doj_history" ADD CONSTRAINT "dojhist_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile_doj_history" ADD CONSTRAINT "dojhist_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile_doj_history" ADD CONSTRAINT "dojhist_user_fkey" FOREIGN KEY ("user_id") REFERENCES "ppl_first"."userprofile"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userrolemap" ADD CONSTRAINT "fk_role_code_role" FOREIGN KEY ("role") REFERENCES "ppl_first"."role"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userrolemap" ADD CONSTRAINT "userrole_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userrolemap" ADD CONSTRAINT "userrole_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userrolemap" ADD CONSTRAINT "userrole_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userrolemap" ADD CONSTRAINT "userrole_updatedtenant_tenant_id_fk" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userrolemap" ADD CONSTRAINT "userrole_updateduser_user_id_fk" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userrolemap" ADD CONSTRAINT "userrole_user_user_id_fk" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_band_code_masterdata" FOREIGN KEY ("tenant","band") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_branch_code_masterdata" FOREIGN KEY ("tenant","branch") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_city_code_masterdata" FOREIGN KEY ("tenant","city") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_company_code_masterdata" FOREIGN KEY ("tenant","company") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_department_code_masterdata" FOREIGN KEY ("tenant","department") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_designation_code_masterdata" FOREIGN KEY ("tenant","designation") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_empstatus_code_masterdata" FOREIGN KEY ("tenant","empstatus") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_gender_code_masterdata" FOREIGN KEY ("tenant","gender") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_workarea_code_datagroup" FOREIGN KEY ("tenant","baselocation") REFERENCES "ppl_first"."datagroup"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "fk_worklocation_code_masterdata" FOREIGN KEY ("tenant","worklocation") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_hrbp_fkey" FOREIGN KEY ("hrbp") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_l1_manager_fkey" FOREIGN KEY ("l1_manager") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_l2_manager_fkey" FOREIGN KEY ("l2_manager") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userprofile" ADD CONSTRAINT "userprofile_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience_document" ADD CONSTRAINT "userexperience_document_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience_document" ADD CONSTRAINT "userexperience_document_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience_document" ADD CONSTRAINT "userexperience_document_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience_document" ADD CONSTRAINT "userexperience_document_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience_document" ADD CONSTRAINT "userexperience_document_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userexperience_document" ADD CONSTRAINT "userexperience_document_userexperience_id_fkey" FOREIGN KEY ("userexperience_id") REFERENCES "ppl_first"."userexperience"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskilltool" ADD CONSTRAINT "userskilltool_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskilltool" ADD CONSTRAINT "userskilltool_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskilltool" ADD CONSTRAINT "userskilltool_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskilltool" ADD CONSTRAINT "userskilltool_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskilltool" ADD CONSTRAINT "userskilltool_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskilltool" ADD CONSTRAINT "userskilltool_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userskilltool" ADD CONSTRAINT "userskilltool_userskill_fkey" FOREIGN KEY ("userskill") REFERENCES "ppl_first"."userskill"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userworkpreference" ADD CONSTRAINT "userworkpreference_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userworkpreference" ADD CONSTRAINT "userworkpreference_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userworkpreference" ADD CONSTRAINT "userworkpreference_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userworkpreference" ADD CONSTRAINT "userworkpreference_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userworkpreference" ADD CONSTRAINT "userworkpreference_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userfeedback" ADD CONSTRAINT "userfeedback_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userfeedback" ADD CONSTRAINT "userfeedback_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userfeedback" ADD CONSTRAINT "userfeedback_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userfeedback" ADD CONSTRAINT "userfeedback_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userfeedback" ADD CONSTRAINT "userfeedback_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."userfeedback" ADD CONSTRAINT "userfeedback_usermaster_fkey" FOREIGN KEY ("usermaster") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."agency_service_map" ADD CONSTRAINT "agency_service_map_agency_master_id_fkey" FOREIGN KEY ("agency_master_id") REFERENCES "ppl_first"."agency_master"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."agency_service_map" ADD CONSTRAINT "agency_service_map_service_masterdata_id_fkey" FOREIGN KEY ("service_masterdata_id") REFERENCES "ppl_first"."masterdata"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usermaster" ADD CONSTRAINT "fk_usermaster_company" FOREIGN KEY ("company_id") REFERENCES "ppl_first"."company_master"("company_id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usermaster" ADD CONSTRAINT "usermaster_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usermaster" ADD CONSTRAINT "usermaster_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usermaster" ADD CONSTRAINT "usermaster_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usermaster" ADD CONSTRAINT "usermaster_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."usermaster" ADD CONSTRAINT "usermaster_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."role" ADD CONSTRAINT "fk_role_approvertype_masterdata_code" FOREIGN KEY ("tenant","approvertype") REFERENCES "ppl_first"."masterdata"("code","tenant") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."role" ADD CONSTRAINT "role_createdtenant_tenant_id_fk" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."role" ADD CONSTRAINT "role_createduser_user_id_fk" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."role" ADD CONSTRAINT "role_tenant_tenant_id_fk" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ppl_first"."role" ADD CONSTRAINT "role_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."role" ADD CONSTRAINT "role_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_createdtenant_fkey" FOREIGN KEY ("createdtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_createduser_fkey" FOREIGN KEY ("createduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_subscription_fkey" FOREIGN KEY ("subscription") REFERENCES "ppl_first"."subscriptionmaster"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_tenant_fkey" FOREIGN KEY ("tenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_updatedtenant_fkey" FOREIGN KEY ("updatedtenant") REFERENCES "ppl_first"."tenant"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_updateduser_fkey" FOREIGN KEY ("updateduser") REFERENCES "ppl_first"."usermaster"("id") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_agency_map" ADD CONSTRAINT "user_agency_map_agency_master_id_fkey" FOREIGN KEY ("agency_master_id") REFERENCES "ppl_first"."agency_master"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ppl_first"."user_agency_map" ADD CONSTRAINT "user_agency_map_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "ppl_first"."usermaster"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE UNIQUE INDEX "ux_cert_providers_tenant_name" ON "ppl_first"."certification_providers" USING btree ("tenant_id" text_ops,"provider_name" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "ux_certs_tenant_provider_name" ON "ppl_first"."certifications" USING btree ("tenant_id" text_ops,"provider_id" uuid_ops,"certification_name" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "ux_company_master_tenant_code" ON "ppl_first"."company_master" USING btree ("tenant_id" uuid_ops,"company_code" uuid_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "ux_company_master_tenant_name" ON "ppl_first"."company_master" USING btree ("tenant_id" text_ops,"company_name" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "permission_code_unique1" ON "ppl_first"."permission" USING btree ("tenant" text_ops,"code" uuid_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "uq_permission_tenant_code" ON "ppl_first"."permission" USING btree ("tenant" text_ops,"code" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "tenant_sequence_key" ON "ppl_first"."tenant" USING btree ("sequence" int4_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "tenant_usercodeprefix_unique" ON "ppl_first"."tenant" USING btree ("usercodeprefix" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "user_email_key" ON "ppl_first"."user" USING btree ("email" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "uk_ucontact" ON "ppl_first"."usercontact" USING btree ("value" uuid_ops,"tenant" text_ops,"usermaster" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "usercontent_content_usermaster_key" ON "ppl_first"."usercontent" USING btree ("content" text_ops,"usermaster" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "ux_user_certs_tenant_user_cert" ON "ppl_first"."user_certifications" USING btree ("tenant_id" uuid_ops,"user_id" uuid_ops,"certification_id" uuid_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "uk_usermaster_role" ON "ppl_first"."userrolemap" USING btree ("usermaster" text_ops,"role" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "uk_uprofile" ON "ppl_first"."userprofile" USING btree ("tenant" text_ops,"usercode" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "userprofile_usercode_unique" ON "ppl_first"."userprofile" USING btree ("usercode" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "user_login_unique" ON "ppl_first"."usermaster" USING btree ("login" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "tenantsubscription_tenant_key" ON "ppl_first"."tenantsubscription" USING btree ("tenant" uuid_ops);
*/