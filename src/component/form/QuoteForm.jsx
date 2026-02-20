"use client";
import React, { useState, useEffect } from "react";

// Services Data
const PERSONAL_SERVICES = [
  {
    id: "homeowners",
    label: "Homeowners Insurance",
    icon: "🏠",
    desc: "Protect your home and everything in it with comprehensive coverage tailored to your lifestyle.",
  },
  {
    id: "condo",
    label: "Condos / Co-Ops",
    icon: "🏢",
    desc: "Specialized coverage for condo and co-op owners, low and high-rises.",
  },
  {
    id: "renters",
    label: "Renters Insurance",
    icon: "🔑",
    desc: "Affordable protection for your personal belongings, liability, and living expenses.",
  },
  {
    id: "auto",
    label: "Auto Insurance",
    icon: "🚗",
    desc: "Full coverage for your vehicles with competitive rates from top-rated carriers.",
  },
  {
    id: "boat",
    label: "Boat Insurance",
    icon: "⛵",
    desc: "Comprehensive marine coverage for watercraft on Biscayne Bay and beyond.",
  },
  {
    id: "life",
    label: "Life Insurance",
    icon: "❤️",
    desc: "Secure your family's financial future with term and permanent life insurance solutions.",
  },
  {
    id: "jewelry",
    label: "Jewelry & Collections",
    icon: "💎",
    desc: "Specialized coverage for fine jewelry, watches, art, wine, and valuable collections.",
  },
  {
    id: "umbrella",
    label: "Umbrella Insurance",
    icon: "☂️",
    desc: "Extra liability protection that goes beyond the limits of your standard policies.",
  },
];

const BUSINESS_SERVICES = [
  {
    id: "general-liability",
    label: "General Liability",
    icon: "🛡️",
    desc: "Protect your business from third-party claims of bodily injury and property damage.",
  },
  {
    id: "workers-comp",
    label: "Workers Compensation",
    icon: "👷",
    desc: "Coverage for employee injuries and illnesses that occur in the workplace.",
  },
  {
    id: "commercial-property",
    label: "Commercial Property",
    icon: "🏗️",
    desc: "Safeguard your business property, equipment, and inventory from loss.",
  },
  {
    id: "commercial-auto",
    label: "Commercial Auto",
    icon: "🚛",
    desc: "Fleet and commercial vehicle insurance for businesses of every size.",
  },
  {
    id: "professional-liability",
    label: "Professional Liability",
    icon: "⚖️",
    desc: "Errors & omissions coverage for professional service providers.",
  },
  {
    id: "cyber",
    label: "Cyber Insurance",
    icon: "🔒",
    desc: "Protection against data breaches, cyber attacks, and digital threats.",
  },
  {
    id: "directors-officers",
    label: "Directors & Officers",
    icon: "📋",
    desc: "D&O liability coverage protecting leadership from personal losses.",
  },
];

