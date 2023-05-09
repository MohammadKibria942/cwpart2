--
-- File generated with SQLiteStudio v3.4.4 on Mon May 8 22:42:35 2023
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: patients
CREATE TABLE IF NOT EXISTS patients (
	NHSNumber INTEGER PRIMARY KEY,
	Forename TEXT NOT NULL,
	Surname	TEXT NOT NULL,
	PersonDOB	DATE  NOT NULL, 
	GenderCode	TEXT NOT NULL,
	Postcode TEXT NOT NULL
);
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (92233359811, 'MUHAMMAD', 'JENNINGS', 19950903, '1', 'NP225AW');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (92233668361, 'JOHN', 'COUNSELL', 19910912, '1', 'LL303HE');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94300409281, 'NAMROOP', 'NAIK', 19910204, '2', 'CF314BH');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94627888551, 'HAFREN', 'LOSCE', 19940224, '2', 'CF356RL');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94627899401, 'EIGR', 'JONES', 19930315, '2', 'CF141DD');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94627903611, 'MARED', 'BEDORTHA', 19911103, '2', 'CF235EL');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94627928871, 'ARANRHOD', 'RINGGOLD', 19901107, '2', 'CF356DB');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94648146751, 'BRAITH', 'DIBDIN', 19960720, '2', 'CF235RH');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94648186381, 'NIMUE', 'MOUSLEY', 19900508, '2', 'NP70ES');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94648194561, 'RHIANU', 'BREESE', 19921022, '2', 'CF119QA');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94648201441, 'BRONWEN', 'WARING-JONES', 19940528, '2', 'CF334PN');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (94648205861, 'GWENER', 'CADWALLADER', 19940315, '2', 'CF372SA');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (96937584471, 'SIAN', 'WINROW', 19890104, '2', 'IM15TY');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (96937978171, 'BLANCH', 'RONNAN', 19900808, '2', 'IM13LX');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (96937978331, 'JAMES', 'LISTON', 19931205, '1', 'IM81AJ');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (96938548531, 'DOUG', 'HOWITT', 19880329, '1', 'DN357RG');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (96938554691, 'STEVEN', 'SYBIL', 19830828, '1', 'DN364QY');
INSERT INTO patients (NHSNumber, Forename, Surname, PersonDOB, GenderCode, Postcode) VALUES (96938560901, 'ARNOLD', 'THRUSH', 19821002, '1', 'DN401DL');

