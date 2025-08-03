/* eslint-disable */
// @ts-nocheck
import { relations } from "drizzle-orm/relations";
import { datagroupInPplFirst, masterdataInPplFirst, tenantInPplFirst, usermasterInPplFirst, companyMasterInPplFirst, companyMasterdataMapInPplFirst, certificationProvidersInPplFirst, contentInPplFirst, companyMasterdataHierarchyInPplFirst, datagrouphierarchyInPplFirst, certificationsInPplFirst, agencyMasterInPplFirst, companyAgencyMapInPplFirst, modulemasterInPplFirst, notificationsInPplFirst, masterdatahierarchyInPplFirst, policyInPplFirst, roleInPplFirst, rolepermissionInPplFirst, onboardingReferencesInPplFirst, userOnboardingInPplFirst, permissionInPplFirst, subscriptionmasterInPplFirst, subscriptionpricingInPplFirst, submodulemasterInPplFirst, supportTicketInPplFirst, supportTicketAttachmentInPplFirst, subscriptiondetailsInPplFirst, surveyInPplFirst, surveyConditionalQuestionInPplFirst, surveyQuestionInPplFirst, surveyOptionInPplFirst, surveySectionInPplFirst, surveyLinkedEntityInPplFirst, surveyInstanceInPplFirst, surveyUserInPplFirst, surveyResponseInPplFirst, supportTicketCommentInPplFirst, supportTicketSlaInPplFirst, supportTicketStatusHistoryInPplFirst, tenantpaymentInPplFirst, tenantsubscriptionInPplFirst, tenantcontactInPplFirst, tenantsubscriptionpricingInPplFirst, userInPplFirst, userLanguageInPplFirst, userbankingInPplFirst, userOnboardingAssignmentInPplFirst, userOnboardingDocumentInPplFirst, userBgvAssignmentInPplFirst, usercontactInPplFirst, usercontentInPplFirst, userCertificationsInPplFirst, userdocumentInPplFirst, usereducationInPplFirst, usereducationDocumentInPplFirst, userexperienceInPplFirst, useraddressInPplFirst, userDirectorshipInPplFirst, userimmigrationInPplFirst, userlogInPplFirst, userskillInPplFirst, userprofileDojHistoryInPplFirst, userprofileInPplFirst, userrolemapInPplFirst, userexperienceDocumentInPplFirst, userskilltoolInPplFirst, userworkpreferenceInPplFirst, userfeedbackInPplFirst, agencyServiceMapInPplFirst, userAgencyMapInPplFirst } from "./schema";

export const masterdataInPplFirstRelations = relations(masterdataInPplFirst, ({one, many}) => ({
	datagroupInPplFirst: one(datagroupInPplFirst, {
		fields: [masterdataInPplFirst.datagroup],
		references: [datagroupInPplFirst.code]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [masterdataInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "masterdataInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [masterdataInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "masterdataInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [masterdataInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "masterdataInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [masterdataInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "masterdataInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [masterdataInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "masterdataInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	companyMasterdataMapInPplFirsts: many(companyMasterdataMapInPplFirst),
	companyMasterdataHierarchyInPplFirsts_masterdataId: many(companyMasterdataHierarchyInPplFirst, {
		relationName: "companyMasterdataHierarchyInPplFirst_masterdataId_masterdataInPplFirst_id"
	}),
	companyMasterdataHierarchyInPplFirsts_parentMasterdataId: many(companyMasterdataHierarchyInPplFirst, {
		relationName: "companyMasterdataHierarchyInPplFirst_parentMasterdataId_masterdataInPplFirst_id"
	}),
	companyAgencyMapInPplFirsts: many(companyAgencyMapInPplFirst),
	notificationsInPplFirsts: many(notificationsInPplFirst),
	masterdatahierarchyInPplFirsts_code: many(masterdatahierarchyInPplFirst, {
		relationName: "masterdatahierarchyInPplFirst_code_masterdataInPplFirst_code"
	}),
	masterdatahierarchyInPplFirsts_parentcode: many(masterdatahierarchyInPplFirst, {
		relationName: "masterdatahierarchyInPplFirst_parentcode_masterdataInPplFirst_code"
	}),
	supportTicketInPplFirsts_priority: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_priority_masterdataInPplFirst_code"
	}),
	supportTicketInPplFirsts_ticketType: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_ticketType_masterdataInPplFirst_code"
	}),
	supportTicketInPplFirsts_priority: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_priority_masterdataInPplFirst_code"
	}),
	supportTicketInPplFirsts_status: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_status_masterdataInPplFirst_code"
	}),
	supportTicketSlaInPplFirsts_priority: many(supportTicketSlaInPplFirst, {
		relationName: "supportTicketSlaInPplFirst_priority_masterdataInPplFirst_code"
	}),
	supportTicketSlaInPplFirsts_ticketType: many(supportTicketSlaInPplFirst, {
		relationName: "supportTicketSlaInPplFirst_ticketType_masterdataInPplFirst_code"
	}),
	supportTicketStatusHistoryInPplFirsts_newStatus: many(supportTicketStatusHistoryInPplFirst, {
		relationName: "supportTicketStatusHistoryInPplFirst_newStatus_masterdataInPplFirst_code"
	}),
	supportTicketStatusHistoryInPplFirsts_previousStatus: many(supportTicketStatusHistoryInPplFirst, {
		relationName: "supportTicketStatusHistoryInPplFirst_previousStatus_masterdataInPplFirst_code"
	}),
	tenantcontactInPplFirsts: many(tenantcontactInPplFirst),
	userOnboardingInPplFirsts: many(userOnboardingInPplFirst),
	userLanguageInPplFirsts: many(userLanguageInPplFirst),
	usercontactInPplFirsts: many(usercontactInPplFirst),
	useraddressInPplFirsts_tenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	useraddressInPplFirsts_tenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	useraddressInPplFirsts_tenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	useraddressInPplFirsts_tenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	useraddressInPplFirsts_tenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	useraddressInPplFirsts_tenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	agencyServiceMapInPplFirsts: many(agencyServiceMapInPplFirst),
	roleInPplFirsts: many(roleInPplFirst),
}));