// Form Fields Data
const FORM_FIELDS = {
  homeowners: [
    {
      section: "Property Details",
      fields: [
        {
          n: "propertyAddress",
          l: "Property Address",
          t: "text",
          r: true,
          p: "123 Brickell Ave",
        },
        { n: "city", l: "City", t: "text", r: true, p: "Miami" },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true, p: "33131" },
        { n: "yearBuilt", l: "Year Built", t: "text", r: true, p: "2015" },
        { n: "sqft", l: "Square Footage", t: "text", r: true, p: "2,400" },
        {
          n: "stories",
          l: "Number of Stories",
          t: "select",
          o: ["1", "2", "3", "4+"],
          r: true,
        },
        {
          n: "constructionType",
          l: "Construction Type",
          t: "select",
          o: ["Frame", "Masonry", "Concrete Block", "Steel", "Other"],
          r: true,
        },
        {
          n: "roofType",
          l: "Roof Type",
          t: "select",
          o: ["Shingle", "Tile", "Metal", "Flat/Built-up", "Other"],
          r: true,
        },
        { n: "roofAge", l: "Roof Age (years)", t: "text", p: "5" },
        {
          n: "dwellingCoverage",
          l: "Estimated Dwelling Value ($)",
          t: "text",
          r: true,
          p: "650,000",
        },
        {
          n: "pool",
          l: "Pool on Property?",
          t: "select",
          o: ["No", "Yes - Screened", "Yes - Fenced"],
        },
      ],
    },
    {
      section: "Usage",
      fields: [
        {
          n: "propertyUsage",
          l: "Property Usage",
          t: "select",
          o: ["Primary", "Secondary", "Rental", "Vacation"],
          r: true,
        },
        {
          n: "rentalTerm",
          l: "Rental Term",
          t: "select",
          o: ["Nightly", "Weekly", "Monthly", "Annual"],
          r: true,
          cond: "propertyUsage=Rental",
        },
        {
          n: "usageMailAddress",
          l: "Mailing Address",
          t: "text",
          r: true,
          p: "123 Main St",
          cond: "propertyUsage=Rental|Vacation",
        },
        {
          n: "usageMailCity",
          l: "Mailing City",
          t: "text",
          r: true,
          p: "Miami",
          cond: "propertyUsage=Rental|Vacation",
        },
        {
          n: "usageMailState",
          l: "Mailing State",
          t: "text",
          r: true,
          p: "FL",
          cond: "propertyUsage=Rental|Vacation",
        },
        {
          n: "usageMailZip",
          l: "Mailing ZIP Code",
          t: "text",
          r: true,
          p: "33131",
          cond: "propertyUsage=Rental|Vacation",
        },
      ],
    },
    {
      section: "Current Insurance",
      fields: [
        {
          n: "currentlyInsured",
          l: "Currently Insured?",
          t: "select",
          o: ["Yes", "New Purchase", "No"],
          r: true,
        },
        {
          n: "mailingAddress",
          l: "Current Mailing Address",
          t: "text",
          p: "Required for new purchases",
          cond: "currentlyInsured=New Purchase",
        },
        {
          n: "mailingCity",
          l: "Mailing City",
          t: "text",
          p: "Miami",
          cond: "currentlyInsured=New Purchase",
        },
        {
          n: "mailingState",
          l: "Mailing State",
          t: "text",
          p: "FL",
          cond: "currentlyInsured=New Purchase",
        },
        {
          n: "mailingZip",
          l: "Mailing ZIP Code",
          t: "text",
          p: "33131",
          cond: "currentlyInsured=New Purchase",
        },
        {
          n: "currentCarrier",
          l: "Current Insurance Carrier",
          t: "text",
          p: "Citizens, Universal, etc.",
        },
        {
          n: "currentPremium",
          l: "Current Annual Premium ($)",
          t: "text",
          p: "3,200",
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "claims3yr",
          l: "Any Claims in Past 3 Years?",
          t: "select",
          o: ["No", "1 Claim", "2+ Claims"],
          r: true,
        },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  condo: [
    {
      section: "Unit Details",
      fields: [
        {
          n: "propertyAddress",
          l: "Unit Address",
          t: "text",
          r: true,
          p: "1000 Brickell Plaza, Unit 4501",
        },
        { n: "city", l: "City", t: "text", r: true, p: "Miami" },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true, p: "33131" },
        { n: "sqft", l: "Square Footage", t: "text", r: true, p: "1,800" },
        { n: "floor", l: "Floor Number", t: "text", p: "45" },
        {
          n: "buildingName",
          l: "Building Name",
          t: "text",
          p: "Brickell Flatiron",
        },
        { n: "yearBuilt", l: "Year Built", t: "text", r: true, p: "2019" },
        {
          n: "personalPropertyValue",
          l: "Personal Property Value ($)",
          t: "text",
          r: true,
          p: "150,000",
        },
        {
          n: "hoaHasMaster",
          l: "Does HOA Have Master Policy?",
          t: "select",
          o: ["Yes", "No", "Unsure"],
          r: true,
        },
      ],
    },
    {
      section: "Current Insurance",
      fields: [
        {
          n: "currentCarrier",
          l: "Current Carrier",
          t: "text",
          p: "Citizens, etc.",
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "claims3yr",
          l: "Claims in Past 3 Years?",
          t: "select",
          o: ["No", "1 Claim", "2+ Claims"],
          r: true,
        },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  renters: [
    {
      section: "Rental Details",
      fields: [
        { n: "propertyAddress", l: "Rental Address", t: "text", r: true },
        { n: "city", l: "City", t: "text", r: true, p: "Miami" },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true },
        {
          n: "unitType",
          l: "Unit Type",
          t: "select",
          o: ["Apartment", "Condo", "Townhouse", "House"],
          r: true,
        },
        {
          n: "personalPropertyValue",
          l: "Estimated Personal Property Value ($)",
          t: "text",
          r: true,
          p: "30,000",
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  auto: [
    {
      section: "Vehicle Information",
      fields: [
        { n: "vehicleYear", l: "Vehicle Year", t: "text", r: true, p: "2024" },
        { n: "vehicleMake", l: "Make", t: "text", r: true, p: "BMW" },
        { n: "vehicleModel", l: "Model", t: "text", r: true, p: "X5" },
        { n: "vin", l: "VIN (optional)", t: "text", p: "WBAPH5C55BA..." },
        {
          n: "annualMileage",
          l: "Annual Mileage",
          t: "text",
          r: true,
          p: "12,000",
        },
        {
          n: "primaryUse",
          l: "Primary Use",
          t: "select",
          o: ["Commute", "Pleasure", "Business"],
          r: true,
        },
        {
          n: "garageZip",
          l: "Garage ZIP Code",
          t: "text",
          r: true,
          p: "33131",
        },
        {
          n: "addVehicles",
          l: "Additional Vehicles",
          t: "addblock",
          blockType: "vehicle",
        },
      ],
    },
    {
      section: "Driver Information",
      fields: [
        { n: "driverDOB", l: "Date of Birth", t: "date", r: true },
        { n: "licenseState", l: "License State", t: "text", r: true, p: "FL" },
        {
          n: "driverLicense",
          l: "Driver License Number",
          t: "text",
          r: true,
          p: "V123-456-78-901-0",
        },
        { n: "yearsLicensed", l: "Years Licensed", t: "text", r: true },
        {
          n: "violations3yr",
          l: "Violations in Past 3 Years?",
          t: "select",
          o: ["None", "1", "2", "3+"],
          r: true,
        },
        {
          n: "accidents3yr",
          l: "Accidents in Past 3 Years?",
          t: "select",
          o: ["None", "1", "2", "3+"],
          r: true,
        },
        { n: "currentCarrier", l: "Current Auto Carrier", t: "text" },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "addDrivers",
          l: "Additional Drivers",
          t: "addblock",
          blockType: "driver",
        },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Drivers License",
          t: "file",
        },
      ],
    },
  ],
  boat: [
    {
      section: "Vessel Information",
      fields: [
        { n: "boatYear", l: "Year", t: "text", r: true },
        { n: "boatMake", l: "Make", t: "text", r: true, p: "Boston Whaler" },
        { n: "boatModel", l: "Model", t: "text", r: true },
        { n: "boatLength", l: "Length (ft)", t: "text", r: true },
        {
          n: "boatType",
          l: "Boat Type",
          t: "select",
          o: ["Powerboat", "Sailboat", "Yacht", "Jet Ski/PWC", "Pontoon"],
          r: true,
        },
        {
          n: "hullMaterial",
          l: "Hull Material",
          t: "select",
          o: ["Fiberglass", "Aluminum", "Wood", "Inflatable", "Other"],
          r: true,
        },
        { n: "estimatedValue", l: "Estimated Value ($)", t: "text", r: true },
        {
          n: "whereKept",
          l: "Where is Boat Kept?",
          t: "select",
          o: [
            "Marina - Wet Slip",
            "Marina - Dry Storage",
            "Trailer at Home",
            "Boat Lift",
          ],
          r: true,
        },
        {
          n: "navigationalArea",
          l: "Primary Navigational Area",
          t: "text",
          p: "Biscayne Bay, Keys, Bahamas",
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Drivers License",
          t: "file",
        },
      ],
    },
  ],
  life: [
    {
      section: "Applicant Details",
      fields: [
        { n: "dob", l: "Date of Birth", t: "date", r: true },
        {
          n: "gender",
          l: "Gender",
          t: "select",
          o: ["Male", "Female", "Non-binary"],
          r: true,
        },
        { n: "height", l: "Height", t: "text", p: "5'10\"" },
        { n: "weight", l: "Weight (lbs)", t: "text", p: "175" },
        {
          n: "tobacco",
          l: "Tobacco Use in Last 12 Months?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        {
          n: "healthConditions",
          l: "Any Major Health Conditions?",
          t: "select",
          o: ["No", "Yes - Please describe in notes"],
          r: true,
        },
      ],
    },
    {
      section: "Coverage Needs",
      fields: [
        {
          n: "coverageType",
          l: "Coverage Type",
          t: "select",
          o: [
            "Term - 10 Year",
            "Term - 20 Year",
            "Term - 30 Year",
            "Whole Life",
            "Universal Life",
          ],
          r: true,
        },
        {
          n: "coverageAmount",
          l: "Desired Coverage Amount ($)",
          t: "text",
          r: true,
          p: "500,000",
        },
        {
          n: "beneficiary",
          l: "Primary Beneficiary",
          t: "text",
          p: "Spouse / Trust / etc.",
        },
        { n: "occupation", l: "Occupation", t: "text", r: true },
        { n: "annualIncome", l: "Annual Income ($)", t: "text", p: "150,000" },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  jewelry: [
    {
      section: "Collection Details",
      fields: [
        {
          n: "itemType",
          l: "Type of Items",
          t: "select",
          o: [
            "Fine Jewelry",
            "Watches",
            "Fine Art",
            "Wine Collection",
            "Antiques",
            "Mixed Collection",
            "Other",
          ],
          r: true,
        },
        {
          n: "totalValue",
          l: "Estimated Total Value ($)",
          t: "text",
          r: true,
          p: "50,000",
        },
        { n: "numItems", l: "Number of Items / Pieces", t: "text", p: "5" },
        {
          n: "highValueItem",
          l: "Highest Single Item Value ($)",
          t: "text",
          p: "15,000",
        },
        {
          n: "hasAppraisal",
          l: "Professional Appraisal on File?",
          t: "select",
          o: ["Yes", "No", "Some Items"],
          r: true,
        },
        {
          n: "storageLocation",
          l: "Primary Storage Location",
          t: "select",
          o: [
            "Home Safe",
            "Bank Vault",
            "Display Case",
            "Worn Regularly",
            "Other",
          ],
          r: true,
        },
      ],
    },
    {
      section: "Current Coverage",
      fields: [
        {
          n: "currentCoverage",
          l: "Currently Covered Under Homeowners Policy?",
          t: "select",
          o: ["Yes", "No", "Unsure"],
          r: true,
        },
        {
          n: "scheduledItems",
          l: "Any Items Currently Scheduled?",
          t: "select",
          o: ["Yes", "No"],
          r: true,
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "notes",
          l: "Describe Your Collection",
          t: "text",
          p: "e.g., 3 Rolex watches, diamond engagement ring, art prints...",
        },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  umbrella: [
    {
      section: "Existing Policies",
      fields: [
        {
          n: "hasHomeowners",
          l: "Current Homeowners / Condo Policy?",
          t: "select",
          o: ["Yes", "No"],
          r: true,
        },
        {
          n: "homeCarrier",
          l: "Home Insurance Carrier",
          t: "text",
          p: "Citizens, Universal, etc.",
        },
        {
          n: "hasAuto",
          l: "Current Auto Policy?",
          t: "select",
          o: ["Yes", "No"],
          r: true,
        },
        {
          n: "autoCarrier",
          l: "Auto Insurance Carrier",
          t: "text",
          p: "State Farm, Progressive, etc.",
        },
        {
          n: "hasBoat",
          l: "Boat or Watercraft Policy?",
          t: "select",
          o: ["Yes", "No"],
        },
        {
          n: "numVehicles",
          l: "Number of Vehicles",
          t: "select",
          o: ["1", "2", "3", "4", "5+"],
          r: true,
        },
        {
          n: "numProperties",
          l: "Number of Properties",
          t: "select",
          o: ["1", "2", "3", "4+"],
          r: true,
        },
      ],
    },
    {
      section: "Coverage Needs",
      fields: [
        {
          n: "umbrellaAmount",
          l: "Desired Umbrella Limit",
          t: "select",
          o: [
            "$1,000,000",
            "$2,000,000",
            "$3,000,000",
            "$5,000,000",
            "$10,000,000+",
          ],
          r: true,
        },
        {
          n: "pool",
          l: "Pool on Any Property?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        {
          n: "rentalProperty",
          l: "Own Any Rental Properties?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        {
          n: "teenDrivers",
          l: "Teen Drivers in Household?",
          t: "select",
          o: ["No", "Yes"],
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "notes",
          l: "Any Additional Details",
          t: "text",
          p: "Anything else we should know...",
        },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  "general-liability": [
    {
      section: "Business Information",
      fields: [
        { n: "businessName", l: "Business Name", t: "text", r: true },
        { n: "dba", l: "DBA (if applicable)", t: "text" },
        { n: "businessAddress", l: "Business Address", t: "text", r: true },
        { n: "city", l: "City", t: "text", r: true },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true },
        {
          n: "entityType",
          l: "Entity Type",
          t: "select",
          o: [
            "Sole Proprietor",
            "LLC",
            "Corporation",
            "Partnership",
            "Non-Profit",
          ],
          r: true,
        },
        { n: "yearsInBusiness", l: "Years in Business", t: "text", r: true },
        {
          n: "industryType",
          l: "Industry / Business Type",
          t: "text",
          r: true,
          p: "Restaurant, Consulting, etc.",
        },
        { n: "annualRevenue", l: "Annual Revenue ($)", t: "text", r: true },
        { n: "numEmployees", l: "Number of Employees", t: "text", r: true },
        {
          n: "desiredLimit",
          l: "Desired Coverage Limit",
          t: "select",
          o: ["$1M / $2M", "$2M / $4M", "Other"],
          r: true,
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "priorClaims",
          l: "Any Prior Claims?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  "workers-comp": [
    {
      section: "Business Information",
      fields: [
        { n: "businessName", l: "Business Name", t: "text", r: true },
        { n: "fein", l: "FEIN / Tax ID", t: "text", r: true },
        { n: "businessAddress", l: "Business Address", t: "text", r: true },
        { n: "city", l: "City", t: "text", r: true },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true },
        {
          n: "entityType",
          l: "Entity Type",
          t: "select",
          o: ["Sole Proprietor", "LLC", "Corporation", "Partnership"],
          r: true,
        },
        { n: "industryType", l: "Industry / SIC Code", t: "text", r: true },
        { n: "numEmployees", l: "Total Employees", t: "text", r: true },
        { n: "annualPayroll", l: "Annual Payroll ($)", t: "text", r: true },
        {
          n: "jobDescriptions",
          l: "Employee Job Descriptions",
          t: "textarea",
          r: true,
          p: "List primary job roles and number of employees in each...",
        },
        {
          n: "expMod",
          l: "Experience Modifier (if known)",
          t: "text",
          p: "1.00",
        },
        {
          n: "priorClaims3yr",
          l: "WC Claims in Past 3 Years?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  "commercial-property": [
    {
      section: "Property Details",
      fields: [
        { n: "businessName", l: "Business Name", t: "text", r: true },
        { n: "propertyAddress", l: "Property Address", t: "text", r: true },
        { n: "city", l: "City", t: "text", r: true },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true },
        {
          n: "propertyType",
          l: "Property Type",
          t: "select",
          o: [
            "Office",
            "Retail",
            "Warehouse",
            "Restaurant",
            "Industrial",
            "Mixed Use",
            "Other",
          ],
          r: true,
        },
        {
          n: "ownOrLease",
          l: "Own or Lease?",
          t: "select",
          o: ["Own", "Lease"],
          r: true,
        },
        { n: "sqft", l: "Building Square Footage", t: "text", r: true },
        { n: "yearBuilt", l: "Year Built", t: "text", r: true },
        {
          n: "constructionType",
          l: "Construction Type",
          t: "select",
          o: ["Frame", "Masonry", "Fire Resistive", "Other"],
          r: true,
        },
        { n: "buildingValue", l: "Building Value ($)", t: "text", r: true },
        {
          n: "contentsValue",
          l: "Business Personal Property Value ($)",
          t: "text",
          r: true,
        },
        {
          n: "sprinklerSystem",
          l: "Sprinkler System?",
          t: "select",
          o: ["Yes", "No"],
          r: true,
        },
        {
          n: "alarmSystem",
          l: "Alarm System?",
          t: "select",
          o: ["Yes - Fire", "Yes - Burglar", "Both", "No"],
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  "commercial-auto": [
    {
      section: "Business & Vehicle Details",
      fields: [
        { n: "businessName", l: "Business Name", t: "text", r: true },
        { n: "businessAddress", l: "Business Address", t: "text", r: true },
        { n: "city", l: "City", t: "text", r: true },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true },
        { n: "numVehicles", l: "Number of Vehicles", t: "text", r: true },
        {
          n: "vehicleTypes",
          l: "Vehicle Types",
          t: "textarea",
          r: true,
          p: "List year, make, model, VIN for each vehicle...",
        },
        {
          n: "radiusOfOperation",
          l: "Radius of Operation (miles)",
          t: "select",
          o: ["Local (0-50)", "Intermediate (50-200)", "Long Distance (200+)"],
          r: true,
        },
        { n: "numDrivers", l: "Number of Drivers", t: "text", r: true },
        {
          n: "driverMVRs",
          l: "Any Drivers with Violations?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        { n: "cargoType", l: "Type of Cargo (if applicable)", t: "text" },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Drivers License",
          t: "file",
        },
      ],
    },
  ],
  "professional-liability": [
    {
      section: "Professional Details",
      fields: [
        {
          n: "businessName",
          l: "Business / Practice Name",
          t: "text",
          r: true,
        },
        { n: "businessAddress", l: "Address", t: "text", r: true },
        { n: "city", l: "City", t: "text", r: true },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true },
        {
          n: "professionType",
          l: "Profession / Industry",
          t: "text",
          r: true,
          p: "Attorney, CPA, Consultant, etc.",
        },
        { n: "yearsInBusiness", l: "Years in Business", t: "text", r: true },
        { n: "annualRevenue", l: "Annual Revenue ($)", t: "text", r: true },
        {
          n: "numProfessionals",
          l: "Number of Professionals",
          t: "text",
          r: true,
        },
        {
          n: "desiredLimit",
          l: "Desired Limit",
          t: "select",
          o: ["$250K/$500K", "$500K/$1M", "$1M/$2M", "$2M/$4M", "Other"],
          r: true,
        },
        {
          n: "priorCoverage",
          l: "Prior E&O Coverage?",
          t: "select",
          o: ["Yes", "No"],
          r: true,
        },
        {
          n: "priorClaims",
          l: "Any Prior Claims?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  cyber: [
    {
      section: "Business & Technology Profile",
      fields: [
        { n: "businessName", l: "Business Name", t: "text", r: true },
        { n: "businessAddress", l: "Address", t: "text", r: true },
        { n: "city", l: "City", t: "text", r: true },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true },
        { n: "industryType", l: "Industry Type", t: "text", r: true },
        { n: "annualRevenue", l: "Annual Revenue ($)", t: "text", r: true },
        { n: "numEmployees", l: "Number of Employees", t: "text", r: true },
        {
          n: "numRecords",
          l: "Number of Customer Records Stored",
          t: "select",
          o: ["< 1,000", "1,000 - 10,000", "10,000 - 100,000", "100,000+"],
          r: true,
        },
        {
          n: "piiStored",
          l: "Types of PII Stored",
          t: "select",
          o: [
            "None",
            "Names/Emails",
            "Financial/Credit Card",
            "Health Records",
            "SSN/Tax ID",
            "Multiple Types",
          ],
          r: true,
        },
        {
          n: "mfa",
          l: "Multi-Factor Authentication Enabled?",
          t: "select",
          o: ["Yes", "No", "Partial"],
          r: true,
        },
        {
          n: "backupFrequency",
          l: "Data Backup Frequency",
          t: "select",
          o: ["Daily", "Weekly", "Monthly", "No Regular Backups"],
          r: true,
        },
        {
          n: "priorBreach",
          l: "Any Prior Data Breaches?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        {
          n: "desiredLimit",
          l: "Desired Coverage Limit",
          t: "select",
          o: ["$250K", "$500K", "$1M", "$2M", "$5M+"],
          r: true,
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
  "directors-officers": [
    {
      section: "Organization Details",
      fields: [
        { n: "orgName", l: "Organization Name", t: "text", r: true },
        { n: "businessAddress", l: "Address", t: "text", r: true },
        { n: "city", l: "City", t: "text", r: true },
        { n: "state", l: "State", t: "text", r: true, p: "FL" },
        { n: "zip", l: "ZIP Code", t: "text", r: true },
        {
          n: "entityType",
          l: "Entity Type",
          t: "select",
          o: [
            "Public Company",
            "Private Company",
            "Non-Profit",
            "LLC",
            "Partnership",
          ],
          r: true,
        },
        { n: "industryType", l: "Industry", t: "text", r: true },
        { n: "annualRevenue", l: "Annual Revenue ($)", t: "text", r: true },
        { n: "totalAssets", l: "Total Assets ($)", t: "text", r: true },
        {
          n: "numDirectors",
          l: "Number of Directors/Officers",
          t: "text",
          r: true,
        },
        {
          n: "publiclyTraded",
          l: "Publicly Traded?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        {
          n: "subsidiaries",
          l: "Any Subsidiaries?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        {
          n: "priorDOCoverage",
          l: "Prior D&O Coverage?",
          t: "select",
          o: ["Yes", "No"],
          r: true,
        },
        {
          n: "priorClaims",
          l: "Any D&O Claims in Past 5 Years?",
          t: "select",
          o: ["No", "Yes"],
          r: true,
        },
        {
          n: "desiredLimit",
          l: "Desired Limit",
          t: "select",
          o: ["$1M", "$2M", "$5M", "$10M+"],
          r: true,
        },
        { n: "effectiveDate", l: "Desired Effective Date", t: "date", r: true },
        {
          n: "policyUpload",
          l: "Upload Current Policy or Inspections",
          t: "file",
        },
      ],
    },
  ],
};

const QuoteForm = ({ formType, onSubmit }) => {
  const [step, setStep] = useState(0); // 0: type selection, 1: form, 2: contact
  const [selectedType, setSelectedType] = useState(formType || "");
  const [formData, setFormData] = useState({});
  const [blockCounters, setBlockCounters] = useState({ driver: 0, vehicle: 0 });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (formType) {
      setSelectedType(formType);
      setStep(1);
    }
  }, [formType]);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileSelect = (name, files) => {
    const fileArray = Array.from(files).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
    }));
    setFormData((prev) => ({ ...prev, [name]: fileArray }));
  };

  const handleCondFields = (name, value) => {
    const groups = document.querySelectorAll("[data-cond]");
    groups.forEach((group) => {
      const cond = group.getAttribute("data-cond");
      const [condName, condValues] = cond.split("=");
      if (condName === name) {
        const values = condValues.split("|");
        const match = values.includes(value);
        group.style.display = match ? "block" : "none";
        if (!match) {
          const inputs = group.querySelectorAll("input, select, textarea");
          inputs.forEach((input) => {
            if (input.name) {
              handleInputChange(input.name, "");
            }
          });
        }
      }
    });
  };

  const addBlock = (type) => {
    setBlockCounters((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    setTimeout(() => {
      const container = document.getElementById(`addblock_${type}`);
      if (container) {
        const newBlock = document.createElement("div");
        newBlock.className =
          "add-block-entry mt-4 p-5 border border-[#e0ddd6] rounded-[10px] bg-[#faf9f7]";
        const count = blockCounters[type] + 1;
        const title =
          type === "driver"
            ? `Additional Driver #${count}`
            : `Additional Vehicle #${count}`;

        let fields = "";
        if (type === "driver") {
          fields = `
            <div class="add-block-header flex justify-between items-center mb-3 font-['DM_Sans'] text-[14px] text-[#333]">
              <strong>${title}</strong>
              <button type="button" class="bg-none border-none font-['DM_Sans'] text-[12px] text-[#c0392b] cursor-pointer px-2 py-1" onclick="this.closest('.add-block-entry').remove()">✕ Remove</button>
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">Full Name</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="text" name="addDriverName${count}" />
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">Date of Birth</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="date" name="addDriverDOB${count}" />
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">Driver License Number</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="text" name="addDriverLicense${count}" />
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">License State</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="text" name="addDriverState${count}" placeholder="FL" />
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">Years Licensed</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="text" name="addDriverYears${count}" />
            </div>
          `;
        } else {
          fields = `
            <div class="add-block-header flex justify-between items-center mb-3 font-['DM_Sans'] text-[14px] text-[#333]">
              <strong>${title}</strong>
              <button type="button" class="bg-none border-none font-['DM_Sans'] text-[12px] text-[#c0392b] cursor-pointer px-2 py-1" onclick="this.closest('.add-block-entry').remove()">✕ Remove</button>
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">Vehicle Year</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="text" name="addVehYear${count}" placeholder="2024" />
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">Make</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="text" name="addVehMake${count}" />
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">Model</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="text" name="addVehModel${count}" />
            </div>
            <div class="form-group mb-5">
              <label class="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">VIN (optional)</label>
              <input class="form-input w-full p-3 px-4 border border-[#ddd] rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a]" type="text" name="addVehVin${count}" />
            </div>
          `;
        }
        newBlock.innerHTML = fields;
        container.appendChild(newBlock);
      }
    }, 0);
  };

  const validateStep1 = () => {
    const sections = FORM_FIELDS[selectedType] || FORM_FIELDS.homeowners;
    let isValid = true;
    const newErrors = {};

    sections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.t === "file" || field.t === "addblock") return;

        const group = document
          .getElementById(`f_${field.n}`)
          ?.closest(".form-group");
        if (field.cond && group && group.style.display === "none") return;

        const value = formData[field.n];
        if (field.r && (!value || value.trim() === "")) {
          newErrors[field.n] = "Required";
          isValid = false;
        }
      });
    });

    setErrors(newErrors);
    return isValid;
  };

  const validateContact = () => {
    const contactFields = ["firstName", "lastName", "email", "phone"];
    let isValid = true;
    const newErrors = {};

    contactFields.forEach((field) => {
      const value = formData[field];
      if (!value || value.trim() === "") {
        newErrors[field] = "Required";
        isValid = false;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const saveCurrentFields = () => {
    document
      .querySelectorAll(".form-input, .form-select, .form-textarea")
      .forEach((el) => {
        if (el.name) {
          setFormData((prev) => ({ ...prev, [el.name]: el.value }));
        }
      });
  };

  const continueToContact = () => {
    saveCurrentFields();
    if (validateStep1()) {
      setStep(2);
      window.scrollTo(0, 0);
    } else {
      const firstError = document.querySelector(
        ".form-input.error, .form-select.error, .form-textarea.error",
      );
      if (firstError)
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = async () => {
    saveCurrentFields();
    if (validateContact()) {
      const service = [...PERSONAL_SERVICES, ...BUSINESS_SERVICES].find(
        (s) => s.id === selectedType,
      );

      // Collect all files
      const files = {};
      Object.keys(formData).forEach((key) => {
        if (Array.isArray(formData[key]) && formData[key][0]?.file) {
          files[key] = formData[key];
        }
      });

      const submissionData = {
        type: selectedType,
        service: service,
        data: formData,
        files: files,
        timestamp: new Date().toISOString(),
      };

      console.log("Form submitted:", submissionData);

      if (onSubmit) {
        await onSubmit(submissionData);
      }
    }
  };

  const renderField = (field) => {
    const req = field.r ? '<span class="req text-[#c0392b]">*</span>' : "";
    const condAttr = field.cond
      ? `data-cond="${field.cond}" style="display:none"`
      : "";
    const value = formData[field.n] || "";
    const error = errors[field.n];

    return (
      <div
        key={field.n}
        className='form-group mb-5'
        {...(field.cond
          ? { "data-cond": field.cond, style: { display: "none" } }
          : {})}>
        <label className="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">
          {field.l} <span dangerouslySetInnerHTML={{ __html: req }} />
        </label>

        {field.t === "select" ? (
          <select
            className={`form-select w-full p-3 px-4 border rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path d="M1 1l5 5 5-5" stroke="%23999" fill="none" stroke-width="1.5"/></svg>')] bg-no-repeat bg-[right_16px_center] ${error ? "border-[#e74c3c]" : "border-[#ddd]"}`}
            name={field.n}
            id={`f_${field.n}`}
            value={value}
            onChange={(e) => {
              handleInputChange(field.n, e.target.value);
              if (field.cond) handleCondFields(field.n, e.target.value);
            }}>
            <option value=''>Select...</option>
            {field.o?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : field.t === "textarea" ? (
          <textarea
            className={`form-textarea w-full p-3 px-4 border rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a] resize-vertical ${error ? "border-[#e74c3c]" : "border-[#ddd]"}`}
            name={field.n}
            id={`f_${field.n}`}
            rows='4'
            placeholder={field.p || ""}
            value={value}
            onChange={(e) => handleInputChange(field.n, e.target.value)}
          />
        ) : field.t === "file" ? (
          <div className='file-upload-wrap relative'>
            <input
              type='file'
              className='file-input absolute opacity-0 w-0 h-0'
              name={field.n}
              id={`f_${field.n}`}
              accept='.pdf,.doc,.docx,.jpg,.jpeg,.png'
              multiple
              onChange={(e) => handleFileSelect(field.n, e.target.files)}
            />
            <label
              htmlFor={`f_${field.n}`}
              className='file-upload-label flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#ccc] rounded-[8px] cursor-pointer text-center hover:border-[#1a1a1a] hover:bg-black/5 transition-all duration-200'>
              <span className='file-upload-icon text-[28px] mb-2'>📎</span>
              <span className="file-upload-text font-['DM_Sans'] text-[14px] font-medium text-[#333]">
                Click to upload or drag files here
              </span>
              <span className="file-upload-hint font-['DM_Sans'] text-[11px] text-[#999] mt-1">
                PDF, DOC, JPG, PNG — Max 10MB each
              </span>
            </label>
            <div className='file-list mt-2' id={`files_${field.n}`}>
              {formData[field.n]?.map((file, idx) => (
                <div
                  key={idx}
                  className="file-item font-['DM_Sans'] text-[13px] text-[#333] py-1.5 border-b border-[#eee]">
                  📄 {file.name}{" "}
                  <span className='text-white/40'>
                    ({(file.size / 1024).toFixed(0)} KB)
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : field.t === "addblock" ? (
          <div>
            <div id={`addblock_${field.blockType}`}></div>
            <button
              type='button'
              className="btn-add-block inline-flex items-center gap-1.5 mt-2 px-5 py-2.5 bg-transparent border-2 border-dashed border-[#bbb] rounded-[8px] font-['DM_Sans'] text-[13px] font-medium text-[#555] cursor-pointer hover:border-[#1a1a1a] hover:text-[#1a1a1a] hover:bg-black/5 transition-all duration-200"
              onClick={() => addBlock(field.blockType)}>
              + Add{" "}
              {field.blockType === "driver"
                ? "Another Driver"
                : "Another Vehicle"}
            </button>
          </div>
        ) : (
          <input
            className={`form-input w-full p-3 px-4 border rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a] ${error ? "border-[#e74c3c]" : "border-[#ddd]"}`}
            type={field.t || "text"}
            name={field.n}
            id={`f_${field.n}`}
            placeholder={field.p || ""}
            value={value}
            onChange={(e) => {
              handleInputChange(field.n, e.target.value);
              if (field.cond) handleCondFields(field.n, e.target.value);
            }}
          />
        )}

        {error && (
          <p className="form-error font-['DM_Sans'] text-[11px] text-[#e74c3c] mt-1">
            {error}
          </p>
        )}
      </div>
    );
  };

  // Step 0: Type Selection
  if (step === 0) {
    return (
      <>
        <div className='quote-header bg-[#1a1a1a] text-white pt-[152px] pb-[60px] px-[6%]'>
          <div className='quote-header-inner max-w-[700px] mx-auto'>
            <p className="quote-step font-['DM_Sans'] text-[11px] tracking-[4px] uppercase text-white/50 mb-3">
              Start Your Quote
            </p>
            <h1 className='quote-title text-[clamp(24px,3vw,40px)] font-normal mb-2'>
              What Type of <em className='italic'>Coverage?</em>
            </h1>
            <p className="quote-subtitle font-['DM_Sans'] text-[14px] text-white/50">
              Select the coverage you need and we'll customize your intake form.
            </p>
          </div>
        </div>

        <div className='quote-body max-w-[1200px] mx-auto py-12 px-[6%]'>
          <p className="type-label font-['DM_Sans'] text-[11px] tracking-[3px] uppercase text-[#999] mb-5">
            Individuals & Families
          </p>
          <div className='type-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10'>
            {PERSONAL_SERVICES.map((service) => (
              <button
                key={service.id}
                className={`type-btn p-5 text-left font-['DM_Sans'] text-[13px] font-medium rounded-[8px] transition-all duration-200 ${
                  selectedType === service.id
                    ? "selected bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-white text-[#333] border border-[#ddd] hover:border-[#999]"
                }`}
                onClick={() => {
                  setSelectedType(service.id);
                  setStep(1);
                  setFormData({});
                  setBlockCounters({ driver: 0, vehicle: 0 });
                  window.scrollTo(0, 0);
                }}>
                <span className='type-btn-icon text-[20px] block mb-2'>
                  {service.icon}
                </span>
                {service.label}
              </button>
            ))}
          </div>

          <p className="type-label font-['DM_Sans'] text-[11px] tracking-[3px] uppercase text-[#999] mb-5">
            Business Insurance
          </p>
          <div className='type-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {BUSINESS_SERVICES.map((service) => (
              <button
                key={service.id}
                className={`type-btn p-5 text-left font-['DM_Sans'] text-[13px] font-medium rounded-[8px] transition-all duration-200 ${
                  selectedType === service.id
                    ? "selected bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-white text-[#333] border border-[#ddd] hover:border-[#999]"
                }`}
                onClick={() => {
                  setSelectedType(service.id);
                  setStep(1);
                  setFormData({});
                  setBlockCounters({ driver: 0, vehicle: 0 });
                  window.scrollTo(0, 0);
                }}>
                <span className='type-btn-icon text-[20px] block mb-2'>
                  {service.icon}
                </span>
                {service.label}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Step 1: Coverage-specific form
  if (step === 1) {
    const service = [...PERSONAL_SERVICES, ...BUSINESS_SERVICES].find(
      (s) => s.id === selectedType,
    );
    const sections = FORM_FIELDS[selectedType] || FORM_FIELDS.homeowners;

    return (
      <>
        <div className='quote-header bg-[#1a1a1a] text-white pt-[152px] pb-[60px] px-[6%]'>
          <div className='quote-header-inner max-w-[700px] mx-auto'>
            <button
              className="quote-back font-['DM_Sans'] text-[12px] text-white/50 bg-none border-none mb-4 cursor-pointer"
              onClick={() => {
                setStep(0);
                window.scrollTo(0, 0);
              }}>
              ← Change coverage type
            </button>
            <p className="quote-step font-['DM_Sans'] text-[11px] tracking-[4px] uppercase text-white/50 mb-3">
              Step 2 of 3
            </p>
            <h1 className='quote-title text-[clamp(24px,3vw,40px)] font-normal mb-2'>
              {service?.icon} {service?.label}
            </h1>
            <p className="quote-subtitle font-['DM_Sans'] text-[14px] text-white/50">
              Complete the details below so we can prepare your personalized
              quote.
            </p>
          </div>
        </div>

        <div className='quote-body max-w-[700px] mx-auto py-12 px-[6%]'>
          {sections.map((section) => (
            <div key={section.section} className='form-section mb-10'>
              <h3 className="form-section-title font-['DM_Sans'] text-[13px] font-semibold tracking-[2px] uppercase text-[#999] mb-5 pb-3 border-b border-[#eee]">
                {section.section}
              </h3>
              <div className='form-card bg-white rounded-[12px] border border-[#eee] p-8 md:p-9'>
                {section.fields.map((field) => renderField(field))}
              </div>
            </div>
          ))}

          <button
            className="btn-continue w-full p-4 bg-[#1a1a1a] text-white border-none rounded-[6px] font-['DM_Sans'] text-[14px] font-semibold tracking-[1px] uppercase mt-2 hover:bg-[#333] cursor-pointer"
            onClick={continueToContact}>
            Continue to Contact Info →
          </button>
        </div>
      </>
    );
  }

  // Step 2: Contact Information
  if (step === 2) {
    const contactFields = [
      { n: "firstName", l: "First Name", t: "text", r: true },
      { n: "lastName", l: "Last Name", t: "text", r: true },
      { n: "email", l: "Email Address", t: "email", r: true },
      { n: "phone", l: "Phone Number", t: "tel", r: true },
      { n: "notes", l: "Additional Notes", t: "textarea" },
    ];

    return (
      <>
        <div className='quote-header bg-[#1a1a1a] text-white pt-[152px] pb-[60px] px-[6%]'>
          <div className='quote-header-inner max-w-[700px] mx-auto'>
            <button
              className="quote-back font-['DM_Sans'] text-[12px] text-white/50 bg-none border-none mb-4 cursor-pointer"
              onClick={() => {
                setStep(1);
                window.scrollTo(0, 0);
              }}>
              ← Back to details
            </button>
            <p className="quote-step font-['DM_Sans'] text-[11px] tracking-[4px] uppercase text-white/50 mb-3">
              Step 3 of 3
            </p>
            <h1 className='quote-title text-[clamp(24px,3vw,40px)] font-normal mb-2'>
              Your Contact <em className='italic'>Information</em>
            </h1>
          </div>
        </div>

        <div className='quote-body max-w-[700px] mx-auto py-12 px-[6%]'>
          <div className='form-card bg-white rounded-[12px] border border-[#eee] p-8 md:p-9'>
            {contactFields.map((field) => {
              const req = field.r
                ? '<span class="req text-[#c0392b]">*</span>'
                : "";
              const error = errors[field.n];

              return (
                <div key={field.n} className='form-group mb-5'>
                  <label className="form-label block font-['DM_Sans'] text-[12px] font-medium text-[#555] mb-1.5 tracking-[0.3px]">
                    {field.l} <span dangerouslySetInnerHTML={{ __html: req }} />
                  </label>

                  {field.t === "textarea" ? (
                    <textarea
                      className={`form-textarea w-full p-3 px-4 border rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a] resize-vertical ${error ? "border-[#e74c3c]" : "border-[#ddd]"}`}
                      name={field.n}
                      id={`f_${field.n}`}
                      rows='4'
                      placeholder={field.p || ""}
                      value={formData[field.n] || ""}
                      onChange={(e) =>
                        handleInputChange(field.n, e.target.value)
                      }
                    />
                  ) : (
                    <input
                      className={`form-input w-full p-3 px-4 border rounded-[6px] font-['DM_Sans'] text-[14px] text-[#333] bg-[#faf9f7] outline-none focus:border-[#1a1a1a] ${error ? "border-[#e74c3c]" : "border-[#ddd]"}`}
                      type={field.t}
                      name={field.n}
                      id={`f_${field.n}`}
                      placeholder={field.p || ""}
                      value={formData[field.n] || ""}
                      onChange={(e) =>
                        handleInputChange(field.n, e.target.value)
                      }
                    />
                  )}

                  {error && (
                    <p className="form-error font-['DM_Sans'] text-[11px] text-[#e74c3c] mt-1">
                      {error}
                    </p>
                  )}
                </div>
              );
            })}

            <button
              className="btn-continue w-full p-4 bg-[#1a1a1a] text-white border-none rounded-[6px] font-['DM_Sans'] text-[14px] font-semibold tracking-[1px] uppercase mt-2 hover:bg-[#333] cursor-pointer"
              onClick={handleSubmit}>
              Submit Quote Request
            </button>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default QuoteForm;