-- Table: vaccines
CREATE TABLE IF NOT EXISTS vaccines (
	NHSNumber INTEGER NOT NULL,	
	DoseNo	INTEGER NOT NULL,
	VaccinationDate DATE NOT NULL,
	VaccineManufacturer TEXT NOT NULL,	
	DiseaseTargeted TEXT NOT NULL,	
	VaccineType TEXT NOT NULL,	
	Product TEXT NOT NULL,	
	VaccineBatchNumber TEXT NOT NULL,	
	CountryOfVaccination TEXT NOT NULL,	
	Authority TEXT NOT NULL,	
	Site TEXT NOT NULL,	
	TotalSeriesOfDoses INTEGER NOT NULL,
	DisplayName	TEXT NOT NULL,
	SnomedCode INTEGER NOT NULL,
	DateEntered	DATE NOT NULL,
	ProcedureCode INTEGER NOT NULL,
	Booster BOOLEAN NOT NULL,
	PRIMARY KEY(NHSNumber, DoseNo),
	FOREIGN KEY(NHSNumber) REFERENCES patients(NHSNumber)
);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94627888551, 1, '2000-02-06', '(AstraZeneca AB, ORG-100001699)', '(COVID-19, 840539006)', '(AstraZeneca, 39115011000001105)', '(Vaxzevria, EU/1/21/1529)', '346753P1', 'UK', 'Hospital', 'Left Arm', 2, 'COVID-19 Vaccine AstraZeneca', 39114900000000000, '1999-02-07', 1324680000000000, 0);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94627888551, 2, '2001-02-06', '(AstraZeneca AB, ORG-100001699)', '(COVID-19, 840539006)', '(AstraZeneca, 39115011000001105)', '(Vaxzevria, EU/1/21/1529)', '347442P', 'UK', 'Hospital', 'Left Arm', 2, 'COVID-19 Vaccine AstraZeneca', 39114900000000000, '2001-02-10', 1324690000000000, 0);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94627899401, 1, '2000-01-06', '(Janssen-Cilag International, ORG-100001417)', '(COVID-19, 840539006)', '(Janssen, 39230211000001104)', '(Jcovden, EU/1/20/1525)', 'XE393', 'UK', 'Hospital', 'Left Arm', 1, 'COVID-19 Vaccine Janssen', 39233900000000000, '2000-01-11', 1324680000000000, 0);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94627899401, 2, '2001-03-06', '(Janssen-Cilag International, ORG-100001417)', '(COVID-19, 840539006)', '(Janssen, 39230211000001104)', '(Jcovden, EU/1/20/1525)', '202A21A', 'UK', 'Pharmacy', 'Left Arm', 1, 'COVID-19 Vaccine Janssen', 39233900000000000, '2001-03-09', 1324680000000000, 1);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94627903611, 1, '2001-03-06', '(Moderna Biotech Spain S.L., ORG-100031184)', '(COVID-19, 840539006)', '(SpikevaxBivalent, 40801911000001102)', '(Spikevax, EU/1/20/1507)', '039K20A', 'UK', 'Hospital', 'Left Arm', 2, 'COVID-19 Vaccine Moderna', 39326800000000000, '2001-03-10', 1324680000000000, 0);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94627903611, 2, '2002-04-06', '(Moderna Biotech Spain S.L., ORG-100031184)', '(COVID-19, 840539006)', '(SpikevaxBivalent, 40801911000001102)', '(Spikevax, EU/1/20/1507)', '039K20A', 'UK', 'Hospital', 'Left Arm', 2, 'COVID-19 Vaccine Moderna', 39326800000000000, '2002-04-06', 1324690000000000, 0);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94627928871, 1, '2001-05-06', '(Biontech Manufacturing GmbH, ORG-100030215)', '(COVID-19, 840539006)', '(Pfizer, 39115711000001107)', '(Comirnaty, EU/1/20/1528)', 'EM0477', 'UK', 'Pharmacy', 'Left Arm', 2, 'Pfizer/BioNTech COVID-19 vaccine', 39116100000000000, '2001-05-12', 1324680000000000, 0);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94627928871, 2, '2002-02-10', '(Biontech Manufacturing GmbH, ORG-100030215)', '(COVID-19, 840539006)', '(Pfizer, 39115711000001107)', '(Comirnaty, EU/1/20/1528)', 'ER8731', 'UK', 'Hospital', 'Left Arm', 2, 'Pfizer/BioNTech COVID-19 vaccine', 39116100000000000, '2002-02-28', 1324690000000000, 0);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94648146751, 1, '2001-02-20', '(Novavax CZ a.s., ORG-100032020)', '(COVID-19, 840539006)', '(Novavax, 39473011000001103)', '(Nuvaxovid, EU/1/21/1618)', '4302MF031', 'UK', 'Hospital', 'Left Arm', 2, 'COVID-19 Vaccine Novavax', 999001000000000000, '2001-08-20', 1324680000000000, 0);
INSERT INTO vaccines (NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName, SnomedCode, DateEntered, ProcedureCode, Booster) VALUES (94648146751, 2, '2000-02-25', '(Novavax CZ a.s., ORG-100032020)', '(COVID-19, 840539006)', '(Novavax, 39473011000001103)', '(Nuvaxovid, EU/1/21/1618)', '4302MF032', 'UK', 'Hospital', 'Left Arm', 2, 'COVID-19 Vaccine Novavax', 999001000000000000, '2000-04-30', 1324690000000000, 0);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