export const datagroupInPplFirstRelations = relations(datagroupInPplFirst, ({one, many}) => ({
	masterdataInPplFirsts: many(masterdataInPplFirst),
	companyMasterdataMapInPplFirsts: many(companyMasterdataMapInPplFirst),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [datagroupInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "datagroupInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [datagroupInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "datagroupInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [datagroupInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "datagroupInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [datagroupInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "datagroupInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [datagroupInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "datagroupInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	datagrouphierarchyInPplFirsts_code: many(datagrouphierarchyInPplFirst, {
		relationName: "datagrouphierarchyInPplFirst_code_datagroupInPplFirst_code"
	}),
	datagrouphierarchyInPplFirsts_parentcode: many(datagrouphierarchyInPplFirst, {
		relationName: "datagrouphierarchyInPplFirst_parentcode_datagroupInPplFirst_code"
	}),
	userprofileInPplFirsts: many(userprofileInPplFirst),
}));

export const tenantInPplFirstRelations = relations(tenantInPplFirst, ({one, many}) => ({
	masterdataInPplFirsts_createdtenant: many(masterdataInPplFirst, {
		relationName: "masterdataInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	masterdataInPplFirsts_tenant: many(masterdataInPplFirst, {
		relationName: "masterdataInPplFirst_tenant_tenantInPplFirst_id"
	}),
	masterdataInPplFirsts_updatedtenant: many(masterdataInPplFirst, {
		relationName: "masterdataInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	certificationProvidersInPplFirsts_createdtenant: many(certificationProvidersInPplFirst, {
		relationName: "certificationProvidersInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	certificationProvidersInPplFirsts_tenantId: many(certificationProvidersInPplFirst, {
		relationName: "certificationProvidersInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	certificationProvidersInPplFirsts_updatedtenant: many(certificationProvidersInPplFirst, {
		relationName: "certificationProvidersInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	contentInPplFirsts_createdtenant: many(contentInPplFirst, {
		relationName: "contentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	contentInPplFirsts_tenant: many(contentInPplFirst, {
		relationName: "contentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	contentInPplFirsts_updatedtenant: many(contentInPplFirst, {
		relationName: "contentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	datagroupInPplFirsts_createdtenant: many(datagroupInPplFirst, {
		relationName: "datagroupInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	datagroupInPplFirsts_tenant: many(datagroupInPplFirst, {
		relationName: "datagroupInPplFirst_tenant_tenantInPplFirst_id"
	}),
	datagroupInPplFirsts_updatedtenant: many(datagroupInPplFirst, {
		relationName: "datagroupInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	datagrouphierarchyInPplFirsts_createdtenant: many(datagrouphierarchyInPplFirst, {
		relationName: "datagrouphierarchyInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	datagrouphierarchyInPplFirsts_tenant: many(datagrouphierarchyInPplFirst, {
		relationName: "datagrouphierarchyInPplFirst_tenant_tenantInPplFirst_id"
	}),
	datagrouphierarchyInPplFirsts_updatedtenant: many(datagrouphierarchyInPplFirst, {
		relationName: "datagrouphierarchyInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	certificationsInPplFirsts_createdtenant: many(certificationsInPplFirst, {
		relationName: "certificationsInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	certificationsInPplFirsts_tenantId: many(certificationsInPplFirst, {
		relationName: "certificationsInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	certificationsInPplFirsts_updatedtenant: many(certificationsInPplFirst, {
		relationName: "certificationsInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	modulemasterInPplFirsts_createdtenant: many(modulemasterInPplFirst, {
		relationName: "modulemasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	modulemasterInPplFirsts_tenant: many(modulemasterInPplFirst, {
		relationName: "modulemasterInPplFirst_tenant_tenantInPplFirst_id"
	}),
	modulemasterInPplFirsts_updatedtenant: many(modulemasterInPplFirst, {
		relationName: "modulemasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	notificationsInPplFirsts_createdTenant: many(notificationsInPplFirst, {
		relationName: "notificationsInPplFirst_createdTenant_tenantInPplFirst_id"
	}),
	notificationsInPplFirsts_tenantId: many(notificationsInPplFirst, {
		relationName: "notificationsInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	notificationsInPplFirsts_updatedTenant: many(notificationsInPplFirst, {
		relationName: "notificationsInPplFirst_updatedTenant_tenantInPplFirst_id"
	}),
	companyMasterInPplFirsts_createdtenant: many(companyMasterInPplFirst, {
		relationName: "companyMasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	companyMasterInPplFirsts_tenantId: many(companyMasterInPplFirst, {
		relationName: "companyMasterInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	companyMasterInPplFirsts_updatedtenant: many(companyMasterInPplFirst, {
		relationName: "companyMasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	masterdatahierarchyInPplFirsts_createdtenant: many(masterdatahierarchyInPplFirst, {
		relationName: "masterdatahierarchyInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	masterdatahierarchyInPplFirsts_tenant: many(masterdatahierarchyInPplFirst, {
		relationName: "masterdatahierarchyInPplFirst_tenant_tenantInPplFirst_id"
	}),
	masterdatahierarchyInPplFirsts_updatedtenant: many(masterdatahierarchyInPplFirst, {
		relationName: "masterdatahierarchyInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	policyInPplFirsts_createdtenant: many(policyInPplFirst, {
		relationName: "policyInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	policyInPplFirsts_tenant: many(policyInPplFirst, {
		relationName: "policyInPplFirst_tenant_tenantInPplFirst_id"
	}),
	policyInPplFirsts_updatedtenant: many(policyInPplFirst, {
		relationName: "policyInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	rolepermissionInPplFirsts_createdtenant: many(rolepermissionInPplFirst, {
		relationName: "rolepermissionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	rolepermissionInPplFirsts_tenant: many(rolepermissionInPplFirst, {
		relationName: "rolepermissionInPplFirst_tenant_tenantInPplFirst_id"
	}),
	rolepermissionInPplFirsts_updatedtenant: many(rolepermissionInPplFirst, {
		relationName: "rolepermissionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	onboardingReferencesInPplFirsts_createdtenant: many(onboardingReferencesInPplFirst, {
		relationName: "onboardingReferencesInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	onboardingReferencesInPplFirsts_updatedtenant: many(onboardingReferencesInPplFirst, {
		relationName: "onboardingReferencesInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	permissionInPplFirsts_createdtenant: many(permissionInPplFirst, {
		relationName: "permissionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	permissionInPplFirsts_tenant: many(permissionInPplFirst, {
		relationName: "permissionInPplFirst_tenant_tenantInPplFirst_id"
	}),
	permissionInPplFirsts_updatedtenant: many(permissionInPplFirst, {
		relationName: "permissionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	subscriptionmasterInPplFirsts_createdtenant: many(subscriptionmasterInPplFirst, {
		relationName: "subscriptionmasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	subscriptionmasterInPplFirsts_tenant: many(subscriptionmasterInPplFirst, {
		relationName: "subscriptionmasterInPplFirst_tenant_tenantInPplFirst_id"
	}),
	subscriptionmasterInPplFirsts_updatedtenant: many(subscriptionmasterInPplFirst, {
		relationName: "subscriptionmasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	subscriptionpricingInPplFirsts_createdtenant: many(subscriptionpricingInPplFirst, {
		relationName: "subscriptionpricingInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	subscriptionpricingInPplFirsts_updatedtenant: many(subscriptionpricingInPplFirst, {
		relationName: "subscriptionpricingInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	submodulemasterInPplFirsts_createdtenant: many(submodulemasterInPplFirst, {
		relationName: "submodulemasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	submodulemasterInPplFirsts_tenant: many(submodulemasterInPplFirst, {
		relationName: "submodulemasterInPplFirst_tenant_tenantInPplFirst_id"
	}),
	submodulemasterInPplFirsts_updatedtenant: many(submodulemasterInPplFirst, {
		relationName: "submodulemasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	supportTicketInPplFirsts_createdtenant: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	supportTicketInPplFirsts_tenant: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_tenant_tenantInPplFirst_id"
	}),
	supportTicketInPplFirsts_updatedtenant: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	subscriptiondetailsInPplFirsts_createdtenant: many(subscriptiondetailsInPplFirst, {
		relationName: "subscriptiondetailsInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	subscriptiondetailsInPplFirsts_updatedtenant: many(subscriptiondetailsInPplFirst, {
		relationName: "subscriptiondetailsInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveyInPplFirsts_createdtenant: many(surveyInPplFirst, {
		relationName: "surveyInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveyInPplFirsts_tenantId: many(surveyInPplFirst, {
		relationName: "surveyInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveyInPplFirsts_updatedtenant: many(surveyInPplFirst, {
		relationName: "surveyInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveyConditionalQuestionInPplFirsts_createdtenant: many(surveyConditionalQuestionInPplFirst, {
		relationName: "surveyConditionalQuestionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveyConditionalQuestionInPplFirsts_tenantId: many(surveyConditionalQuestionInPplFirst, {
		relationName: "surveyConditionalQuestionInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveyConditionalQuestionInPplFirsts_updatedtenant: many(surveyConditionalQuestionInPplFirst, {
		relationName: "surveyConditionalQuestionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveyQuestionInPplFirsts_createdtenant: many(surveyQuestionInPplFirst, {
		relationName: "surveyQuestionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveyQuestionInPplFirsts_tenantId: many(surveyQuestionInPplFirst, {
		relationName: "surveyQuestionInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveyQuestionInPplFirsts_updatedtenant: many(surveyQuestionInPplFirst, {
		relationName: "surveyQuestionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveyLinkedEntityInPplFirsts_createdtenant: many(surveyLinkedEntityInPplFirst, {
		relationName: "surveyLinkedEntityInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveyLinkedEntityInPplFirsts_tenantId: many(surveyLinkedEntityInPplFirst, {
		relationName: "surveyLinkedEntityInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveyLinkedEntityInPplFirsts_updatedtenant: many(surveyLinkedEntityInPplFirst, {
		relationName: "surveyLinkedEntityInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveySectionInPplFirsts_createdtenant: many(surveySectionInPplFirst, {
		relationName: "surveySectionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveySectionInPplFirsts_tenantId: many(surveySectionInPplFirst, {
		relationName: "surveySectionInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveySectionInPplFirsts_updatedtenant: many(surveySectionInPplFirst, {
		relationName: "surveySectionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveyInstanceInPplFirsts_createdtenant: many(surveyInstanceInPplFirst, {
		relationName: "surveyInstanceInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveyInstanceInPplFirsts_tenantId: many(surveyInstanceInPplFirst, {
		relationName: "surveyInstanceInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveyInstanceInPplFirsts_updatedtenant: many(surveyInstanceInPplFirst, {
		relationName: "surveyInstanceInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveyOptionInPplFirsts_createdtenant: many(surveyOptionInPplFirst, {
		relationName: "surveyOptionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveyOptionInPplFirsts_tenantId: many(surveyOptionInPplFirst, {
		relationName: "surveyOptionInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveyOptionInPplFirsts_updatedtenant: many(surveyOptionInPplFirst, {
		relationName: "surveyOptionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveyUserInPplFirsts_createdtenant: many(surveyUserInPplFirst, {
		relationName: "surveyUserInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveyUserInPplFirsts_tenantId: many(surveyUserInPplFirst, {
		relationName: "surveyUserInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveyUserInPplFirsts_updatedtenant: many(surveyUserInPplFirst, {
		relationName: "surveyUserInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	surveyResponseInPplFirsts_createdtenant: many(surveyResponseInPplFirst, {
		relationName: "surveyResponseInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	surveyResponseInPplFirsts_tenantId: many(surveyResponseInPplFirst, {
		relationName: "surveyResponseInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	surveyResponseInPplFirsts_updatedtenant: many(surveyResponseInPplFirst, {
		relationName: "surveyResponseInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	supportTicketCommentInPplFirsts_createdtenant: many(supportTicketCommentInPplFirst, {
		relationName: "supportTicketCommentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	supportTicketCommentInPplFirsts_updatedtenant: many(supportTicketCommentInPplFirst, {
		relationName: "supportTicketCommentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	supportTicketStatusHistoryInPplFirsts_createdtenant: many(supportTicketStatusHistoryInPplFirst, {
		relationName: "supportTicketStatusHistoryInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	supportTicketStatusHistoryInPplFirsts_updatedtenant: many(supportTicketStatusHistoryInPplFirst, {
		relationName: "supportTicketStatusHistoryInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	tenantpaymentInPplFirsts_createdtenant: many(tenantpaymentInPplFirst, {
		relationName: "tenantpaymentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	tenantpaymentInPplFirsts_updatedtenant: many(tenantpaymentInPplFirst, {
		relationName: "tenantpaymentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [tenantInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	tenantInPplFirsts_createdtenant: many(tenantInPplFirst, {
		relationName: "tenantInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [tenantInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_parenttenant: one(tenantInPplFirst, {
		fields: [tenantInPplFirst.parenttenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantInPplFirst_parenttenant_tenantInPplFirst_id"
	}),
	tenantInPplFirsts_parenttenant: many(tenantInPplFirst, {
		relationName: "tenantInPplFirst_parenttenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [tenantInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	tenantInPplFirsts_updatedtenant: many(tenantInPplFirst, {
		relationName: "tenantInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [tenantInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	tenantcontactInPplFirsts_createdtenant: many(tenantcontactInPplFirst, {
		relationName: "tenantcontactInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	tenantcontactInPplFirsts_tenant: many(tenantcontactInPplFirst, {
		relationName: "tenantcontactInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantcontactInPplFirsts_updatedtenant: many(tenantcontactInPplFirst, {
		relationName: "tenantcontactInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	tenantsubscriptionpricingInPplFirsts_createdtenant: many(tenantsubscriptionpricingInPplFirst, {
		relationName: "tenantsubscriptionpricingInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	tenantsubscriptionpricingInPplFirsts_tenant: many(tenantsubscriptionpricingInPplFirst, {
		relationName: "tenantsubscriptionpricingInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantsubscriptionpricingInPplFirsts_updatedtenant: many(tenantsubscriptionpricingInPplFirst, {
		relationName: "tenantsubscriptionpricingInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userInPplFirsts_createdtenant: many(userInPplFirst, {
		relationName: "userInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userInPplFirsts_updatedtenant: many(userInPplFirst, {
		relationName: "userInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userOnboardingInPplFirsts_createdtenant: many(userOnboardingInPplFirst, {
		relationName: "userOnboardingInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userOnboardingInPplFirsts_tenant: many(userOnboardingInPplFirst, {
		relationName: "userOnboardingInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userOnboardingInPplFirsts_updatedtenant: many(userOnboardingInPplFirst, {
		relationName: "userOnboardingInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userLanguageInPplFirsts_createdtenant: many(userLanguageInPplFirst, {
		relationName: "userLanguageInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userLanguageInPplFirsts_updatedtenant: many(userLanguageInPplFirst, {
		relationName: "userLanguageInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userbankingInPplFirsts_createdtenant: many(userbankingInPplFirst, {
		relationName: "userbankingInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userbankingInPplFirsts_tenant: many(userbankingInPplFirst, {
		relationName: "userbankingInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userbankingInPplFirsts_updatedtenant: many(userbankingInPplFirst, {
		relationName: "userbankingInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userOnboardingAssignmentInPplFirsts_createdtenant: many(userOnboardingAssignmentInPplFirst, {
		relationName: "userOnboardingAssignmentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userOnboardingAssignmentInPplFirsts_tenant: many(userOnboardingAssignmentInPplFirst, {
		relationName: "userOnboardingAssignmentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userOnboardingAssignmentInPplFirsts_updatedtenant: many(userOnboardingAssignmentInPplFirst, {
		relationName: "userOnboardingAssignmentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userOnboardingDocumentInPplFirsts_createdtenant: many(userOnboardingDocumentInPplFirst, {
		relationName: "userOnboardingDocumentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userOnboardingDocumentInPplFirsts_tenant: many(userOnboardingDocumentInPplFirst, {
		relationName: "userOnboardingDocumentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userOnboardingDocumentInPplFirsts_updatedtenant: many(userOnboardingDocumentInPplFirst, {
		relationName: "userOnboardingDocumentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userBgvAssignmentInPplFirsts_createdtenant: many(userBgvAssignmentInPplFirst, {
		relationName: "userBgvAssignmentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userBgvAssignmentInPplFirsts_tenant: many(userBgvAssignmentInPplFirst, {
		relationName: "userBgvAssignmentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userBgvAssignmentInPplFirsts_updatedtenant: many(userBgvAssignmentInPplFirst, {
		relationName: "userBgvAssignmentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usercontactInPplFirsts_createdtenant: many(usercontactInPplFirst, {
		relationName: "usercontactInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usercontactInPplFirsts_tenant: many(usercontactInPplFirst, {
		relationName: "usercontactInPplFirst_tenant_tenantInPplFirst_id"
	}),
	usercontactInPplFirsts_updatedtenant: many(usercontactInPplFirst, {
		relationName: "usercontactInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usercontentInPplFirsts_createdtenant: many(usercontentInPplFirst, {
		relationName: "usercontentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usercontentInPplFirsts_updatedtenant: many(usercontentInPplFirst, {
		relationName: "usercontentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userCertificationsInPplFirsts_createdtenant: many(userCertificationsInPplFirst, {
		relationName: "userCertificationsInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userCertificationsInPplFirsts_tenantId: many(userCertificationsInPplFirst, {
		relationName: "userCertificationsInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	userCertificationsInPplFirsts_updatedtenant: many(userCertificationsInPplFirst, {
		relationName: "userCertificationsInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userdocumentInPplFirsts_createdtenant: many(userdocumentInPplFirst, {
		relationName: "userdocumentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userdocumentInPplFirsts_tenant: many(userdocumentInPplFirst, {
		relationName: "userdocumentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userdocumentInPplFirsts_updatedtenant: many(userdocumentInPplFirst, {
		relationName: "userdocumentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usereducationInPplFirsts_createdtenant: many(usereducationInPplFirst, {
		relationName: "usereducationInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usereducationInPplFirsts_updatedtenant: many(usereducationInPplFirst, {
		relationName: "usereducationInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usereducationDocumentInPplFirsts_createdtenant: many(usereducationDocumentInPplFirst, {
		relationName: "usereducationDocumentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usereducationDocumentInPplFirsts_tenant: many(usereducationDocumentInPplFirst, {
		relationName: "usereducationDocumentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	usereducationDocumentInPplFirsts_updatedtenant: many(usereducationDocumentInPplFirst, {
		relationName: "usereducationDocumentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userexperienceInPplFirsts_createdtenant: many(userexperienceInPplFirst, {
		relationName: "userexperienceInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userexperienceInPplFirsts_tenant: many(userexperienceInPplFirst, {
		relationName: "userexperienceInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userexperienceInPplFirsts_updatedtenant: many(userexperienceInPplFirst, {
		relationName: "userexperienceInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	useraddressInPplFirsts_createdtenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	useraddressInPplFirsts_tenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_tenant_tenantInPplFirst_id"
	}),
	useraddressInPplFirsts_updatedtenant: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userDirectorshipInPplFirsts_createdtenant: many(userDirectorshipInPplFirst, {
		relationName: "userDirectorshipInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userDirectorshipInPplFirsts_tenant: many(userDirectorshipInPplFirst, {
		relationName: "userDirectorshipInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userDirectorshipInPplFirsts_updatedtenant: many(userDirectorshipInPplFirst, {
		relationName: "userDirectorshipInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userimmigrationInPplFirsts_createdtenant: many(userimmigrationInPplFirst, {
		relationName: "userimmigrationInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userimmigrationInPplFirsts_tenant: many(userimmigrationInPplFirst, {
		relationName: "userimmigrationInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userimmigrationInPplFirsts_updatedtenant: many(userimmigrationInPplFirst, {
		relationName: "userimmigrationInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userlogInPplFirsts_createdtenant: many(userlogInPplFirst, {
		relationName: "userlogInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userlogInPplFirsts_tenant: many(userlogInPplFirst, {
		relationName: "userlogInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userlogInPplFirsts_updatedtenant: many(userlogInPplFirst, {
		relationName: "userlogInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userskillInPplFirsts_createdtenant: many(userskillInPplFirst, {
		relationName: "userskillInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userskillInPplFirsts_tenant: many(userskillInPplFirst, {
		relationName: "userskillInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userskillInPplFirsts_updatedtenant: many(userskillInPplFirst, {
		relationName: "userskillInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userprofileDojHistoryInPplFirsts_createdtenant: many(userprofileDojHistoryInPplFirst, {
		relationName: "userprofileDojHistoryInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userprofileDojHistoryInPplFirsts_tenant: many(userprofileDojHistoryInPplFirst, {
		relationName: "userprofileDojHistoryInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userprofileDojHistoryInPplFirsts_updatedtenant: many(userprofileDojHistoryInPplFirst, {
		relationName: "userprofileDojHistoryInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userrolemapInPplFirsts_createdtenant: many(userrolemapInPplFirst, {
		relationName: "userrolemapInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userrolemapInPplFirsts_tenant: many(userrolemapInPplFirst, {
		relationName: "userrolemapInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userrolemapInPplFirsts_updatedtenant: many(userrolemapInPplFirst, {
		relationName: "userrolemapInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userprofileInPplFirsts_createdtenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userprofileInPplFirsts_tenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userprofileInPplFirsts_updatedtenant: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userexperienceDocumentInPplFirsts_createdtenant: many(userexperienceDocumentInPplFirst, {
		relationName: "userexperienceDocumentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userexperienceDocumentInPplFirsts_tenant: many(userexperienceDocumentInPplFirst, {
		relationName: "userexperienceDocumentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userexperienceDocumentInPplFirsts_updatedtenant: many(userexperienceDocumentInPplFirst, {
		relationName: "userexperienceDocumentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userskilltoolInPplFirsts_createdtenant: many(userskilltoolInPplFirst, {
		relationName: "userskilltoolInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userskilltoolInPplFirsts_tenant: many(userskilltoolInPplFirst, {
		relationName: "userskilltoolInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userskilltoolInPplFirsts_updatedtenant: many(userskilltoolInPplFirst, {
		relationName: "userskilltoolInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userworkpreferenceInPplFirsts_createdtenant: many(userworkpreferenceInPplFirst, {
		relationName: "userworkpreferenceInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userworkpreferenceInPplFirsts_updatedtenant: many(userworkpreferenceInPplFirst, {
		relationName: "userworkpreferenceInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	userfeedbackInPplFirsts_createdtenant: many(userfeedbackInPplFirst, {
		relationName: "userfeedbackInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	userfeedbackInPplFirsts_tenant: many(userfeedbackInPplFirst, {
		relationName: "userfeedbackInPplFirst_tenant_tenantInPplFirst_id"
	}),
	userfeedbackInPplFirsts_updatedtenant: many(userfeedbackInPplFirst, {
		relationName: "userfeedbackInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirsts_createdtenant: many(usermasterInPplFirst, {
		relationName: "usermasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirsts_tenant: many(usermasterInPplFirst, {
		relationName: "usermasterInPplFirst_tenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirsts_updatedtenant: many(usermasterInPplFirst, {
		relationName: "usermasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	roleInPplFirsts_createdtenant: many(roleInPplFirst, {
		relationName: "roleInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	roleInPplFirsts_tenant: many(roleInPplFirst, {
		relationName: "roleInPplFirst_tenant_tenantInPplFirst_id"
	}),
	roleInPplFirsts_updatedtenant: many(roleInPplFirst, {
		relationName: "roleInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	tenantsubscriptionInPplFirsts_createdtenant: many(tenantsubscriptionInPplFirst, {
		relationName: "tenantsubscriptionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	tenantsubscriptionInPplFirsts_tenant: many(tenantsubscriptionInPplFirst, {
		relationName: "tenantsubscriptionInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantsubscriptionInPplFirsts_updatedtenant: many(tenantsubscriptionInPplFirst, {
		relationName: "tenantsubscriptionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
}));

export const usermasterInPplFirstRelations = relations(usermasterInPplFirst, ({one, many}) => ({
	masterdataInPplFirsts_createduser: many(masterdataInPplFirst, {
		relationName: "masterdataInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	masterdataInPplFirsts_updateduser: many(masterdataInPplFirst, {
		relationName: "masterdataInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	certificationProvidersInPplFirsts_createduser: many(certificationProvidersInPplFirst, {
		relationName: "certificationProvidersInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	certificationProvidersInPplFirsts_updateduser: many(certificationProvidersInPplFirst, {
		relationName: "certificationProvidersInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	contentInPplFirsts_createduser: many(contentInPplFirst, {
		relationName: "contentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	contentInPplFirsts_updateduser: many(contentInPplFirst, {
		relationName: "contentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	datagroupInPplFirsts_createduser: many(datagroupInPplFirst, {
		relationName: "datagroupInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	datagroupInPplFirsts_updateduser: many(datagroupInPplFirst, {
		relationName: "datagroupInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	datagrouphierarchyInPplFirsts_createduser: many(datagrouphierarchyInPplFirst, {
		relationName: "datagrouphierarchyInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	datagrouphierarchyInPplFirsts_updateduser: many(datagrouphierarchyInPplFirst, {
		relationName: "datagrouphierarchyInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	certificationsInPplFirsts_createduser: many(certificationsInPplFirst, {
		relationName: "certificationsInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	certificationsInPplFirsts_updateduser: many(certificationsInPplFirst, {
		relationName: "certificationsInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	modulemasterInPplFirsts_createduser: many(modulemasterInPplFirst, {
		relationName: "modulemasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	modulemasterInPplFirsts_updateduser: many(modulemasterInPplFirst, {
		relationName: "modulemasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	notificationsInPplFirsts_createdUser: many(notificationsInPplFirst, {
		relationName: "notificationsInPplFirst_createdUser_usermasterInPplFirst_id"
	}),
	notificationsInPplFirsts_updatedUser: many(notificationsInPplFirst, {
		relationName: "notificationsInPplFirst_updatedUser_usermasterInPplFirst_id"
	}),
	companyMasterInPplFirsts_createduser: many(companyMasterInPplFirst, {
		relationName: "companyMasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	companyMasterInPplFirsts_updateduser: many(companyMasterInPplFirst, {
		relationName: "companyMasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	masterdatahierarchyInPplFirsts_createduser: many(masterdatahierarchyInPplFirst, {
		relationName: "masterdatahierarchyInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	masterdatahierarchyInPplFirsts_updateduser: many(masterdatahierarchyInPplFirst, {
		relationName: "masterdatahierarchyInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	policyInPplFirsts_createduser: many(policyInPplFirst, {
		relationName: "policyInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	policyInPplFirsts_updateduser: many(policyInPplFirst, {
		relationName: "policyInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	rolepermissionInPplFirsts_createduser: many(rolepermissionInPplFirst, {
		relationName: "rolepermissionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	rolepermissionInPplFirsts_updateduser: many(rolepermissionInPplFirst, {
		relationName: "rolepermissionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	onboardingReferencesInPplFirsts_createduser: many(onboardingReferencesInPplFirst, {
		relationName: "onboardingReferencesInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	onboardingReferencesInPplFirsts_updateduser: many(onboardingReferencesInPplFirst, {
		relationName: "onboardingReferencesInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	permissionInPplFirsts_createduser: many(permissionInPplFirst, {
		relationName: "permissionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	permissionInPplFirsts_updateduser: many(permissionInPplFirst, {
		relationName: "permissionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	subscriptionmasterInPplFirsts_createduser: many(subscriptionmasterInPplFirst, {
		relationName: "subscriptionmasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	subscriptionmasterInPplFirsts_updateduser: many(subscriptionmasterInPplFirst, {
		relationName: "subscriptionmasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	subscriptionpricingInPplFirsts_createduser: many(subscriptionpricingInPplFirst, {
		relationName: "subscriptionpricingInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	subscriptionpricingInPplFirsts_updateduser: many(subscriptionpricingInPplFirst, {
		relationName: "subscriptionpricingInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	submodulemasterInPplFirsts_createduser: many(submodulemasterInPplFirst, {
		relationName: "submodulemasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	submodulemasterInPplFirsts_updateduser: many(submodulemasterInPplFirst, {
		relationName: "submodulemasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	supportTicketInPplFirsts_assignedUser: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_assignedUser_usermasterInPplFirst_id"
	}),
	supportTicketInPplFirsts_createduser: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	supportTicketInPplFirsts_reporterUser: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_reporterUser_usermasterInPplFirst_id"
	}),
	supportTicketInPplFirsts_updateduser: many(supportTicketInPplFirst, {
		relationName: "supportTicketInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	subscriptiondetailsInPplFirsts_createduser: many(subscriptiondetailsInPplFirst, {
		relationName: "subscriptiondetailsInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	subscriptiondetailsInPplFirsts_updateduser: many(subscriptiondetailsInPplFirst, {
		relationName: "subscriptiondetailsInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyInPplFirsts_createduser: many(surveyInPplFirst, {
		relationName: "surveyInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyInPplFirsts_updateduser: many(surveyInPplFirst, {
		relationName: "surveyInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyConditionalQuestionInPplFirsts_createduser: many(surveyConditionalQuestionInPplFirst, {
		relationName: "surveyConditionalQuestionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyConditionalQuestionInPplFirsts_updateduser: many(surveyConditionalQuestionInPplFirst, {
		relationName: "surveyConditionalQuestionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyQuestionInPplFirsts_createduser: many(surveyQuestionInPplFirst, {
		relationName: "surveyQuestionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyQuestionInPplFirsts_updateduser: many(surveyQuestionInPplFirst, {
		relationName: "surveyQuestionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyLinkedEntityInPplFirsts_createduser: many(surveyLinkedEntityInPplFirst, {
		relationName: "surveyLinkedEntityInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyLinkedEntityInPplFirsts_updateduser: many(surveyLinkedEntityInPplFirst, {
		relationName: "surveyLinkedEntityInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveySectionInPplFirsts_createduser: many(surveySectionInPplFirst, {
		relationName: "surveySectionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveySectionInPplFirsts_updateduser: many(surveySectionInPplFirst, {
		relationName: "surveySectionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyInstanceInPplFirsts_createduser: many(surveyInstanceInPplFirst, {
		relationName: "surveyInstanceInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyInstanceInPplFirsts_updateduser: many(surveyInstanceInPplFirst, {
		relationName: "surveyInstanceInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyOptionInPplFirsts_createduser: many(surveyOptionInPplFirst, {
		relationName: "surveyOptionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyOptionInPplFirsts_updateduser: many(surveyOptionInPplFirst, {
		relationName: "surveyOptionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyUserInPplFirsts_createduser: many(surveyUserInPplFirst, {
		relationName: "surveyUserInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyUserInPplFirsts_updateduser: many(surveyUserInPplFirst, {
		relationName: "surveyUserInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyResponseInPplFirsts_createduser: many(surveyResponseInPplFirst, {
		relationName: "surveyResponseInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyResponseInPplFirsts_updateduser: many(surveyResponseInPplFirst, {
		relationName: "surveyResponseInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	supportTicketCommentInPplFirsts_commentedBy: many(supportTicketCommentInPplFirst, {
		relationName: "supportTicketCommentInPplFirst_commentedBy_usermasterInPplFirst_id"
	}),
	supportTicketCommentInPplFirsts_createduser: many(supportTicketCommentInPplFirst, {
		relationName: "supportTicketCommentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	supportTicketCommentInPplFirsts_updateduser: many(supportTicketCommentInPplFirst, {
		relationName: "supportTicketCommentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	supportTicketStatusHistoryInPplFirsts_changedBy: many(supportTicketStatusHistoryInPplFirst, {
		relationName: "supportTicketStatusHistoryInPplFirst_changedBy_usermasterInPplFirst_id"
	}),
	supportTicketStatusHistoryInPplFirsts_createduser: many(supportTicketStatusHistoryInPplFirst, {
		relationName: "supportTicketStatusHistoryInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	supportTicketStatusHistoryInPplFirsts_updateduser: many(supportTicketStatusHistoryInPplFirst, {
		relationName: "supportTicketStatusHistoryInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	tenantpaymentInPplFirsts_createduser: many(tenantpaymentInPplFirst, {
		relationName: "tenantpaymentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantpaymentInPplFirsts_updateduser: many(tenantpaymentInPplFirst, {
		relationName: "tenantpaymentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirsts_createduser: many(tenantInPplFirst, {
		relationName: "tenantInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirsts_updateduser: many(tenantInPplFirst, {
		relationName: "tenantInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	tenantcontactInPplFirsts_createduser: many(tenantcontactInPplFirst, {
		relationName: "tenantcontactInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantcontactInPplFirsts_updateduser: many(tenantcontactInPplFirst, {
		relationName: "tenantcontactInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	tenantsubscriptionpricingInPplFirsts_createduser: many(tenantsubscriptionpricingInPplFirst, {
		relationName: "tenantsubscriptionpricingInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantsubscriptionpricingInPplFirsts_updateduser: many(tenantsubscriptionpricingInPplFirst, {
		relationName: "tenantsubscriptionpricingInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userInPplFirsts_createduser: many(userInPplFirst, {
		relationName: "userInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userInPplFirsts_updateduser: many(userInPplFirst, {
		relationName: "userInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userInPplFirsts_usermaster: many(userInPplFirst, {
		relationName: "userInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userOnboardingInPplFirsts_createduser: many(userOnboardingInPplFirst, {
		relationName: "userOnboardingInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userOnboardingInPplFirsts_updateduser: many(userOnboardingInPplFirst, {
		relationName: "userOnboardingInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userOnboardingInPplFirsts_userId: many(userOnboardingInPplFirst, {
		relationName: "userOnboardingInPplFirst_userId_usermasterInPplFirst_id"
	}),
	userLanguageInPplFirsts_createduser: many(userLanguageInPplFirst, {
		relationName: "userLanguageInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userLanguageInPplFirsts_updateduser: many(userLanguageInPplFirst, {
		relationName: "userLanguageInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userLanguageInPplFirsts_usermasterId: many(userLanguageInPplFirst, {
		relationName: "userLanguageInPplFirst_usermasterId_usermasterInPplFirst_id"
	}),
	userbankingInPplFirsts_createduser: many(userbankingInPplFirst, {
		relationName: "userbankingInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userbankingInPplFirsts_updateduser: many(userbankingInPplFirst, {
		relationName: "userbankingInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userbankingInPplFirsts_usermaster: many(userbankingInPplFirst, {
		relationName: "userbankingInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userOnboardingAssignmentInPplFirsts_assignedUserId: many(userOnboardingAssignmentInPplFirst, {
		relationName: "userOnboardingAssignmentInPplFirst_assignedUserId_usermasterInPplFirst_id"
	}),
	userOnboardingAssignmentInPplFirsts_createduser: many(userOnboardingAssignmentInPplFirst, {
		relationName: "userOnboardingAssignmentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userOnboardingAssignmentInPplFirsts_updateduser: many(userOnboardingAssignmentInPplFirst, {
		relationName: "userOnboardingAssignmentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userOnboardingDocumentInPplFirsts_createduser: many(userOnboardingDocumentInPplFirst, {
		relationName: "userOnboardingDocumentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userOnboardingDocumentInPplFirsts_updateduser: many(userOnboardingDocumentInPplFirst, {
		relationName: "userOnboardingDocumentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userBgvAssignmentInPplFirsts_createduser: many(userBgvAssignmentInPplFirst, {
		relationName: "userBgvAssignmentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userBgvAssignmentInPplFirsts_updateduser: many(userBgvAssignmentInPplFirst, {
		relationName: "userBgvAssignmentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userBgvAssignmentInPplFirsts_userId: many(userBgvAssignmentInPplFirst, {
		relationName: "userBgvAssignmentInPplFirst_userId_usermasterInPplFirst_id"
	}),
	usercontactInPplFirsts_createduser: many(usercontactInPplFirst, {
		relationName: "usercontactInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	usercontactInPplFirsts_updateduser: many(usercontactInPplFirst, {
		relationName: "usercontactInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usercontactInPplFirsts_usermaster: many(usercontactInPplFirst, {
		relationName: "usercontactInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	usercontentInPplFirsts_createduser: many(usercontentInPplFirst, {
		relationName: "usercontentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	usercontentInPplFirsts_updateduser: many(usercontentInPplFirst, {
		relationName: "usercontentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usercontentInPplFirsts_usermaster: many(usercontentInPplFirst, {
		relationName: "usercontentInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userCertificationsInPplFirsts_createduser: many(userCertificationsInPplFirst, {
		relationName: "userCertificationsInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userCertificationsInPplFirsts_updateduser: many(userCertificationsInPplFirst, {
		relationName: "userCertificationsInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userCertificationsInPplFirsts_userId: many(userCertificationsInPplFirst, {
		relationName: "userCertificationsInPplFirst_userId_usermasterInPplFirst_id"
	}),
	userdocumentInPplFirsts_createduser: many(userdocumentInPplFirst, {
		relationName: "userdocumentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userdocumentInPplFirsts_updateduser: many(userdocumentInPplFirst, {
		relationName: "userdocumentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userdocumentInPplFirsts_usermaster: many(userdocumentInPplFirst, {
		relationName: "userdocumentInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	usereducationInPplFirsts_createduser: many(usereducationInPplFirst, {
		relationName: "usereducationInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	usereducationInPplFirsts_updateduser: many(usereducationInPplFirst, {
		relationName: "usereducationInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usereducationInPplFirsts_usermaster: many(usereducationInPplFirst, {
		relationName: "usereducationInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	usereducationDocumentInPplFirsts_createduser: many(usereducationDocumentInPplFirst, {
		relationName: "usereducationDocumentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	usereducationDocumentInPplFirsts_updateduser: many(usereducationDocumentInPplFirst, {
		relationName: "usereducationDocumentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userexperienceInPplFirsts_createduser: many(userexperienceInPplFirst, {
		relationName: "userexperienceInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userexperienceInPplFirsts_updateduser: many(userexperienceInPplFirst, {
		relationName: "userexperienceInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userexperienceInPplFirsts_usermaster: many(userexperienceInPplFirst, {
		relationName: "userexperienceInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	useraddressInPplFirsts_createduser: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	useraddressInPplFirsts_updateduser: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	useraddressInPplFirsts_usermaster: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	useraddressInPplFirsts_verifiedby: many(useraddressInPplFirst, {
		relationName: "useraddressInPplFirst_verifiedby_usermasterInPplFirst_id"
	}),
	userDirectorshipInPplFirsts_createduser: many(userDirectorshipInPplFirst, {
		relationName: "userDirectorshipInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userDirectorshipInPplFirsts_updateduser: many(userDirectorshipInPplFirst, {
		relationName: "userDirectorshipInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userDirectorshipInPplFirsts_userId: many(userDirectorshipInPplFirst, {
		relationName: "userDirectorshipInPplFirst_userId_usermasterInPplFirst_id"
	}),
	userimmigrationInPplFirsts_createduser: many(userimmigrationInPplFirst, {
		relationName: "userimmigrationInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userimmigrationInPplFirsts_updateduser: many(userimmigrationInPplFirst, {
		relationName: "userimmigrationInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userimmigrationInPplFirsts_usermaster: many(userimmigrationInPplFirst, {
		relationName: "userimmigrationInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userlogInPplFirsts_createduser: many(userlogInPplFirst, {
		relationName: "userlogInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userlogInPplFirsts_updateduser: many(userlogInPplFirst, {
		relationName: "userlogInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userlogInPplFirsts_usermaster: many(userlogInPplFirst, {
		relationName: "userlogInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userskillInPplFirsts_createduser: many(userskillInPplFirst, {
		relationName: "userskillInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userskillInPplFirsts_updateduser: many(userskillInPplFirst, {
		relationName: "userskillInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userskillInPplFirsts_usermaster: many(userskillInPplFirst, {
		relationName: "userskillInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userprofileDojHistoryInPplFirsts_changedBy: many(userprofileDojHistoryInPplFirst, {
		relationName: "userprofileDojHistoryInPplFirst_changedBy_usermasterInPplFirst_id"
	}),
	userprofileDojHistoryInPplFirsts_createduser: many(userprofileDojHistoryInPplFirst, {
		relationName: "userprofileDojHistoryInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userprofileDojHistoryInPplFirsts_updateduser: many(userprofileDojHistoryInPplFirst, {
		relationName: "userprofileDojHistoryInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userrolemapInPplFirsts_createduser: many(userrolemapInPplFirst, {
		relationName: "userrolemapInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userrolemapInPplFirsts_updateduser: many(userrolemapInPplFirst, {
		relationName: "userrolemapInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userrolemapInPplFirsts_usermaster: many(userrolemapInPplFirst, {
		relationName: "userrolemapInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userprofileInPplFirsts_createduser: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userprofileInPplFirsts_hrbp: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_hrbp_usermasterInPplFirst_id"
	}),
	userprofileInPplFirsts_l1Manager: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_l1Manager_usermasterInPplFirst_id"
	}),
	userprofileInPplFirsts_l2Manager: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_l2Manager_usermasterInPplFirst_id"
	}),
	userprofileInPplFirsts_updateduser: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userprofileInPplFirsts_usermaster: many(userprofileInPplFirst, {
		relationName: "userprofileInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userexperienceDocumentInPplFirsts_createduser: many(userexperienceDocumentInPplFirst, {
		relationName: "userexperienceDocumentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userexperienceDocumentInPplFirsts_updateduser: many(userexperienceDocumentInPplFirst, {
		relationName: "userexperienceDocumentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userskilltoolInPplFirsts_createduser: many(userskilltoolInPplFirst, {
		relationName: "userskilltoolInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userskilltoolInPplFirsts_updateduser: many(userskilltoolInPplFirst, {
		relationName: "userskilltoolInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userskilltoolInPplFirsts_usermaster: many(userskilltoolInPplFirst, {
		relationName: "userskilltoolInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userworkpreferenceInPplFirsts_createduser: many(userworkpreferenceInPplFirst, {
		relationName: "userworkpreferenceInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userworkpreferenceInPplFirsts_updateduser: many(userworkpreferenceInPplFirst, {
		relationName: "userworkpreferenceInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userworkpreferenceInPplFirsts_usermaster: many(userworkpreferenceInPplFirst, {
		relationName: "userworkpreferenceInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userfeedbackInPplFirsts_createduser: many(userfeedbackInPplFirst, {
		relationName: "userfeedbackInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userfeedbackInPplFirsts_updateduser: many(userfeedbackInPplFirst, {
		relationName: "userfeedbackInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userfeedbackInPplFirsts_usermaster: many(userfeedbackInPplFirst, {
		relationName: "userfeedbackInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [usermasterInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId],
		relationName: "usermasterInPplFirst_companyId_companyMasterInPplFirst_companyId"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [usermasterInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "usermasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [usermasterInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "usermasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirsts_createduser: many(usermasterInPplFirst, {
		relationName: "usermasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [usermasterInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "usermasterInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [usermasterInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "usermasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [usermasterInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "usermasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirsts_updateduser: many(usermasterInPplFirst, {
		relationName: "usermasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	roleInPplFirsts_createduser: many(roleInPplFirst, {
		relationName: "roleInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	roleInPplFirsts_updateduser: many(roleInPplFirst, {
		relationName: "roleInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	tenantsubscriptionInPplFirsts_createduser: many(tenantsubscriptionInPplFirst, {
		relationName: "tenantsubscriptionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantsubscriptionInPplFirsts_updateduser: many(tenantsubscriptionInPplFirst, {
		relationName: "tenantsubscriptionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userAgencyMapInPplFirsts: many(userAgencyMapInPplFirst),
}));

export const companyMasterdataMapInPplFirstRelations = relations(companyMasterdataMapInPplFirst, ({one}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [companyMasterdataMapInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	datagroupInPplFirst: one(datagroupInPplFirst, {
		fields: [companyMasterdataMapInPplFirst.objectType],
		references: [datagroupInPplFirst.code]
	}),
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [companyMasterdataMapInPplFirst.objectValue],
		references: [masterdataInPplFirst.code]
	}),
}));

export const companyMasterInPplFirstRelations = relations(companyMasterInPplFirst, ({one, many}) => ({
	companyMasterdataMapInPplFirsts: many(companyMasterdataMapInPplFirst),
	companyMasterdataHierarchyInPplFirsts: many(companyMasterdataHierarchyInPplFirst),
	companyAgencyMapInPplFirsts: many(companyAgencyMapInPplFirst),
	notificationsInPplFirsts: many(notificationsInPplFirst),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [companyMasterInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "companyMasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [companyMasterInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "companyMasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [companyMasterInPplFirst.parentCompanyId],
		references: [companyMasterInPplFirst.companyId],
		relationName: "companyMasterInPplFirst_parentCompanyId_companyMasterInPplFirst_companyId"
	}),
	companyMasterInPplFirsts: many(companyMasterInPplFirst, {
		relationName: "companyMasterInPplFirst_parentCompanyId_companyMasterInPplFirst_companyId"
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [companyMasterInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "companyMasterInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [companyMasterInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "companyMasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [companyMasterInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "companyMasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyInPplFirsts: many(surveyInPplFirst),
	surveyConditionalQuestionInPplFirsts: many(surveyConditionalQuestionInPplFirst),
	surveyQuestionInPplFirsts: many(surveyQuestionInPplFirst),
	surveyLinkedEntityInPplFirsts: many(surveyLinkedEntityInPplFirst),
	surveySectionInPplFirsts: many(surveySectionInPplFirst),
	surveyInstanceInPplFirsts: many(surveyInstanceInPplFirst),
	surveyOptionInPplFirsts: many(surveyOptionInPplFirst),
	surveyUserInPplFirsts: many(surveyUserInPplFirst),
	surveyResponseInPplFirsts: many(surveyResponseInPplFirst),
	usermasterInPplFirsts: many(usermasterInPplFirst, {
		relationName: "usermasterInPplFirst_companyId_companyMasterInPplFirst_companyId"
	}),
}));

export const certificationProvidersInPplFirstRelations = relations(certificationProvidersInPplFirst, ({one, many}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [certificationProvidersInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "certificationProvidersInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [certificationProvidersInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "certificationProvidersInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [certificationProvidersInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "certificationProvidersInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [certificationProvidersInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "certificationProvidersInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [certificationProvidersInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "certificationProvidersInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	certificationsInPplFirsts: many(certificationsInPplFirst),
}));

export const contentInPplFirstRelations = relations(contentInPplFirst, ({one, many}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [contentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "contentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [contentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "contentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [contentInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "contentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [contentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "contentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [contentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "contentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usercontentInPplFirsts: many(usercontentInPplFirst),
}));

export const companyMasterdataHierarchyInPplFirstRelations = relations(companyMasterdataHierarchyInPplFirst, ({one}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [companyMasterdataHierarchyInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	masterdataInPplFirst_masterdataId: one(masterdataInPplFirst, {
		fields: [companyMasterdataHierarchyInPplFirst.masterdataId],
		references: [masterdataInPplFirst.id],
		relationName: "companyMasterdataHierarchyInPplFirst_masterdataId_masterdataInPplFirst_id"
	}),
	masterdataInPplFirst_parentMasterdataId: one(masterdataInPplFirst, {
		fields: [companyMasterdataHierarchyInPplFirst.parentMasterdataId],
		references: [masterdataInPplFirst.id],
		relationName: "companyMasterdataHierarchyInPplFirst_parentMasterdataId_masterdataInPplFirst_id"
	}),
}));

export const datagrouphierarchyInPplFirstRelations = relations(datagrouphierarchyInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [datagrouphierarchyInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "datagrouphierarchyInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [datagrouphierarchyInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "datagrouphierarchyInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [datagrouphierarchyInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "datagrouphierarchyInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [datagrouphierarchyInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "datagrouphierarchyInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [datagrouphierarchyInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "datagrouphierarchyInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	datagroupInPplFirst_code: one(datagroupInPplFirst, {
		fields: [datagrouphierarchyInPplFirst.code],
		references: [datagroupInPplFirst.code],
		relationName: "datagrouphierarchyInPplFirst_code_datagroupInPplFirst_code"
	}),
	datagroupInPplFirst_parentcode: one(datagroupInPplFirst, {
		fields: [datagrouphierarchyInPplFirst.parentcode],
		references: [datagroupInPplFirst.code],
		relationName: "datagrouphierarchyInPplFirst_parentcode_datagroupInPplFirst_code"
	}),
}));

export const certificationsInPplFirstRelations = relations(certificationsInPplFirst, ({one, many}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [certificationsInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "certificationsInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [certificationsInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "certificationsInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	certificationProvidersInPplFirst: one(certificationProvidersInPplFirst, {
		fields: [certificationsInPplFirst.providerId],
		references: [certificationProvidersInPplFirst.providerId]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [certificationsInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "certificationsInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [certificationsInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "certificationsInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [certificationsInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "certificationsInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userCertificationsInPplFirsts: many(userCertificationsInPplFirst),
}));

export const companyAgencyMapInPplFirstRelations = relations(companyAgencyMapInPplFirst, ({one}) => ({
	agencyMasterInPplFirst: one(agencyMasterInPplFirst, {
		fields: [companyAgencyMapInPplFirst.agencyMasterId],
		references: [agencyMasterInPplFirst.id]
	}),
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [companyAgencyMapInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [companyAgencyMapInPplFirst.serviceMasterdataId],
		references: [masterdataInPplFirst.id]
	}),
}));

export const agencyMasterInPplFirstRelations = relations(agencyMasterInPplFirst, ({many}) => ({
	companyAgencyMapInPplFirsts: many(companyAgencyMapInPplFirst),
	userBgvAssignmentInPplFirsts: many(userBgvAssignmentInPplFirst),
	agencyServiceMapInPplFirsts: many(agencyServiceMapInPplFirst),
	userAgencyMapInPplFirsts: many(userAgencyMapInPplFirst),
}));

export const modulemasterInPplFirstRelations = relations(modulemasterInPplFirst, ({one, many}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [modulemasterInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "modulemasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [modulemasterInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "modulemasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [modulemasterInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "modulemasterInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [modulemasterInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "modulemasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [modulemasterInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "modulemasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	submodulemasterInPplFirsts: many(submodulemasterInPplFirst),
	subscriptiondetailsInPplFirsts: many(subscriptiondetailsInPplFirst),
}));

export const notificationsInPplFirstRelations = relations(notificationsInPplFirst, ({one}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [notificationsInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdTenant: one(tenantInPplFirst, {
		fields: [notificationsInPplFirst.createdTenant],
		references: [tenantInPplFirst.id],
		relationName: "notificationsInPplFirst_createdTenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createdUser: one(usermasterInPplFirst, {
		fields: [notificationsInPplFirst.createdUser],
		references: [usermasterInPplFirst.id],
		relationName: "notificationsInPplFirst_createdUser_usermasterInPplFirst_id"
	}),
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [notificationsInPplFirst.notificationType],
		references: [masterdataInPplFirst.code]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [notificationsInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "notificationsInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedTenant: one(tenantInPplFirst, {
		fields: [notificationsInPplFirst.updatedTenant],
		references: [tenantInPplFirst.id],
		relationName: "notificationsInPplFirst_updatedTenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updatedUser: one(usermasterInPplFirst, {
		fields: [notificationsInPplFirst.updatedUser],
		references: [usermasterInPplFirst.id],
		relationName: "notificationsInPplFirst_updatedUser_usermasterInPplFirst_id"
	}),
}));

export const masterdatahierarchyInPplFirstRelations = relations(masterdatahierarchyInPplFirst, ({one}) => ({
	masterdataInPplFirst_code: one(masterdataInPplFirst, {
		fields: [masterdatahierarchyInPplFirst.code],
		references: [masterdataInPplFirst.code],
		relationName: "masterdatahierarchyInPplFirst_code_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_parentcode: one(masterdataInPplFirst, {
		fields: [masterdatahierarchyInPplFirst.parentcode],
		references: [masterdataInPplFirst.code],
		relationName: "masterdatahierarchyInPplFirst_parentcode_masterdataInPplFirst_code"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [masterdatahierarchyInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "masterdatahierarchyInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [masterdatahierarchyInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "masterdatahierarchyInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [masterdatahierarchyInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "masterdatahierarchyInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [masterdatahierarchyInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "masterdatahierarchyInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [masterdatahierarchyInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "masterdatahierarchyInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const policyInPplFirstRelations = relations(policyInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [policyInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "policyInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [policyInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "policyInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [policyInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "policyInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [policyInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "policyInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [policyInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "policyInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const rolepermissionInPplFirstRelations = relations(rolepermissionInPplFirst, ({one}) => ({
	roleInPplFirst: one(roleInPplFirst, {
		fields: [rolepermissionInPplFirst.tenant],
		references: [roleInPplFirst.tenant]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [rolepermissionInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "rolepermissionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [rolepermissionInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "rolepermissionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [rolepermissionInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "rolepermissionInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [rolepermissionInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "rolepermissionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [rolepermissionInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "rolepermissionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const roleInPplFirstRelations = relations(roleInPplFirst, ({one, many}) => ({
	rolepermissionInPplFirsts: many(rolepermissionInPplFirst),
	userrolemapInPplFirsts: many(userrolemapInPplFirst),
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [roleInPplFirst.tenant],
		references: [masterdataInPplFirst.code]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [roleInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "roleInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [roleInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "roleInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [roleInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "roleInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [roleInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "roleInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [roleInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "roleInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const onboardingReferencesInPplFirstRelations = relations(onboardingReferencesInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [onboardingReferencesInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "onboardingReferencesInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [onboardingReferencesInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "onboardingReferencesInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userOnboardingInPplFirst: one(userOnboardingInPplFirst, {
		fields: [onboardingReferencesInPplFirst.onboardingId],
		references: [userOnboardingInPplFirst.id]
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [onboardingReferencesInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "onboardingReferencesInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [onboardingReferencesInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "onboardingReferencesInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const userOnboardingInPplFirstRelations = relations(userOnboardingInPplFirst, ({one, many}) => ({
	onboardingReferencesInPplFirsts: many(onboardingReferencesInPplFirst),
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [userOnboardingInPplFirst.onboardingStatus],
		references: [masterdataInPplFirst.code]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userOnboardingInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userOnboardingInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userOnboardingInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userOnboardingInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userOnboardingInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userOnboardingInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userOnboardingInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_userId: one(usermasterInPplFirst, {
		fields: [userOnboardingInPplFirst.userId],
		references: [usermasterInPplFirst.id],
		relationName: "userOnboardingInPplFirst_userId_usermasterInPplFirst_id"
	}),
	userOnboardingAssignmentInPplFirsts: many(userOnboardingAssignmentInPplFirst),
	userOnboardingDocumentInPplFirsts: many(userOnboardingDocumentInPplFirst),
}));

export const permissionInPplFirstRelations = relations(permissionInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [permissionInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "permissionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [permissionInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "permissionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [permissionInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "permissionInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [permissionInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "permissionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [permissionInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "permissionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const subscriptionmasterInPplFirstRelations = relations(subscriptionmasterInPplFirst, ({one, many}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [subscriptionmasterInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "subscriptionmasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [subscriptionmasterInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "subscriptionmasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [subscriptionmasterInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "subscriptionmasterInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [subscriptionmasterInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "subscriptionmasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [subscriptionmasterInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "subscriptionmasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	subscriptiondetailsInPplFirsts: many(subscriptiondetailsInPplFirst),
	tenantsubscriptionInPplFirsts: many(tenantsubscriptionInPplFirst),
}));

export const subscriptionpricingInPplFirstRelations = relations(subscriptionpricingInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [subscriptionpricingInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "subscriptionpricingInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [subscriptionpricingInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "subscriptionpricingInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	submodulemasterInPplFirst: one(submodulemasterInPplFirst, {
		fields: [subscriptionpricingInPplFirst.submoduleid],
		references: [submodulemasterInPplFirst.id]
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [subscriptionpricingInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "subscriptionpricingInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [subscriptionpricingInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "subscriptionpricingInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const submodulemasterInPplFirstRelations = relations(submodulemasterInPplFirst, ({one, many}) => ({
	subscriptionpricingInPplFirsts: many(subscriptionpricingInPplFirst),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [submodulemasterInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "submodulemasterInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [submodulemasterInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "submodulemasterInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	modulemasterInPplFirst: one(modulemasterInPplFirst, {
		fields: [submodulemasterInPplFirst.module],
		references: [modulemasterInPplFirst.id]
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [submodulemasterInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "submodulemasterInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [submodulemasterInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "submodulemasterInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [submodulemasterInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "submodulemasterInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	subscriptiondetailsInPplFirsts: many(subscriptiondetailsInPplFirst),
	tenantsubscriptionpricingInPplFirsts: many(tenantsubscriptionpricingInPplFirst),
}));

export const supportTicketAttachmentInPplFirstRelations = relations(supportTicketAttachmentInPplFirst, ({one}) => ({
	supportTicketInPplFirst: one(supportTicketInPplFirst, {
		fields: [supportTicketAttachmentInPplFirst.supportTicketId],
		references: [supportTicketInPplFirst.id]
	}),
}));

export const supportTicketInPplFirstRelations = relations(supportTicketInPplFirst, ({one, many}) => ({
	supportTicketAttachmentInPplFirsts: many(supportTicketAttachmentInPplFirst),
	masterdataInPplFirst_priority: one(masterdataInPplFirst, {
		fields: [supportTicketInPplFirst.priority],
		references: [masterdataInPplFirst.code],
		relationName: "supportTicketInPplFirst_priority_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_ticketType: one(masterdataInPplFirst, {
		fields: [supportTicketInPplFirst.ticketType],
		references: [masterdataInPplFirst.code],
		relationName: "supportTicketInPplFirst_ticketType_masterdataInPplFirst_code"
	}),
	usermasterInPplFirst_assignedUser: one(usermasterInPplFirst, {
		fields: [supportTicketInPplFirst.assignedUser],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketInPplFirst_assignedUser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [supportTicketInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "supportTicketInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [supportTicketInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	masterdataInPplFirst_priority: one(masterdataInPplFirst, {
		fields: [supportTicketInPplFirst.priority],
		references: [masterdataInPplFirst.code],
		relationName: "supportTicketInPplFirst_priority_masterdataInPplFirst_code"
	}),
	usermasterInPplFirst_reporterUser: one(usermasterInPplFirst, {
		fields: [supportTicketInPplFirst.reporterUser],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketInPplFirst_reporterUser_usermasterInPplFirst_id"
	}),
	masterdataInPplFirst_status: one(masterdataInPplFirst, {
		fields: [supportTicketInPplFirst.status],
		references: [masterdataInPplFirst.code],
		relationName: "supportTicketInPplFirst_status_masterdataInPplFirst_code"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [supportTicketInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "supportTicketInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [supportTicketInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "supportTicketInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [supportTicketInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	supportTicketCommentInPplFirsts: many(supportTicketCommentInPplFirst),
	supportTicketStatusHistoryInPplFirsts: many(supportTicketStatusHistoryInPplFirst),
}));

export const subscriptiondetailsInPplFirstRelations = relations(subscriptiondetailsInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [subscriptiondetailsInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "subscriptiondetailsInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [subscriptiondetailsInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "subscriptiondetailsInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	modulemasterInPplFirst: one(modulemasterInPplFirst, {
		fields: [subscriptiondetailsInPplFirst.module],
		references: [modulemasterInPplFirst.id]
	}),
	submodulemasterInPplFirst: one(submodulemasterInPplFirst, {
		fields: [subscriptiondetailsInPplFirst.submodule],
		references: [submodulemasterInPplFirst.id]
	}),
	subscriptionmasterInPplFirst: one(subscriptionmasterInPplFirst, {
		fields: [subscriptiondetailsInPplFirst.subscription],
		references: [subscriptionmasterInPplFirst.id]
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [subscriptiondetailsInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "subscriptiondetailsInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [subscriptiondetailsInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "subscriptiondetailsInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const surveyInPplFirstRelations = relations(surveyInPplFirst, ({one, many}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveyInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveyInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveyInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveyInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveyInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveyInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveyInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyLinkedEntityInPplFirsts: many(surveyLinkedEntityInPplFirst),
	surveySectionInPplFirsts: many(surveySectionInPplFirst),
	surveyInstanceInPplFirsts: many(surveyInstanceInPplFirst),
	surveyUserInPplFirsts: many(surveyUserInPplFirst),
}));

export const surveyConditionalQuestionInPplFirstRelations = relations(surveyConditionalQuestionInPplFirst, ({one}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveyConditionalQuestionInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveyConditionalQuestionInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyConditionalQuestionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveyConditionalQuestionInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyConditionalQuestionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyQuestionInPplFirst: one(surveyQuestionInPplFirst, {
		fields: [surveyConditionalQuestionInPplFirst.followupQuestionId],
		references: [surveyQuestionInPplFirst.id]
	}),
	surveyOptionInPplFirst: one(surveyOptionInPplFirst, {
		fields: [surveyConditionalQuestionInPplFirst.surveyOptionId],
		references: [surveyOptionInPplFirst.id]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveyConditionalQuestionInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveyConditionalQuestionInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveyConditionalQuestionInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyConditionalQuestionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveyConditionalQuestionInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyConditionalQuestionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const surveyQuestionInPplFirstRelations = relations(surveyQuestionInPplFirst, ({one, many}) => ({
	surveyConditionalQuestionInPplFirsts: many(surveyConditionalQuestionInPplFirst),
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveyQuestionInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveyQuestionInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyQuestionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveyQuestionInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyQuestionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveySectionInPplFirst: one(surveySectionInPplFirst, {
		fields: [surveyQuestionInPplFirst.surveySectionId],
		references: [surveySectionInPplFirst.id]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveyQuestionInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveyQuestionInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveyQuestionInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyQuestionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveyQuestionInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyQuestionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyOptionInPplFirsts: many(surveyOptionInPplFirst),
	surveyResponseInPplFirsts: many(surveyResponseInPplFirst),
}));

export const surveyOptionInPplFirstRelations = relations(surveyOptionInPplFirst, ({one, many}) => ({
	surveyConditionalQuestionInPplFirsts: many(surveyConditionalQuestionInPplFirst),
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveyOptionInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveyOptionInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyOptionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveyOptionInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyOptionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyQuestionInPplFirst: one(surveyQuestionInPplFirst, {
		fields: [surveyOptionInPplFirst.surveyQuestionId],
		references: [surveyQuestionInPplFirst.id]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveyOptionInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveyOptionInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveyOptionInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyOptionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveyOptionInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyOptionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const surveySectionInPplFirstRelations = relations(surveySectionInPplFirst, ({one, many}) => ({
	surveyQuestionInPplFirsts: many(surveyQuestionInPplFirst),
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveySectionInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveySectionInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveySectionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveySectionInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveySectionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyInPplFirst: one(surveyInPplFirst, {
		fields: [surveySectionInPplFirst.surveyId],
		references: [surveyInPplFirst.id]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveySectionInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveySectionInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveySectionInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveySectionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveySectionInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveySectionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const surveyLinkedEntityInPplFirstRelations = relations(surveyLinkedEntityInPplFirst, ({one}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveyLinkedEntityInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveyLinkedEntityInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyLinkedEntityInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveyLinkedEntityInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyLinkedEntityInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyInPplFirst: one(surveyInPplFirst, {
		fields: [surveyLinkedEntityInPplFirst.surveyId],
		references: [surveyInPplFirst.id]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveyLinkedEntityInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveyLinkedEntityInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveyLinkedEntityInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyLinkedEntityInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveyLinkedEntityInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyLinkedEntityInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const surveyInstanceInPplFirstRelations = relations(surveyInstanceInPplFirst, ({one, many}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveyInstanceInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveyInstanceInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyInstanceInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveyInstanceInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyInstanceInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyInPplFirst: one(surveyInPplFirst, {
		fields: [surveyInstanceInPplFirst.surveyId],
		references: [surveyInPplFirst.id]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveyInstanceInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveyInstanceInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveyInstanceInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyInstanceInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveyInstanceInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyInstanceInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	surveyResponseInPplFirsts: many(surveyResponseInPplFirst),
}));

export const surveyUserInPplFirstRelations = relations(surveyUserInPplFirst, ({one}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveyUserInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveyUserInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyUserInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveyUserInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyUserInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyInPplFirst: one(surveyInPplFirst, {
		fields: [surveyUserInPplFirst.surveyId],
		references: [surveyInPplFirst.id]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveyUserInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveyUserInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveyUserInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyUserInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveyUserInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyUserInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const surveyResponseInPplFirstRelations = relations(surveyResponseInPplFirst, ({one}) => ({
	companyMasterInPplFirst: one(companyMasterInPplFirst, {
		fields: [surveyResponseInPplFirst.companyId],
		references: [companyMasterInPplFirst.companyId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [surveyResponseInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyResponseInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [surveyResponseInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyResponseInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	surveyInstanceInPplFirst: one(surveyInstanceInPplFirst, {
		fields: [surveyResponseInPplFirst.surveyInstanceId],
		references: [surveyInstanceInPplFirst.id]
	}),
	surveyQuestionInPplFirst: one(surveyQuestionInPplFirst, {
		fields: [surveyResponseInPplFirst.surveyQuestionId],
		references: [surveyQuestionInPplFirst.id]
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [surveyResponseInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "surveyResponseInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [surveyResponseInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "surveyResponseInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [surveyResponseInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "surveyResponseInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const supportTicketCommentInPplFirstRelations = relations(supportTicketCommentInPplFirst, ({one}) => ({
	usermasterInPplFirst_commentedBy: one(usermasterInPplFirst, {
		fields: [supportTicketCommentInPplFirst.commentedBy],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketCommentInPplFirst_commentedBy_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [supportTicketCommentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "supportTicketCommentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [supportTicketCommentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketCommentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	supportTicketInPplFirst: one(supportTicketInPplFirst, {
		fields: [supportTicketCommentInPplFirst.ticketId],
		references: [supportTicketInPplFirst.id]
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [supportTicketCommentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "supportTicketCommentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [supportTicketCommentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketCommentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const supportTicketSlaInPplFirstRelations = relations(supportTicketSlaInPplFirst, ({one}) => ({
	masterdataInPplFirst_priority: one(masterdataInPplFirst, {
		fields: [supportTicketSlaInPplFirst.priority],
		references: [masterdataInPplFirst.code],
		relationName: "supportTicketSlaInPplFirst_priority_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_ticketType: one(masterdataInPplFirst, {
		fields: [supportTicketSlaInPplFirst.ticketType],
		references: [masterdataInPplFirst.code],
		relationName: "supportTicketSlaInPplFirst_ticketType_masterdataInPplFirst_code"
	}),
}));

export const supportTicketStatusHistoryInPplFirstRelations = relations(supportTicketStatusHistoryInPplFirst, ({one}) => ({
	usermasterInPplFirst_changedBy: one(usermasterInPplFirst, {
		fields: [supportTicketStatusHistoryInPplFirst.changedBy],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketStatusHistoryInPplFirst_changedBy_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [supportTicketStatusHistoryInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "supportTicketStatusHistoryInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [supportTicketStatusHistoryInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketStatusHistoryInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	masterdataInPplFirst_newStatus: one(masterdataInPplFirst, {
		fields: [supportTicketStatusHistoryInPplFirst.newStatus],
		references: [masterdataInPplFirst.code],
		relationName: "supportTicketStatusHistoryInPplFirst_newStatus_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_previousStatus: one(masterdataInPplFirst, {
		fields: [supportTicketStatusHistoryInPplFirst.previousStatus],
		references: [masterdataInPplFirst.code],
		relationName: "supportTicketStatusHistoryInPplFirst_previousStatus_masterdataInPplFirst_code"
	}),
	supportTicketInPplFirst: one(supportTicketInPplFirst, {
		fields: [supportTicketStatusHistoryInPplFirst.ticketId],
		references: [supportTicketInPplFirst.id]
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [supportTicketStatusHistoryInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "supportTicketStatusHistoryInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [supportTicketStatusHistoryInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "supportTicketStatusHistoryInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const tenantpaymentInPplFirstRelations = relations(tenantpaymentInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [tenantpaymentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantpaymentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [tenantpaymentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantpaymentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantsubscriptionInPplFirst: one(tenantsubscriptionInPplFirst, {
		fields: [tenantpaymentInPplFirst.tenantsubscription],
		references: [tenantsubscriptionInPplFirst.id]
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [tenantpaymentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantpaymentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [tenantpaymentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantpaymentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const tenantsubscriptionInPplFirstRelations = relations(tenantsubscriptionInPplFirst, ({one, many}) => ({
	tenantpaymentInPplFirsts: many(tenantpaymentInPplFirst),
	tenantsubscriptionpricingInPplFirsts: many(tenantsubscriptionpricingInPplFirst),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [tenantsubscriptionInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantsubscriptionInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [tenantsubscriptionInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantsubscriptionInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	subscriptionmasterInPplFirst: one(subscriptionmasterInPplFirst, {
		fields: [tenantsubscriptionInPplFirst.subscription],
		references: [subscriptionmasterInPplFirst.id]
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [tenantsubscriptionInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantsubscriptionInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [tenantsubscriptionInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantsubscriptionInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [tenantsubscriptionInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantsubscriptionInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const tenantcontactInPplFirstRelations = relations(tenantcontactInPplFirst, ({one}) => ({
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [tenantcontactInPplFirst.tenant],
		references: [masterdataInPplFirst.code]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [tenantcontactInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantcontactInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [tenantcontactInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantcontactInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [tenantcontactInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantcontactInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [tenantcontactInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantcontactInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [tenantcontactInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantcontactInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const tenantsubscriptionpricingInPplFirstRelations = relations(tenantsubscriptionpricingInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [tenantsubscriptionpricingInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantsubscriptionpricingInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [tenantsubscriptionpricingInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantsubscriptionpricingInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	submodulemasterInPplFirst: one(submodulemasterInPplFirst, {
		fields: [tenantsubscriptionpricingInPplFirst.submoduleid],
		references: [submodulemasterInPplFirst.id]
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [tenantsubscriptionpricingInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantsubscriptionpricingInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantsubscriptionInPplFirst: one(tenantsubscriptionInPplFirst, {
		fields: [tenantsubscriptionpricingInPplFirst.tenantsubid],
		references: [tenantsubscriptionInPplFirst.id]
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [tenantsubscriptionpricingInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "tenantsubscriptionpricingInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [tenantsubscriptionpricingInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "tenantsubscriptionpricingInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const userInPplFirstRelations = relations(userInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const userLanguageInPplFirstRelations = relations(userLanguageInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userLanguageInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userLanguageInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userLanguageInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userLanguageInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [userLanguageInPplFirst.languageCode],
		references: [masterdataInPplFirst.code]
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userLanguageInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userLanguageInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userLanguageInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userLanguageInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermasterId: one(usermasterInPplFirst, {
		fields: [userLanguageInPplFirst.usermasterId],
		references: [usermasterInPplFirst.id],
		relationName: "userLanguageInPplFirst_usermasterId_usermasterInPplFirst_id"
	}),
}));

export const userbankingInPplFirstRelations = relations(userbankingInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userbankingInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userbankingInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userbankingInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userbankingInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userbankingInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userbankingInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userbankingInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userbankingInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userbankingInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userbankingInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userbankingInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userbankingInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const userOnboardingAssignmentInPplFirstRelations = relations(userOnboardingAssignmentInPplFirst, ({one}) => ({
	usermasterInPplFirst_assignedUserId: one(usermasterInPplFirst, {
		fields: [userOnboardingAssignmentInPplFirst.assignedUserId],
		references: [usermasterInPplFirst.id],
		relationName: "userOnboardingAssignmentInPplFirst_assignedUserId_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userOnboardingAssignmentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingAssignmentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userOnboardingAssignmentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userOnboardingAssignmentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	userOnboardingInPplFirst: one(userOnboardingInPplFirst, {
		fields: [userOnboardingAssignmentInPplFirst.onboardingId],
		references: [userOnboardingInPplFirst.id]
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userOnboardingAssignmentInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingAssignmentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userOnboardingAssignmentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingAssignmentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userOnboardingAssignmentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userOnboardingAssignmentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const userOnboardingDocumentInPplFirstRelations = relations(userOnboardingDocumentInPplFirst, ({one}) => ({
	userOnboardingInPplFirst: one(userOnboardingInPplFirst, {
		fields: [userOnboardingDocumentInPplFirst.onboardingId],
		references: [userOnboardingInPplFirst.id]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userOnboardingDocumentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingDocumentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userOnboardingDocumentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userOnboardingDocumentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userOnboardingDocumentInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingDocumentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userOnboardingDocumentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userOnboardingDocumentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userOnboardingDocumentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userOnboardingDocumentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
}));

export const userBgvAssignmentInPplFirstRelations = relations(userBgvAssignmentInPplFirst, ({one}) => ({
	agencyMasterInPplFirst: one(agencyMasterInPplFirst, {
		fields: [userBgvAssignmentInPplFirst.agencyId],
		references: [agencyMasterInPplFirst.id]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userBgvAssignmentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userBgvAssignmentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userBgvAssignmentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userBgvAssignmentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userBgvAssignmentInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userBgvAssignmentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userBgvAssignmentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userBgvAssignmentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userBgvAssignmentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userBgvAssignmentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_userId: one(usermasterInPplFirst, {
		fields: [userBgvAssignmentInPplFirst.userId],
		references: [usermasterInPplFirst.id],
		relationName: "userBgvAssignmentInPplFirst_userId_usermasterInPplFirst_id"
	}),
}));

export const usercontactInPplFirstRelations = relations(usercontactInPplFirst, ({one}) => ({
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [usercontactInPplFirst.tenant],
		references: [masterdataInPplFirst.code]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [usercontactInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "usercontactInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [usercontactInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "usercontactInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [usercontactInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "usercontactInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [usercontactInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "usercontactInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [usercontactInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "usercontactInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [usercontactInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "usercontactInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const usercontentInPplFirstRelations = relations(usercontentInPplFirst, ({one}) => ({
	contentInPplFirst: one(contentInPplFirst, {
		fields: [usercontentInPplFirst.content],
		references: [contentInPplFirst.id]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [usercontentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "usercontentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [usercontentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "usercontentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [usercontentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "usercontentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [usercontentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "usercontentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [usercontentInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "usercontentInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const userCertificationsInPplFirstRelations = relations(userCertificationsInPplFirst, ({one}) => ({
	certificationsInPplFirst: one(certificationsInPplFirst, {
		fields: [userCertificationsInPplFirst.certificationId],
		references: [certificationsInPplFirst.certificationId]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userCertificationsInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userCertificationsInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userCertificationsInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userCertificationsInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenantId: one(tenantInPplFirst, {
		fields: [userCertificationsInPplFirst.tenantId],
		references: [tenantInPplFirst.id],
		relationName: "userCertificationsInPplFirst_tenantId_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userCertificationsInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userCertificationsInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userCertificationsInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userCertificationsInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_userId: one(usermasterInPplFirst, {
		fields: [userCertificationsInPplFirst.userId],
		references: [usermasterInPplFirst.id],
		relationName: "userCertificationsInPplFirst_userId_usermasterInPplFirst_id"
	}),
}));

export const userdocumentInPplFirstRelations = relations(userdocumentInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userdocumentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userdocumentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userdocumentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userdocumentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userdocumentInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userdocumentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userdocumentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userdocumentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userdocumentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userdocumentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userdocumentInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userdocumentInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const usereducationInPplFirstRelations = relations(usereducationInPplFirst, ({one, many}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [usereducationInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "usereducationInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [usereducationInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "usereducationInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [usereducationInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "usereducationInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [usereducationInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "usereducationInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [usereducationInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "usereducationInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	usereducationDocumentInPplFirsts: many(usereducationDocumentInPplFirst),
}));

export const usereducationDocumentInPplFirstRelations = relations(usereducationDocumentInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [usereducationDocumentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "usereducationDocumentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [usereducationDocumentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "usereducationDocumentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [usereducationDocumentInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "usereducationDocumentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [usereducationDocumentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "usereducationDocumentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [usereducationDocumentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "usereducationDocumentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usereducationInPplFirst: one(usereducationInPplFirst, {
		fields: [usereducationDocumentInPplFirst.usereducationId],
		references: [usereducationInPplFirst.id]
	}),
}));

export const userexperienceInPplFirstRelations = relations(userexperienceInPplFirst, ({one, many}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userexperienceInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userexperienceInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userexperienceInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userexperienceInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userexperienceInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userexperienceInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userexperienceInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userexperienceInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userexperienceInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userexperienceInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userexperienceInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userexperienceInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userexperienceDocumentInPplFirsts: many(userexperienceDocumentInPplFirst),
}));

export const useraddressInPplFirstRelations = relations(useraddressInPplFirst, ({one}) => ({
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [useraddressInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [useraddressInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [useraddressInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [useraddressInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [useraddressInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [useraddressInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "useraddressInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [useraddressInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "useraddressInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [useraddressInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "useraddressInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [useraddressInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "useraddressInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [useraddressInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "useraddressInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [useraddressInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "useraddressInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [useraddressInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "useraddressInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_verifiedby: one(usermasterInPplFirst, {
		fields: [useraddressInPplFirst.verifiedby],
		references: [usermasterInPplFirst.id],
		relationName: "useraddressInPplFirst_verifiedby_usermasterInPplFirst_id"
	}),
}));

export const userDirectorshipInPplFirstRelations = relations(userDirectorshipInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userDirectorshipInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userDirectorshipInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userDirectorshipInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userDirectorshipInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userDirectorshipInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userDirectorshipInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userDirectorshipInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userDirectorshipInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userDirectorshipInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userDirectorshipInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_userId: one(usermasterInPplFirst, {
		fields: [userDirectorshipInPplFirst.userId],
		references: [usermasterInPplFirst.id],
		relationName: "userDirectorshipInPplFirst_userId_usermasterInPplFirst_id"
	}),
}));

export const userimmigrationInPplFirstRelations = relations(userimmigrationInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userimmigrationInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userimmigrationInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userimmigrationInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userimmigrationInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userimmigrationInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userimmigrationInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userimmigrationInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userimmigrationInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userimmigrationInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userimmigrationInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userimmigrationInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userimmigrationInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const userlogInPplFirstRelations = relations(userlogInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userlogInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userlogInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userlogInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userlogInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userlogInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userlogInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userlogInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userlogInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userlogInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userlogInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userlogInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userlogInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const userskillInPplFirstRelations = relations(userskillInPplFirst, ({one, many}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userskillInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userskillInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userskillInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userskillInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userskillInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userskillInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userskillInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userskillInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userskillInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userskillInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userskillInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userskillInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userskilltoolInPplFirsts: many(userskilltoolInPplFirst),
}));

export const userprofileDojHistoryInPplFirstRelations = relations(userprofileDojHistoryInPplFirst, ({one}) => ({
	usermasterInPplFirst_changedBy: one(usermasterInPplFirst, {
		fields: [userprofileDojHistoryInPplFirst.changedBy],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileDojHistoryInPplFirst_changedBy_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userprofileDojHistoryInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userprofileDojHistoryInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userprofileDojHistoryInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileDojHistoryInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userprofileDojHistoryInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userprofileDojHistoryInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userprofileDojHistoryInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userprofileDojHistoryInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userprofileDojHistoryInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileDojHistoryInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userprofileInPplFirst: one(userprofileInPplFirst, {
		fields: [userprofileDojHistoryInPplFirst.userId],
		references: [userprofileInPplFirst.id]
	}),
}));

export const userprofileInPplFirstRelations = relations(userprofileInPplFirst, ({one, many}) => ({
	userprofileDojHistoryInPplFirsts: many(userprofileDojHistoryInPplFirst),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	datagroupInPplFirst: one(datagroupInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [datagroupInPplFirst.code]
	}),
	masterdataInPplFirst_tenant: one(masterdataInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [masterdataInPplFirst.code],
		relationName: "userprofileInPplFirst_tenant_masterdataInPplFirst_code"
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userprofileInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userprofileInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userprofileInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_hrbp: one(usermasterInPplFirst, {
		fields: [userprofileInPplFirst.hrbp],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileInPplFirst_hrbp_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_l1Manager: one(usermasterInPplFirst, {
		fields: [userprofileInPplFirst.l1Manager],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileInPplFirst_l1Manager_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_l2Manager: one(usermasterInPplFirst, {
		fields: [userprofileInPplFirst.l2Manager],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileInPplFirst_l2Manager_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userprofileInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userprofileInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userprofileInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userprofileInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userprofileInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userprofileInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userprofileInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const userrolemapInPplFirstRelations = relations(userrolemapInPplFirst, ({one}) => ({
	roleInPplFirst: one(roleInPplFirst, {
		fields: [userrolemapInPplFirst.role],
		references: [roleInPplFirst.code]
	}),
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userrolemapInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userrolemapInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userrolemapInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userrolemapInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userrolemapInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userrolemapInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userrolemapInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userrolemapInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userrolemapInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userrolemapInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userrolemapInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userrolemapInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const userexperienceDocumentInPplFirstRelations = relations(userexperienceDocumentInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userexperienceDocumentInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userexperienceDocumentInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userexperienceDocumentInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userexperienceDocumentInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userexperienceDocumentInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userexperienceDocumentInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userexperienceDocumentInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userexperienceDocumentInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userexperienceDocumentInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userexperienceDocumentInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	userexperienceInPplFirst: one(userexperienceInPplFirst, {
		fields: [userexperienceDocumentInPplFirst.userexperienceId],
		references: [userexperienceInPplFirst.id]
	}),
}));

export const userskilltoolInPplFirstRelations = relations(userskilltoolInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userskilltoolInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userskilltoolInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userskilltoolInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userskilltoolInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userskilltoolInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userskilltoolInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userskilltoolInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userskilltoolInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userskilltoolInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userskilltoolInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userskilltoolInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userskilltoolInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
	userskillInPplFirst: one(userskillInPplFirst, {
		fields: [userskilltoolInPplFirst.userskill],
		references: [userskillInPplFirst.id]
	}),
}));

export const userworkpreferenceInPplFirstRelations = relations(userworkpreferenceInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userworkpreferenceInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userworkpreferenceInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userworkpreferenceInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userworkpreferenceInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userworkpreferenceInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userworkpreferenceInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userworkpreferenceInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userworkpreferenceInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userworkpreferenceInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userworkpreferenceInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const userfeedbackInPplFirstRelations = relations(userfeedbackInPplFirst, ({one}) => ({
	tenantInPplFirst_createdtenant: one(tenantInPplFirst, {
		fields: [userfeedbackInPplFirst.createdtenant],
		references: [tenantInPplFirst.id],
		relationName: "userfeedbackInPplFirst_createdtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_createduser: one(usermasterInPplFirst, {
		fields: [userfeedbackInPplFirst.createduser],
		references: [usermasterInPplFirst.id],
		relationName: "userfeedbackInPplFirst_createduser_usermasterInPplFirst_id"
	}),
	tenantInPplFirst_tenant: one(tenantInPplFirst, {
		fields: [userfeedbackInPplFirst.tenant],
		references: [tenantInPplFirst.id],
		relationName: "userfeedbackInPplFirst_tenant_tenantInPplFirst_id"
	}),
	tenantInPplFirst_updatedtenant: one(tenantInPplFirst, {
		fields: [userfeedbackInPplFirst.updatedtenant],
		references: [tenantInPplFirst.id],
		relationName: "userfeedbackInPplFirst_updatedtenant_tenantInPplFirst_id"
	}),
	usermasterInPplFirst_updateduser: one(usermasterInPplFirst, {
		fields: [userfeedbackInPplFirst.updateduser],
		references: [usermasterInPplFirst.id],
		relationName: "userfeedbackInPplFirst_updateduser_usermasterInPplFirst_id"
	}),
	usermasterInPplFirst_usermaster: one(usermasterInPplFirst, {
		fields: [userfeedbackInPplFirst.usermaster],
		references: [usermasterInPplFirst.id],
		relationName: "userfeedbackInPplFirst_usermaster_usermasterInPplFirst_id"
	}),
}));

export const agencyServiceMapInPplFirstRelations = relations(agencyServiceMapInPplFirst, ({one}) => ({
	agencyMasterInPplFirst: one(agencyMasterInPplFirst, {
		fields: [agencyServiceMapInPplFirst.agencyMasterId],
		references: [agencyMasterInPplFirst.id]
	}),
	masterdataInPplFirst: one(masterdataInPplFirst, {
		fields: [agencyServiceMapInPplFirst.serviceMasterdataId],
		references: [masterdataInPplFirst.id]
	}),
}));

export const userAgencyMapInPplFirstRelations = relations(userAgencyMapInPplFirst, ({one}) => ({
	agencyMasterInPplFirst: one(agencyMasterInPplFirst, {
		fields: [userAgencyMapInPplFirst.agencyMasterId],
		references: [agencyMasterInPplFirst.id]
	}),
	usermasterInPplFirst: one(usermasterInPplFirst, {
		fields: [userAgencyMapInPplFirst.userId],
		references: [usermasterInPplFirst.id]
	}),
}));