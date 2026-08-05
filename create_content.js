const fs = require('fs');
const path = require('path');

const data = [
  {
    slug: 'mayors-office',
    name: 'Office of the Municipal Mayor',
    pages: [
      { name: "Request For Mayor's Clearance", slug: "request-for-mayors-clearance", description: "The Mayor's Clearance is issued to individuals needing a document stating that he/she has no pending case filed with the Office of the Mayor." },
      { name: "Request For Transfer Of Cadaver", slug: "request-for-transfer-of-cadaver", description: "Transfer of Cadaver is issued if the remains will be transferred to other place for burial." },
      { name: "Request Endorsement / Recommendation Letter", slug: "request-endorsement-recommendation-letter", description: "For individuals needing a recommendation or endorsement from the Mayor." },
      { name: "Request For Service Vehicle", slug: "request-for-service-vehicle", description: "Request for a service vehicle for transferring patients to other hospitals." },
      { name: "Request For Financial Assistance", slug: "request-for-financial-assistance", description: "Financial assistance to indigent individuals or families with disease and/or illness health problems, or to defray funeral expenses." }
    ]
  },
  {
    slug: 'business-permit-and-licensing-office',
    name: 'Business Permit and Licensing Office',
    pages: [
      { name: "Application For Business Permit (New Application)", slug: "application-for-business-permit-new", description: "Before starting a business in the Municipality of Baler a business permit must be secured from the Business Permit and Licensing Office." },
      { name: "Application For Business Permit (Renewal Application)", slug: "application-for-business-permit-renewal", description: "The renewal of a business permit involves a series of steps and services designed to ensure compliance." },
      { name: "Application For Business Permit (Online Application)", slug: "application-for-business-permit-online", description: "Facilitated online through the eLGU Business Permit and Licensing System (eLGU BPLS)." },
      { name: "Application For Motorized Tricycle Operator's Permit (MTOP)", slug: "application-for-mtop", description: "Granting permit to operate a tricycle-for-hire within specified zones in the Municipality." },
      { name: "Application For Mayor's Permit Of Fishing Vessel, Gear And Fishing Activities", slug: "application-for-fishing-vessel-permit", description: "Annual registration fee from the owner of each fishing boat or motorboat operated within the municipal water." },
      { name: "Application For Occupational Permit", slug: "application-for-occupational-permit", description: "Annual occupation or calling fee on all individuals engaged in the exercise or practice of their occupation." },
      { name: "Application For Peddler's Permit", slug: "application-for-peddlers-permit", description: "Issued to any person who travels from place to place and sells his goods." },
      { name: "Application For Special Permit", slug: "application-for-special-permit", description: "Permit for conducting any program or activity involving the grouping of people for not more than 24 hours." },
      { name: "Request For The Certificate Of Business Retirement", slug: "request-for-certificate-of-business-retirement", description: "Upon termination of the business, submit a sworn statement of gross sales for the current year." },
      { name: "Request For The Certificate Of No Business", slug: "request-for-certificate-of-no-business", description: "Certification that residents are not operating any business in the municipality." },
      { name: "Request For Business Registration Masterlist", slug: "request-for-business-registration-masterlist", description: "Request for business registration master list." }
    ]
  },
  {
    slug: 'human-resource-and-management-office',
    name: 'Human Resource and Management Office',
    pages: [
      { name: "Application For Permanent Position", slug: "application-for-permanent-position", description: "Appointment in the Local Government Unit of Baler based on merit and fitness." },
      { name: "Request For Certificate Of Employment And Compensation, Service Record", slug: "request-for-coe-and-service-record", description: "Issuance of certificates needed by officials, employees and former employees relative to their services." },
      { name: "Application For Vacation/Sick/Maternity Leave", slug: "application-for-leave", description: "Administration of leave of municipal officials and employees." },
      { name: "Processing Of Terminal Leave (Retirement/Resignation/Death)", slug: "processing-of-terminal-leave", description: "Terminal leave refers to the cash value of an employee's total accumulated leave credits." },
      { name: "Application For Loans", slug: "application-for-loans", description: "LGU-Baler officials and employees may apply salary loans from different financial institutions." }
    ]
  },
  {
    slug: 'municipal-local-and-regional-development-office',
    name: 'Municipal Local and Regional Development Office',
    pages: [
      { name: "Application For Investment Incentive", slug: "application-for-investment-incentive", description: "Encouraging new investments or expansion/diversifications in services." }
    ]
  },
  {
    slug: 'mdrrmo',
    name: 'Municipal Disaster Risk Reduction and Management Office (MDRRMO)',
    pages: [
      { name: "Request For Information, Education And Communication (IEC) Materials", slug: "request-for-iec-materials", description: "Providing valuable information relevant to Disaster Risk Reduction Management." },
      { name: "Request For MDRRM Relevant Training, Seminars, Drills And Resource Speakers", slug: "request-for-mdrrm-training", description: "Equipping participants with appropriate knowledge and skills conforming to standards." },
      { name: "Request For Emergency Response", slug: "request-for-emergency-response", description: "Quick response to any emergency to preserve life and guarantee safety." },
      { name: "Request For Equipment Assistance", slug: "request-for-equipment-assistance", description: "Lending of equipment owned by the MDRRM Office." },
      { name: "Request For Standby Emergency Medical Services", slug: "request-for-standby-emergency-medical-services", description: "Ensuring Emergency response Team is readily available during events." }
    ]
  },
  {
    slug: 'municipal-treasurers-office',
    name: "Municipal Treasurer's Office",
    pages: [
      { name: "Payment Of Real Property Taxes", slug: "payment-of-real-property-taxes", description: "Real Property Taxes (RPT) or amelyar are taxes paid for all lands, buildings, and machineries annually." },
      { name: "Request For Tax Clearance (Real Property Tax)", slug: "request-for-tax-clearance", description: "Certificate of payments are requested by clients for documentary purposes." },
      { name: "Payment Of Business Tax", slug: "payment-of-business-tax", description: "Imposed on persons or entities regularly engaged on trade or commercial activity." },
      { name: "Payment Of Community Tax Certificate (Individual And Corporate)", slug: "payment-of-community-tax-certificate", description: "Community tax collected from individuals and corporations." },
      { name: "Payment Of Other Taxes, Permit, Fees, And Service Charges", slug: "payment-of-other-taxes-and-fees", description: "Payments made to the municipal collectors." },
      { name: "Disbursement Through Checks", slug: "disbursement-through-checks", description: "Drawing checks in payment after verification of Disbursement Voucher." }
    ]
  },
  {
    slug: 'municipal-assessors-office',
    name: "Municipal Assessor's Office",
    pages: [
      { name: "Issuance Of Tax Declaration", slug: "issuance-of-tax-declaration", description: "Owner's copy of tax declaration issued upon transfer of ownership of real property." },
      { name: "Issuance Of Certifications On Tax Declaration, Property Holdings Or Non-Improvement, Certified True Copy", slug: "issuance-of-certifications-on-tax-declaration", description: "Certified true copies or certifications of property holdings." }
    ]
  },
  {
    slug: 'municipal-civil-registrars-office',
    name: "Municipal Civil Registrar's Office",
    pages: [
      { name: "Registration Of Birth, Marriage And Death Certificate (From Institutions)", slug: "registration-of-vital-certificates-from-institutions", description: "Registration of vital events." },
      { name: "Registration Of Certificate Of Live Birth: Current/Outright", slug: "registration-of-live-birth-current", description: "Registered within thirty (30) days from the time of birth." },
      { name: "Registration Of Certificate Of Live Birth: Delayed", slug: "registration-of-live-birth-delayed", description: "Delayed registration of birth." },
      { name: "Registration Of Certificate Of Marriage: Delayed/ Reconstruction", slug: "registration-of-marriage-delayed", description: "Delayed registration of marriage." },
      { name: "Registration Of Certificate Of Death: Current/Outright", slug: "registration-of-death-current", description: "Reporting death within 48 hours or thirty days." },
      { name: "Registration Of Certificate Of Death: Delayed", slug: "registration-of-death-delayed", description: "Delayed registration of death." },
      { name: "Registration Of R.A 9255: Affidavit To Use The Surname Of The Father (AUSF)", slug: "registration-of-ra-9255-ausf", description: "Allowing an illegitimate child to use the surname of their father." },
      { name: "Application For RA 9048: Change Of First Name & RA 10172 (Gender/Month/Date)", slug: "application-for-ra-9048-and-10172", description: "Correcting clerical or typographical errors." },
      { name: "Application For R.A 9048: Correction Of Clerical Error", slug: "application-for-ra-9048-clerical-error", description: "Authorizing the municipal civil registrar to correct clerical errors." },
      { name: "Registration Of Court Order/Decree/Legal Instruments", slug: "registration-of-court-orders", description: "Registering court orders/decrees concerning the status of a person." },
      { name: "Application For Marriage License (AFML)", slug: "application-for-marriage-license", description: "Issuing marriage license where either contracting party habitually resides." },
      { name: "Request For Certification/Transcription From The Registry Book (Form 1A)", slug: "request-for-certification-from-registry-book", description: "Transcription from the registry book." },
      { name: "Request For Advance Submission Of Documents And Negative Certification To PSA-APO", slug: "request-for-advance-submission-to-psa-apo", description: "Submission of civil registry documents to OCRG." },
      { name: "Request For Security Paper (SECPA) From PSA Thru BREQS", slug: "request-for-secpa-from-psa-thru-breqs", description: "Receive requests for PSA-issued copies and certifications." },
      { name: "Endorsement Of Parents' Advice Or Consent", slug: "endorsement-of-parents-advice-or-consent", description: "Endorsement of parent's advice or consent." }
    ]
  },
  {
    slug: 'municipal-health-office',
    name: "Municipal Health Office",
    pages: [
      { name: "Outpatient Consultation", slug: "outpatient-consultation", description: "Service catering to patients with non-emergency cases." },
      { name: "Issuance Of Medical Certificate", slug: "issuance-of-medical-certificate", description: "Document stating the current medical status of a patient." },
      { name: "Availment Of Free Medicine", slug: "availment-of-free-medicine", description: "Walk-in clients may avail free medicine upon presenting a prescription." },
      { name: "Preparation Of Death Certificate", slug: "preparation-of-death-certificate", description: "Legal document containing the identity and mortality cause of a person." },
      { name: "Issuance Of Medico Legal Certificate", slug: "issuance-of-medico-legal-certificate", description: "Document stating the result of a medical examination attest by the physician." },
      { name: "Issuance Of Sanitary Permit", slug: "issuance-of-sanitary-permit", description: "Required for engaging in Food and Non-Food business." },
      { name: "Issuance Of Health Card And Certificate", slug: "issuance-of-health-card-and-certificate", description: "Required for food handlers of Food Establishments." },
      { name: "Issuance Of Exhumation And Transfer Of Remains", slug: "issuance-of-exhumation-and-transfer-of-remains", description: "For individuals wishing to exhume or transfer the remains of their dead relatives." },
      { name: "Issuance Of Certificate Of Potability Of Water", slug: "issuance-of-certificate-of-potability-of-water", description: "Issued by the Municipal Health Office." },
      { name: "Dental Services", slug: "dental-services", description: "Offered to residents to prevent and treat dental diseases." },
      { name: "Laboratory Services", slug: "laboratory-services", description: "Laboratory examination as an aid in diagnosis of diseases." },
      { name: "TB DOTS", slug: "tb-dots", description: "Tuberculosis treatment services." }
    ]
  },
  {
    slug: 'municipal-agriculture-office',
    name: "Municipal Agriculture Office",
    pages: [
      { name: "Provision Of Technical Assistance On Rice, Corn, High Value Crops, Livestock And Fishery Production", slug: "provision-of-technical-assistance", description: "Technical assistance for farmers and fisherfolks." },
      { name: "Enrolment In Registry System For Basic Sector In Agriculture (RSBSA)", slug: "enrollment-in-rsbsa", description: "Registration system for farmers and fisherfolks." },
      { name: "Issuance Of Farmers Certificate", slug: "issuance-of-farmers-certificate", description: "Verifying the name of farmers from the General Masterlist." },
      { name: "Online Fisherfolks Registration (FishR)", slug: "online-fisherfolks-registration", description: "Registration of fisherfolks online." },
      { name: "Online Boat Registration (BoatR)", slug: "online-boat-registration", description: "Registration of eligible boats with gross metric tonnage of 3 and below." },
      { name: "Issuance Of License For Fishing Boat And Gear And Permit For Fishing Activity", slug: "issuance-of-license-for-fishing-boat", description: "Permit for fishing vessels and fishing activities." },
      { name: "Availment Of Farm Machineries From DA RFO 3", slug: "availment-of-farm-machineries", description: "Providing farm machineries to farmers." },
      { name: "Availment Of Interventions (Fishing Paraphernalia) From BFAR 3 And PFARO", slug: "availment-of-fishing-paraphernalia", description: "Providing fishing paraphernalia to fisherfolks." },
      { name: "Availment Of Veterinary Health Services And Genetic Improvements", slug: "availment-of-veterinary-health-services", description: "Veterinary health services for livestock." },
      { name: "Availment Of Planting Materials", slug: "availment-of-planting-materials", description: "Requesting planting materials." },
      { name: "Issuance Of Certificate Of Land Suitability", slug: "issuance-of-certificate-of-land-suitability", description: "Conducting ocular inspection for land suitability." }
    ]
  },
  {
    slug: 'municipal-engineering-office',
    name: "Municipal Engineering Office",
    pages: [
      { name: "Application For Building Permit (New Application)", slug: "application-for-building-permit", description: "Required for constructing, altering, repairing, or moving any building/structure." },
      { name: "Issuance Of Certificate Of Occupancy Permit", slug: "issuance-of-certificate-of-occupancy", description: "Required before any building/structure is used or occupied." },
      { name: "Issuance Of Sign Permit", slug: "issuance-of-sign-permit", description: "Permit for signages." }
    ]
  },
  {
    slug: 'municipal-planning-and-development-office',
    name: "Municipal Planning and Development Office",
    pages: [
      { name: "Issuance Of Socio-Economic / Spatial Data / Thematic Maps", slug: "issuance-of-socio-economic-data", description: "Data and thematic maps for various agencies and individuals." },
      { name: "Issuance Of MPDO/ Zoning Certifications", slug: "issuance-of-mpdo-zoning-certifications", description: "Zoning certifications for land reclassification, ECC, etc." },
      { name: "Issuance Of Zoning Locational Clearance", slug: "issuance-of-zoning-locational-clearance", description: "Prerequisite for securing Building Permit / new Business Establishment." }
    ]
  },
  {
    slug: 'bac-secretariat',
    name: "Bids and Awards Committee/Secretariat",
    pages: [
      { name: "Procurement Of Goods, Civil Works And Consulting Services Through Public Bidding", slug: "procurement-through-public-bidding", description: "Procurement process through public bidding." },
      { name: "Procurement Of Goods, Civil Works And Consulting Services Through Alternative Method Of Procurement", slug: "procurement-through-alternative-method", description: "Procurement process through alternative methods." }
    ]
  },
  {
    slug: 'municipal-accounting-office',
    name: "Municipal Accounting Office",
    pages: [
      { name: "Issuance Of BIR Form 2307", slug: "issuance-of-bir-form-2307", description: "Issuing BIR Form 2307 to suppliers." },
      { name: "Processing Of Disbursement Vouchers/Claims", slug: "processing-of-disbursement-vouchers", description: "Processing disbursement vouchers for various claims." },
      { name: "Preparation Of Advice Of Checks Issued", slug: "preparation-of-advice-of-checks-issued", description: "Preparation of Accountant's Advice of Checks issued." }
    ]
  },
  {
    slug: 'municipal-budget-office',
    name: "Municipal Budget Office",
    pages: [
      { name: "Control Of Obligation Request (OBR)", slug: "control-of-obligation-request", description: "Accepting and reviewing OBR as to charging of account." },
      { name: "Review Of Barangay Annual And Supplemental Budget", slug: "review-of-barangay-budget", description: "Reviewing Barangay Annual and Supplemental Budgets." },
      { name: "Review Of SK Barangay Annual And Supplemental Budget", slug: "review-of-sk-barangay-budget", description: "Reviewing SK Barangay Annual and Supplemental Budgets." }
    ]
  },
  {
    slug: 'menro',
    name: "Municipal Environment and Natural Resources Office",
    pages: [
      { name: "Issuance Of ESWM Certificate", slug: "issuance-of-eswm-certificate", description: "Ecological Solid Waste Management (ESWM) clearance fee." },
      { name: "Issuance Of Certification To Couple Applying For Marriage License", slug: "issuance-of-certification-for-marriage-license", description: "Requirement for a couple applying for marriage license to sponsor seedlings." }
    ]
  },
  {
    slug: 'baler-public-market',
    name: "Baler Public Market",
    pages: [
      { name: "Payment Of Stall Rental", slug: "payment-of-stall-rental", description: "Stall Rental charged to lessees who occupy a space inside the Public Market." },
      { name: "Payment Of Fee For Sealing And Licensing Of Weights And Measure", slug: "payment-of-fee-for-sealing-weights", description: "Sealing of instruments for determining weights and measures." },
      { name: "Payment For The Use Of Baler Sports Complex", slug: "payment-for-use-of-sports-complex", description: "Rent for using the Baler Sports Complex." },
      { name: "Payment Of Market Entrance Fee", slug: "payment-of-market-entrance-fee", description: "Fee collected at the gate of the public market before transient vendors can sell." }
    ]
  },
  {
    slug: 'baler-slaughterhouse',
    name: "Baler Slaughterhouse",
    pages: [
      { name: "Registration And Transfer Of Large Cattle", slug: "registration-and-transfer-of-large-cattle", description: "Ownership and transfer registration for large cattle." },
      { name: "Payment Of Slaughter Fee And Corral Fee", slug: "payment-of-slaughter-fee", description: "Permit to slaughter animals for public consumption." }
    ]
  },
  {
    slug: 'municipal-fishport',
    name: "Municipal Fishport",
    pages: [
      { name: "Payment Of Berthing Fee", slug: "payment-of-berthing-fee", description: "Fee charged to vessels staying at the port." },
      { name: "Payment Of Stall Rental, Market Hall, Land And Spaces", slug: "payment-of-fishport-rentals", description: "Space, store, land, and market hall rentals at the fishport." },
      { name: "Payment Of Other Fees And Service Charges", slug: "payment-of-other-fishport-fees", description: "Transhipment fee and entrance fee at the Fish Port." }
    ]
  },
  {
    slug: 'baler-central-terminal',
    name: "Baler Central Terminal",
    pages: [
      { name: "Payment Of Berthing Fee", slug: "payment-of-terminal-berthing-fee", description: "Berthing fee charged to bus and van operators at the terminal." }
    ]
  }
];

const servicesDir = path.join(__dirname, 'content', 'services');

for (const cat of data) {
  const catDir = path.join(servicesDir, cat.slug);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  let yamlContent = `# ${cat.name} Category Pages\n\npages:\n`;
  for (const page of cat.pages) {
    yamlContent += `  - name: "${page.name}"\n`;
    yamlContent += `    slug: "${page.slug}"\n`;
    yamlContent += `    description: "${page.description}"\n\n`;

    const mdPath = path.join(catDir, `${page.slug}.md`);
    if (!fs.existsSync(mdPath)) {
      fs.writeFileSync(mdPath, `# ${page.name}\n\nContent coming soon...\n`);
    }
  }

  fs.writeFileSync(path.join(catDir, 'index.yaml'), yamlContent);
}

// Clean up old ones that are no longer used
const validSlugs = new Set(data.map(d => d.slug));
const allDirs = fs.readdirSync(servicesDir);
for (const dir of allDirs) {
  if (!validSlugs.has(dir)) {
    console.log(`Deleting old directory: ${dir}`);
    fs.rmSync(path.join(servicesDir, dir), { recursive: true, force: true });
  }
}

