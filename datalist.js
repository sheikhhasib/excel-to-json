let newData = [
    {
        "id": 1,
        "parent_id": "",
        "tax_name": "Demographic",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            }
        ]
    },
    {
        "id": 2,
        "parent_id": 1,
        "tax_name": "Age Range",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            }
        ]
    },
    {
        "id": 3,
        "parent_id": 2,
        "tax_name": "18-20",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "18-20",
                "id": 3
            }
        ]
    },
    {
        "id": 4,
        "parent_id": 2,
        "tax_name": "21-24",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "21-24",
                "id": 4
            }
        ]
    },
    {
        "id": 5,
        "parent_id": 2,
        "tax_name": "25-29",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "25-29",
                "id": 5
            }
        ]
    },
    {
        "id": 6,
        "parent_id": 2,
        "tax_name": "30-34",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "30-34",
                "id": 6
            }
        ]
    },
    {
        "id": 7,
        "parent_id": 2,
        "tax_name": "35-39",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "35-39",
                "id": 7
            }
        ]
    },
    {
        "id": 8,
        "parent_id": 2,
        "tax_name": "40-44",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "40-44",
                "id": 8
            }
        ]
    },
    {
        "id": 9,
        "parent_id": 2,
        "tax_name": "45-49",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "45-49",
                "id": 9
            }
        ]
    },
    {
        "id": 10,
        "parent_id": 2,
        "tax_name": "50-54",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "50-54",
                "id": 10
            }
        ]
    },
    {
        "id": 11,
        "parent_id": 2,
        "tax_name": "55-59",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "55-59",
                "id": 11
            }
        ]
    },
    {
        "id": 12,
        "parent_id": 2,
        "tax_name": "60-64",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "60-64",
                "id": 12
            }
        ]
    },
    {
        "id": 13,
        "parent_id": 2,
        "tax_name": "65-69",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "65-69",
                "id": 13
            }
        ]
    },
    {
        "id": 14,
        "parent_id": 2,
        "tax_name": "70-74",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "70-74",
                "id": 14
            }
        ]
    },
    {
        "id": 15,
        "parent_id": 2,
        "tax_name": "75+",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Age Range",
                "id": 2
            },
            {
                "name": "75+",
                "id": 15
            }
        ]
    },
    {
        "id": 16,
        "parent_id": 1,
        "tax_name": "Education & Occupation",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation",
                "id": 16
            }
        ]
    },
    {
        "id": 17,
        "parent_id": 16,
        "tax_name": "Education (Highest Level)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation",
                "id": 16
            },
            {
                "name": "Education (Highest Level)",
                "id": 17
            }
        ]
    },
    {
        "id": 18,
        "parent_id": 17,
        "tax_name": "Primary Education",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Education (Highest Level)",
                "id": 17
            },
            {
                "name": "Primary Education",
                "id": 18
            }
        ]
    },
    {
        "id": 19,
        "parent_id": 17,
        "tax_name": "Secondary Education",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Education (Highest Level)",
                "id": 17
            },
            {
                "name": "Secondary Education",
                "id": 19
            }
        ]
    },
    {
        "id": 20,
        "parent_id": 17,
        "tax_name": "College Education",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Education (Highest Level)",
                "id": 17
            },
            {
                "name": "College Education",
                "id": 20
            }
        ]
    },
    {
        "id": 21,
        "parent_id": 20,
        "tax_name": "Professional School",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Education (Highest Level)"
            },
            {
                "name": "College Education",
                "id": 20
            },
            {
                "name": "Professional School",
                "id": 21
            }
        ]
    },
    {
        "id": 22,
        "parent_id": 20,
        "tax_name": "Postgraduate Education",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Education (Highest Level)"
            },
            {
                "name": "College Education",
                "id": 20
            },
            {
                "name": "Postgraduate Education",
                "id": 22
            }
        ]
    },
    {
        "id": 23,
        "parent_id": 20,
        "tax_name": "Undergraduate Education",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Education (Highest Level)"
            },
            {
                "name": "College Education",
                "id": 20
            },
            {
                "name": "Undergraduate Education",
                "id": 23
            }
        ]
    },
    {
        "id": 24,
        "parent_id": 16,
        "tax_name": "Employment Role",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation",
                "id": 16
            },
            {
                "name": "Employment Role",
                "id": 24
            }
        ]
    },
    {
        "id": 25,
        "parent_id": 24,
        "tax_name": "Work from Home",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Work from Home",
                "id": 25
            }
        ]
    },
    {
        "id": 26,
        "parent_id": 24,
        "tax_name": "Director/Managerial",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Director/Managerial",
                "id": 26
            }
        ]
    },
    {
        "id": 27,
        "parent_id": 24,
        "tax_name": "Homemaker / Domestic Work",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Homemaker / Domestic Work",
                "id": 27
            }
        ]
    },
    {
        "id": 28,
        "parent_id": 24,
        "tax_name": "Office Worker",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Office Worker",
                "id": 28
            }
        ]
    },
    {
        "id": 29,
        "parent_id": 24,
        "tax_name": "Part-Time Worker",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Part-Time Worker",
                "id": 29
            }
        ]
    },
    {
        "id": 30,
        "parent_id": 24,
        "tax_name": "Professional",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Professional",
                "id": 30
            }
        ]
    },
    {
        "id": 31,
        "parent_id": 24,
        "tax_name": "Public Sector",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Public Sector",
                "id": 31
            }
        ]
    },
    {
        "id": 32,
        "parent_id": 24,
        "tax_name": "Retired",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Retired",
                "id": 32
            }
        ]
    },
    {
        "id": 33,
        "parent_id": 24,
        "tax_name": "Self Employed",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Self Employed",
                "id": 33
            }
        ]
    },
    {
        "id": 34,
        "parent_id": 24,
        "tax_name": "Shop Worker",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Shop Worker",
                "id": 34
            }
        ]
    },
    {
        "id": 35,
        "parent_id": 24,
        "tax_name": "Skilled/Manual Work",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Skilled/Manual Work",
                "id": 35
            }
        ]
    },
    {
        "id": 36,
        "parent_id": 24,
        "tax_name": "Student",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Student",
                "id": 36
            }
        ]
    },
    {
        "id": 37,
        "parent_id": 24,
        "tax_name": "Unemployed",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Role",
                "id": 24
            },
            {
                "name": "Unemployed",
                "id": 37
            }
        ]
    },
    {
        "id": 38,
        "parent_id": 16,
        "tax_name": "Employment Sector / Industry",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation",
                "id": 16
            },
            {
                "name": "Employment Sector / Industry",
                "id": 38
            }
        ]
    },
    {
        "id": 39,
        "parent_id": 16,
        "tax_name": "Employment Status",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation",
                "id": 16
            },
            {
                "name": "Employment Status",
                "id": 39
            }
        ]
    },
    {
        "id": 40,
        "parent_id": 39,
        "tax_name": "Retired",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Status",
                "id": 39
            },
            {
                "name": "Retired",
                "id": 40
            }
        ]
    },
    {
        "id": 41,
        "parent_id": 39,
        "tax_name": "Student",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Status",
                "id": 39
            },
            {
                "name": "Student",
                "id": 41
            }
        ]
    },
    {
        "id": 42,
        "parent_id": 39,
        "tax_name": "Employed",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Status",
                "id": 39
            },
            {
                "name": "Employed",
                "id": 42
            }
        ]
    },
    {
        "id": 43,
        "parent_id": 42,
        "tax_name": "Part-Time",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Status"
            },
            {
                "name": "Employed",
                "id": 42
            },
            {
                "name": "Part-Time",
                "id": 43
            }
        ]
    },
    {
        "id": 44,
        "parent_id": 42,
        "tax_name": "Full-Time",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Status"
            },
            {
                "name": "Employed",
                "id": 42
            },
            {
                "name": "Full-Time",
                "id": 44
            }
        ]
    },
    {
        "id": 45,
        "parent_id": 39,
        "tax_name": "Self-Employed",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Status",
                "id": 39
            },
            {
                "name": "Self-Employed",
                "id": 45
            }
        ]
    },
    {
        "id": 46,
        "parent_id": 39,
        "tax_name": "Unemployed / Job Seeker",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Status",
                "id": 39
            },
            {
                "name": "Unemployed / Job Seeker",
                "id": 46
            }
        ]
    },
    {
        "id": 47,
        "parent_id": 39,
        "tax_name": "Unemployed",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Education & Occupation"
            },
            {
                "name": "Employment Status",
                "id": 39
            },
            {
                "name": "Unemployed",
                "id": 47
            }
        ]
    },
    {
        "id": 48,
        "parent_id": 1,
        "tax_name": "Gender",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Gender",
                "id": 48
            }
        ]
    },
    {
        "id": 49,
        "parent_id": 48,
        "tax_name": "Female",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Gender",
                "id": 48
            },
            {
                "name": "Female",
                "id": 49
            }
        ]
    },
    {
        "id": 50,
        "parent_id": 48,
        "tax_name": "Male",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Gender",
                "id": 48
            },
            {
                "name": "Male",
                "id": 50
            }
        ]
    },
    {
        "id": 51,
        "parent_id": 48,
        "tax_name": "Other Gender",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Gender",
                "id": 48
            },
            {
                "name": "Other Gender",
                "id": 51
            }
        ]
    },
    {
        "id": 52,
        "parent_id": 48,
        "tax_name": "Unknown Gender",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Gender",
                "id": 48
            },
            {
                "name": "Unknown Gender",
                "id": 52
            }
        ]
    },
    {
        "id": 53,
        "parent_id": 1,
        "tax_name": "Household Data",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            }
        ]
    },
    {
        "id": 54,
        "parent_id": 53,
        "tax_name": "Home Location",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Home Location",
                "id": 54
            }
        ]
    },
    {
        "id": 55,
        "parent_id": 54,
        "tax_name": "*Country Extension",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Home Location",
                "id": 54
            },
            {
                "name": "*Country Extension",
                "id": 55
            }
        ]
    },
    {
        "id": 56,
        "parent_id": 54,
        "tax_name": "*Region / State Extension",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Home Location",
                "id": 54
            },
            {
                "name": "*Region / State Extension",
                "id": 56
            }
        ]
    },
    {
        "id": 57,
        "parent_id": 54,
        "tax_name": "*City Extension",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Home Location",
                "id": 54
            },
            {
                "name": "*City Extension",
                "id": 57
            }
        ]
    },
    {
        "id": 58,
        "parent_id": 54,
        "tax_name": "*Metro / DMA Extension",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Home Location",
                "id": 54
            },
            {
                "name": "*Metro / DMA Extension",
                "id": 58
            }
        ]
    },
    {
        "id": 59,
        "parent_id": 54,
        "tax_name": "*Zip or postal code Extension",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Home Location",
                "id": 54
            },
            {
                "name": "*Zip or postal code Extension",
                "id": 59
            }
        ]
    },
    {
        "id": 60,
        "parent_id": 53,
        "tax_name": "Household Income (USD)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            }
        ]
    },
    {
        "id": 61,
        "parent_id": 60,
        "tax_name": "Less than $10,000",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "Less than $10,000",
                "id": 61
            }
        ]
    },
    {
        "id": 62,
        "parent_id": 60,
        "tax_name": "$10,000-$14,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$10,000-$14,999",
                "id": 62
            }
        ]
    },
    {
        "id": 63,
        "parent_id": 60,
        "tax_name": "$15,000-$19,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$15,000-$19,999",
                "id": 63
            }
        ]
    },
    {
        "id": 64,
        "parent_id": 60,
        "tax_name": "$20000 - $39999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$20000 - $39999",
                "id": 64
            }
        ]
    },
    {
        "id": 65,
        "parent_id": 60,
        "tax_name": "$40000 - $49999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$40000 - $49999",
                "id": 65
            }
        ]
    },
    {
        "id": 66,
        "parent_id": 60,
        "tax_name": "$50000 - $74999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$50000 - $74999",
                "id": 66
            }
        ]
    },
    {
        "id": 67,
        "parent_id": 60,
        "tax_name": "$75000 - $99999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$75000 - $99999",
                "id": 67
            }
        ]
    },
    {
        "id": 68,
        "parent_id": 60,
        "tax_name": "$100000 - $149999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$100000 - $149999",
                "id": 68
            }
        ]
    },
    {
        "id": 69,
        "parent_id": 60,
        "tax_name": "$150,000-$174,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$150,000-$174,999",
                "id": 69
            }
        ]
    },
    {
        "id": 70,
        "parent_id": 60,
        "tax_name": "$175,000-$199,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$175,000-$199,999",
                "id": 70
            }
        ]
    },
    {
        "id": 71,
        "parent_id": 60,
        "tax_name": "$200,000-$249,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$200,000-$249,999",
                "id": 71
            }
        ]
    },
    {
        "id": 72,
        "parent_id": 60,
        "tax_name": "$250,000+",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Household Income (USD)",
                "id": 60
            },
            {
                "name": "$250,000+",
                "id": 72
            }
        ]
    },
    {
        "id": 73,
        "parent_id": 53,
        "tax_name": "Length of Residence",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Length of Residence",
                "id": 73
            }
        ]
    },
    {
        "id": 74,
        "parent_id": 73,
        "tax_name": "Less Than 1 Year",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence",
                "id": 73
            },
            {
                "name": "Less Than 1 Year",
                "id": 74
            }
        ]
    },
    {
        "id": 75,
        "parent_id": 73,
        "tax_name": "1-3 Years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence",
                "id": 73
            },
            {
                "name": "1-3 Years",
                "id": 75
            }
        ]
    },
    {
        "id": 76,
        "parent_id": 75,
        "tax_name": "1 year",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "1-3 Years",
                "id": 75
            },
            {
                "name": "1 year",
                "id": 76
            }
        ]
    },
    {
        "id": 77,
        "parent_id": 75,
        "tax_name": "2 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "1-3 Years",
                "id": 75
            },
            {
                "name": "2 years",
                "id": 77
            }
        ]
    },
    {
        "id": 78,
        "parent_id": 75,
        "tax_name": "3 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "1-3 Years",
                "id": 75
            },
            {
                "name": "3 years",
                "id": 78
            }
        ]
    },
    {
        "id": 79,
        "parent_id": 73,
        "tax_name": "4-6 Years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence",
                "id": 73
            },
            {
                "name": "4-6 Years",
                "id": 79
            }
        ]
    },
    {
        "id": 80,
        "parent_id": 79,
        "tax_name": "4 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "4-6 Years",
                "id": 79
            },
            {
                "name": "4 years",
                "id": 80
            }
        ]
    },
    {
        "id": 81,
        "parent_id": 79,
        "tax_name": "5 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "4-6 Years",
                "id": 79
            },
            {
                "name": "5 years",
                "id": 81
            }
        ]
    },
    {
        "id": 82,
        "parent_id": 79,
        "tax_name": "6 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "4-6 Years",
                "id": 79
            },
            {
                "name": "6 years",
                "id": 82
            }
        ]
    },
    {
        "id": 83,
        "parent_id": 73,
        "tax_name": "7+ Years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence",
                "id": 73
            },
            {
                "name": "7+ Years",
                "id": 83
            }
        ]
    },
    {
        "id": 84,
        "parent_id": 83,
        "tax_name": "7 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "7 years",
                "id": 84
            }
        ]
    },
    {
        "id": 85,
        "parent_id": 83,
        "tax_name": "8 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "8 years",
                "id": 85
            }
        ]
    },
    {
        "id": 86,
        "parent_id": 83,
        "tax_name": "9 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "9 years",
                "id": 86
            }
        ]
    },
    {
        "id": 87,
        "parent_id": 83,
        "tax_name": "10 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "10 years",
                "id": 87
            }
        ]
    },
    {
        "id": 88,
        "parent_id": 83,
        "tax_name": "11 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "11 years",
                "id": 88
            }
        ]
    },
    {
        "id": 89,
        "parent_id": 83,
        "tax_name": "12 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "12 years",
                "id": 89
            }
        ]
    },
    {
        "id": 90,
        "parent_id": 83,
        "tax_name": "13 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "13 years",
                "id": 90
            }
        ]
    },
    {
        "id": 91,
        "parent_id": 83,
        "tax_name": "14 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "14 years",
                "id": 91
            }
        ]
    },
    {
        "id": 92,
        "parent_id": 83,
        "tax_name": "15 years",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Length of Residence"
            },
            {
                "name": "7+ Years",
                "id": 83
            },
            {
                "name": "15 years",
                "id": 92
            }
        ]
    },
    {
        "id": 93,
        "parent_id": 53,
        "tax_name": "Life Stage",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Life Stage",
                "id": 93
            }
        ]
    },
    {
        "id": 94,
        "parent_id": 53,
        "tax_name": "Other",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Life Stage",
                "id": 53
            },
            {
                "name": "Other",
                "id": 94
            }
        ]
    },
    {
        "id": 95,
        "parent_id": 93,
        "tax_name": "Single Generation Household",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Life Stage",
                "id": 93
            },
            {
                "name": "Single Generation Household",
                "id": 95
            }
        ]
    },
    {
        "id": 96,
        "parent_id": 93,
        "tax_name": "Adults (no children)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Life Stage"
            },
            {
                "name": "Single Generation Household",
                "id": 93
            },
            {
                "name": "Adults (no children)",
                "id": 96
            }
        ]
    },
    {
        "id": 97,
        "parent_id": 93,
        "tax_name": "Multi Generation Household",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Life Stage",
                "id": 93
            },
            {
                "name": "Multi Generation Household",
                "id": 97
            }
        ]
    },
    {
        "id": 98,
        "parent_id": 93,
        "tax_name": "Parents with Children",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Life Stage"
            },
            {
                "name": "Multi Generation Household",
                "id": 93
            },
            {
                "name": "Parents with Children",
                "id": 98
            }
        ]
    },
    {
        "id": 99,
        "parent_id": 93,
        "tax_name": "Grandparents, Parents and Children",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Life Stage"
            },
            {
                "name": "Multi Generation Household",
                "id": 93
            },
            {
                "name": "Grandparents, Parents and Children",
                "id": 99
            }
        ]
    },
    {
        "id": 100,
        "parent_id": 93,
        "tax_name": "Grandparents with Children",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Life Stage"
            },
            {
                "name": "Multi Generation Household",
                "id": 93
            },
            {
                "name": "Grandparents with Children",
                "id": 100
            }
        ]
    },
    {
        "id": 101,
        "parent_id": 93,
        "tax_name": "Empty Nest (Adults, Children left home)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Life Stage"
            },
            {
                "name": "Multi Generation Household",
                "id": 93
            },
            {
                "name": "Empty Nest (Adults, Children left home)",
                "id": 101
            }
        ]
    },
    {
        "id": 102,
        "parent_id": 53,
        "tax_name": "Median Home Value (USD)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            }
        ]
    },
    {
        "id": 103,
        "parent_id": 102,
        "tax_name": "$0-$99,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$0-$99,999",
                "id": 103
            }
        ]
    },
    {
        "id": 104,
        "parent_id": 102,
        "tax_name": "$100,000-$199,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$100,000-$199,999",
                "id": 104
            }
        ]
    },
    {
        "id": 105,
        "parent_id": 102,
        "tax_name": "$200,000-$299,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$200,000-$299,999",
                "id": 105
            }
        ]
    },
    {
        "id": 106,
        "parent_id": 102,
        "tax_name": "$300,000-$399,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$300,000-$399,999",
                "id": 106
            }
        ]
    },
    {
        "id": 107,
        "parent_id": 102,
        "tax_name": "$400,000-$499,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$400,000-$499,999",
                "id": 107
            }
        ]
    },
    {
        "id": 108,
        "parent_id": 102,
        "tax_name": "$500,000-$599,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$500,000-$599,999",
                "id": 108
            }
        ]
    },
    {
        "id": 109,
        "parent_id": 102,
        "tax_name": "$600,000-$699,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$600,000-$699,999",
                "id": 109
            }
        ]
    },
    {
        "id": 110,
        "parent_id": 102,
        "tax_name": "$700,000-$799,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$700,000-$799,999",
                "id": 110
            }
        ]
    },
    {
        "id": 111,
        "parent_id": 102,
        "tax_name": "$800,000-$899,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$800,000-$899,999",
                "id": 111
            }
        ]
    },
    {
        "id": 112,
        "parent_id": 102,
        "tax_name": "$900,000-$999,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$900,000-$999,999",
                "id": 112
            }
        ]
    },
    {
        "id": 113,
        "parent_id": 102,
        "tax_name": "$1,000,000+",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Median Home Value (USD)",
                "id": 102
            },
            {
                "name": "$1,000,000+",
                "id": 113
            }
        ]
    },
    {
        "id": 114,
        "parent_id": 53,
        "tax_name": "Monthly Housing Payment (USD)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Monthly Housing Payment (USD)",
                "id": 114
            }
        ]
    },
    {
        "id": 115,
        "parent_id": 114,
        "tax_name": "Monthly Housing Payment (USD)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 114
            },
            {
                "name": "Monthly Housing Payment (USD)",
                "id": 115
            }
        ]
    },
    {
        "id": 116,
        "parent_id": 114,
        "tax_name": "$1-$499",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Monthly Housing Payment (USD)",
                "id": 114
            },
            {
                "name": "$1-$499",
                "id": 116
            }
        ]
    },
    {
        "id": 117,
        "parent_id": 114,
        "tax_name": "$500-$999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Monthly Housing Payment (USD)",
                "id": 114
            },
            {
                "name": "$500-$999",
                "id": 117
            }
        ]
    },
    {
        "id": 118,
        "parent_id": 114,
        "tax_name": "$1,000-$1,499",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Monthly Housing Payment (USD)",
                "id": 114
            },
            {
                "name": "$1,000-$1,499",
                "id": 118
            }
        ]
    },
    {
        "id": 119,
        "parent_id": 114,
        "tax_name": "$1,500-$1,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Monthly Housing Payment (USD)",
                "id": 114
            },
            {
                "name": "$1,500-$1,999",
                "id": 119
            }
        ]
    },
    {
        "id": 120,
        "parent_id": 114,
        "tax_name": "$2,000-$3,000",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Monthly Housing Payment (USD)",
                "id": 114
            },
            {
                "name": "$2,000-$3,000",
                "id": 120
            }
        ]
    },
    {
        "id": 121,
        "parent_id": 53,
        "tax_name": "Number of Adults",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Number of Adults",
                "id": 121
            }
        ]
    },
    {
        "id": 122,
        "parent_id": 121,
        "tax_name": "1 Adult",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Adults",
                "id": 121
            },
            {
                "name": "1 Adult",
                "id": 122
            }
        ]
    },
    {
        "id": 123,
        "parent_id": 121,
        "tax_name": "2 Adults",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Adults",
                "id": 121
            },
            {
                "name": "2 Adults",
                "id": 123
            }
        ]
    },
    {
        "id": 124,
        "parent_id": 121,
        "tax_name": "3+ Adults",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Adults",
                "id": 121
            },
            {
                "name": "3+ Adults",
                "id": 124
            }
        ]
    },
    {
        "id": 125,
        "parent_id": 53,
        "tax_name": "Number of Children",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Number of Children",
                "id": 125
            }
        ]
    },
    {
        "id": 126,
        "parent_id": 125,
        "tax_name": "0 Child",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Children",
                "id": 125
            },
            {
                "name": "0 Child",
                "id": 126
            }
        ]
    },
    {
        "id": 127,
        "parent_id": 125,
        "tax_name": "1 Child",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Children",
                "id": 125
            },
            {
                "name": "1 Child",
                "id": 127
            }
        ]
    },
    {
        "id": 128,
        "parent_id": 125,
        "tax_name": "2 Child",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Children",
                "id": 125
            },
            {
                "name": "2 Child",
                "id": 128
            }
        ]
    },
    {
        "id": 129,
        "parent_id": 125,
        "tax_name": "3+ Child",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Children",
                "id": 125
            },
            {
                "name": "3+ Child",
                "id": 129
            }
        ]
    },
    {
        "id": 130,
        "parent_id": 53,
        "tax_name": "Number of Individuals",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Number of Individuals",
                "id": 130
            }
        ]
    },
    {
        "id": 131,
        "parent_id": 130,
        "tax_name": "1 person",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Individuals",
                "id": 130
            },
            {
                "name": "1 person",
                "id": 131
            }
        ]
    },
    {
        "id": 132,
        "parent_id": 130,
        "tax_name": "2 people",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Individuals",
                "id": 130
            },
            {
                "name": "2 people",
                "id": 132
            }
        ]
    },
    {
        "id": 133,
        "parent_id": 130,
        "tax_name": "3 people",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Individuals",
                "id": 130
            },
            {
                "name": "3 people",
                "id": 133
            }
        ]
    },
    {
        "id": 134,
        "parent_id": 130,
        "tax_name": "4 people",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Individuals",
                "id": 130
            },
            {
                "name": "4 people",
                "id": 134
            }
        ]
    },
    {
        "id": 135,
        "parent_id": 130,
        "tax_name": "5 people",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Individuals",
                "id": 130
            },
            {
                "name": "5 people",
                "id": 135
            }
        ]
    },
    {
        "id": 136,
        "parent_id": 130,
        "tax_name": "6+ People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Number of Individuals",
                "id": 130
            },
            {
                "name": "6+ People",
                "id": 136
            }
        ]
    },
    {
        "id": 137,
        "parent_id": 53,
        "tax_name": "Ownership",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Ownership",
                "id": 137
            }
        ]
    },
    {
        "id": 138,
        "parent_id": 137,
        "tax_name": "Home Owners",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Ownership",
                "id": 137
            },
            {
                "name": "Home Owners",
                "id": 138
            }
        ]
    },
    {
        "id": 139,
        "parent_id": 137,
        "tax_name": "Renters",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Ownership",
                "id": 137
            },
            {
                "name": "Renters",
                "id": 139
            }
        ]
    },
    {
        "id": 140,
        "parent_id": 137,
        "tax_name": "Owner",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Ownership",
                "id": 137
            },
            {
                "name": "Owner",
                "id": 140
            }
        ]
    },
    {
        "id": 141,
        "parent_id": 137,
        "tax_name": "Renter",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Ownership",
                "id": 137
            },
            {
                "name": "Renter",
                "id": 141
            }
        ]
    },
    {
        "id": 142,
        "parent_id": 137,
        "tax_name": "First Time Homeowner",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Ownership",
                "id": 137
            },
            {
                "name": "First Time Homeowner",
                "id": 142
            }
        ]
    },
    {
        "id": 143,
        "parent_id": 53,
        "tax_name": "Property Type",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Property Type",
                "id": 143
            }
        ]
    },
    {
        "id": 144,
        "parent_id": 143,
        "tax_name": "Multiple Family",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Property Type",
                "id": 143
            },
            {
                "name": "Multiple Family",
                "id": 144
            }
        ]
    },
    {
        "id": 145,
        "parent_id": 143,
        "tax_name": "Single Family",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Property Type",
                "id": 143
            },
            {
                "name": "Single Family",
                "id": 145
            }
        ]
    },
    {
        "id": 146,
        "parent_id": 53,
        "tax_name": "Urbanization",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data",
                "id": 53
            },
            {
                "name": "Urbanization",
                "id": 146
            }
        ]
    },
    {
        "id": 147,
        "parent_id": 146,
        "tax_name": "Rural",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "Rural",
                "id": 147
            }
        ]
    },
    {
        "id": 148,
        "parent_id": 146,
        "tax_name": "2K-4.9K People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "2K-4.9K People",
                "id": 148
            }
        ]
    },
    {
        "id": 149,
        "parent_id": 146,
        "tax_name": "5K-9.9K People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "5K-9.9K People",
                "id": 149
            }
        ]
    },
    {
        "id": 150,
        "parent_id": 146,
        "tax_name": "10K-19.9K People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "10K-19.9K People",
                "id": 150
            }
        ]
    },
    {
        "id": 151,
        "parent_id": 146,
        "tax_name": "20K-49.9K People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "20K-49.9K People",
                "id": 151
            }
        ]
    },
    {
        "id": 152,
        "parent_id": 146,
        "tax_name": "50K-99.9K People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "50K-99.9K People",
                "id": 152
            }
        ]
    },
    {
        "id": 153,
        "parent_id": 146,
        "tax_name": "100K-199.9K People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "100K-199.9K People",
                "id": 153
            }
        ]
    },
    {
        "id": 154,
        "parent_id": 146,
        "tax_name": "200K-2M People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "200K-2M People",
                "id": 154
            }
        ]
    },
    {
        "id": 155,
        "parent_id": 146,
        "tax_name": "Over 2M+ People",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Household Data"
            },
            {
                "name": "Urbanization",
                "id": 146
            },
            {
                "name": "Over 2M+ People",
                "id": 155
            }
        ]
    },
    {
        "id": 156,
        "parent_id": 1,
        "tax_name": "Language",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Language",
                "id": 156
            }
        ]
    },
    {
        "id": 157,
        "parent_id": 156,
        "tax_name": "Other",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Language",
                "id": 156
            },
            {
                "name": "Other",
                "id": 157
            }
        ]
    },
    {
        "id": 158,
        "parent_id": 156,
        "tax_name": "*Language Extension",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Language"
            },
            {
                "name": "Other",
                "id": 156
            },
            {
                "name": "*Language Extension",
                "id": 158
            }
        ]
    },
    {
        "id": 159,
        "parent_id": 1,
        "tax_name": "Marital Status",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Marital Status",
                "id": 159
            }
        ]
    },
    {
        "id": 160,
        "parent_id": 159,
        "tax_name": "Co-Habiting",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Marital Status",
                "id": 159
            },
            {
                "name": "Co-Habiting",
                "id": 160
            }
        ]
    },
    {
        "id": 161,
        "parent_id": 159,
        "tax_name": "Married",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Marital Status",
                "id": 159
            },
            {
                "name": "Married",
                "id": 161
            }
        ]
    },
    {
        "id": 162,
        "parent_id": 159,
        "tax_name": "Single",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Marital Status",
                "id": 159
            },
            {
                "name": "Single",
                "id": 162
            }
        ]
    },
    {
        "id": 163,
        "parent_id": 1,
        "tax_name": "Personal Finance",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance",
                "id": 163
            }
        ]
    },
    {
        "id": 164,
        "parent_id": 163,
        "tax_name": "Income (USD)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance",
                "id": 163
            },
            {
                "name": "Income (USD)",
                "id": 164
            }
        ]
    },
    {
        "id": 165,
        "parent_id": 164,
        "tax_name": "$10,000-$14,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$10,000-$14,999",
                "id": 165
            }
        ]
    },
    {
        "id": 166,
        "parent_id": 164,
        "tax_name": "$15,000-$19,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$15,000-$19,999",
                "id": 166
            }
        ]
    },
    {
        "id": 167,
        "parent_id": 164,
        "tax_name": "$20000 - $39999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$20000 - $39999",
                "id": 167
            }
        ]
    },
    {
        "id": 168,
        "parent_id": 164,
        "tax_name": "$40000 - $49999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$40000 - $49999",
                "id": 168
            }
        ]
    },
    {
        "id": 169,
        "parent_id": 164,
        "tax_name": "$50000 - $74999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$50000 - $74999",
                "id": 169
            }
        ]
    },
    {
        "id": 170,
        "parent_id": 164,
        "tax_name": "$75000 - $99999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$75000 - $99999",
                "id": 170
            }
        ]
    },
    {
        "id": 171,
        "parent_id": 164,
        "tax_name": "$100000 - $149999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$100000 - $149999",
                "id": 171
            }
        ]
    },
    {
        "id": 172,
        "parent_id": 164,
        "tax_name": "$150,000-$174,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$150,000-$174,999",
                "id": 172
            }
        ]
    },
    {
        "id": 173,
        "parent_id": 164,
        "tax_name": "$175,000-$199,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$175,000-$199,999",
                "id": 173
            }
        ]
    },
    {
        "id": 174,
        "parent_id": 164,
        "tax_name": "$200,000-$249,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$200,000-$249,999",
                "id": 174
            }
        ]
    },
    {
        "id": 175,
        "parent_id": 164,
        "tax_name": "$250,000+",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Income (USD)",
                "id": 164
            },
            {
                "name": "$250,000+",
                "id": 175
            }
        ]
    },
    {
        "id": 176,
        "parent_id": 163,
        "tax_name": "Personal Level Affluence (USD)",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance",
                "id": 163
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            }
        ]
    },
    {
        "id": 177,
        "parent_id": 176,
        "tax_name": "Less than $10,000",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "Less than $10,000",
                "id": 177
            }
        ]
    },
    {
        "id": 178,
        "parent_id": 176,
        "tax_name": "$10,000-$14,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$10,000-$14,999",
                "id": 178
            }
        ]
    },
    {
        "id": 179,
        "parent_id": 176,
        "tax_name": "$15,000-$19,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$15,000-$19,999",
                "id": 179
            }
        ]
    },
    {
        "id": 180,
        "parent_id": 176,
        "tax_name": "$20000 - $39999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$20000 - $39999",
                "id": 180
            }
        ]
    },
    {
        "id": 181,
        "parent_id": 176,
        "tax_name": "$40000 - $49999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$40000 - $49999",
                "id": 181
            }
        ]
    },
    {
        "id": 182,
        "parent_id": 176,
        "tax_name": "$50000 - $74999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$50000 - $74999",
                "id": 182
            }
        ]
    },
    {
        "id": 183,
        "parent_id": 176,
        "tax_name": "$75000 - $99999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$75000 - $99999",
                "id": 183
            }
        ]
    },
    {
        "id": 184,
        "parent_id": 176,
        "tax_name": "$100000 - $149999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$100000 - $149999",
                "id": 184
            }
        ]
    },
    {
        "id": 185,
        "parent_id": 176,
        "tax_name": "$150,000-$174,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$150,000-$174,999",
                "id": 185
            }
        ]
    },
    {
        "id": 186,
        "parent_id": 176,
        "tax_name": "$175,000-$199,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$175,000-$199,999",
                "id": 186
            }
        ]
    },
    {
        "id": 187,
        "parent_id": 176,
        "tax_name": "$200,000-$249,999",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$200,000-$249,999",
                "id": 187
            }
        ]
    },
    {
        "id": 188,
        "parent_id": 176,
        "tax_name": "$250,000-$500,000",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$250,000-$500,000",
                "id": 188
            }
        ]
    },
    {
        "id": 189,
        "parent_id": 176,
        "tax_name": "$500,000-$1,000,000",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$500,000-$1,000,000",
                "id": 189
            }
        ]
    },
    {
        "id": 190,
        "parent_id": 176,
        "tax_name": "$1,000,000+",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence (USD)",
                "id": 176
            },
            {
                "name": "$1,000,000+",
                "id": 190
            }
        ]
    },
    {
        "id": 191,
        "parent_id": 163,
        "tax_name": "Personal Level Affluence Band",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance",
                "id": 163
            },
            {
                "name": "Personal Level Affluence Band",
                "id": 191
            }
        ]
    },
    {
        "id": 192,
        "parent_id": 191,
        "tax_name": "Negative Net Worth",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence Band",
                "id": 191
            },
            {
                "name": "Negative Net Worth",
                "id": 192
            }
        ]
    },
    {
        "id": 193,
        "parent_id": 191,
        "tax_name": "Very Low Net Worth",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence Band",
                "id": 191
            },
            {
                "name": "Very Low Net Worth",
                "id": 193
            }
        ]
    },
    {
        "id": 194,
        "parent_id": 191,
        "tax_name": "Low Net Worth",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence Band",
                "id": 191
            },
            {
                "name": "Low Net Worth",
                "id": 194
            }
        ]
    },
    {
        "id": 195,
        "parent_id": 191,
        "tax_name": "Mid Net Worth",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence Band",
                "id": 191
            },
            {
                "name": "Mid Net Worth",
                "id": 195
            }
        ]
    },
    {
        "id": 196,
        "parent_id": 191,
        "tax_name": "High Net Worth",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence Band",
                "id": 191
            },
            {
                "name": "High Net Worth",
                "id": 196
            }
        ]
    },
    {
        "id": 197,
        "parent_id": 191,
        "tax_name": "Super High Net Worth",
        "tier": [
            {
                "name": "Demographic",
                "id": 1
            },
            {
                "name": "Personal Finance"
            },
            {
                "name": "Personal Level Affluence Band",
                "id": 191
            },
            {
                "name": "Super High Net Worth",
                "id": 197
            }
        ]
    },
    {
        "id": 206,
        "parent_id": "",
        "tax_name": "Interest",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            }
        ]
    },
    {
        "id": 207,
        "parent_id": 206,
        "tax_name": "Academic Interests",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests",
                "id": 207
            }
        ]
    },
    {
        "id": 208,
        "parent_id": 207,
        "tax_name": "Arts and Humanities",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests",
                "id": 207
            },
            {
                "name": "Arts and Humanities",
                "id": 208
            }
        ]
    },
    {
        "id": 209,
        "parent_id": 208,
        "tax_name": "Critical Thinking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Arts and Humanities",
                "id": 208
            },
            {
                "name": "Critical Thinking",
                "id": 209
            }
        ]
    },
    {
        "id": 210,
        "parent_id": 208,
        "tax_name": "Counseling",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Arts and Humanities",
                "id": 208
            },
            {
                "name": "Counseling",
                "id": 210
            }
        ]
    },
    {
        "id": 211,
        "parent_id": 208,
        "tax_name": "History",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Arts and Humanities",
                "id": 208
            },
            {
                "name": "History",
                "id": 211
            }
        ]
    },
    {
        "id": 212,
        "parent_id": 208,
        "tax_name": "Music and Art",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Arts and Humanities",
                "id": 208
            },
            {
                "name": "Music and Art",
                "id": 212
            }
        ]
    },
    {
        "id": 213,
        "parent_id": 208,
        "tax_name": "Philosophy",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Arts and Humanities",
                "id": 208
            },
            {
                "name": "Philosophy",
                "id": 213
            }
        ]
    },
    {
        "id": 214,
        "parent_id": 207,
        "tax_name": "Language Learning",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests",
                "id": 207
            },
            {
                "name": "Language Learning",
                "id": 214
            }
        ]
    },
    {
        "id": 215,
        "parent_id": 207,
        "tax_name": "Life Sciences",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests",
                "id": 207
            },
            {
                "name": "Life Sciences",
                "id": 215
            }
        ]
    },
    {
        "id": 216,
        "parent_id": 215,
        "tax_name": "Animals and Veterinary Science",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Life Sciences",
                "id": 215
            },
            {
                "name": "Animals and Veterinary Science",
                "id": 216
            }
        ]
    },
    {
        "id": 217,
        "parent_id": 215,
        "tax_name": "Bioinformatics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Life Sciences",
                "id": 215
            },
            {
                "name": "Bioinformatics",
                "id": 217
            }
        ]
    },
    {
        "id": 218,
        "parent_id": 215,
        "tax_name": "Biology",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Life Sciences",
                "id": 215
            },
            {
                "name": "Biology",
                "id": 218
            }
        ]
    },
    {
        "id": 219,
        "parent_id": 215,
        "tax_name": "Medicine and Healthcare",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Life Sciences",
                "id": 215
            },
            {
                "name": "Medicine and Healthcare",
                "id": 219
            }
        ]
    },
    {
        "id": 220,
        "parent_id": 215,
        "tax_name": "Nutrition",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Life Sciences",
                "id": 215
            },
            {
                "name": "Nutrition",
                "id": 220
            }
        ]
    },
    {
        "id": 221,
        "parent_id": 215,
        "tax_name": "Clinical Science",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Life Sciences",
                "id": 215
            },
            {
                "name": "Clinical Science",
                "id": 221
            }
        ]
    },
    {
        "id": 222,
        "parent_id": 215,
        "tax_name": "Genetics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Life Sciences",
                "id": 215
            },
            {
                "name": "Genetics",
                "id": 222
            }
        ]
    },
    {
        "id": 223,
        "parent_id": 207,
        "tax_name": "Physical Science and Engineering",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests",
                "id": 207
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            }
        ]
    },
    {
        "id": 224,
        "parent_id": 223,
        "tax_name": "Electrical Engineering",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Electrical Engineering",
                "id": 224
            }
        ]
    },
    {
        "id": 225,
        "parent_id": 223,
        "tax_name": "Mechanical Engineering",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Mechanical Engineering",
                "id": 225
            }
        ]
    },
    {
        "id": 226,
        "parent_id": 223,
        "tax_name": "Chemistry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Chemistry",
                "id": 226
            }
        ]
    },
    {
        "id": 227,
        "parent_id": 223,
        "tax_name": "Environmental Science and Sustainability",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Environmental Science and Sustainability",
                "id": 227
            }
        ]
    },
    {
        "id": 228,
        "parent_id": 223,
        "tax_name": "Research Methods",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Research Methods",
                "id": 228
            }
        ]
    },
    {
        "id": 229,
        "parent_id": 223,
        "tax_name": "Geography",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Geography",
                "id": 229
            }
        ]
    },
    {
        "id": 230,
        "parent_id": 223,
        "tax_name": "Geology",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Geology",
                "id": 230
            }
        ]
    },
    {
        "id": 231,
        "parent_id": 223,
        "tax_name": "Physics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Physics",
                "id": 231
            }
        ]
    },
    {
        "id": 232,
        "parent_id": 223,
        "tax_name": "Space and Astronomy",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Physical Science and Engineering",
                "id": 223
            },
            {
                "name": "Space and Astronomy",
                "id": 232
            }
        ]
    },
    {
        "id": 233,
        "parent_id": 207,
        "tax_name": "Social Sciences",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests",
                "id": 207
            },
            {
                "name": "Social Sciences",
                "id": 233
            }
        ]
    },
    {
        "id": 234,
        "parent_id": 233,
        "tax_name": "Psychology",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "Psychology",
                "id": 234
            }
        ]
    },
    {
        "id": 235,
        "parent_id": 233,
        "tax_name": "International Relations",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "International Relations",
                "id": 235
            }
        ]
    },
    {
        "id": 236,
        "parent_id": 233,
        "tax_name": "Research Paper Writing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "Research Paper Writing",
                "id": 236
            }
        ]
    },
    {
        "id": 237,
        "parent_id": 233,
        "tax_name": "Statistics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "Statistics",
                "id": 237
            }
        ]
    },
    {
        "id": 238,
        "parent_id": 233,
        "tax_name": "Law",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "Law",
                "id": 238
            }
        ]
    },
    {
        "id": 239,
        "parent_id": 233,
        "tax_name": "Critical Thinking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "Critical Thinking",
                "id": 239
            }
        ]
    },
    {
        "id": 240,
        "parent_id": 233,
        "tax_name": "Economics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "Economics",
                "id": 240
            }
        ]
    },
    {
        "id": 241,
        "parent_id": 233,
        "tax_name": "Education",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "Education",
                "id": 241
            }
        ]
    },
    {
        "id": 242,
        "parent_id": 233,
        "tax_name": "Governance and Society",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Academic Interests"
            },
            {
                "name": "Social Sciences",
                "id": 233
            },
            {
                "name": "Governance and Society",
                "id": 242
            }
        ]
    },
    {
        "id": 243,
        "parent_id": 206,
        "tax_name": "Automotive",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            }
        ]
    },
    {
        "id": 244,
        "parent_id": 243,
        "tax_name": "Auto Buying and Selling",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Auto Buying and Selling",
                "id": 244
            }
        ]
    },
    {
        "id": 245,
        "parent_id": 243,
        "tax_name": "Auto Shows",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Auto Shows",
                "id": 245
            }
        ]
    },
    {
        "id": 246,
        "parent_id": 243,
        "tax_name": "Auto Technology",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Auto Technology",
                "id": 246
            }
        ]
    },
    {
        "id": 247,
        "parent_id": 243,
        "tax_name": "Budget Cars",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Budget Cars",
                "id": 247
            }
        ]
    },
    {
        "id": 248,
        "parent_id": 243,
        "tax_name": "Car Culture",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Car Culture",
                "id": 248
            }
        ]
    },
    {
        "id": 249,
        "parent_id": 243,
        "tax_name": "Classic Cars",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Classic Cars",
                "id": 249
            }
        ]
    },
    {
        "id": 250,
        "parent_id": 243,
        "tax_name": "Concept Cars",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Concept Cars",
                "id": 250
            }
        ]
    },
    {
        "id": 251,
        "parent_id": 243,
        "tax_name": "Dash Cam Videos",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Dash Cam Videos",
                "id": 251
            }
        ]
    },
    {
        "id": 252,
        "parent_id": 243,
        "tax_name": "Driverless Cars",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Driverless Cars",
                "id": 252
            }
        ]
    },
    {
        "id": 253,
        "parent_id": 243,
        "tax_name": "Green Vehicles",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Green Vehicles",
                "id": 253
            }
        ]
    },
    {
        "id": 254,
        "parent_id": 243,
        "tax_name": "Luxury Cars",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Luxury Cars",
                "id": 254
            }
        ]
    },
    {
        "id": 255,
        "parent_id": 243,
        "tax_name": "Motorcycles",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Motorcycles",
                "id": 255
            }
        ]
    },
    {
        "id": 256,
        "parent_id": 243,
        "tax_name": "Performance Cars",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Performance Cars",
                "id": 256
            }
        ]
    },
    {
        "id": 257,
        "parent_id": 243,
        "tax_name": "Scooters",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Automotive",
                "id": 243
            },
            {
                "name": "Scooters",
                "id": 257
            }
        ]
    },
    {
        "id": 258,
        "parent_id": 206,
        "tax_name": "Books and Literature",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            }
        ]
    },
    {
        "id": 259,
        "parent_id": 258,
        "tax_name": "Art and Photography Books",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Art and Photography Books",
                "id": 259
            }
        ]
    },
    {
        "id": 260,
        "parent_id": 258,
        "tax_name": "Biographies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Biographies",
                "id": 260
            }
        ]
    },
    {
        "id": 261,
        "parent_id": 258,
        "tax_name": "Children's Literature",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Children's Literature",
                "id": 261
            }
        ]
    },
    {
        "id": 262,
        "parent_id": 258,
        "tax_name": "Comics and Graphic Novels",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Comics and Graphic Novels",
                "id": 262
            }
        ]
    },
    {
        "id": 263,
        "parent_id": 258,
        "tax_name": "Cookbooks",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Cookbooks",
                "id": 263
            }
        ]
    },
    {
        "id": 264,
        "parent_id": 258,
        "tax_name": "Fiction",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Fiction",
                "id": 264
            }
        ]
    },
    {
        "id": 265,
        "parent_id": 258,
        "tax_name": "Poetry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Poetry",
                "id": 265
            }
        ]
    },
    {
        "id": 266,
        "parent_id": 258,
        "tax_name": "Travel Books",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Travel Books",
                "id": 266
            }
        ]
    },
    {
        "id": 267,
        "parent_id": 258,
        "tax_name": "Young Adult Literature",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Books and Literature",
                "id": 258
            },
            {
                "name": "Young Adult Literature",
                "id": 267
            }
        ]
    },
    {
        "id": 268,
        "parent_id": 206,
        "tax_name": "Business and Finance",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance",
                "id": 268
            }
        ]
    },
    {
        "id": 269,
        "parent_id": 268,
        "tax_name": "Business",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance",
                "id": 268
            },
            {
                "name": "Business",
                "id": 269
            }
        ]
    },
    {
        "id": 270,
        "parent_id": 269,
        "tax_name": "Business Accounting & Finance",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Business Accounting & Finance",
                "id": 270
            }
        ]
    },
    {
        "id": 271,
        "parent_id": 269,
        "tax_name": "Human Resources",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Human Resources",
                "id": 271
            }
        ]
    },
    {
        "id": 272,
        "parent_id": 269,
        "tax_name": "Large Business",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Large Business",
                "id": 272
            }
        ]
    },
    {
        "id": 273,
        "parent_id": 269,
        "tax_name": "Logistics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Logistics",
                "id": 273
            }
        ]
    },
    {
        "id": 274,
        "parent_id": 269,
        "tax_name": "Marketing and Advertising",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Marketing and Advertising",
                "id": 274
            }
        ]
    },
    {
        "id": 275,
        "parent_id": 269,
        "tax_name": "Sales",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Sales",
                "id": 275
            }
        ]
    },
    {
        "id": 276,
        "parent_id": 269,
        "tax_name": "Small and Medium-sized Business",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Small and Medium-sized Business",
                "id": 276
            }
        ]
    },
    {
        "id": 277,
        "parent_id": 269,
        "tax_name": "Startups",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Startups",
                "id": 277
            }
        ]
    },
    {
        "id": 278,
        "parent_id": 269,
        "tax_name": "Business Administration",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Business Administration",
                "id": 278
            }
        ]
    },
    {
        "id": 279,
        "parent_id": 269,
        "tax_name": "Business Banking & Finance",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            }
        ]
    },
    {
        "id": 280,
        "parent_id": 279,
        "tax_name": "Angel Investment",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business"
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            },
            {
                "name": "Angel Investment",
                "id": 280
            }
        ]
    },
    {
        "id": 281,
        "parent_id": 279,
        "tax_name": "Bankruptcy",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business"
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            },
            {
                "name": "Bankruptcy",
                "id": 281
            }
        ]
    },
    {
        "id": 282,
        "parent_id": 279,
        "tax_name": "Business Loans",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business"
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            },
            {
                "name": "Business Loans",
                "id": 282
            }
        ]
    },
    {
        "id": 283,
        "parent_id": 279,
        "tax_name": "Debt Factoring & Invoice Discounting",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business"
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            },
            {
                "name": "Debt Factoring & Invoice Discounting",
                "id": 283
            }
        ]
    },
    {
        "id": 284,
        "parent_id": 279,
        "tax_name": "Mergers and Acquisitions",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business"
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            },
            {
                "name": "Mergers and Acquisitions",
                "id": 284
            }
        ]
    },
    {
        "id": 285,
        "parent_id": 279,
        "tax_name": "Private Equity",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business"
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            },
            {
                "name": "Private Equity",
                "id": 285
            }
        ]
    },
    {
        "id": 286,
        "parent_id": 279,
        "tax_name": "Sale & Lease Back",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business"
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            },
            {
                "name": "Sale & Lease Back",
                "id": 286
            }
        ]
    },
    {
        "id": 287,
        "parent_id": 279,
        "tax_name": "Venture Capital",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business"
            },
            {
                "name": "Business Banking & Finance",
                "id": 279
            },
            {
                "name": "Venture Capital",
                "id": 287
            }
        ]
    },
    {
        "id": 288,
        "parent_id": 269,
        "tax_name": "Business I.T.",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Business I.T.",
                "id": 288
            }
        ]
    },
    {
        "id": 289,
        "parent_id": 269,
        "tax_name": "Business Operations",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Business Operations",
                "id": 289
            }
        ]
    },
    {
        "id": 290,
        "parent_id": 269,
        "tax_name": "Consumer Issues",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Consumer Issues",
                "id": 290
            }
        ]
    },
    {
        "id": 291,
        "parent_id": 269,
        "tax_name": "Executive Leadership & Management",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Executive Leadership & Management",
                "id": 291
            }
        ]
    },
    {
        "id": 292,
        "parent_id": 269,
        "tax_name": "Government Business",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Government Business",
                "id": 292
            }
        ]
    },
    {
        "id": 293,
        "parent_id": 269,
        "tax_name": "Green Solutions",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Green Solutions",
                "id": 293
            }
        ]
    },
    {
        "id": 294,
        "parent_id": 269,
        "tax_name": "Business Utilities",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Business",
                "id": 269
            },
            {
                "name": "Business Utilities",
                "id": 294
            }
        ]
    },
    {
        "id": 295,
        "parent_id": 268,
        "tax_name": "Economy",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance",
                "id": 268
            },
            {
                "name": "Economy",
                "id": 295
            }
        ]
    },
    {
        "id": 296,
        "parent_id": 295,
        "tax_name": "Commodities",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Commodities",
                "id": 296
            }
        ]
    },
    {
        "id": 297,
        "parent_id": 295,
        "tax_name": "Currencies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Currencies",
                "id": 297
            }
        ]
    },
    {
        "id": 298,
        "parent_id": 295,
        "tax_name": "Financial Crisis",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Financial Crisis",
                "id": 298
            }
        ]
    },
    {
        "id": 299,
        "parent_id": 295,
        "tax_name": "Financial Reform",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Financial Reform",
                "id": 299
            }
        ]
    },
    {
        "id": 300,
        "parent_id": 295,
        "tax_name": "Financial Regulation",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Financial Regulation",
                "id": 300
            }
        ]
    },
    {
        "id": 301,
        "parent_id": 295,
        "tax_name": "Gasoline Prices",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Gasoline Prices",
                "id": 301
            }
        ]
    },
    {
        "id": 302,
        "parent_id": 295,
        "tax_name": "Housing Market",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Housing Market",
                "id": 302
            }
        ]
    },
    {
        "id": 303,
        "parent_id": 295,
        "tax_name": "Interest Rates",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Interest Rates",
                "id": 303
            }
        ]
    },
    {
        "id": 304,
        "parent_id": 295,
        "tax_name": "Job Market",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Economy",
                "id": 295
            },
            {
                "name": "Job Market",
                "id": 304
            }
        ]
    },
    {
        "id": 305,
        "parent_id": 268,
        "tax_name": "Industries",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance",
                "id": 268
            },
            {
                "name": "Industries",
                "id": 305
            }
        ]
    },
    {
        "id": 306,
        "parent_id": 305,
        "tax_name": "Advertising Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Advertising Industry",
                "id": 306
            }
        ]
    },
    {
        "id": 307,
        "parent_id": 305,
        "tax_name": "Education industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Education industry",
                "id": 307
            }
        ]
    },
    {
        "id": 308,
        "parent_id": 305,
        "tax_name": "Entertainment Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Entertainment Industry",
                "id": 308
            }
        ]
    },
    {
        "id": 309,
        "parent_id": 305,
        "tax_name": "Environmental Services Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Environmental Services Industry",
                "id": 309
            }
        ]
    },
    {
        "id": 310,
        "parent_id": 305,
        "tax_name": "Financial Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Financial Industry",
                "id": 310
            }
        ]
    },
    {
        "id": 311,
        "parent_id": 305,
        "tax_name": "Food Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Food Industry",
                "id": 311
            }
        ]
    },
    {
        "id": 312,
        "parent_id": 305,
        "tax_name": "Healthcare Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Healthcare Industry",
                "id": 312
            }
        ]
    },
    {
        "id": 313,
        "parent_id": 305,
        "tax_name": "Hospitality Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Hospitality Industry",
                "id": 313
            }
        ]
    },
    {
        "id": 314,
        "parent_id": 305,
        "tax_name": "Information Services Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Information Services Industry",
                "id": 314
            }
        ]
    },
    {
        "id": 315,
        "parent_id": 305,
        "tax_name": "Legal Services Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Legal Services Industry",
                "id": 315
            }
        ]
    },
    {
        "id": 316,
        "parent_id": 305,
        "tax_name": "Logistics and Transportation Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Logistics and Transportation Industry",
                "id": 316
            }
        ]
    },
    {
        "id": 317,
        "parent_id": 305,
        "tax_name": "Agriculture",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Agriculture",
                "id": 317
            }
        ]
    },
    {
        "id": 318,
        "parent_id": 305,
        "tax_name": "Management Consulting Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Management Consulting Industry",
                "id": 318
            }
        ]
    },
    {
        "id": 319,
        "parent_id": 305,
        "tax_name": "Manufacturing Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Manufacturing Industry",
                "id": 319
            }
        ]
    },
    {
        "id": 320,
        "parent_id": 305,
        "tax_name": "Mechanical and Industrial Engineering Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Mechanical and Industrial Engineering Industry",
                "id": 320
            }
        ]
    },
    {
        "id": 321,
        "parent_id": 305,
        "tax_name": "Media Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Media Industry",
                "id": 321
            }
        ]
    },
    {
        "id": 322,
        "parent_id": 305,
        "tax_name": "Metals Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Metals Industry",
                "id": 322
            }
        ]
    },
    {
        "id": 323,
        "parent_id": 305,
        "tax_name": "Non-Profit Organizations",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Non-Profit Organizations",
                "id": 323
            }
        ]
    },
    {
        "id": 324,
        "parent_id": 305,
        "tax_name": "Pharmaceutical Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Pharmaceutical Industry",
                "id": 324
            }
        ]
    },
    {
        "id": 325,
        "parent_id": 305,
        "tax_name": "Power and Energy Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Power and Energy Industry",
                "id": 325
            }
        ]
    },
    {
        "id": 326,
        "parent_id": 305,
        "tax_name": "Publishing Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Publishing Industry",
                "id": 326
            }
        ]
    },
    {
        "id": 327,
        "parent_id": 305,
        "tax_name": "Real Estate Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Real Estate Industry",
                "id": 327
            }
        ]
    },
    {
        "id": 328,
        "parent_id": 305,
        "tax_name": "Apparel Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Apparel Industry",
                "id": 328
            }
        ]
    },
    {
        "id": 329,
        "parent_id": 305,
        "tax_name": "Retail Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Retail Industry",
                "id": 329
            }
        ]
    },
    {
        "id": 330,
        "parent_id": 305,
        "tax_name": "Technology Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Technology Industry",
                "id": 330
            }
        ]
    },
    {
        "id": 331,
        "parent_id": 305,
        "tax_name": "Telecommunications Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Telecommunications Industry",
                "id": 331
            }
        ]
    },
    {
        "id": 332,
        "parent_id": 305,
        "tax_name": "Automotive Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Automotive Industry",
                "id": 332
            }
        ]
    },
    {
        "id": 333,
        "parent_id": 305,
        "tax_name": "Aviation Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Aviation Industry",
                "id": 333
            }
        ]
    },
    {
        "id": 334,
        "parent_id": 305,
        "tax_name": "Biotech and Biomedical Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Biotech and Biomedical Industry",
                "id": 334
            }
        ]
    },
    {
        "id": 335,
        "parent_id": 305,
        "tax_name": "Civil Engineering Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Civil Engineering Industry",
                "id": 335
            }
        ]
    },
    {
        "id": 336,
        "parent_id": 305,
        "tax_name": "Construction Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Construction Industry",
                "id": 336
            }
        ]
    },
    {
        "id": 337,
        "parent_id": 305,
        "tax_name": "Defense Industry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Business and Finance"
            },
            {
                "name": "Industries",
                "id": 305
            },
            {
                "name": "Defense Industry",
                "id": 337
            }
        ]
    },
    {
        "id": 338,
        "parent_id": 206,
        "tax_name": "Careers",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Careers",
                "id": 338
            }
        ]
    },
    {
        "id": 339,
        "parent_id": 338,
        "tax_name": "Apprenticeships",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Careers",
                "id": 338
            },
            {
                "name": "Apprenticeships",
                "id": 339
            }
        ]
    },
    {
        "id": 340,
        "parent_id": 338,
        "tax_name": "Career Advice",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Careers",
                "id": 338
            },
            {
                "name": "Career Advice",
                "id": 340
            }
        ]
    },
    {
        "id": 341,
        "parent_id": 338,
        "tax_name": "Career Planning",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Careers",
                "id": 338
            },
            {
                "name": "Career Planning",
                "id": 341
            }
        ]
    },
    {
        "id": 342,
        "parent_id": 338,
        "tax_name": "Remote Working",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Careers",
                "id": 338
            },
            {
                "name": "Remote Working",
                "id": 342
            }
        ]
    },
    {
        "id": 343,
        "parent_id": 338,
        "tax_name": "Vocational Training",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Careers",
                "id": 338
            },
            {
                "name": "Vocational Training",
                "id": 343
            }
        ]
    },
    {
        "id": 344,
        "parent_id": 258,
        "tax_name": "Education",
        "tier": [
            {
                "name": "Interest",
                "id": 258
            },
            {
                "name": "Education",
                "id": 344
            }
        ]
    },
    {
        "id": 345,
        "parent_id": 344,
        "tax_name": "Adult Education",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Education",
                "id": 344
            },
            {
                "name": "Adult Education",
                "id": 345
            }
        ]
    },
    {
        "id": 346,
        "parent_id": 344,
        "tax_name": "Language Learning",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Education",
                "id": 344
            },
            {
                "name": "Language Learning",
                "id": 346
            }
        ]
    },
    {
        "id": 347,
        "parent_id": 344,
        "tax_name": "Online Education",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Education",
                "id": 344
            },
            {
                "name": "Online Education",
                "id": 347
            }
        ]
    },
    {
        "id": 348,
        "parent_id": 206,
        "tax_name": "Family and Relationships",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Family and Relationships",
                "id": 348
            }
        ]
    },
    {
        "id": 350,
        "parent_id": 348,
        "tax_name": "Parenting",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Family and Relationships",
                "id": 348
            },
            {
                "name": "Parenting",
                "id": 350
            }
        ]
    },
    {
        "id": 352,
        "parent_id": 350,
        "tax_name": "Daycare and Pre-School",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Family and Relationships"
            },
            {
                "name": "Parenting",
                "id": 350
            },
            {
                "name": "Daycare and Pre-School",
                "id": 352
            }
        ]
    },
    {
        "id": 353,
        "parent_id": 350,
        "tax_name": "Internet Safety",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Family and Relationships"
            },
            {
                "name": "Parenting",
                "id": 350
            },
            {
                "name": "Internet Safety",
                "id": 353
            }
        ]
    },
    {
        "id": 354,
        "parent_id": 350,
        "tax_name": "Parenting Babies and Toddlers",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Family and Relationships"
            },
            {
                "name": "Parenting",
                "id": 350
            },
            {
                "name": "Parenting Babies and Toddlers",
                "id": 354
            }
        ]
    },
    {
        "id": 355,
        "parent_id": 350,
        "tax_name": "Parenting Children Aged 4-11",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Family and Relationships"
            },
            {
                "name": "Parenting",
                "id": 350
            },
            {
                "name": "Parenting Children Aged 4-11",
                "id": 355
            }
        ]
    },
    {
        "id": 356,
        "parent_id": 350,
        "tax_name": "Parenting Teens",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Family and Relationships"
            },
            {
                "name": "Parenting",
                "id": 350
            },
            {
                "name": "Parenting Teens",
                "id": 356
            }
        ]
    },
    {
        "id": 359,
        "parent_id": 206,
        "tax_name": "Fine Art",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            }
        ]
    },
    {
        "id": 360,
        "parent_id": 359,
        "tax_name": "Costume",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            },
            {
                "name": "Costume",
                "id": 360
            }
        ]
    },
    {
        "id": 361,
        "parent_id": 359,
        "tax_name": "Dance",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            },
            {
                "name": "Dance",
                "id": 361
            }
        ]
    },
    {
        "id": 362,
        "parent_id": 359,
        "tax_name": "Design",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            },
            {
                "name": "Design",
                "id": 362
            }
        ]
    },
    {
        "id": 363,
        "parent_id": 359,
        "tax_name": "Digital Arts",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            },
            {
                "name": "Digital Arts",
                "id": 363
            }
        ]
    },
    {
        "id": 364,
        "parent_id": 359,
        "tax_name": "Fine Art Photography",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            },
            {
                "name": "Fine Art Photography",
                "id": 364
            }
        ]
    },
    {
        "id": 365,
        "parent_id": 359,
        "tax_name": "Modern Art",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            },
            {
                "name": "Modern Art",
                "id": 365
            }
        ]
    },
    {
        "id": 366,
        "parent_id": 359,
        "tax_name": "Opera",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            },
            {
                "name": "Opera",
                "id": 366
            }
        ]
    },
    {
        "id": 367,
        "parent_id": 359,
        "tax_name": "Theater",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Fine Art",
                "id": 359
            },
            {
                "name": "Theater",
                "id": 367
            }
        ]
    },
    {
        "id": 368,
        "parent_id": 206,
        "tax_name": "Food & Drink",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            }
        ]
    },
    {
        "id": 369,
        "parent_id": 368,
        "tax_name": "Alcoholic Beverages",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Alcoholic Beverages",
                "id": 369
            }
        ]
    },
    {
        "id": 370,
        "parent_id": 368,
        "tax_name": "Barbecues and Grilling",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Barbecues and Grilling",
                "id": 370
            }
        ]
    },
    {
        "id": 371,
        "parent_id": 368,
        "tax_name": "Cooking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Cooking",
                "id": 371
            }
        ]
    },
    {
        "id": 372,
        "parent_id": 368,
        "tax_name": "Desserts and Baking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Desserts and Baking",
                "id": 372
            }
        ]
    },
    {
        "id": 373,
        "parent_id": 368,
        "tax_name": "Dining Out",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Dining Out",
                "id": 373
            }
        ]
    },
    {
        "id": 374,
        "parent_id": 368,
        "tax_name": "Food Allergies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Food Allergies",
                "id": 374
            }
        ]
    },
    {
        "id": 375,
        "parent_id": 368,
        "tax_name": "Food Movements",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Food Movements",
                "id": 375
            }
        ]
    },
    {
        "id": 376,
        "parent_id": 368,
        "tax_name": "Healthy Cooking and Eating",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Healthy Cooking and Eating",
                "id": 376
            }
        ]
    },
    {
        "id": 377,
        "parent_id": 368,
        "tax_name": "Non-Alcoholic Beverages",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Non-Alcoholic Beverages",
                "id": 377
            }
        ]
    },
    {
        "id": 378,
        "parent_id": 368,
        "tax_name": "Vegan Diets",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Vegan Diets",
                "id": 378
            }
        ]
    },
    {
        "id": 379,
        "parent_id": 368,
        "tax_name": "Vegetarian Diets",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "Vegetarian Diets",
                "id": 379
            }
        ]
    },
    {
        "id": 380,
        "parent_id": 368,
        "tax_name": "World Cuisines",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Food & Drink",
                "id": 368
            },
            {
                "name": "World Cuisines",
                "id": 380
            }
        ]
    },
    {
        "id": 381,
        "parent_id": 206,
        "tax_name": "Health and Medical Services",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services",
                "id": 381
            }
        ]
    },
    {
        "id": 382,
        "parent_id": 381,
        "tax_name": "Health & Pharma",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services",
                "id": 381
            },
            {
                "name": "Health & Pharma",
                "id": 382
            }
        ]
    },
    {
        "id": 383,
        "parent_id": 382,
        "tax_name": "Medical Services",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma",
                "id": 382
            },
            {
                "name": "Medical Services",
                "id": 383
            }
        ]
    },
    {
        "id": 385,
        "parent_id": 383,
        "tax_name": "Health Services",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Health Services",
                "id": 385
            }
        ]
    },
    {
        "id": 386,
        "parent_id": 383,
        "tax_name": "Health Care and Physicians",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Health Care and Physicians",
                "id": 386
            }
        ]
    },
    {
        "id": 387,
        "parent_id": 383,
        "tax_name": "Alternative and Natural Medicine",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Alternative and Natural Medicine",
                "id": 387
            }
        ]
    },
    {
        "id": 388,
        "parent_id": 383,
        "tax_name": "Cosmetic Medical Services",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Cosmetic Medical Services",
                "id": 388
            }
        ]
    },
    {
        "id": 389,
        "parent_id": 383,
        "tax_name": "Drugstores and Pharmacies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Drugstores and Pharmacies",
                "id": 389
            }
        ]
    },
    {
        "id": 390,
        "parent_id": 383,
        "tax_name": "Elder Care",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Elder Care",
                "id": 390
            }
        ]
    },
    {
        "id": 391,
        "parent_id": 383,
        "tax_name": "Vision Care",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Vision Care",
                "id": 391
            }
        ]
    },
    {
        "id": 392,
        "parent_id": 383,
        "tax_name": "Dental Care",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Dental Care",
                "id": 392
            }
        ]
    },
    {
        "id": 393,
        "parent_id": 383,
        "tax_name": "Massage Therapists",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Massage Therapists",
                "id": 393
            }
        ]
    },
    {
        "id": 394,
        "parent_id": 383,
        "tax_name": "Physical Therapists",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Physical Therapists",
                "id": 394
            }
        ]
    },
    {
        "id": 395,
        "parent_id": 383,
        "tax_name": "Chiropractors",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Chiropractors",
                "id": 395
            }
        ]
    },
    {
        "id": 397,
        "parent_id": 383,
        "tax_name": "Hospitals",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Hospitals",
                "id": 397
            }
        ]
    },
    {
        "id": 398,
        "parent_id": 383,
        "tax_name": "Skin Care Treatments",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Skin Care Treatments",
                "id": 398
            }
        ]
    },
    {
        "id": 399,
        "parent_id": 383,
        "tax_name": "Smoking Cessation",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Smoking Cessation",
                "id": 399
            }
        ]
    },
    {
        "id": 400,
        "parent_id": 383,
        "tax_name": "Clinical Research",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Clinical Research",
                "id": 400
            }
        ]
    },
    {
        "id": 401,
        "parent_id": 383,
        "tax_name": "Hair Loss Treatments",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Hair Loss Treatments",
                "id": 401
            }
        ]
    },
    {
        "id": 404,
        "parent_id": 383,
        "tax_name": "Vaccines",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Health and Medical Services"
            },
            {
                "name": "Health & Pharma"
            },
            {
                "name": "Medical Services",
                "id": 383
            },
            {
                "name": "Vaccines",
                "id": 404
            }
        ]
    },
    {
        "id": 406,
        "parent_id": 206,
        "tax_name": "Healthy Living",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            }
        ]
    },
    {
        "id": 407,
        "parent_id": 406,
        "tax_name": "Children's Health",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            },
            {
                "name": "Children's Health",
                "id": 407
            }
        ]
    },
    {
        "id": 408,
        "parent_id": 406,
        "tax_name": "Fitness and Exercise",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            },
            {
                "name": "Fitness and Exercise",
                "id": 408
            }
        ]
    },
    {
        "id": 409,
        "parent_id": 408,
        "tax_name": "Participant Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living"
            },
            {
                "name": "Fitness and Exercise",
                "id": 408
            },
            {
                "name": "Participant Sports",
                "id": 409
            }
        ]
    },
    {
        "id": 410,
        "parent_id": 408,
        "tax_name": "Running and Jogging",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living"
            },
            {
                "name": "Fitness and Exercise",
                "id": 408
            },
            {
                "name": "Running and Jogging",
                "id": 410
            }
        ]
    },
    {
        "id": 411,
        "parent_id": 406,
        "tax_name": "Men's Health",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            },
            {
                "name": "Men's Health",
                "id": 411
            }
        ]
    },
    {
        "id": 412,
        "parent_id": 406,
        "tax_name": "Nutrition",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            },
            {
                "name": "Nutrition",
                "id": 412
            }
        ]
    },
    {
        "id": 413,
        "parent_id": 406,
        "tax_name": "Senior Health",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            },
            {
                "name": "Senior Health",
                "id": 413
            }
        ]
    },
    {
        "id": 414,
        "parent_id": 406,
        "tax_name": "Weight Loss",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            },
            {
                "name": "Weight Loss",
                "id": 414
            }
        ]
    },
    {
        "id": 415,
        "parent_id": 406,
        "tax_name": "Wellness",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            },
            {
                "name": "Wellness",
                "id": 415
            }
        ]
    },
    {
        "id": 416,
        "parent_id": 415,
        "tax_name": "Alternative Medicine",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living"
            },
            {
                "name": "Wellness",
                "id": 415
            },
            {
                "name": "Alternative Medicine",
                "id": 416
            }
        ]
    },
    {
        "id": 417,
        "parent_id": 416,
        "tax_name": "Herbs and Supplements",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living"
            },
            {
                "name": "Wellness"
            },
            {
                "name": "Alternative Medicine",
                "id": 416
            },
            {
                "name": "Herbs and Supplements",
                "id": 417
            }
        ]
    },
    {
        "id": 418,
        "parent_id": 416,
        "tax_name": "Holistic Health",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living"
            },
            {
                "name": "Wellness"
            },
            {
                "name": "Alternative Medicine",
                "id": 416
            },
            {
                "name": "Holistic Health",
                "id": 418
            }
        ]
    },
    {
        "id": 419,
        "parent_id": 415,
        "tax_name": "Physical Therapy",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living"
            },
            {
                "name": "Wellness",
                "id": 415
            },
            {
                "name": "Physical Therapy",
                "id": 419
            }
        ]
    },
    {
        "id": 420,
        "parent_id": 415,
        "tax_name": "Smoking Cessation",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living"
            },
            {
                "name": "Wellness",
                "id": 415
            },
            {
                "name": "Smoking Cessation",
                "id": 420
            }
        ]
    },
    {
        "id": 421,
        "parent_id": 406,
        "tax_name": "Women's Health",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Healthy Living",
                "id": 406
            },
            {
                "name": "Women's Health",
                "id": 421
            }
        ]
    },
    {
        "id": 422,
        "parent_id": 206,
        "tax_name": "Hobbies & Interests",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            }
        ]
    },
    {
        "id": 423,
        "parent_id": 422,
        "tax_name": "Antiquing and Antiques",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Antiquing and Antiques",
                "id": 423
            }
        ]
    },
    {
        "id": 424,
        "parent_id": 422,
        "tax_name": "Arts and Crafts",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            }
        ]
    },
    {
        "id": 425,
        "parent_id": 424,
        "tax_name": "Beadwork",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Beadwork",
                "id": 425
            }
        ]
    },
    {
        "id": 426,
        "parent_id": 424,
        "tax_name": "Candle and Soap Making",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Candle and Soap Making",
                "id": 426
            }
        ]
    },
    {
        "id": 427,
        "parent_id": 424,
        "tax_name": "Drawing and Sketching",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Drawing and Sketching",
                "id": 427
            }
        ]
    },
    {
        "id": 428,
        "parent_id": 424,
        "tax_name": "Jewelry Making",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Jewelry Making",
                "id": 428
            }
        ]
    },
    {
        "id": 429,
        "parent_id": 424,
        "tax_name": "Needlework",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Needlework",
                "id": 429
            }
        ]
    },
    {
        "id": 430,
        "parent_id": 424,
        "tax_name": "Painting",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Painting",
                "id": 430
            }
        ]
    },
    {
        "id": 431,
        "parent_id": 424,
        "tax_name": "Photography",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Photography",
                "id": 431
            }
        ]
    },
    {
        "id": 432,
        "parent_id": 424,
        "tax_name": "Scrapbooking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Scrapbooking",
                "id": 432
            }
        ]
    },
    {
        "id": 433,
        "parent_id": 424,
        "tax_name": "Woodworking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Arts and Crafts",
                "id": 424
            },
            {
                "name": "Woodworking",
                "id": 433
            }
        ]
    },
    {
        "id": 434,
        "parent_id": 422,
        "tax_name": "Beekeeping",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Beekeeping",
                "id": 434
            }
        ]
    },
    {
        "id": 435,
        "parent_id": 422,
        "tax_name": "Birdwatching",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Birdwatching",
                "id": 435
            }
        ]
    },
    {
        "id": 436,
        "parent_id": 422,
        "tax_name": "Cigars",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Cigars",
                "id": 436
            }
        ]
    },
    {
        "id": 437,
        "parent_id": 422,
        "tax_name": "Collecting",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Collecting",
                "id": 437
            }
        ]
    },
    {
        "id": 438,
        "parent_id": 437,
        "tax_name": "Comic Books",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Collecting",
                "id": 437
            },
            {
                "name": "Comic Books",
                "id": 438
            }
        ]
    },
    {
        "id": 439,
        "parent_id": 437,
        "tax_name": "Stamps and Coins",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Collecting",
                "id": 437
            },
            {
                "name": "Stamps and Coins",
                "id": 439
            }
        ]
    },
    {
        "id": 440,
        "parent_id": 422,
        "tax_name": "Content Production",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Content Production",
                "id": 440
            }
        ]
    },
    {
        "id": 441,
        "parent_id": 440,
        "tax_name": "Audio Production",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Content Production",
                "id": 440
            },
            {
                "name": "Audio Production",
                "id": 441
            }
        ]
    },
    {
        "id": 442,
        "parent_id": 440,
        "tax_name": "Freelance Writing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Content Production",
                "id": 440
            },
            {
                "name": "Freelance Writing",
                "id": 442
            }
        ]
    },
    {
        "id": 443,
        "parent_id": 440,
        "tax_name": "Screenwriting",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Content Production",
                "id": 440
            },
            {
                "name": "Screenwriting",
                "id": 443
            }
        ]
    },
    {
        "id": 444,
        "parent_id": 440,
        "tax_name": "Video Production",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Content Production",
                "id": 440
            },
            {
                "name": "Video Production",
                "id": 444
            }
        ]
    },
    {
        "id": 445,
        "parent_id": 422,
        "tax_name": "Games and Puzzles",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Games and Puzzles",
                "id": 445
            }
        ]
    },
    {
        "id": 446,
        "parent_id": 445,
        "tax_name": "Board Games and Puzzles",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Games and Puzzles",
                "id": 445
            },
            {
                "name": "Board Games and Puzzles",
                "id": 446
            }
        ]
    },
    {
        "id": 447,
        "parent_id": 445,
        "tax_name": "Card Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Games and Puzzles",
                "id": 445
            },
            {
                "name": "Card Games",
                "id": 447
            }
        ]
    },
    {
        "id": 448,
        "parent_id": 445,
        "tax_name": "Roleplaying Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests"
            },
            {
                "name": "Games and Puzzles",
                "id": 445
            },
            {
                "name": "Roleplaying Games",
                "id": 448
            }
        ]
    },
    {
        "id": 449,
        "parent_id": 422,
        "tax_name": "Genealogy and Ancestry",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Genealogy and Ancestry",
                "id": 449
            }
        ]
    },
    {
        "id": 450,
        "parent_id": 422,
        "tax_name": "Magic and Illusion",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Magic and Illusion",
                "id": 450
            }
        ]
    },
    {
        "id": 451,
        "parent_id": 422,
        "tax_name": "Model Toys",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Model Toys",
                "id": 451
            }
        ]
    },
    {
        "id": 452,
        "parent_id": 422,
        "tax_name": "Musical Instruments",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Musical Instruments",
                "id": 452
            }
        ]
    },
    {
        "id": 453,
        "parent_id": 422,
        "tax_name": "Paranormal Phenomena",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Paranormal Phenomena",
                "id": 453
            }
        ]
    },
    {
        "id": 454,
        "parent_id": 422,
        "tax_name": "Radio Control",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Radio Control",
                "id": 454
            }
        ]
    },
    {
        "id": 455,
        "parent_id": 422,
        "tax_name": "Sci-fi and Fantasy",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Sci-fi and Fantasy",
                "id": 455
            }
        ]
    },
    {
        "id": 456,
        "parent_id": 422,
        "tax_name": "Workshops and Classes",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Hobbies & Interests",
                "id": 422
            },
            {
                "name": "Workshops and Classes",
                "id": 456
            }
        ]
    },
    {
        "id": 457,
        "parent_id": 206,
        "tax_name": "Home & Garden",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            }
        ]
    },
    {
        "id": 458,
        "parent_id": 457,
        "tax_name": "Gardening",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            },
            {
                "name": "Gardening",
                "id": 458
            }
        ]
    },
    {
        "id": 459,
        "parent_id": 457,
        "tax_name": "Home Entertaining",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            },
            {
                "name": "Home Entertaining",
                "id": 459
            }
        ]
    },
    {
        "id": 460,
        "parent_id": 457,
        "tax_name": "Home Improvement",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            },
            {
                "name": "Home Improvement",
                "id": 460
            }
        ]
    },
    {
        "id": 461,
        "parent_id": 457,
        "tax_name": "Interior Decorating",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            },
            {
                "name": "Interior Decorating",
                "id": 461
            }
        ]
    },
    {
        "id": 462,
        "parent_id": 457,
        "tax_name": "Landscaping",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            },
            {
                "name": "Landscaping",
                "id": 462
            }
        ]
    },
    {
        "id": 463,
        "parent_id": 457,
        "tax_name": "Outdoor Decorating",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            },
            {
                "name": "Outdoor Decorating",
                "id": 463
            }
        ]
    },
    {
        "id": 464,
        "parent_id": 457,
        "tax_name": "Remodeling & Construction",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            },
            {
                "name": "Remodeling & Construction",
                "id": 464
            }
        ]
    },
    {
        "id": 465,
        "parent_id": 457,
        "tax_name": "Smart Home",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Home & Garden",
                "id": 457
            },
            {
                "name": "Smart Home",
                "id": 465
            }
        ]
    },
    {
        "id": 466,
        "parent_id": 206,
        "tax_name": "Medical Health",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Medical Health",
                "id": 466
            }
        ]
    },
    {
        "id": 467,
        "parent_id": 206,
        "tax_name": "Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            }
        ]
    },
    {
        "id": 468,
        "parent_id": 467,
        "tax_name": "Action and Adventure Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Action and Adventure Movies",
                "id": 468
            }
        ]
    },
    {
        "id": 469,
        "parent_id": 467,
        "tax_name": "Animation Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Animation Movies",
                "id": 469
            }
        ]
    },
    {
        "id": 470,
        "parent_id": 467,
        "tax_name": "Comedy Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Comedy Movies",
                "id": 470
            }
        ]
    },
    {
        "id": 471,
        "parent_id": 467,
        "tax_name": "Crime and Mystery Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Crime and Mystery Movies",
                "id": 471
            }
        ]
    },
    {
        "id": 472,
        "parent_id": 467,
        "tax_name": "Documentary Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Documentary Movies",
                "id": 472
            }
        ]
    },
    {
        "id": 473,
        "parent_id": 467,
        "tax_name": "Drama Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Drama Movies",
                "id": 473
            }
        ]
    },
    {
        "id": 474,
        "parent_id": 467,
        "tax_name": "Family and Children Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Family and Children Movies",
                "id": 474
            }
        ]
    },
    {
        "id": 475,
        "parent_id": 467,
        "tax_name": "Fantasy Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Fantasy Movies",
                "id": 475
            }
        ]
    },
    {
        "id": 476,
        "parent_id": 467,
        "tax_name": "Horror Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Horror Movies",
                "id": 476
            }
        ]
    },
    {
        "id": 477,
        "parent_id": 467,
        "tax_name": "Indie and Arthouse Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Indie and Arthouse Movies",
                "id": 477
            }
        ]
    },
    {
        "id": 478,
        "parent_id": 467,
        "tax_name": "Romance Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Romance Movies",
                "id": 478
            }
        ]
    },
    {
        "id": 479,
        "parent_id": 467,
        "tax_name": "Science Fiction Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "Science Fiction Movies",
                "id": 479
            }
        ]
    },
    {
        "id": 480,
        "parent_id": 467,
        "tax_name": "World Movies",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Movies",
                "id": 467
            },
            {
                "name": "World Movies",
                "id": 480
            }
        ]
    },
    {
        "id": 481,
        "parent_id": 206,
        "tax_name": "Music and Audio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            }
        ]
    },
    {
        "id": 482,
        "parent_id": 481,
        "tax_name": "Adult Album Alternative",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Adult Album Alternative",
                "id": 482
            }
        ]
    },
    {
        "id": 483,
        "parent_id": 481,
        "tax_name": "Adult Contemporary Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Adult Contemporary Music",
                "id": 483
            }
        ]
    },
    {
        "id": 484,
        "parent_id": 483,
        "tax_name": "Soft AC Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Adult Contemporary Music",
                "id": 483
            },
            {
                "name": "Soft AC Music",
                "id": 484
            }
        ]
    },
    {
        "id": 485,
        "parent_id": 483,
        "tax_name": "Urban AC Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Adult Contemporary Music",
                "id": 483
            },
            {
                "name": "Urban AC Music",
                "id": 485
            }
        ]
    },
    {
        "id": 486,
        "parent_id": 481,
        "tax_name": "Alternative Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Alternative Music",
                "id": 486
            }
        ]
    },
    {
        "id": 487,
        "parent_id": 481,
        "tax_name": "Blues",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Blues",
                "id": 487
            }
        ]
    },
    {
        "id": 488,
        "parent_id": 481,
        "tax_name": "Children's Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Children's Music",
                "id": 488
            }
        ]
    },
    {
        "id": 489,
        "parent_id": 481,
        "tax_name": "Classic Hits",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Classic Hits",
                "id": 489
            }
        ]
    },
    {
        "id": 490,
        "parent_id": 481,
        "tax_name": "Classical Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Classical Music",
                "id": 490
            }
        ]
    },
    {
        "id": 491,
        "parent_id": 481,
        "tax_name": "College Radio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "College Radio",
                "id": 491
            }
        ]
    },
    {
        "id": 492,
        "parent_id": 481,
        "tax_name": "Comedy (Music and Audio)",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Comedy (Music and Audio)",
                "id": 492
            }
        ]
    },
    {
        "id": 493,
        "parent_id": 481,
        "tax_name": "Contemporary Hits/Pop/Top 40",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Contemporary Hits/Pop/Top 40",
                "id": 493
            }
        ]
    },
    {
        "id": 494,
        "parent_id": 481,
        "tax_name": "Country Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Country Music",
                "id": 494
            }
        ]
    },
    {
        "id": 495,
        "parent_id": 481,
        "tax_name": "Dance and Electronic Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Dance and Electronic Music",
                "id": 495
            }
        ]
    },
    {
        "id": 496,
        "parent_id": 481,
        "tax_name": "Gospel Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Gospel Music",
                "id": 496
            }
        ]
    },
    {
        "id": 497,
        "parent_id": 481,
        "tax_name": "Hip Hop Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Hip Hop Music",
                "id": 497
            }
        ]
    },
    {
        "id": 498,
        "parent_id": 481,
        "tax_name": "Inspirational/New Age Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Inspirational/New Age Music",
                "id": 498
            }
        ]
    },
    {
        "id": 499,
        "parent_id": 481,
        "tax_name": "Jazz",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Jazz",
                "id": 499
            }
        ]
    },
    {
        "id": 500,
        "parent_id": 481,
        "tax_name": "Oldies/Adult Standards",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Oldies/Adult Standards",
                "id": 500
            }
        ]
    },
    {
        "id": 501,
        "parent_id": 481,
        "tax_name": "R&B/Soul/Funk",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "R&B/Soul/Funk",
                "id": 501
            }
        ]
    },
    {
        "id": 502,
        "parent_id": 481,
        "tax_name": "Reggae",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Reggae",
                "id": 502
            }
        ]
    },
    {
        "id": 503,
        "parent_id": 481,
        "tax_name": "Religious (Music and Audio)",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Religious (Music and Audio)",
                "id": 503
            }
        ]
    },
    {
        "id": 504,
        "parent_id": 481,
        "tax_name": "Rock Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Rock Music",
                "id": 504
            }
        ]
    },
    {
        "id": 505,
        "parent_id": 504,
        "tax_name": "Album-oriented Rock",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Rock Music",
                "id": 504
            },
            {
                "name": "Album-oriented Rock",
                "id": 505
            }
        ]
    },
    {
        "id": 506,
        "parent_id": 504,
        "tax_name": "Alternative Rock",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Rock Music",
                "id": 504
            },
            {
                "name": "Alternative Rock",
                "id": 506
            }
        ]
    },
    {
        "id": 507,
        "parent_id": 504,
        "tax_name": "Classic Rock",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Rock Music",
                "id": 504
            },
            {
                "name": "Classic Rock",
                "id": 507
            }
        ]
    },
    {
        "id": 508,
        "parent_id": 504,
        "tax_name": "Hard Rock",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Rock Music",
                "id": 504
            },
            {
                "name": "Hard Rock",
                "id": 508
            }
        ]
    },
    {
        "id": 509,
        "parent_id": 504,
        "tax_name": "Soft Rock",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Rock Music",
                "id": 504
            },
            {
                "name": "Soft Rock",
                "id": 509
            }
        ]
    },
    {
        "id": 510,
        "parent_id": 481,
        "tax_name": "Songwriters/Folk",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Songwriters/Folk",
                "id": 510
            }
        ]
    },
    {
        "id": 511,
        "parent_id": 481,
        "tax_name": "Soundtracks, TV and Showtunes",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Soundtracks, TV and Showtunes",
                "id": 511
            }
        ]
    },
    {
        "id": 512,
        "parent_id": 481,
        "tax_name": "Sports Radio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Sports Radio",
                "id": 512
            }
        ]
    },
    {
        "id": 513,
        "parent_id": 481,
        "tax_name": "Talk Radio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Talk Radio",
                "id": 513
            }
        ]
    },
    {
        "id": 514,
        "parent_id": 513,
        "tax_name": "Business News Radio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Talk Radio",
                "id": 513
            },
            {
                "name": "Business News Radio",
                "id": 514
            }
        ]
    },
    {
        "id": 515,
        "parent_id": 513,
        "tax_name": "Educational Radio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Talk Radio",
                "id": 513
            },
            {
                "name": "Educational Radio",
                "id": 515
            }
        ]
    },
    {
        "id": 516,
        "parent_id": 513,
        "tax_name": "News Radio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Talk Radio",
                "id": 513
            },
            {
                "name": "News Radio",
                "id": 516
            }
        ]
    },
    {
        "id": 517,
        "parent_id": 513,
        "tax_name": "News/Talk Radio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Talk Radio",
                "id": 513
            },
            {
                "name": "News/Talk Radio",
                "id": 517
            }
        ]
    },
    {
        "id": 518,
        "parent_id": 513,
        "tax_name": "Public Radio",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio"
            },
            {
                "name": "Talk Radio",
                "id": 513
            },
            {
                "name": "Public Radio",
                "id": 518
            }
        ]
    },
    {
        "id": 519,
        "parent_id": 481,
        "tax_name": "Urban Contemporary Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Urban Contemporary Music",
                "id": 519
            }
        ]
    },
    {
        "id": 520,
        "parent_id": 481,
        "tax_name": "Variety (Music and Audio)",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "Variety (Music and Audio)",
                "id": 520
            }
        ]
    },
    {
        "id": 521,
        "parent_id": 481,
        "tax_name": "World/International Music",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Music and Audio",
                "id": 481
            },
            {
                "name": "World/International Music",
                "id": 521
            }
        ]
    },
    {
        "id": 522,
        "parent_id": 206,
        "tax_name": "News and Politics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            }
        ]
    },
    {
        "id": 523,
        "parent_id": 522,
        "tax_name": "Crime",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            },
            {
                "name": "Crime",
                "id": 523
            }
        ]
    },
    {
        "id": 524,
        "parent_id": 522,
        "tax_name": "Disasters",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            },
            {
                "name": "Disasters",
                "id": 524
            }
        ]
    },
    {
        "id": 525,
        "parent_id": 522,
        "tax_name": "International News",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            },
            {
                "name": "International News",
                "id": 525
            }
        ]
    },
    {
        "id": 526,
        "parent_id": 522,
        "tax_name": "Law",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            },
            {
                "name": "Law",
                "id": 526
            }
        ]
    },
    {
        "id": 527,
        "parent_id": 522,
        "tax_name": "Local News",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            },
            {
                "name": "Local News",
                "id": 527
            }
        ]
    },
    {
        "id": 528,
        "parent_id": 522,
        "tax_name": "National News",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            },
            {
                "name": "National News",
                "id": 528
            }
        ]
    },
    {
        "id": 529,
        "parent_id": 522,
        "tax_name": "Politics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            },
            {
                "name": "Politics",
                "id": 529
            }
        ]
    },
    {
        "id": 530,
        "parent_id": 529,
        "tax_name": "Elections",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics"
            },
            {
                "name": "Politics",
                "id": 529
            },
            {
                "name": "Elections",
                "id": 530
            }
        ]
    },
    {
        "id": 531,
        "parent_id": 529,
        "tax_name": "Political Issues",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics"
            },
            {
                "name": "Politics",
                "id": 529
            },
            {
                "name": "Political Issues",
                "id": 531
            }
        ]
    },
    {
        "id": 532,
        "parent_id": 529,
        "tax_name": "War and Conflicts",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics"
            },
            {
                "name": "Politics",
                "id": 529
            },
            {
                "name": "War and Conflicts",
                "id": 532
            }
        ]
    },
    {
        "id": 533,
        "parent_id": 522,
        "tax_name": "Weather",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "News and Politics",
                "id": 522
            },
            {
                "name": "Weather",
                "id": 533
            }
        ]
    },
    {
        "id": 534,
        "parent_id": 206,
        "tax_name": "Personal Finance",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Personal Finance",
                "id": 534
            }
        ]
    },
    {
        "id": 535,
        "parent_id": 534,
        "tax_name": "Frugal Living",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Personal Finance",
                "id": 534
            },
            {
                "name": "Frugal Living",
                "id": 535
            }
        ]
    },
    {
        "id": 536,
        "parent_id": 534,
        "tax_name": "Insurance",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Personal Finance",
                "id": 534
            },
            {
                "name": "Insurance",
                "id": 536
            }
        ]
    },
    {
        "id": 537,
        "parent_id": 534,
        "tax_name": "Personal Debt",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Personal Finance",
                "id": 534
            },
            {
                "name": "Personal Debt",
                "id": 537
            }
        ]
    },
    {
        "id": 538,
        "parent_id": 534,
        "tax_name": "Personal Investing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Personal Finance",
                "id": 534
            },
            {
                "name": "Personal Investing",
                "id": 538
            }
        ]
    },
    {
        "id": 539,
        "parent_id": 534,
        "tax_name": "Personal Taxes",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Personal Finance",
                "id": 534
            },
            {
                "name": "Personal Taxes",
                "id": 539
            }
        ]
    },
    {
        "id": 540,
        "parent_id": 534,
        "tax_name": "Retirement Planning",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Personal Finance",
                "id": 534
            },
            {
                "name": "Retirement Planning",
                "id": 540
            }
        ]
    },
    {
        "id": 541,
        "parent_id": 206,
        "tax_name": "Pets",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            }
        ]
    },
    {
        "id": 542,
        "parent_id": 541,
        "tax_name": "Birds",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            },
            {
                "name": "Birds",
                "id": 542
            }
        ]
    },
    {
        "id": 543,
        "parent_id": 541,
        "tax_name": "Cats",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            },
            {
                "name": "Cats",
                "id": 543
            }
        ]
    },
    {
        "id": 544,
        "parent_id": 541,
        "tax_name": "Dogs",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            },
            {
                "name": "Dogs",
                "id": 544
            }
        ]
    },
    {
        "id": 545,
        "parent_id": 541,
        "tax_name": "Fish and Aquariums",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            },
            {
                "name": "Fish and Aquariums",
                "id": 545
            }
        ]
    },
    {
        "id": 546,
        "parent_id": 541,
        "tax_name": "Horses and Equine",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            },
            {
                "name": "Horses and Equine",
                "id": 546
            }
        ]
    },
    {
        "id": 547,
        "parent_id": 541,
        "tax_name": "Large Animals",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            },
            {
                "name": "Large Animals",
                "id": 547
            }
        ]
    },
    {
        "id": 548,
        "parent_id": 541,
        "tax_name": "Pet Adoptions",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            },
            {
                "name": "Pet Adoptions",
                "id": 548
            }
        ]
    },
    {
        "id": 549,
        "parent_id": 541,
        "tax_name": "Reptiles",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pets",
                "id": 541
            },
            {
                "name": "Reptiles",
                "id": 549
            }
        ]
    },
    {
        "id": 550,
        "parent_id": 206,
        "tax_name": "Pharmaceuticals, Conditions, and Symptoms",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pharmaceuticals, Conditions, and Symptoms",
                "id": 550
            }
        ]
    },
    {
        "id": 551,
        "parent_id": 550,
        "tax_name": "Health & Pharma",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pharmaceuticals, Conditions, and Symptoms",
                "id": 550
            },
            {
                "name": "Health & Pharma",
                "id": 551
            }
        ]
    },
    {
        "id": 581,
        "parent_id": 206,
        "tax_name": "Pop Culture",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pop Culture",
                "id": 581
            }
        ]
    },
    {
        "id": 582,
        "parent_id": 581,
        "tax_name": "Humor and Satire",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Pop Culture",
                "id": 581
            },
            {
                "name": "Humor and Satire",
                "id": 582
            }
        ]
    },
    {
        "id": 583,
        "parent_id": 206,
        "tax_name": "Real Estate",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            }
        ]
    },
    {
        "id": 584,
        "parent_id": 583,
        "tax_name": "Apartments",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Apartments",
                "id": 584
            }
        ]
    },
    {
        "id": 585,
        "parent_id": 583,
        "tax_name": "Developmental Sites",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Developmental Sites",
                "id": 585
            }
        ]
    },
    {
        "id": 586,
        "parent_id": 583,
        "tax_name": "Hotel Properties",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Hotel Properties",
                "id": 586
            }
        ]
    },
    {
        "id": 587,
        "parent_id": 583,
        "tax_name": "Houses",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Houses",
                "id": 587
            }
        ]
    },
    {
        "id": 588,
        "parent_id": 583,
        "tax_name": "Industrial Property",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Industrial Property",
                "id": 588
            }
        ]
    },
    {
        "id": 589,
        "parent_id": 583,
        "tax_name": "Land and Farms",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Land and Farms",
                "id": 589
            }
        ]
    },
    {
        "id": 590,
        "parent_id": 583,
        "tax_name": "Office Property",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Office Property",
                "id": 590
            }
        ]
    },
    {
        "id": 591,
        "parent_id": 583,
        "tax_name": "Real Estate Buying and Selling",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Real Estate Buying and Selling",
                "id": 591
            }
        ]
    },
    {
        "id": 592,
        "parent_id": 583,
        "tax_name": "Real Estate Renting and Leasing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Real Estate Renting and Leasing",
                "id": 592
            }
        ]
    },
    {
        "id": 593,
        "parent_id": 583,
        "tax_name": "Retail Property",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Retail Property",
                "id": 593
            }
        ]
    },
    {
        "id": 594,
        "parent_id": 583,
        "tax_name": "Vacation Properties",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Real Estate",
                "id": 583
            },
            {
                "name": "Vacation Properties",
                "id": 594
            }
        ]
    },
    {
        "id": 606,
        "parent_id": 206,
        "tax_name": "Shopping",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Shopping",
                "id": 606
            }
        ]
    },
    {
        "id": 607,
        "parent_id": 206,
        "tax_name": "Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            }
        ]
    },
    {
        "id": 608,
        "parent_id": 607,
        "tax_name": "American Football",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "American Football",
                "id": 608
            }
        ]
    },
    {
        "id": 609,
        "parent_id": 607,
        "tax_name": "Australian Rules Football",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Australian Rules Football",
                "id": 609
            }
        ]
    },
    {
        "id": 610,
        "parent_id": 607,
        "tax_name": "Auto Racing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Auto Racing",
                "id": 610
            }
        ]
    },
    {
        "id": 611,
        "parent_id": 610,
        "tax_name": "Motorcycle Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Auto Racing",
                "id": 610
            },
            {
                "name": "Motorcycle Sports",
                "id": 611
            }
        ]
    },
    {
        "id": 612,
        "parent_id": 607,
        "tax_name": "Badminton",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Badminton",
                "id": 612
            }
        ]
    },
    {
        "id": 613,
        "parent_id": 607,
        "tax_name": "Baseball",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Baseball",
                "id": 613
            }
        ]
    },
    {
        "id": 614,
        "parent_id": 607,
        "tax_name": "Basketball",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Basketball",
                "id": 614
            }
        ]
    },
    {
        "id": 615,
        "parent_id": 607,
        "tax_name": "Beach Volleyball",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Beach Volleyball",
                "id": 615
            }
        ]
    },
    {
        "id": 616,
        "parent_id": 607,
        "tax_name": "Bodybuilding",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Bodybuilding",
                "id": 616
            }
        ]
    },
    {
        "id": 617,
        "parent_id": 607,
        "tax_name": "Bowling",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Bowling",
                "id": 617
            }
        ]
    },
    {
        "id": 618,
        "parent_id": 607,
        "tax_name": "Boxing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Boxing",
                "id": 618
            }
        ]
    },
    {
        "id": 619,
        "parent_id": 607,
        "tax_name": "Cheerleading",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Cheerleading",
                "id": 619
            }
        ]
    },
    {
        "id": 620,
        "parent_id": 607,
        "tax_name": "College Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "College Sports",
                "id": 620
            }
        ]
    },
    {
        "id": 621,
        "parent_id": 620,
        "tax_name": "College Football",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "College Sports",
                "id": 620
            },
            {
                "name": "College Football",
                "id": 621
            }
        ]
    },
    {
        "id": 622,
        "parent_id": 620,
        "tax_name": "College Basketball",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "College Sports",
                "id": 620
            },
            {
                "name": "College Basketball",
                "id": 622
            }
        ]
    },
    {
        "id": 623,
        "parent_id": 620,
        "tax_name": "College Baseball",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "College Sports",
                "id": 620
            },
            {
                "name": "College Baseball",
                "id": 623
            }
        ]
    },
    {
        "id": 624,
        "parent_id": 607,
        "tax_name": "Cricket",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Cricket",
                "id": 624
            }
        ]
    },
    {
        "id": 625,
        "parent_id": 607,
        "tax_name": "Cycling",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Cycling",
                "id": 625
            }
        ]
    },
    {
        "id": 626,
        "parent_id": 607,
        "tax_name": "Darts",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Darts",
                "id": 626
            }
        ]
    },
    {
        "id": 627,
        "parent_id": 607,
        "tax_name": "Disabled Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Disabled Sports",
                "id": 627
            }
        ]
    },
    {
        "id": 628,
        "parent_id": 607,
        "tax_name": "Diving",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Diving",
                "id": 628
            }
        ]
    },
    {
        "id": 629,
        "parent_id": 607,
        "tax_name": "Equine Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Equine Sports",
                "id": 629
            }
        ]
    },
    {
        "id": 630,
        "parent_id": 629,
        "tax_name": "Horse Racing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Equine Sports",
                "id": 629
            },
            {
                "name": "Horse Racing",
                "id": 630
            }
        ]
    },
    {
        "id": 631,
        "parent_id": 607,
        "tax_name": "Extreme Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Extreme Sports",
                "id": 631
            }
        ]
    },
    {
        "id": 632,
        "parent_id": 631,
        "tax_name": "Canoeing and Kayaking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Extreme Sports",
                "id": 631
            },
            {
                "name": "Canoeing and Kayaking",
                "id": 632
            }
        ]
    },
    {
        "id": 633,
        "parent_id": 631,
        "tax_name": "Climbing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Extreme Sports",
                "id": 631
            },
            {
                "name": "Climbing",
                "id": 633
            }
        ]
    },
    {
        "id": 634,
        "parent_id": 631,
        "tax_name": "Paintball",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Extreme Sports",
                "id": 631
            },
            {
                "name": "Paintball",
                "id": 634
            }
        ]
    },
    {
        "id": 635,
        "parent_id": 631,
        "tax_name": "Scuba Diving",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Extreme Sports",
                "id": 631
            },
            {
                "name": "Scuba Diving",
                "id": 635
            }
        ]
    },
    {
        "id": 636,
        "parent_id": 631,
        "tax_name": "Skateboarding",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Extreme Sports",
                "id": 631
            },
            {
                "name": "Skateboarding",
                "id": 636
            }
        ]
    },
    {
        "id": 637,
        "parent_id": 631,
        "tax_name": "Snowboarding",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Extreme Sports",
                "id": 631
            },
            {
                "name": "Snowboarding",
                "id": 637
            }
        ]
    },
    {
        "id": 638,
        "parent_id": 631,
        "tax_name": "Surfing and Bodyboarding",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Extreme Sports",
                "id": 631
            },
            {
                "name": "Surfing and Bodyboarding",
                "id": 638
            }
        ]
    },
    {
        "id": 639,
        "parent_id": 631,
        "tax_name": "Waterskiing and Wakeboarding",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Extreme Sports",
                "id": 631
            },
            {
                "name": "Waterskiing and Wakeboarding",
                "id": 639
            }
        ]
    },
    {
        "id": 640,
        "parent_id": 607,
        "tax_name": "Fantasy Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Fantasy Sports",
                "id": 640
            }
        ]
    },
    {
        "id": 641,
        "parent_id": 607,
        "tax_name": "Field Hockey",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Field Hockey",
                "id": 641
            }
        ]
    },
    {
        "id": 642,
        "parent_id": 607,
        "tax_name": "Figure Skating",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Figure Skating",
                "id": 642
            }
        ]
    },
    {
        "id": 643,
        "parent_id": 607,
        "tax_name": "Fishing Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Fishing Sports",
                "id": 643
            }
        ]
    },
    {
        "id": 644,
        "parent_id": 607,
        "tax_name": "Golf",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Golf",
                "id": 644
            }
        ]
    },
    {
        "id": 645,
        "parent_id": 607,
        "tax_name": "Gymnastics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Gymnastics",
                "id": 645
            }
        ]
    },
    {
        "id": 646,
        "parent_id": 607,
        "tax_name": "Hunting and Shooting",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Hunting and Shooting",
                "id": 646
            }
        ]
    },
    {
        "id": 647,
        "parent_id": 607,
        "tax_name": "Ice Hockey",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Ice Hockey",
                "id": 647
            }
        ]
    },
    {
        "id": 648,
        "parent_id": 607,
        "tax_name": "Inline Skating",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Inline Skating",
                "id": 648
            }
        ]
    },
    {
        "id": 649,
        "parent_id": 607,
        "tax_name": "Lacrosse",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Lacrosse",
                "id": 649
            }
        ]
    },
    {
        "id": 650,
        "parent_id": 607,
        "tax_name": "Martial Arts",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Martial Arts",
                "id": 650
            }
        ]
    },
    {
        "id": 651,
        "parent_id": 607,
        "tax_name": "Olympic Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Olympic Sports",
                "id": 651
            }
        ]
    },
    {
        "id": 652,
        "parent_id": 651,
        "tax_name": "Summer Olympic Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Olympic Sports",
                "id": 651
            },
            {
                "name": "Summer Olympic Sports",
                "id": 652
            }
        ]
    },
    {
        "id": 653,
        "parent_id": 651,
        "tax_name": "Winter Olympic Sports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Olympic Sports",
                "id": 651
            },
            {
                "name": "Winter Olympic Sports",
                "id": 653
            }
        ]
    },
    {
        "id": 654,
        "parent_id": 607,
        "tax_name": "Poker and Professional Gambling",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Poker and Professional Gambling",
                "id": 654
            }
        ]
    },
    {
        "id": 655,
        "parent_id": 607,
        "tax_name": "Rodeo",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Rodeo",
                "id": 655
            }
        ]
    },
    {
        "id": 656,
        "parent_id": 607,
        "tax_name": "Rowing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Rowing",
                "id": 656
            }
        ]
    },
    {
        "id": 657,
        "parent_id": 607,
        "tax_name": "Rugby",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Rugby",
                "id": 657
            }
        ]
    },
    {
        "id": 658,
        "parent_id": 657,
        "tax_name": "Rugby League",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Rugby",
                "id": 657
            },
            {
                "name": "Rugby League",
                "id": 658
            }
        ]
    },
    {
        "id": 659,
        "parent_id": 657,
        "tax_name": "Rugby Union",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports"
            },
            {
                "name": "Rugby",
                "id": 657
            },
            {
                "name": "Rugby Union",
                "id": 659
            }
        ]
    },
    {
        "id": 660,
        "parent_id": 607,
        "tax_name": "Sailing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Sailing",
                "id": 660
            }
        ]
    },
    {
        "id": 661,
        "parent_id": 607,
        "tax_name": "Skiing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Skiing",
                "id": 661
            }
        ]
    },
    {
        "id": 662,
        "parent_id": 607,
        "tax_name": "Snooker/Pool/Billiards",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Snooker/Pool/Billiards",
                "id": 662
            }
        ]
    },
    {
        "id": 663,
        "parent_id": 607,
        "tax_name": "Soccer",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Soccer",
                "id": 663
            }
        ]
    },
    {
        "id": 664,
        "parent_id": 607,
        "tax_name": "Softball",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Softball",
                "id": 664
            }
        ]
    },
    {
        "id": 665,
        "parent_id": 607,
        "tax_name": "Sports Equipment",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Sports Equipment",
                "id": 665
            }
        ]
    },
    {
        "id": 666,
        "parent_id": 607,
        "tax_name": "Squash",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Squash",
                "id": 666
            }
        ]
    },
    {
        "id": 667,
        "parent_id": 607,
        "tax_name": "Swimming",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Swimming",
                "id": 667
            }
        ]
    },
    {
        "id": 668,
        "parent_id": 607,
        "tax_name": "Table Tennis",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Table Tennis",
                "id": 668
            }
        ]
    },
    {
        "id": 669,
        "parent_id": 607,
        "tax_name": "Tennis",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Tennis",
                "id": 669
            }
        ]
    },
    {
        "id": 670,
        "parent_id": 607,
        "tax_name": "Track and Field",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Track and Field",
                "id": 670
            }
        ]
    },
    {
        "id": 671,
        "parent_id": 607,
        "tax_name": "Volleyball",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Volleyball",
                "id": 671
            }
        ]
    },
    {
        "id": 672,
        "parent_id": 607,
        "tax_name": "Walking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Walking",
                "id": 672
            }
        ]
    },
    {
        "id": 673,
        "parent_id": 607,
        "tax_name": "Water Polo",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Water Polo",
                "id": 673
            }
        ]
    },
    {
        "id": 674,
        "parent_id": 607,
        "tax_name": "Weightlifting",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Weightlifting",
                "id": 674
            }
        ]
    },
    {
        "id": 675,
        "parent_id": 607,
        "tax_name": "Wrestling",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Sports",
                "id": 607
            },
            {
                "name": "Wrestling",
                "id": 675
            }
        ]
    },
    {
        "id": 676,
        "parent_id": 206,
        "tax_name": "Style & Fashion",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            }
        ]
    },
    {
        "id": 677,
        "parent_id": 676,
        "tax_name": "Beauty",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Beauty",
                "id": 677
            }
        ]
    },
    {
        "id": 678,
        "parent_id": 676,
        "tax_name": "Body Art",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Body Art",
                "id": 678
            }
        ]
    },
    {
        "id": 679,
        "parent_id": 676,
        "tax_name": "Children's Clothing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Children's Clothing",
                "id": 679
            }
        ]
    },
    {
        "id": 680,
        "parent_id": 676,
        "tax_name": "Designer Clothing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Designer Clothing",
                "id": 680
            }
        ]
    },
    {
        "id": 681,
        "parent_id": 676,
        "tax_name": "Fashion Trends",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Fashion Trends",
                "id": 681
            }
        ]
    },
    {
        "id": 682,
        "parent_id": 676,
        "tax_name": "High Fashion",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "High Fashion",
                "id": 682
            }
        ]
    },
    {
        "id": 683,
        "parent_id": 676,
        "tax_name": "Men's Fashion",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Men's Fashion",
                "id": 683
            }
        ]
    },
    {
        "id": 684,
        "parent_id": 676,
        "tax_name": "Personal Care",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Personal Care",
                "id": 684
            }
        ]
    },
    {
        "id": 685,
        "parent_id": 676,
        "tax_name": "Street Style",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Street Style",
                "id": 685
            }
        ]
    },
    {
        "id": 686,
        "parent_id": 676,
        "tax_name": "Women's Fashion",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Style & Fashion",
                "id": 676
            },
            {
                "name": "Women's Fashion",
                "id": 686
            }
        ]
    },
    {
        "id": 687,
        "parent_id": 206,
        "tax_name": "Technology & Computing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing",
                "id": 687
            }
        ]
    },
    {
        "id": 688,
        "parent_id": 687,
        "tax_name": "Artificial Intelligence",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing",
                "id": 687
            },
            {
                "name": "Artificial Intelligence",
                "id": 688
            }
        ]
    },
    {
        "id": 689,
        "parent_id": 687,
        "tax_name": "Augmented Reality",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing",
                "id": 687
            },
            {
                "name": "Augmented Reality",
                "id": 689
            }
        ]
    },
    {
        "id": 690,
        "parent_id": 687,
        "tax_name": "Computing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing",
                "id": 687
            },
            {
                "name": "Computing",
                "id": 690
            }
        ]
    },
    {
        "id": 691,
        "parent_id": 690,
        "tax_name": "Internet",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Internet",
                "id": 691
            }
        ]
    },
    {
        "id": 692,
        "parent_id": 690,
        "tax_name": "Cloud Computing",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Cloud Computing",
                "id": 692
            }
        ]
    },
    {
        "id": 693,
        "parent_id": 690,
        "tax_name": "Web Development",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Web Development",
                "id": 693
            }
        ]
    },
    {
        "id": 694,
        "parent_id": 690,
        "tax_name": "Web Hosting",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Web Hosting",
                "id": 694
            }
        ]
    },
    {
        "id": 695,
        "parent_id": 690,
        "tax_name": "Email",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Email",
                "id": 695
            }
        ]
    },
    {
        "id": 696,
        "parent_id": 690,
        "tax_name": "Internet for Beginners",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Internet for Beginners",
                "id": 696
            }
        ]
    },
    {
        "id": 697,
        "parent_id": 690,
        "tax_name": "Internet of Things",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Internet of Things",
                "id": 697
            }
        ]
    },
    {
        "id": 698,
        "parent_id": 690,
        "tax_name": "IT and Internet Support",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "IT and Internet Support",
                "id": 698
            }
        ]
    },
    {
        "id": 699,
        "parent_id": 690,
        "tax_name": "Search",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Search",
                "id": 699
            }
        ]
    },
    {
        "id": 700,
        "parent_id": 690,
        "tax_name": "Social Networking",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Social Networking",
                "id": 700
            }
        ]
    },
    {
        "id": 701,
        "parent_id": 690,
        "tax_name": "Web Design and HTML",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Web Design and HTML",
                "id": 701
            }
        ]
    },
    {
        "id": 702,
        "parent_id": 690,
        "tax_name": "Programming Languages",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing"
            },
            {
                "name": "Computing",
                "id": 690
            },
            {
                "name": "Programming Languages",
                "id": 702
            }
        ]
    },
    {
        "id": 703,
        "parent_id": 687,
        "tax_name": "Consumer Electronics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing",
                "id": 687
            },
            {
                "name": "Consumer Electronics",
                "id": 703
            }
        ]
    },
    {
        "id": 704,
        "parent_id": 687,
        "tax_name": "Robotics",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing",
                "id": 687
            },
            {
                "name": "Robotics",
                "id": 704
            }
        ]
    },
    {
        "id": 705,
        "parent_id": 687,
        "tax_name": "Virtual Reality",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Technology & Computing",
                "id": 687
            },
            {
                "name": "Virtual Reality",
                "id": 705
            }
        ]
    },
    {
        "id": 706,
        "parent_id": 206,
        "tax_name": "Television",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            }
        ]
    },
    {
        "id": 707,
        "parent_id": 706,
        "tax_name": "Animation TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Animation TV",
                "id": 707
            }
        ]
    },
    {
        "id": 708,
        "parent_id": 706,
        "tax_name": "Children's TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Children's TV",
                "id": 708
            }
        ]
    },
    {
        "id": 709,
        "parent_id": 706,
        "tax_name": "Comedy TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Comedy TV",
                "id": 709
            }
        ]
    },
    {
        "id": 710,
        "parent_id": 706,
        "tax_name": "Drama TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Drama TV",
                "id": 710
            }
        ]
    },
    {
        "id": 711,
        "parent_id": 706,
        "tax_name": "Factual TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Factual TV",
                "id": 711
            }
        ]
    },
    {
        "id": 712,
        "parent_id": 706,
        "tax_name": "Holiday TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Holiday TV",
                "id": 712
            }
        ]
    },
    {
        "id": 713,
        "parent_id": 706,
        "tax_name": "Music TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Music TV",
                "id": 713
            }
        ]
    },
    {
        "id": 714,
        "parent_id": 706,
        "tax_name": "Reality TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Reality TV",
                "id": 714
            }
        ]
    },
    {
        "id": 715,
        "parent_id": 706,
        "tax_name": "Science Fiction TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Science Fiction TV",
                "id": 715
            }
        ]
    },
    {
        "id": 716,
        "parent_id": 706,
        "tax_name": "Soap Opera TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Soap Opera TV",
                "id": 716
            }
        ]
    },
    {
        "id": 717,
        "parent_id": 706,
        "tax_name": "Special Interest TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Special Interest TV",
                "id": 717
            }
        ]
    },
    {
        "id": 718,
        "parent_id": 706,
        "tax_name": "Sports TV",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Television",
                "id": 706
            },
            {
                "name": "Sports TV",
                "id": 718
            }
        ]
    },
    {
        "id": 719,
        "parent_id": 206,
        "tax_name": "Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            }
        ]
    },
    {
        "id": 720,
        "parent_id": 719,
        "tax_name": "Adventure Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Adventure Travel",
                "id": 720
            }
        ]
    },
    {
        "id": 721,
        "parent_id": 719,
        "tax_name": "Africa Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Africa Travel",
                "id": 721
            }
        ]
    },
    {
        "id": 722,
        "parent_id": 719,
        "tax_name": "Asia Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Asia Travel",
                "id": 722
            }
        ]
    },
    {
        "id": 723,
        "parent_id": 719,
        "tax_name": "Australia and Oceania Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Australia and Oceania Travel",
                "id": 723
            }
        ]
    },
    {
        "id": 724,
        "parent_id": 719,
        "tax_name": "Beach Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Beach Travel",
                "id": 724
            }
        ]
    },
    {
        "id": 725,
        "parent_id": 719,
        "tax_name": "Camping",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Camping",
                "id": 725
            }
        ]
    },
    {
        "id": 726,
        "parent_id": 719,
        "tax_name": "Day Trips",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Day Trips",
                "id": 726
            }
        ]
    },
    {
        "id": 727,
        "parent_id": 719,
        "tax_name": "Europe Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Europe Travel",
                "id": 727
            }
        ]
    },
    {
        "id": 728,
        "parent_id": 719,
        "tax_name": "Family Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Family Travel",
                "id": 728
            }
        ]
    },
    {
        "id": 729,
        "parent_id": 719,
        "tax_name": "North America Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "North America Travel",
                "id": 729
            }
        ]
    },
    {
        "id": 730,
        "parent_id": 719,
        "tax_name": "Polar Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Polar Travel",
                "id": 730
            }
        ]
    },
    {
        "id": 731,
        "parent_id": 719,
        "tax_name": "Road Trips",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "Road Trips",
                "id": 731
            }
        ]
    },
    {
        "id": 732,
        "parent_id": 719,
        "tax_name": "South America Travel",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Travel",
                "id": 719
            },
            {
                "name": "South America Travel",
                "id": 732
            }
        ]
    },
    {
        "id": 733,
        "parent_id": 206,
        "tax_name": "Video Gaming",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming",
                "id": 733
            }
        ]
    },
    {
        "id": 734,
        "parent_id": 733,
        "tax_name": "Console Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming",
                "id": 733
            },
            {
                "name": "Console Games",
                "id": 734
            }
        ]
    },
    {
        "id": 735,
        "parent_id": 733,
        "tax_name": "eSports",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming",
                "id": 733
            },
            {
                "name": "eSports",
                "id": 735
            }
        ]
    },
    {
        "id": 736,
        "parent_id": 733,
        "tax_name": "Mobile Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming",
                "id": 733
            },
            {
                "name": "Mobile Games",
                "id": 736
            }
        ]
    },
    {
        "id": 737,
        "parent_id": 733,
        "tax_name": "PC Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming",
                "id": 733
            },
            {
                "name": "PC Games",
                "id": 737
            }
        ]
    },
    {
        "id": 738,
        "parent_id": 733,
        "tax_name": "Video Game Genres",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming",
                "id": 733
            },
            {
                "name": "Video Game Genres",
                "id": 738
            }
        ]
    },
    {
        "id": 739,
        "parent_id": 738,
        "tax_name": "Action Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Action Video Games",
                "id": 739
            }
        ]
    },
    {
        "id": 740,
        "parent_id": 738,
        "tax_name": "Role-Playing Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Role-Playing Video Games",
                "id": 740
            }
        ]
    },
    {
        "id": 741,
        "parent_id": 738,
        "tax_name": "Simulation Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Simulation Video Games",
                "id": 741
            }
        ]
    },
    {
        "id": 742,
        "parent_id": 738,
        "tax_name": "Sports Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Sports Video Games",
                "id": 742
            }
        ]
    },
    {
        "id": 743,
        "parent_id": 738,
        "tax_name": "Strategy Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Strategy Video Games",
                "id": 743
            }
        ]
    },
    {
        "id": 744,
        "parent_id": 738,
        "tax_name": "Action-Adventure Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Action-Adventure Video Games",
                "id": 744
            }
        ]
    },
    {
        "id": 745,
        "parent_id": 738,
        "tax_name": "Adventure Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Adventure Video Games",
                "id": 745
            }
        ]
    },
    {
        "id": 746,
        "parent_id": 738,
        "tax_name": "Casual Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Casual Games",
                "id": 746
            }
        ]
    },
    {
        "id": 747,
        "parent_id": 738,
        "tax_name": "Educational Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Educational Video Games",
                "id": 747
            }
        ]
    },
    {
        "id": 748,
        "parent_id": 738,
        "tax_name": "Exercise and Fitness Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Exercise and Fitness Video Games",
                "id": 748
            }
        ]
    },
    {
        "id": 749,
        "parent_id": 738,
        "tax_name": "MMOs",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "MMOs",
                "id": 749
            }
        ]
    },
    {
        "id": 750,
        "parent_id": 738,
        "tax_name": "Music and Party Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Music and Party Video Games",
                "id": 750
            }
        ]
    },
    {
        "id": 751,
        "parent_id": 738,
        "tax_name": "Puzzle Video Games",
        "tier": [
            {
                "name": "Interest",
                "id": 206
            },
            {
                "name": "Video Gaming"
            },
            {
                "name": "Video Game Genres",
                "id": 738
            },
            {
                "name": "Puzzle Video Games",
                "id": 751
            }
        ]
    },
    {
        "id": 752,
        "parent_id": "",
        "tax_name": "Purchase Intent*",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            }
        ]
    },
    {
        "id": 753,
        "parent_id": 752,
        "tax_name": "Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            }
        ]
    },
    {
        "id": 754,
        "parent_id": 753,
        "tax_name": "Auto and Vehicles Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Auto and Vehicles Apps",
                "id": 754
            }
        ]
    },
    {
        "id": 755,
        "parent_id": 753,
        "tax_name": "Books Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Books Apps",
                "id": 755
            }
        ]
    },
    {
        "id": 756,
        "parent_id": 753,
        "tax_name": "Business Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Business Apps",
                "id": 756
            }
        ]
    },
    {
        "id": 757,
        "parent_id": 753,
        "tax_name": "Education Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Education Apps",
                "id": 757
            }
        ]
    },
    {
        "id": 758,
        "parent_id": 753,
        "tax_name": "Entertainment Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Entertainment Apps",
                "id": 758
            }
        ]
    },
    {
        "id": 759,
        "parent_id": 753,
        "tax_name": "Finance Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Finance Apps",
                "id": 759
            }
        ]
    },
    {
        "id": 760,
        "parent_id": 753,
        "tax_name": "Food and Drink Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Food and Drink Apps",
                "id": 760
            }
        ]
    },
    {
        "id": 761,
        "parent_id": 753,
        "tax_name": "Games Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Games Apps",
                "id": 761
            }
        ]
    },
    {
        "id": 762,
        "parent_id": 753,
        "tax_name": "Health and Fitness Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Health and Fitness Apps",
                "id": 762
            }
        ]
    },
    {
        "id": 763,
        "parent_id": 753,
        "tax_name": "Lifestyle Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Lifestyle Apps",
                "id": 763
            }
        ]
    },
    {
        "id": 764,
        "parent_id": 753,
        "tax_name": "Magazine and Newspapers Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Magazine and Newspapers Apps",
                "id": 764
            }
        ]
    },
    {
        "id": 765,
        "parent_id": 753,
        "tax_name": "Medical Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Medical Apps",
                "id": 765
            }
        ]
    },
    {
        "id": 766,
        "parent_id": 753,
        "tax_name": "Music Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Music Apps",
                "id": 766
            }
        ]
    },
    {
        "id": 767,
        "parent_id": 753,
        "tax_name": "Navigation Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Navigation Apps",
                "id": 767
            }
        ]
    },
    {
        "id": 768,
        "parent_id": 753,
        "tax_name": "News Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "News Apps",
                "id": 768
            }
        ]
    },
    {
        "id": 769,
        "parent_id": 753,
        "tax_name": "Photo and Video Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Photo and Video Apps",
                "id": 769
            }
        ]
    },
    {
        "id": 770,
        "parent_id": 753,
        "tax_name": "Productivity Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Productivity Apps",
                "id": 770
            }
        ]
    },
    {
        "id": 771,
        "parent_id": 753,
        "tax_name": "Reference Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Reference Apps",
                "id": 771
            }
        ]
    },
    {
        "id": 772,
        "parent_id": 753,
        "tax_name": "Search Engine Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Search Engine Apps",
                "id": 772
            }
        ]
    },
    {
        "id": 773,
        "parent_id": 753,
        "tax_name": "Shopping Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Shopping Apps",
                "id": 773
            }
        ]
    },
    {
        "id": 774,
        "parent_id": 753,
        "tax_name": "Social Networking Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Social Networking Apps",
                "id": 774
            }
        ]
    },
    {
        "id": 775,
        "parent_id": 753,
        "tax_name": "Sports Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Sports Apps",
                "id": 775
            }
        ]
    },
    {
        "id": 776,
        "parent_id": 753,
        "tax_name": "Travel Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Travel Apps",
                "id": 776
            }
        ]
    },
    {
        "id": 777,
        "parent_id": 753,
        "tax_name": "Utilities Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Utilities Apps",
                "id": 777
            }
        ]
    },
    {
        "id": 778,
        "parent_id": 753,
        "tax_name": "Weather Apps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Apps",
                "id": 753
            },
            {
                "name": "Weather Apps",
                "id": 778
            }
        ]
    },
    {
        "id": 779,
        "parent_id": 752,
        "tax_name": "Arts and Entertainment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            }
        ]
    },
    {
        "id": 780,
        "parent_id": 779,
        "tax_name": "Blogs/Forums/Social Networks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "Blogs/Forums/Social Networks",
                "id": 780
            }
        ]
    },
    {
        "id": 781,
        "parent_id": 779,
        "tax_name": "Culture and Fine Arts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "Culture and Fine Arts",
                "id": 781
            }
        ]
    },
    {
        "id": 782,
        "parent_id": 779,
        "tax_name": "Experiences and Events",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "Experiences and Events",
                "id": 782
            }
        ]
    },
    {
        "id": 783,
        "parent_id": 782,
        "tax_name": "Concerts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Concerts",
                "id": 783
            }
        ]
    },
    {
        "id": 784,
        "parent_id": 782,
        "tax_name": "Theatre and Musicals",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Theatre and Musicals",
                "id": 784
            }
        ]
    },
    {
        "id": 785,
        "parent_id": 782,
        "tax_name": "Museums and Galleries",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Museums and Galleries",
                "id": 785
            }
        ]
    },
    {
        "id": 786,
        "parent_id": 782,
        "tax_name": "Sporting Events",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Sporting Events",
                "id": 786
            }
        ]
    },
    {
        "id": 787,
        "parent_id": 782,
        "tax_name": "Cinemas and Movie Events",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Cinemas and Movie Events",
                "id": 787
            }
        ]
    },
    {
        "id": 788,
        "parent_id": 782,
        "tax_name": "Aviation Shows",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Aviation Shows",
                "id": 788
            }
        ]
    },
    {
        "id": 789,
        "parent_id": 782,
        "tax_name": "Fairs and Farmer's Markets",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Fairs and Farmer's Markets",
                "id": 789
            }
        ]
    },
    {
        "id": 790,
        "parent_id": 782,
        "tax_name": "Exhibitions",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Exhibitions",
                "id": 790
            }
        ]
    },
    {
        "id": 791,
        "parent_id": 782,
        "tax_name": "Theme and Amusement Parks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Theme and Amusement Parks",
                "id": 791
            }
        ]
    },
    {
        "id": 792,
        "parent_id": 782,
        "tax_name": "Parks and Wildlife",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Parks and Wildlife",
                "id": 792
            }
        ]
    },
    {
        "id": 793,
        "parent_id": 782,
        "tax_name": "Auto Shows",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Auto Shows",
                "id": 793
            }
        ]
    },
    {
        "id": 794,
        "parent_id": 782,
        "tax_name": "Nightclubs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Nightclubs",
                "id": 794
            }
        ]
    },
    {
        "id": 795,
        "parent_id": 782,
        "tax_name": "Fashion Events",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Fashion Events",
                "id": 795
            }
        ]
    },
    {
        "id": 796,
        "parent_id": 782,
        "tax_name": "Comedy Events",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Comedy Events",
                "id": 796
            }
        ]
    },
    {
        "id": 797,
        "parent_id": 782,
        "tax_name": "Zoos and Aquariums",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Zoos and Aquariums",
                "id": 797
            }
        ]
    },
    {
        "id": 798,
        "parent_id": 782,
        "tax_name": "Fan Conventions",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment"
            },
            {
                "name": "Experiences and Events",
                "id": 782
            },
            {
                "name": "Fan Conventions",
                "id": 798
            }
        ]
    },
    {
        "id": 799,
        "parent_id": 779,
        "tax_name": "Fantasy Sports",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "Fantasy Sports",
                "id": 799
            }
        ]
    },
    {
        "id": 800,
        "parent_id": 779,
        "tax_name": "Music and Video Streaming Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "Music and Video Streaming Services",
                "id": 800
            }
        ]
    },
    {
        "id": 801,
        "parent_id": 779,
        "tax_name": "Online Entertainment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "Online Entertainment",
                "id": 801
            }
        ]
    },
    {
        "id": 802,
        "parent_id": 779,
        "tax_name": "Radio and Podcasts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "Radio and Podcasts",
                "id": 802
            }
        ]
    },
    {
        "id": 803,
        "parent_id": 779,
        "tax_name": "Ticket Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "Ticket Services",
                "id": 803
            }
        ]
    },
    {
        "id": 804,
        "parent_id": 779,
        "tax_name": "TV",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Arts and Entertainment",
                "id": 779
            },
            {
                "name": "TV",
                "id": 804
            }
        ]
    },
    {
        "id": 805,
        "parent_id": 752,
        "tax_name": "Automotive Ownership",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership",
                "id": 805
            }
        ]
    },
    {
        "id": 806,
        "parent_id": 805,
        "tax_name": "New Vehicles",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership",
                "id": 805
            },
            {
                "name": "New Vehicles",
                "id": 806
            }
        ]
    },
    {
        "id": 807,
        "parent_id": 806,
        "tax_name": "Commercial Trucks ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Commercial Trucks ",
                "id": 807
            }
        ]
    },
    {
        "id": 808,
        "parent_id": 806,
        "tax_name": "Sedan ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Sedan ",
                "id": 808
            }
        ]
    },
    {
        "id": 809,
        "parent_id": 806,
        "tax_name": "Station Wagon ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Station Wagon ",
                "id": 809
            }
        ]
    },
    {
        "id": 810,
        "parent_id": 806,
        "tax_name": "SUV ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "SUV ",
                "id": 810
            }
        ]
    },
    {
        "id": 811,
        "parent_id": 806,
        "tax_name": "Van ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Van ",
                "id": 811
            }
        ]
    },
    {
        "id": 812,
        "parent_id": 806,
        "tax_name": "Convertible ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Convertible ",
                "id": 812
            }
        ]
    },
    {
        "id": 813,
        "parent_id": 806,
        "tax_name": "Coupe ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Coupe ",
                "id": 813
            }
        ]
    },
    {
        "id": 814,
        "parent_id": 806,
        "tax_name": "Crossover",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Crossover",
                "id": 814
            }
        ]
    },
    {
        "id": 815,
        "parent_id": 806,
        "tax_name": "Hatchback ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Hatchback ",
                "id": 815
            }
        ]
    },
    {
        "id": 816,
        "parent_id": 806,
        "tax_name": "Microcar ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Microcar ",
                "id": 816
            }
        ]
    },
    {
        "id": 817,
        "parent_id": 806,
        "tax_name": "Minivan",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Minivan",
                "id": 817
            }
        ]
    },
    {
        "id": 818,
        "parent_id": 806,
        "tax_name": "Off-Road Vehicles ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Off-Road Vehicles ",
                "id": 818
            }
        ]
    },
    {
        "id": 819,
        "parent_id": 806,
        "tax_name": "Pickup Trucks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Pickup Trucks",
                "id": 819
            }
        ]
    },
    {
        "id": 820,
        "parent_id": 806,
        "tax_name": "Budget Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Budget Cars ",
                "id": 820
            }
        ]
    },
    {
        "id": 821,
        "parent_id": 806,
        "tax_name": "Classic Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Classic Cars ",
                "id": 821
            }
        ]
    },
    {
        "id": 822,
        "parent_id": 806,
        "tax_name": "Concept Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Concept Cars ",
                "id": 822
            }
        ]
    },
    {
        "id": 823,
        "parent_id": 806,
        "tax_name": "Driverless Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Driverless Cars ",
                "id": 823
            }
        ]
    },
    {
        "id": 824,
        "parent_id": 806,
        "tax_name": "Green Vehicles ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Green Vehicles ",
                "id": 824
            }
        ]
    },
    {
        "id": 825,
        "parent_id": 806,
        "tax_name": "Luxury Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Luxury Cars ",
                "id": 825
            }
        ]
    },
    {
        "id": 826,
        "parent_id": 806,
        "tax_name": "Performance Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Performance Cars ",
                "id": 826
            }
        ]
    },
    {
        "id": 827,
        "parent_id": 806,
        "tax_name": "Motorbikes ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Motorbikes ",
                "id": 827
            }
        ]
    },
    {
        "id": 828,
        "parent_id": 806,
        "tax_name": "Other Vehicles ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "New Vehicles",
                "id": 806
            },
            {
                "name": "Other Vehicles ",
                "id": 828
            }
        ]
    },
    {
        "id": 829,
        "parent_id": 805,
        "tax_name": "Pre-Owned Vehicles",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership",
                "id": 805
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            }
        ]
    },
    {
        "id": 830,
        "parent_id": 829,
        "tax_name": "Commercial Trucks ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Commercial Trucks ",
                "id": 830
            }
        ]
    },
    {
        "id": 831,
        "parent_id": 829,
        "tax_name": "Sedan ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Sedan ",
                "id": 831
            }
        ]
    },
    {
        "id": 832,
        "parent_id": 829,
        "tax_name": "Station Wagon ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Station Wagon ",
                "id": 832
            }
        ]
    },
    {
        "id": 833,
        "parent_id": 829,
        "tax_name": "SUV ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "SUV ",
                "id": 833
            }
        ]
    },
    {
        "id": 834,
        "parent_id": 829,
        "tax_name": "Van ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Van ",
                "id": 834
            }
        ]
    },
    {
        "id": 835,
        "parent_id": 829,
        "tax_name": "Convertible ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Convertible ",
                "id": 835
            }
        ]
    },
    {
        "id": 836,
        "parent_id": 829,
        "tax_name": "Coupe ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Coupe ",
                "id": 836
            }
        ]
    },
    {
        "id": 837,
        "parent_id": 829,
        "tax_name": "Crossover ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Crossover ",
                "id": 837
            }
        ]
    },
    {
        "id": 838,
        "parent_id": 829,
        "tax_name": "Hatchback ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Hatchback ",
                "id": 838
            }
        ]
    },
    {
        "id": 839,
        "parent_id": 829,
        "tax_name": "Microcar ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Microcar ",
                "id": 839
            }
        ]
    },
    {
        "id": 840,
        "parent_id": 829,
        "tax_name": "Minivan ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Minivan ",
                "id": 840
            }
        ]
    },
    {
        "id": 841,
        "parent_id": 829,
        "tax_name": "Off-Road Vehicles ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Off-Road Vehicles ",
                "id": 841
            }
        ]
    },
    {
        "id": 842,
        "parent_id": 829,
        "tax_name": "Pickup Trucks ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Pickup Trucks ",
                "id": 842
            }
        ]
    },
    {
        "id": 843,
        "parent_id": 829,
        "tax_name": "Budget Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Budget Cars ",
                "id": 843
            }
        ]
    },
    {
        "id": 844,
        "parent_id": 829,
        "tax_name": "Classic Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Classic Cars ",
                "id": 844
            }
        ]
    },
    {
        "id": 845,
        "parent_id": 829,
        "tax_name": "Concept Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Concept Cars ",
                "id": 845
            }
        ]
    },
    {
        "id": 846,
        "parent_id": 829,
        "tax_name": "Driverless Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Driverless Cars ",
                "id": 846
            }
        ]
    },
    {
        "id": 847,
        "parent_id": 829,
        "tax_name": "Green Vehicles ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Green Vehicles ",
                "id": 847
            }
        ]
    },
    {
        "id": 848,
        "parent_id": 829,
        "tax_name": "Luxury Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Luxury Cars ",
                "id": 848
            }
        ]
    },
    {
        "id": 849,
        "parent_id": 829,
        "tax_name": "Performance Cars ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Performance Cars ",
                "id": 849
            }
        ]
    },
    {
        "id": 850,
        "parent_id": 829,
        "tax_name": "Motorbikes ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Motorbikes ",
                "id": 850
            }
        ]
    },
    {
        "id": 851,
        "parent_id": 829,
        "tax_name": "Other Vehicles ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Ownership"
            },
            {
                "name": "Pre-Owned Vehicles",
                "id": 829
            },
            {
                "name": "Other Vehicles ",
                "id": 851
            }
        ]
    },
    {
        "id": 852,
        "parent_id": 752,
        "tax_name": "Automotive Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products",
                "id": 852
            }
        ]
    },
    {
        "id": 853,
        "parent_id": 852,
        "tax_name": "Automotive Care Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products",
                "id": 852
            },
            {
                "name": "Automotive Care Products",
                "id": 853
            }
        ]
    },
    {
        "id": 854,
        "parent_id": 852,
        "tax_name": "Automotive Parts and Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products",
                "id": 852
            },
            {
                "name": "Automotive Parts and Accessories",
                "id": 854
            }
        ]
    },
    {
        "id": 855,
        "parent_id": 854,
        "tax_name": "Car Alarms",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products"
            },
            {
                "name": "Automotive Parts and Accessories",
                "id": 854
            },
            {
                "name": "Car Alarms",
                "id": 855
            }
        ]
    },
    {
        "id": 856,
        "parent_id": 854,
        "tax_name": "Car Amplifiers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products"
            },
            {
                "name": "Automotive Parts and Accessories",
                "id": 854
            },
            {
                "name": "Car Amplifiers",
                "id": 856
            }
        ]
    },
    {
        "id": 857,
        "parent_id": 854,
        "tax_name": "Car Seats",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products"
            },
            {
                "name": "Automotive Parts and Accessories",
                "id": 854
            },
            {
                "name": "Car Seats",
                "id": 857
            }
        ]
    },
    {
        "id": 858,
        "parent_id": 854,
        "tax_name": "Car Speakers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products"
            },
            {
                "name": "Automotive Parts and Accessories",
                "id": 854
            },
            {
                "name": "Car Speakers",
                "id": 858
            }
        ]
    },
    {
        "id": 859,
        "parent_id": 854,
        "tax_name": "Car Navigation Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products"
            },
            {
                "name": "Automotive Parts and Accessories",
                "id": 854
            },
            {
                "name": "Car Navigation Equipment",
                "id": 859
            }
        ]
    },
    {
        "id": 860,
        "parent_id": 854,
        "tax_name": "Automotive Tires",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Products"
            },
            {
                "name": "Automotive Parts and Accessories",
                "id": 854
            },
            {
                "name": "Automotive Tires",
                "id": 860
            }
        ]
    },
    {
        "id": 861,
        "parent_id": 752,
        "tax_name": "Automotive Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Services",
                "id": 861
            }
        ]
    },
    {
        "id": 862,
        "parent_id": 861,
        "tax_name": "Auto Rental",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Services",
                "id": 861
            },
            {
                "name": "Auto Rental",
                "id": 862
            }
        ]
    },
    {
        "id": 863,
        "parent_id": 861,
        "tax_name": "Auto Towing and Repair",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Services",
                "id": 861
            },
            {
                "name": "Auto Towing and Repair",
                "id": 863
            }
        ]
    },
    {
        "id": 864,
        "parent_id": 861,
        "tax_name": "Car Wash",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Automotive Services",
                "id": 861
            },
            {
                "name": "Car Wash",
                "id": 864
            }
        ]
    },
    {
        "id": 865,
        "parent_id": 752,
        "tax_name": "Beauty Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Beauty Services",
                "id": 865
            }
        ]
    },
    {
        "id": 866,
        "parent_id": 865,
        "tax_name": "Beauty Salons and Tanning",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Beauty Services",
                "id": 865
            },
            {
                "name": "Beauty Salons and Tanning",
                "id": 866
            }
        ]
    },
    {
        "id": 867,
        "parent_id": 865,
        "tax_name": "Hair Salons",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Beauty Services",
                "id": 865
            },
            {
                "name": "Hair Salons",
                "id": 867
            }
        ]
    },
    {
        "id": 868,
        "parent_id": 865,
        "tax_name": "Nail Salons",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Beauty Services",
                "id": 865
            },
            {
                "name": "Nail Salons",
                "id": 868
            }
        ]
    },
    {
        "id": 869,
        "parent_id": 865,
        "tax_name": "Piercing and Tattooing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Beauty Services",
                "id": 865
            },
            {
                "name": "Piercing and Tattooing",
                "id": 869
            }
        ]
    },
    {
        "id": 870,
        "parent_id": 865,
        "tax_name": "Spas",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Beauty Services",
                "id": 865
            },
            {
                "name": "Spas",
                "id": 870
            }
        ]
    },
    {
        "id": 871,
        "parent_id": 752,
        "tax_name": "Business and Industrial",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            }
        ]
    },
    {
        "id": 872,
        "parent_id": 871,
        "tax_name": "Advertising and Marketing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Advertising and Marketing",
                "id": 872
            }
        ]
    },
    {
        "id": 873,
        "parent_id": 871,
        "tax_name": "Auctions",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Auctions",
                "id": 873
            }
        ]
    },
    {
        "id": 874,
        "parent_id": 871,
        "tax_name": "Conferences/Events/Seminars",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Conferences/Events/Seminars",
                "id": 874
            }
        ]
    },
    {
        "id": 875,
        "parent_id": 871,
        "tax_name": "Construction",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Construction",
                "id": 875
            }
        ]
    },
    {
        "id": 876,
        "parent_id": 871,
        "tax_name": "Energy Industry",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Energy Industry",
                "id": 876
            }
        ]
    },
    {
        "id": 877,
        "parent_id": 876,
        "tax_name": "Energy Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Energy Industry",
                "id": 876
            },
            {
                "name": "Energy Services",
                "id": 877
            }
        ]
    },
    {
        "id": 878,
        "parent_id": 876,
        "tax_name": "Oil, Gas and Consumable Fuels",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Energy Industry",
                "id": 876
            },
            {
                "name": "Oil, Gas and Consumable Fuels",
                "id": 878
            }
        ]
    },
    {
        "id": 879,
        "parent_id": 876,
        "tax_name": "Electric Power Industry",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Energy Industry",
                "id": 876
            },
            {
                "name": "Electric Power Industry",
                "id": 879
            }
        ]
    },
    {
        "id": 880,
        "parent_id": 871,
        "tax_name": "Forestry and Logging",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Forestry and Logging",
                "id": 880
            }
        ]
    },
    {
        "id": 881,
        "parent_id": 871,
        "tax_name": "Government",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Government",
                "id": 881
            }
        ]
    },
    {
        "id": 882,
        "parent_id": 871,
        "tax_name": "Human Resources",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Human Resources",
                "id": 882
            }
        ]
    },
    {
        "id": 883,
        "parent_id": 871,
        "tax_name": "Industrial Storage",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Industrial Storage",
                "id": 883
            }
        ]
    },
    {
        "id": 884,
        "parent_id": 871,
        "tax_name": "Industrials",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Industrials",
                "id": 884
            }
        ]
    },
    {
        "id": 885,
        "parent_id": 884,
        "tax_name": "Aerospace and Defense",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Industrials",
                "id": 884
            },
            {
                "name": "Aerospace and Defense",
                "id": 885
            }
        ]
    },
    {
        "id": 886,
        "parent_id": 884,
        "tax_name": "Construction and Engineering",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Industrials",
                "id": 884
            },
            {
                "name": "Construction and Engineering",
                "id": 886
            }
        ]
    },
    {
        "id": 887,
        "parent_id": 884,
        "tax_name": "Industrial Conglomerates",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Industrials",
                "id": 884
            },
            {
                "name": "Industrial Conglomerates",
                "id": 887
            }
        ]
    },
    {
        "id": 888,
        "parent_id": 884,
        "tax_name": "Trading Companies and Distributors",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Industrials",
                "id": 884
            },
            {
                "name": "Trading Companies and Distributors",
                "id": 888
            }
        ]
    },
    {
        "id": 889,
        "parent_id": 884,
        "tax_name": "Transportation",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Industrials",
                "id": 884
            },
            {
                "name": "Transportation",
                "id": 889
            }
        ]
    },
    {
        "id": 890,
        "parent_id": 871,
        "tax_name": "Laundry and Dry Cleaning Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Laundry and Dry Cleaning Services",
                "id": 890
            }
        ]
    },
    {
        "id": 891,
        "parent_id": 871,
        "tax_name": "Law Enforcement",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Law Enforcement",
                "id": 891
            }
        ]
    },
    {
        "id": 892,
        "parent_id": 871,
        "tax_name": "Manufacturing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Manufacturing",
                "id": 892
            }
        ]
    },
    {
        "id": 893,
        "parent_id": 871,
        "tax_name": "Material Handling",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Material Handling",
                "id": 893
            }
        ]
    },
    {
        "id": 894,
        "parent_id": 871,
        "tax_name": "Medical and Biotechnology",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Medical and Biotechnology",
                "id": 894
            }
        ]
    },
    {
        "id": 895,
        "parent_id": 871,
        "tax_name": "Mining and Quarrying",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Mining and Quarrying",
                "id": 895
            }
        ]
    },
    {
        "id": 896,
        "parent_id": 871,
        "tax_name": "Photographers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Photographers",
                "id": 896
            }
        ]
    },
    {
        "id": 897,
        "parent_id": 871,
        "tax_name": "Printing/Fax/WiFi Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Printing/Fax/WiFi Services",
                "id": 897
            }
        ]
    },
    {
        "id": 898,
        "parent_id": 871,
        "tax_name": "Public Relations and Strategic Communication",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Public Relations and Strategic Communication",
                "id": 898
            }
        ]
    },
    {
        "id": 899,
        "parent_id": 871,
        "tax_name": "Retail",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Retail",
                "id": 899
            }
        ]
    },
    {
        "id": 900,
        "parent_id": 899,
        "tax_name": "Cell Phone Stores",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Retail",
                "id": 899
            },
            {
                "name": "Cell Phone Stores",
                "id": 900
            }
        ]
    },
    {
        "id": 901,
        "parent_id": 899,
        "tax_name": "Music Stores",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Retail",
                "id": 899
            },
            {
                "name": "Music Stores",
                "id": 901
            }
        ]
    },
    {
        "id": 902,
        "parent_id": 899,
        "tax_name": "Grocery Stores and Supermarkets",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Retail",
                "id": 899
            },
            {
                "name": "Grocery Stores and Supermarkets",
                "id": 902
            }
        ]
    },
    {
        "id": 903,
        "parent_id": 899,
        "tax_name": "Shopping Malls",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Retail",
                "id": 899
            },
            {
                "name": "Shopping Malls",
                "id": 903
            }
        ]
    },
    {
        "id": 904,
        "parent_id": 899,
        "tax_name": "Department Stores",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Retail",
                "id": 899
            },
            {
                "name": "Department Stores",
                "id": 904
            }
        ]
    },
    {
        "id": 905,
        "parent_id": 899,
        "tax_name": "Specialty Stores",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Retail",
                "id": 899
            },
            {
                "name": "Specialty Stores",
                "id": 905
            }
        ]
    },
    {
        "id": 906,
        "parent_id": 899,
        "tax_name": "Pawn Shops",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Retail",
                "id": 899
            },
            {
                "name": "Pawn Shops",
                "id": 906
            }
        ]
    },
    {
        "id": 907,
        "parent_id": 899,
        "tax_name": "Factory Outlet Stores",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Retail",
                "id": 899
            },
            {
                "name": "Factory Outlet Stores",
                "id": 907
            }
        ]
    },
    {
        "id": 908,
        "parent_id": 871,
        "tax_name": "Science and Laboratory",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Science and Laboratory",
                "id": 908
            }
        ]
    },
    {
        "id": 909,
        "parent_id": 871,
        "tax_name": "Signage",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Signage",
                "id": 909
            }
        ]
    },
    {
        "id": 910,
        "parent_id": 871,
        "tax_name": "Small Business",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Small Business",
                "id": 910
            }
        ]
    },
    {
        "id": 911,
        "parent_id": 871,
        "tax_name": "Telecom Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Telecom Services",
                "id": 911
            }
        ]
    },
    {
        "id": 912,
        "parent_id": 911,
        "tax_name": "Home Internet Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Telecom Services",
                "id": 911
            },
            {
                "name": "Home Internet Services",
                "id": 912
            }
        ]
    },
    {
        "id": 913,
        "parent_id": 911,
        "tax_name": "Home Television Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Telecom Services",
                "id": 911
            },
            {
                "name": "Home Television Services",
                "id": 913
            }
        ]
    },
    {
        "id": 914,
        "parent_id": 911,
        "tax_name": "Home Phone Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Telecom Services",
                "id": 911
            },
            {
                "name": "Home Phone Services",
                "id": 914
            }
        ]
    },
    {
        "id": 915,
        "parent_id": 911,
        "tax_name": "Mobile Phone Plans",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Telecom Services",
                "id": 911
            },
            {
                "name": "Mobile Phone Plans",
                "id": 915
            }
        ]
    },
    {
        "id": 916,
        "parent_id": 911,
        "tax_name": "Prepaid International Phone Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Telecom Services",
                "id": 911
            },
            {
                "name": "Prepaid International Phone Services",
                "id": 916
            }
        ]
    },
    {
        "id": 917,
        "parent_id": 911,
        "tax_name": "Business Telecom Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial"
            },
            {
                "name": "Telecom Services",
                "id": 911
            },
            {
                "name": "Business Telecom Services",
                "id": 917
            }
        ]
    },
    {
        "id": 918,
        "parent_id": 871,
        "tax_name": "Waste Disposal and Recycling",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Business and Industrial",
                "id": 871
            },
            {
                "name": "Waste Disposal and Recycling",
                "id": 918
            }
        ]
    },
    {
        "id": 919,
        "parent_id": 752,
        "tax_name": "Clothing and Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            }
        ]
    },
    {
        "id": 920,
        "parent_id": 919,
        "tax_name": "Clothing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            },
            {
                "name": "Clothing",
                "id": 920
            }
        ]
    },
    {
        "id": 921,
        "parent_id": 920,
        "tax_name": "Children's Clothing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories"
            },
            {
                "name": "Clothing",
                "id": 920
            },
            {
                "name": "Children's Clothing",
                "id": 921
            }
        ]
    },
    {
        "id": 922,
        "parent_id": 920,
        "tax_name": "Men's Clothing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories"
            },
            {
                "name": "Clothing",
                "id": 920
            },
            {
                "name": "Men's Clothing",
                "id": 922
            }
        ]
    },
    {
        "id": 923,
        "parent_id": 920,
        "tax_name": "Women's Clothing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories"
            },
            {
                "name": "Clothing",
                "id": 920
            },
            {
                "name": "Women's Clothing",
                "id": 923
            }
        ]
    },
    {
        "id": 924,
        "parent_id": 920,
        "tax_name": "Wedding Dresses/Bridal Wear/Tuxedos",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories"
            },
            {
                "name": "Clothing",
                "id": 920
            },
            {
                "name": "Wedding Dresses/Bridal Wear/Tuxedos",
                "id": 924
            }
        ]
    },
    {
        "id": 925,
        "parent_id": 920,
        "tax_name": "Maternity Clothing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories"
            },
            {
                "name": "Clothing",
                "id": 920
            },
            {
                "name": "Maternity Clothing",
                "id": 925
            }
        ]
    },
    {
        "id": 926,
        "parent_id": 920,
        "tax_name": "Underwear and Lingerie",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories"
            },
            {
                "name": "Clothing",
                "id": 920
            },
            {
                "name": "Underwear and Lingerie",
                "id": 926
            }
        ]
    },
    {
        "id": 927,
        "parent_id": 920,
        "tax_name": "Sportswear",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories"
            },
            {
                "name": "Clothing",
                "id": 920
            },
            {
                "name": "Sportswear",
                "id": 927
            }
        ]
    },
    {
        "id": 928,
        "parent_id": 919,
        "tax_name": "Clothing Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            },
            {
                "name": "Clothing Accessories",
                "id": 928
            }
        ]
    },
    {
        "id": 929,
        "parent_id": 919,
        "tax_name": "Costumes and Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            },
            {
                "name": "Costumes and Accessories",
                "id": 929
            }
        ]
    },
    {
        "id": 930,
        "parent_id": 919,
        "tax_name": "Footwear",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            },
            {
                "name": "Footwear",
                "id": 930
            }
        ]
    },
    {
        "id": 931,
        "parent_id": 919,
        "tax_name": "Footwear Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            },
            {
                "name": "Footwear Accessories",
                "id": 931
            }
        ]
    },
    {
        "id": 932,
        "parent_id": 919,
        "tax_name": "Handbags and Wallets",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            },
            {
                "name": "Handbags and Wallets",
                "id": 932
            }
        ]
    },
    {
        "id": 933,
        "parent_id": 919,
        "tax_name": "Jewelry and Watches",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            },
            {
                "name": "Jewelry and Watches",
                "id": 933
            }
        ]
    },
    {
        "id": 934,
        "parent_id": 919,
        "tax_name": "Sunglasses",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Clothing and Accessories",
                "id": 919
            },
            {
                "name": "Sunglasses",
                "id": 934
            }
        ]
    },
    {
        "id": 935,
        "parent_id": 752,
        "tax_name": "Collectables and Antiques",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Collectables and Antiques",
                "id": 935
            }
        ]
    },
    {
        "id": 936,
        "parent_id": 935,
        "tax_name": "Antiques",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Collectables and Antiques",
                "id": 935
            },
            {
                "name": "Antiques",
                "id": 936
            }
        ]
    },
    {
        "id": 937,
        "parent_id": 935,
        "tax_name": "Coins and Paper Money",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Collectables and Antiques",
                "id": 935
            },
            {
                "name": "Coins and Paper Money",
                "id": 937
            }
        ]
    },
    {
        "id": 938,
        "parent_id": 935,
        "tax_name": "Collectibles",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Collectables and Antiques",
                "id": 935
            },
            {
                "name": "Collectibles",
                "id": 938
            }
        ]
    },
    {
        "id": 939,
        "parent_id": 935,
        "tax_name": "Entertainment Memorabilia",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Collectables and Antiques",
                "id": 935
            },
            {
                "name": "Entertainment Memorabilia",
                "id": 939
            }
        ]
    },
    {
        "id": 940,
        "parent_id": 935,
        "tax_name": "Sports Memorabilia and Trading Cards",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Collectables and Antiques",
                "id": 935
            },
            {
                "name": "Sports Memorabilia and Trading Cards",
                "id": 940
            }
        ]
    },
    {
        "id": 941,
        "parent_id": 935,
        "tax_name": "Stamps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Collectables and Antiques",
                "id": 935
            },
            {
                "name": "Stamps",
                "id": 941
            }
        ]
    },
    {
        "id": 942,
        "parent_id": 752,
        "tax_name": "Consumer Electronics",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            }
        ]
    },
    {
        "id": 943,
        "parent_id": 942,
        "tax_name": "Arcade Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Arcade Equipment",
                "id": 943
            }
        ]
    },
    {
        "id": 944,
        "parent_id": 942,
        "tax_name": "Audio",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Audio",
                "id": 944
            }
        ]
    },
    {
        "id": 945,
        "parent_id": 944,
        "tax_name": "CD Players",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics"
            },
            {
                "name": "Audio",
                "id": 944
            },
            {
                "name": "CD Players",
                "id": 945
            }
        ]
    },
    {
        "id": 946,
        "parent_id": 944,
        "tax_name": "Headphones",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics"
            },
            {
                "name": "Audio",
                "id": 944
            },
            {
                "name": "Headphones",
                "id": 946
            }
        ]
    },
    {
        "id": 947,
        "parent_id": 942,
        "tax_name": "Cameras and Photo",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Cameras and Photo",
                "id": 947
            }
        ]
    },
    {
        "id": 948,
        "parent_id": 947,
        "tax_name": "Camera and Photo Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics"
            },
            {
                "name": "Cameras and Photo",
                "id": 947
            },
            {
                "name": "Camera and Photo Accessories",
                "id": 948
            }
        ]
    },
    {
        "id": 949,
        "parent_id": 947,
        "tax_name": "Cameras",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics"
            },
            {
                "name": "Cameras and Photo",
                "id": 947
            },
            {
                "name": "Cameras",
                "id": 949
            }
        ]
    },
    {
        "id": 950,
        "parent_id": 942,
        "tax_name": "Circuit Boards and Components",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Circuit Boards and Components",
                "id": 950
            }
        ]
    },
    {
        "id": 951,
        "parent_id": 942,
        "tax_name": "Communications Electronics",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Communications Electronics",
                "id": 951
            }
        ]
    },
    {
        "id": 952,
        "parent_id": 942,
        "tax_name": "Components",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Components",
                "id": 952
            }
        ]
    },
    {
        "id": 953,
        "parent_id": 942,
        "tax_name": "Computers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Computers",
                "id": 953
            }
        ]
    },
    {
        "id": 954,
        "parent_id": 953,
        "tax_name": "Laptops",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics"
            },
            {
                "name": "Computers",
                "id": 953
            },
            {
                "name": "Laptops",
                "id": 954
            }
        ]
    },
    {
        "id": 955,
        "parent_id": 953,
        "tax_name": "Desktops",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics"
            },
            {
                "name": "Computers",
                "id": 953
            },
            {
                "name": "Desktops",
                "id": 955
            }
        ]
    },
    {
        "id": 956,
        "parent_id": 942,
        "tax_name": "E-Readers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "E-Readers",
                "id": 956
            }
        ]
    },
    {
        "id": 957,
        "parent_id": 942,
        "tax_name": "Electronics Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Electronics Accessories",
                "id": 957
            }
        ]
    },
    {
        "id": 958,
        "parent_id": 942,
        "tax_name": "Home Theater Systems",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Home Theater Systems",
                "id": 958
            }
        ]
    },
    {
        "id": 959,
        "parent_id": 942,
        "tax_name": "Marine Electronics",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Marine Electronics",
                "id": 959
            }
        ]
    },
    {
        "id": 960,
        "parent_id": 942,
        "tax_name": "Mobile Phone Plans",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Mobile Phone Plans",
                "id": 960
            }
        ]
    },
    {
        "id": 961,
        "parent_id": 942,
        "tax_name": "Mobile Phones and Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Mobile Phones and Accessories",
                "id": 961
            }
        ]
    },
    {
        "id": 962,
        "parent_id": 942,
        "tax_name": "Networking",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Networking",
                "id": 962
            }
        ]
    },
    {
        "id": 963,
        "parent_id": 942,
        "tax_name": "Printers/Copiers/Scanners/Fax",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Printers/Copiers/Scanners/Fax",
                "id": 963
            }
        ]
    },
    {
        "id": 964,
        "parent_id": 942,
        "tax_name": "Security Devices",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Security Devices",
                "id": 964
            }
        ]
    },
    {
        "id": 965,
        "parent_id": 942,
        "tax_name": "Tablets",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Tablets",
                "id": 965
            }
        ]
    },
    {
        "id": 966,
        "parent_id": 942,
        "tax_name": "Televisions",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Televisions",
                "id": 966
            }
        ]
    },
    {
        "id": 967,
        "parent_id": 942,
        "tax_name": "Video",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Video",
                "id": 967
            }
        ]
    },
    {
        "id": 968,
        "parent_id": 967,
        "tax_name": "Blu-Ray Disc Players",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics"
            },
            {
                "name": "Video",
                "id": 967
            },
            {
                "name": "Blu-Ray Disc Players",
                "id": 968
            }
        ]
    },
    {
        "id": 969,
        "parent_id": 967,
        "tax_name": "Camcorders",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics"
            },
            {
                "name": "Video",
                "id": 967
            },
            {
                "name": "Camcorders",
                "id": 969
            }
        ]
    },
    {
        "id": 970,
        "parent_id": 942,
        "tax_name": "Video Game Console Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Video Game Console Accessories",
                "id": 970
            }
        ]
    },
    {
        "id": 971,
        "parent_id": 942,
        "tax_name": "Video Games and Consoles",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Electronics",
                "id": 942
            },
            {
                "name": "Video Games and Consoles",
                "id": 971
            }
        ]
    },
    {
        "id": 972,
        "parent_id": 752,
        "tax_name": "Consumer Packaged Goods",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods",
                "id": 972
            }
        ]
    },
    {
        "id": 973,
        "parent_id": 972,
        "tax_name": "Edible",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods",
                "id": 972
            },
            {
                "name": "Edible",
                "id": 973
            }
        ]
    },
    {
        "id": 974,
        "parent_id": 973,
        "tax_name": "Beverages",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible",
                "id": 973
            },
            {
                "name": "Beverages",
                "id": 974
            }
        ]
    },
    {
        "id": 975,
        "parent_id": 974,
        "tax_name": "Carbonated Soft Drinks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages",
                "id": 974
            },
            {
                "name": "Carbonated Soft Drinks",
                "id": 975
            }
        ]
    },
    {
        "id": 976,
        "parent_id": 974,
        "tax_name": "Coffee & Tea",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages",
                "id": 974
            },
            {
                "name": "Coffee & Tea",
                "id": 976
            }
        ]
    },
    {
        "id": 977,
        "parent_id": 976,
        "tax_name": "Coffee",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Coffee & Tea",
                "id": 976
            },
            {
                "name": "Coffee",
                "id": 977
            }
        ]
    },
    {
        "id": 978,
        "parent_id": 976,
        "tax_name": "Coffee Creamer",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Coffee & Tea",
                "id": 976
            },
            {
                "name": "Coffee Creamer",
                "id": 978
            }
        ]
    },
    {
        "id": 979,
        "parent_id": 976,
        "tax_name": "Coffee Filters",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Coffee & Tea",
                "id": 976
            },
            {
                "name": "Coffee Filters",
                "id": 979
            }
        ]
    },
    {
        "id": 980,
        "parent_id": 976,
        "tax_name": "Tea - Bags/loose",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Coffee & Tea",
                "id": 976
            },
            {
                "name": "Tea - Bags/loose",
                "id": 980
            }
        ]
    },
    {
        "id": 981,
        "parent_id": 976,
        "tax_name": "Tea - Instant Tea Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Coffee & Tea",
                "id": 976
            },
            {
                "name": "Tea - Instant Tea Mixes",
                "id": 981
            }
        ]
    },
    {
        "id": 982,
        "parent_id": 976,
        "tax_name": "Tea/Coffee - Ready-to-Drink",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Coffee & Tea",
                "id": 976
            },
            {
                "name": "Tea/Coffee - Ready-to-Drink",
                "id": 982
            }
        ]
    },
    {
        "id": 983,
        "parent_id": 974,
        "tax_name": "Drink Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages",
                "id": 974
            },
            {
                "name": "Drink Mixes",
                "id": 983
            }
        ]
    },
    {
        "id": 984,
        "parent_id": 983,
        "tax_name": "Cocktail Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Drink Mixes",
                "id": 983
            },
            {
                "name": "Cocktail Mixes",
                "id": 984
            }
        ]
    },
    {
        "id": 985,
        "parent_id": 983,
        "tax_name": "Drink Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Drink Mixes",
                "id": 983
            },
            {
                "name": "Drink Mixes",
                "id": 985
            }
        ]
    },
    {
        "id": 986,
        "parent_id": 983,
        "tax_name": "Liquid Drink Enhancers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Drink Mixes",
                "id": 983
            },
            {
                "name": "Liquid Drink Enhancers",
                "id": 986
            }
        ]
    },
    {
        "id": 987,
        "parent_id": 983,
        "tax_name": "Milk Flavoring Cocoa Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Drink Mixes",
                "id": 983
            },
            {
                "name": "Milk Flavoring Cocoa Mixes",
                "id": 987
            }
        ]
    },
    {
        "id": 988,
        "parent_id": 974,
        "tax_name": "Juices",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages",
                "id": 974
            },
            {
                "name": "Juices",
                "id": 988
            }
        ]
    },
    {
        "id": 989,
        "parent_id": 988,
        "tax_name": "Aseptic Juices",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Juices",
                "id": 988
            },
            {
                "name": "Aseptic Juices",
                "id": 989
            }
        ]
    },
    {
        "id": 990,
        "parent_id": 988,
        "tax_name": "Bottled Juices",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Juices",
                "id": 988
            },
            {
                "name": "Bottled Juices",
                "id": 990
            }
        ]
    },
    {
        "id": 991,
        "parent_id": 988,
        "tax_name": "Canned Juices",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Juices",
                "id": 988
            },
            {
                "name": "Canned Juices",
                "id": 991
            }
        ]
    },
    {
        "id": 992,
        "parent_id": 988,
        "tax_name": "Juice/Drink Concentrate",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Juices",
                "id": 988
            },
            {
                "name": "Juice/Drink Concentrate",
                "id": 992
            }
        ]
    },
    {
        "id": 993,
        "parent_id": 974,
        "tax_name": "Non-Fruit Drinks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages",
                "id": 974
            },
            {
                "name": "Non-Fruit Drinks",
                "id": 993
            }
        ]
    },
    {
        "id": 994,
        "parent_id": 993,
        "tax_name": "Non-Fruit Drinks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Non-Fruit Drinks",
                "id": 993
            },
            {
                "name": "Non-Fruit Drinks",
                "id": 994
            }
        ]
    },
    {
        "id": 995,
        "parent_id": 993,
        "tax_name": "Powdered Milk",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Non-Fruit Drinks",
                "id": 993
            },
            {
                "name": "Powdered Milk",
                "id": 995
            }
        ]
    },
    {
        "id": 996,
        "parent_id": 974,
        "tax_name": "Sports/Energy Drinks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages",
                "id": 974
            },
            {
                "name": "Sports/Energy Drinks",
                "id": 996
            }
        ]
    },
    {
        "id": 997,
        "parent_id": 996,
        "tax_name": "Energy Drinks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Sports/Energy Drinks",
                "id": 996
            },
            {
                "name": "Energy Drinks",
                "id": 997
            }
        ]
    },
    {
        "id": 998,
        "parent_id": 996,
        "tax_name": "Sports Drinks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Sports/Energy Drinks",
                "id": 996
            },
            {
                "name": "Sports Drinks",
                "id": 998
            }
        ]
    },
    {
        "id": 999,
        "parent_id": 974,
        "tax_name": "Water",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages",
                "id": 974
            },
            {
                "name": "Water",
                "id": 999
            }
        ]
    },
    {
        "id": 1000,
        "parent_id": 999,
        "tax_name": "Bottled Water",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Beverages"
            },
            {
                "name": "Water",
                "id": 999
            },
            {
                "name": "Bottled Water",
                "id": 1000
            }
        ]
    },
    {
        "id": 1001,
        "parent_id": 973,
        "tax_name": "Frozen",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible",
                "id": 973
            },
            {
                "name": "Frozen",
                "id": 1001
            }
        ]
    },
    {
        "id": 1002,
        "parent_id": 1001,
        "tax_name": "Frozen Baked Goods",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen",
                "id": 1001
            },
            {
                "name": "Frozen Baked Goods",
                "id": 1002
            }
        ]
    },
    {
        "id": 1003,
        "parent_id": 1002,
        "tax_name": "Bread/Dough",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Baked Goods",
                "id": 1002
            },
            {
                "name": "Bread/Dough",
                "id": 1003
            }
        ]
    },
    {
        "id": 1004,
        "parent_id": 1002,
        "tax_name": "Cookies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Baked Goods",
                "id": 1002
            },
            {
                "name": "Cookies",
                "id": 1004
            }
        ]
    },
    {
        "id": 1005,
        "parent_id": 1002,
        "tax_name": "Pies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Baked Goods",
                "id": 1002
            },
            {
                "name": "Pies",
                "id": 1005
            }
        ]
    },
    {
        "id": 1006,
        "parent_id": 1001,
        "tax_name": "Frozen Beverages",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen",
                "id": 1001
            },
            {
                "name": "Frozen Beverages",
                "id": 1006
            }
        ]
    },
    {
        "id": 1007,
        "parent_id": 1006,
        "tax_name": "Coffee Creamer",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Beverages",
                "id": 1006
            },
            {
                "name": "Coffee Creamer",
                "id": 1007
            }
        ]
    },
    {
        "id": 1008,
        "parent_id": 1006,
        "tax_name": "Juices",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Beverages",
                "id": 1006
            },
            {
                "name": "Juices",
                "id": 1008
            }
        ]
    },
    {
        "id": 1009,
        "parent_id": 1001,
        "tax_name": "Frozen Desserts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen",
                "id": 1001
            },
            {
                "name": "Frozen Desserts",
                "id": 1009
            }
        ]
    },
    {
        "id": 1010,
        "parent_id": 1009,
        "tax_name": "Desserts/Toppings",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Desserts",
                "id": 1009
            },
            {
                "name": "Desserts/Toppings",
                "id": 1010
            }
        ]
    },
    {
        "id": 1011,
        "parent_id": 1009,
        "tax_name": "Ice Cream/Sherbet",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Desserts",
                "id": 1009
            },
            {
                "name": "Ice Cream/Sherbet",
                "id": 1011
            }
        ]
    },
    {
        "id": 1012,
        "parent_id": 1009,
        "tax_name": "Novelties ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Desserts",
                "id": 1009
            },
            {
                "name": "Novelties ",
                "id": 1012
            }
        ]
    },
    {
        "id": 1013,
        "parent_id": 1001,
        "tax_name": "Frozen Fruits & Vegetables",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen",
                "id": 1001
            },
            {
                "name": "Frozen Fruits & Vegetables",
                "id": 1013
            }
        ]
    },
    {
        "id": 1014,
        "parent_id": 1013,
        "tax_name": "Corn on the Cob",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Fruits & Vegetables",
                "id": 1013
            },
            {
                "name": "Corn on the Cob",
                "id": 1014
            }
        ]
    },
    {
        "id": 1015,
        "parent_id": 1013,
        "tax_name": "Fruit",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Fruits & Vegetables",
                "id": 1013
            },
            {
                "name": "Fruit",
                "id": 1015
            }
        ]
    },
    {
        "id": 1016,
        "parent_id": 1013,
        "tax_name": "Plain Vegetables",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Fruits & Vegetables",
                "id": 1013
            },
            {
                "name": "Plain Vegetables",
                "id": 1016
            }
        ]
    },
    {
        "id": 1017,
        "parent_id": 1013,
        "tax_name": "Potatoes/Onions",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Fruits & Vegetables",
                "id": 1013
            },
            {
                "name": "Potatoes/Onions",
                "id": 1017
            }
        ]
    },
    {
        "id": 1018,
        "parent_id": 1013,
        "tax_name": "Prepared Vegetables",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Fruits & Vegetables",
                "id": 1013
            },
            {
                "name": "Prepared Vegetables",
                "id": 1018
            }
        ]
    },
    {
        "id": 1019,
        "parent_id": 1001,
        "tax_name": "Frozen Meals",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen",
                "id": 1001
            },
            {
                "name": "Frozen Meals",
                "id": 1019
            }
        ]
    },
    {
        "id": 1020,
        "parent_id": 1019,
        "tax_name": "Breakfast Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meals",
                "id": 1019
            },
            {
                "name": "Breakfast Food",
                "id": 1020
            }
        ]
    },
    {
        "id": 1021,
        "parent_id": 1019,
        "tax_name": "Dinners/Entrees",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meals",
                "id": 1019
            },
            {
                "name": "Dinners/Entrees",
                "id": 1021
            }
        ]
    },
    {
        "id": 1022,
        "parent_id": 1019,
        "tax_name": "Pasta",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meals",
                "id": 1019
            },
            {
                "name": "Pasta",
                "id": 1022
            }
        ]
    },
    {
        "id": 1023,
        "parent_id": 1019,
        "tax_name": "Pizza",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meals",
                "id": 1019
            },
            {
                "name": "Pizza",
                "id": 1023
            }
        ]
    },
    {
        "id": 1024,
        "parent_id": 1019,
        "tax_name": "Soups/Sides/Other",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meals",
                "id": 1019
            },
            {
                "name": "Soups/Sides/Other",
                "id": 1024
            }
        ]
    },
    {
        "id": 1025,
        "parent_id": 1001,
        "tax_name": "Frozen Meat/Poultry/Seafood ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen",
                "id": 1001
            },
            {
                "name": "Frozen Meat/Poultry/Seafood ",
                "id": 1025
            }
        ]
    },
    {
        "id": 1026,
        "parent_id": 1025,
        "tax_name": "Meat",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meat/Poultry/Seafood ",
                "id": 1025
            },
            {
                "name": "Meat",
                "id": 1026
            }
        ]
    },
    {
        "id": 1027,
        "parent_id": 1025,
        "tax_name": "Poultry",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meat/Poultry/Seafood ",
                "id": 1025
            },
            {
                "name": "Poultry",
                "id": 1027
            }
        ]
    },
    {
        "id": 1028,
        "parent_id": 1025,
        "tax_name": "Processed Poultry",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meat/Poultry/Seafood ",
                "id": 1025
            },
            {
                "name": "Processed Poultry",
                "id": 1028
            }
        ]
    },
    {
        "id": 1029,
        "parent_id": 1025,
        "tax_name": "Seafood",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Meat/Poultry/Seafood ",
                "id": 1025
            },
            {
                "name": "Seafood",
                "id": 1029
            }
        ]
    },
    {
        "id": 1030,
        "parent_id": 1001,
        "tax_name": "Frozen Snacks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen",
                "id": 1001
            },
            {
                "name": "Frozen Snacks",
                "id": 1030
            }
        ]
    },
    {
        "id": 1031,
        "parent_id": 1030,
        "tax_name": "Appetizers/Snack Rolls",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Snacks",
                "id": 1030
            },
            {
                "name": "Appetizers/Snack Rolls",
                "id": 1031
            }
        ]
    },
    {
        "id": 1032,
        "parent_id": 1030,
        "tax_name": "Other Snacks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Frozen Snacks",
                "id": 1030
            },
            {
                "name": "Other Snacks",
                "id": 1032
            }
        ]
    },
    {
        "id": 1033,
        "parent_id": 1001,
        "tax_name": "Other Frozen",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen",
                "id": 1001
            },
            {
                "name": "Other Frozen",
                "id": 1033
            }
        ]
    },
    {
        "id": 1034,
        "parent_id": 1033,
        "tax_name": "Baby Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Other Frozen",
                "id": 1033
            },
            {
                "name": "Baby Food",
                "id": 1034
            }
        ]
    },
    {
        "id": 1035,
        "parent_id": 1033,
        "tax_name": "Other Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Frozen"
            },
            {
                "name": "Other Frozen",
                "id": 1033
            },
            {
                "name": "Other Food",
                "id": 1035
            }
        ]
    },
    {
        "id": 1036,
        "parent_id": 973,
        "tax_name": "General Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible",
                "id": 973
            },
            {
                "name": "General Food",
                "id": 1036
            }
        ]
    },
    {
        "id": 1037,
        "parent_id": 1036,
        "tax_name": "Baby Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Baby Food",
                "id": 1037
            }
        ]
    },
    {
        "id": 1038,
        "parent_id": 1037,
        "tax_name": "Baby Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baby Food",
                "id": 1037
            },
            {
                "name": "Baby Food",
                "id": 1038
            }
        ]
    },
    {
        "id": 1039,
        "parent_id": 1037,
        "tax_name": "Baby Formula/Electrolytes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baby Food",
                "id": 1037
            },
            {
                "name": "Baby Formula/Electrolytes",
                "id": 1039
            }
        ]
    },
    {
        "id": 1040,
        "parent_id": 1036,
        "tax_name": "Bakery",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Bakery",
                "id": 1040
            }
        ]
    },
    {
        "id": 1041,
        "parent_id": 1040,
        "tax_name": "Bagels/Bialys",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Bakery",
                "id": 1040
            },
            {
                "name": "Bagels/Bialys",
                "id": 1041
            }
        ]
    },
    {
        "id": 1042,
        "parent_id": 1040,
        "tax_name": "Bakery Snacks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Bakery",
                "id": 1040
            },
            {
                "name": "Bakery Snacks",
                "id": 1042
            }
        ]
    },
    {
        "id": 1043,
        "parent_id": 1040,
        "tax_name": "English Muffins",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Bakery",
                "id": 1040
            },
            {
                "name": "English Muffins",
                "id": 1043
            }
        ]
    },
    {
        "id": 1044,
        "parent_id": 1040,
        "tax_name": "Fresh Bread & Rolls",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Bakery",
                "id": 1040
            },
            {
                "name": "Fresh Bread & Rolls",
                "id": 1044
            }
        ]
    },
    {
        "id": 1045,
        "parent_id": 1040,
        "tax_name": "Pastry/Doughnuts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Bakery",
                "id": 1040
            },
            {
                "name": "Pastry/Doughnuts",
                "id": 1045
            }
        ]
    },
    {
        "id": 1046,
        "parent_id": 1040,
        "tax_name": "Pies & Cakes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Bakery",
                "id": 1040
            },
            {
                "name": "Pies & Cakes",
                "id": 1046
            }
        ]
    },
    {
        "id": 1047,
        "parent_id": 1036,
        "tax_name": "Baking",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Baking",
                "id": 1047
            }
        ]
    },
    {
        "id": 1048,
        "parent_id": 1047,
        "tax_name": "Baking Cups/Paper",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Baking Cups/Paper",
                "id": 1048
            }
        ]
    },
    {
        "id": 1049,
        "parent_id": 1047,
        "tax_name": "Baking Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Baking Mixes",
                "id": 1049
            }
        ]
    },
    {
        "id": 1050,
        "parent_id": 1047,
        "tax_name": "Baking Needs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Baking Needs",
                "id": 1050
            }
        ]
    },
    {
        "id": 1051,
        "parent_id": 1047,
        "tax_name": "Baking Nuts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Baking Nuts",
                "id": 1051
            }
        ]
    },
    {
        "id": 1052,
        "parent_id": 1047,
        "tax_name": "Baking Syrum/Molasses ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Baking Syrum/Molasses ",
                "id": 1052
            }
        ]
    },
    {
        "id": 1053,
        "parent_id": 1047,
        "tax_name": "Dessert Toppings",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Dessert Toppings",
                "id": 1053
            }
        ]
    },
    {
        "id": 1054,
        "parent_id": 1047,
        "tax_name": "Egg Substitute",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Egg Substitute",
                "id": 1054
            }
        ]
    },
    {
        "id": 1055,
        "parent_id": 1047,
        "tax_name": "Evaporated/Condensed Milk",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Evaporated/Condensed Milk",
                "id": 1055
            }
        ]
    },
    {
        "id": 1056,
        "parent_id": 1047,
        "tax_name": "Flour/Meal",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Flour/Meal",
                "id": 1056
            }
        ]
    },
    {
        "id": 1057,
        "parent_id": 1047,
        "tax_name": "Frosting",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Frosting",
                "id": 1057
            }
        ]
    },
    {
        "id": 1058,
        "parent_id": 1047,
        "tax_name": "Frt & Veg Preservative/Pectin",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Frt & Veg Preservative/Pectin",
                "id": 1058
            }
        ]
    },
    {
        "id": 1059,
        "parent_id": 1047,
        "tax_name": "Gelatin/Pudding PRD and Mixes ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Gelatin/Pudding PRD and Mixes ",
                "id": 1059
            }
        ]
    },
    {
        "id": 1060,
        "parent_id": 1047,
        "tax_name": "Glazed Fruits ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Glazed Fruits ",
                "id": 1060
            }
        ]
    },
    {
        "id": 1061,
        "parent_id": 1047,
        "tax_name": "Ice Cream Cones/Mixes ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Ice Cream Cones/Mixes ",
                "id": 1061
            }
        ]
    },
    {
        "id": 1062,
        "parent_id": 1047,
        "tax_name": "Marshmallows",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Marshmallows",
                "id": 1062
            }
        ]
    },
    {
        "id": 1063,
        "parent_id": 1047,
        "tax_name": "Shortening & Oil",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Shortening & Oil",
                "id": 1063
            }
        ]
    },
    {
        "id": 1064,
        "parent_id": 1047,
        "tax_name": "Spices/Seasonings",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Spices/Seasonings",
                "id": 1064
            }
        ]
    },
    {
        "id": 1065,
        "parent_id": 1047,
        "tax_name": "Sugar",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Sugar",
                "id": 1065
            }
        ]
    },
    {
        "id": 1066,
        "parent_id": 1047,
        "tax_name": "Sugar Substitutes ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Baking",
                "id": 1047
            },
            {
                "name": "Sugar Substitutes ",
                "id": 1066
            }
        ]
    },
    {
        "id": 1067,
        "parent_id": 1036,
        "tax_name": "Breakfast",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Breakfast",
                "id": 1067
            }
        ]
    },
    {
        "id": 1068,
        "parent_id": 1067,
        "tax_name": "Cold cereal",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Breakfast",
                "id": 1067
            },
            {
                "name": "Cold cereal",
                "id": 1068
            }
        ]
    },
    {
        "id": 1069,
        "parent_id": 1067,
        "tax_name": "Hot Cereal ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Breakfast",
                "id": 1067
            },
            {
                "name": "Hot Cereal ",
                "id": 1069
            }
        ]
    },
    {
        "id": 1070,
        "parent_id": 1067,
        "tax_name": "Other Breakfast Foods",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Breakfast",
                "id": 1067
            },
            {
                "name": "Other Breakfast Foods",
                "id": 1070
            }
        ]
    },
    {
        "id": 1071,
        "parent_id": 1067,
        "tax_name": "Pancake Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Breakfast",
                "id": 1067
            },
            {
                "name": "Pancake Mixes",
                "id": 1071
            }
        ]
    },
    {
        "id": 1072,
        "parent_id": 1067,
        "tax_name": "Syrup",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Breakfast",
                "id": 1067
            },
            {
                "name": "Syrup",
                "id": 1072
            }
        ]
    },
    {
        "id": 1073,
        "parent_id": 1067,
        "tax_name": "Toaster Pastries/Tarts ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Breakfast",
                "id": 1067
            },
            {
                "name": "Toaster Pastries/Tarts ",
                "id": 1073
            }
        ]
    },
    {
        "id": 1074,
        "parent_id": 1036,
        "tax_name": "Candy",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Candy",
                "id": 1074
            }
        ]
    },
    {
        "id": 1075,
        "parent_id": 1074,
        "tax_name": "Breath Fresheners",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Candy",
                "id": 1074
            },
            {
                "name": "Breath Fresheners",
                "id": 1075
            }
        ]
    },
    {
        "id": 1076,
        "parent_id": 1074,
        "tax_name": "Chocolate Candy",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Candy",
                "id": 1074
            },
            {
                "name": "Chocolate Candy",
                "id": 1076
            }
        ]
    },
    {
        "id": 1077,
        "parent_id": 1074,
        "tax_name": "Gum",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Candy",
                "id": 1074
            },
            {
                "name": "Gum",
                "id": 1077
            }
        ]
    },
    {
        "id": 1078,
        "parent_id": 1074,
        "tax_name": "Non-Chocolate Candy ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Candy",
                "id": 1074
            },
            {
                "name": "Non-Chocolate Candy ",
                "id": 1078
            }
        ]
    },
    {
        "id": 1079,
        "parent_id": 1036,
        "tax_name": "Condiments & Sauces",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            }
        ]
    },
    {
        "id": 1080,
        "parent_id": 1079,
        "tax_name": "Barbeque Sauce",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Barbeque Sauce",
                "id": 1080
            }
        ]
    },
    {
        "id": 1081,
        "parent_id": 1079,
        "tax_name": "Gravy/Sauce Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Gravy/Sauce Mixes",
                "id": 1081
            }
        ]
    },
    {
        "id": 1082,
        "parent_id": 1079,
        "tax_name": "Jellies/Jam/Honey",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Jellies/Jam/Honey",
                "id": 1082
            }
        ]
    },
    {
        "id": 1083,
        "parent_id": 1079,
        "tax_name": "Mayonnaise ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Mayonnaise ",
                "id": 1083
            }
        ]
    },
    {
        "id": 1084,
        "parent_id": 1079,
        "tax_name": "Mustard & Ketchup",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Mustard & Ketchup",
                "id": 1084
            }
        ]
    },
    {
        "id": 1085,
        "parent_id": 1079,
        "tax_name": "Nut Butter",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Nut Butter",
                "id": 1085
            }
        ]
    },
    {
        "id": 1086,
        "parent_id": 1079,
        "tax_name": "Other Sauces",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Other Sauces",
                "id": 1086
            }
        ]
    },
    {
        "id": 1087,
        "parent_id": 1079,
        "tax_name": "Pickles/Relish/Olives",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Pickles/Relish/Olives",
                "id": 1087
            }
        ]
    },
    {
        "id": 1088,
        "parent_id": 1079,
        "tax_name": "Salad  Dressing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Salad  Dressing",
                "id": 1088
            }
        ]
    },
    {
        "id": 1089,
        "parent_id": 1079,
        "tax_name": "Salad Toppings and Croutons",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Salad Toppings and Croutons",
                "id": 1089
            }
        ]
    },
    {
        "id": 1090,
        "parent_id": 1079,
        "tax_name": "Steak/Worcestershire  Sauce",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Steak/Worcestershire  Sauce",
                "id": 1090
            }
        ]
    },
    {
        "id": 1091,
        "parent_id": 1079,
        "tax_name": "Vinegar",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Condiments & Sauces",
                "id": 1079
            },
            {
                "name": "Vinegar",
                "id": 1091
            }
        ]
    },
    {
        "id": 1092,
        "parent_id": 1036,
        "tax_name": "Cookies & Crackers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Cookies & Crackers",
                "id": 1092
            }
        ]
    },
    {
        "id": 1093,
        "parent_id": 1092,
        "tax_name": "Cookies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Cookies & Crackers",
                "id": 1092
            },
            {
                "name": "Cookies",
                "id": 1093
            }
        ]
    },
    {
        "id": 1094,
        "parent_id": 1092,
        "tax_name": "Crackers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Cookies & Crackers",
                "id": 1092
            },
            {
                "name": "Crackers",
                "id": 1094
            }
        ]
    },
    {
        "id": 1095,
        "parent_id": 1036,
        "tax_name": "Ethnic",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Ethnic",
                "id": 1095
            }
        ]
    },
    {
        "id": 1096,
        "parent_id": 1095,
        "tax_name": "Asian food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Ethnic",
                "id": 1095
            },
            {
                "name": "Asian food",
                "id": 1096
            }
        ]
    },
    {
        "id": 1097,
        "parent_id": 1095,
        "tax_name": "Matzoh Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Ethnic",
                "id": 1095
            },
            {
                "name": "Matzoh Food",
                "id": 1097
            }
        ]
    },
    {
        "id": 1098,
        "parent_id": 1095,
        "tax_name": "Mexican Foods",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Ethnic",
                "id": 1095
            },
            {
                "name": "Mexican Foods",
                "id": 1098
            }
        ]
    },
    {
        "id": 1099,
        "parent_id": 1095,
        "tax_name": "Mexican Sauce ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Ethnic",
                "id": 1095
            },
            {
                "name": "Mexican Sauce ",
                "id": 1099
            }
        ]
    },
    {
        "id": 1100,
        "parent_id": 1036,
        "tax_name": "Meals",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Meals",
                "id": 1100
            }
        ]
    },
    {
        "id": 1101,
        "parent_id": 1100,
        "tax_name": "Baked Beans/Canned Bread",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Baked Beans/Canned Bread",
                "id": 1101
            }
        ]
    },
    {
        "id": 1102,
        "parent_id": 1100,
        "tax_name": "Breadcrumbs/Batters",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Breadcrumbs/Batters",
                "id": 1102
            }
        ]
    },
    {
        "id": 1103,
        "parent_id": 1100,
        "tax_name": "Dinners",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Dinners",
                "id": 1103
            }
        ]
    },
    {
        "id": 1104,
        "parent_id": 1100,
        "tax_name": "Dry Packaged Dinner Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Dry Packaged Dinner Mixes",
                "id": 1104
            }
        ]
    },
    {
        "id": 1105,
        "parent_id": 1100,
        "tax_name": "Grated Cheese",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Grated Cheese",
                "id": 1105
            }
        ]
    },
    {
        "id": 1106,
        "parent_id": 1100,
        "tax_name": "Instant Potatoes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Instant Potatoes",
                "id": 1106
            }
        ]
    },
    {
        "id": 1107,
        "parent_id": 1100,
        "tax_name": "Meat",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Meat",
                "id": 1107
            }
        ]
    },
    {
        "id": 1108,
        "parent_id": 1100,
        "tax_name": "Pasta",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Pasta",
                "id": 1108
            }
        ]
    },
    {
        "id": 1109,
        "parent_id": 1100,
        "tax_name": "Pizza Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Pizza Products",
                "id": 1109
            }
        ]
    },
    {
        "id": 1110,
        "parent_id": 1100,
        "tax_name": "Rice",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Rice",
                "id": 1110
            }
        ]
    },
    {
        "id": 1111,
        "parent_id": 1100,
        "tax_name": "Seafood",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Seafood",
                "id": 1111
            }
        ]
    },
    {
        "id": 1112,
        "parent_id": 1100,
        "tax_name": "Soup",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Soup",
                "id": 1112
            }
        ]
    },
    {
        "id": 1113,
        "parent_id": 1100,
        "tax_name": "Spaghetti/Italian Sauce",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Spaghetti/Italian Sauce",
                "id": 1113
            }
        ]
    },
    {
        "id": 1114,
        "parent_id": 1100,
        "tax_name": "Stuffing Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Meals",
                "id": 1100
            },
            {
                "name": "Stuffing Mixes",
                "id": 1114
            }
        ]
    },
    {
        "id": 1115,
        "parent_id": 1036,
        "tax_name": "Snacks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Snacks",
                "id": 1115
            }
        ]
    },
    {
        "id": 1116,
        "parent_id": 1115,
        "tax_name": "Dip/Dip Mixes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Dip/Dip Mixes",
                "id": 1116
            }
        ]
    },
    {
        "id": 1117,
        "parent_id": 1115,
        "tax_name": "Dried Meat Snacks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Dried Meat Snacks",
                "id": 1117
            }
        ]
    },
    {
        "id": 1118,
        "parent_id": 1115,
        "tax_name": "Dry Fruit Snacks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Dry Fruit Snacks",
                "id": 1118
            }
        ]
    },
    {
        "id": 1119,
        "parent_id": 1115,
        "tax_name": "Other Snacks ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Other Snacks ",
                "id": 1119
            }
        ]
    },
    {
        "id": 1120,
        "parent_id": 1115,
        "tax_name": "Popcorn/Popcorn Oil",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Popcorn/Popcorn Oil",
                "id": 1120
            }
        ]
    },
    {
        "id": 1121,
        "parent_id": 1115,
        "tax_name": "Rice/Popcorn Cakes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Rice/Popcorn Cakes",
                "id": 1121
            }
        ]
    },
    {
        "id": 1122,
        "parent_id": 1115,
        "tax_name": "Salty Snacks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Salty Snacks",
                "id": 1122
            }
        ]
    },
    {
        "id": 1123,
        "parent_id": 1115,
        "tax_name": "Snack Bars/Granola Bars",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Snack Bars/Granola Bars",
                "id": 1123
            }
        ]
    },
    {
        "id": 1124,
        "parent_id": 1115,
        "tax_name": "Snack Nuts/Seeds/Corn Nuts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Snacks",
                "id": 1115
            },
            {
                "name": "Snack Nuts/Seeds/Corn Nuts",
                "id": 1124
            }
        ]
    },
    {
        "id": 1125,
        "parent_id": 1036,
        "tax_name": "Fruit",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Fruit",
                "id": 1125
            }
        ]
    },
    {
        "id": 1126,
        "parent_id": 1125,
        "tax_name": "Canned/Bottled Fruit",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Fruit",
                "id": 1125
            },
            {
                "name": "Canned/Bottled Fruit",
                "id": 1126
            }
        ]
    },
    {
        "id": 1127,
        "parent_id": 1125,
        "tax_name": "Dried Fruit ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Fruit",
                "id": 1125
            },
            {
                "name": "Dried Fruit ",
                "id": 1127
            }
        ]
    },
    {
        "id": 1128,
        "parent_id": 1036,
        "tax_name": "Vegetables",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food",
                "id": 1036
            },
            {
                "name": "Vegetables",
                "id": 1128
            }
        ]
    },
    {
        "id": 1129,
        "parent_id": 1128,
        "tax_name": "Dry Beans/Vegetables",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Vegetables",
                "id": 1128
            },
            {
                "name": "Dry Beans/Vegetables",
                "id": 1129
            }
        ]
    },
    {
        "id": 1130,
        "parent_id": 1128,
        "tax_name": "Tomato Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Vegetables",
                "id": 1128
            },
            {
                "name": "Tomato Products",
                "id": 1130
            }
        ]
    },
    {
        "id": 1131,
        "parent_id": 1128,
        "tax_name": "Vegetables",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "General Food"
            },
            {
                "name": "Vegetables",
                "id": 1128
            },
            {
                "name": "Vegetables",
                "id": 1131
            }
        ]
    },
    {
        "id": 1132,
        "parent_id": 973,
        "tax_name": "Refrigerated",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible",
                "id": 973
            },
            {
                "name": "Refrigerated",
                "id": 1132
            }
        ]
    },
    {
        "id": 1133,
        "parent_id": 1132,
        "tax_name": "Dairy",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated",
                "id": 1132
            },
            {
                "name": "Dairy",
                "id": 1133
            }
        ]
    },
    {
        "id": 1134,
        "parent_id": 1133,
        "tax_name": "Butter/Butter Blends ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Butter/Butter Blends ",
                "id": 1134
            }
        ]
    },
    {
        "id": 1135,
        "parent_id": 1133,
        "tax_name": "Cottage Cheese",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Cottage Cheese",
                "id": 1135
            }
        ]
    },
    {
        "id": 1136,
        "parent_id": 1133,
        "tax_name": "Cream Cheese/Cr  Spread",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Cream Cheese/Cr  Spread",
                "id": 1136
            }
        ]
    },
    {
        "id": 1137,
        "parent_id": 1133,
        "tax_name": "Creams/Creamers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Creams/Creamers",
                "id": 1137
            }
        ]
    },
    {
        "id": 1138,
        "parent_id": 1133,
        "tax_name": "Fresh Eggs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Fresh Eggs",
                "id": 1138
            }
        ]
    },
    {
        "id": 1139,
        "parent_id": 1133,
        "tax_name": "Margarine/Spreads",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Margarine/Spreads",
                "id": 1139
            }
        ]
    },
    {
        "id": 1140,
        "parent_id": 1133,
        "tax_name": "Milk",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Milk",
                "id": 1140
            }
        ]
    },
    {
        "id": 1141,
        "parent_id": 1133,
        "tax_name": "Natural Cheese",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Natural Cheese",
                "id": 1141
            }
        ]
    },
    {
        "id": 1142,
        "parent_id": 1133,
        "tax_name": "Processed Cheese",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Processed Cheese",
                "id": 1142
            }
        ]
    },
    {
        "id": 1143,
        "parent_id": 1133,
        "tax_name": "Sour Cream",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Sour Cream",
                "id": 1143
            }
        ]
    },
    {
        "id": 1144,
        "parent_id": 1133,
        "tax_name": "Whipped Toppings",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Whipped Toppings",
                "id": 1144
            }
        ]
    },
    {
        "id": 1145,
        "parent_id": 1133,
        "tax_name": "Yogurt",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Dairy",
                "id": 1133
            },
            {
                "name": "Yogurt",
                "id": 1145
            }
        ]
    },
    {
        "id": 1146,
        "parent_id": 1132,
        "tax_name": "Other Refrigerated",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated",
                "id": 1132
            },
            {
                "name": "Other Refrigerated",
                "id": 1146
            }
        ]
    },
    {
        "id": 1147,
        "parent_id": 1146,
        "tax_name": "Lard",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Other Refrigerated",
                "id": 1146
            },
            {
                "name": "Lard",
                "id": 1147
            }
        ]
    },
    {
        "id": 1148,
        "parent_id": 1146,
        "tax_name": "Tortilla/Eggroll/Wonton Wrap",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Other Refrigerated",
                "id": 1146
            },
            {
                "name": "Tortilla/Eggroll/Wonton Wrap",
                "id": 1148
            }
        ]
    },
    {
        "id": 1149,
        "parent_id": 1132,
        "tax_name": "Refrigerated Baked Goods",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated",
                "id": 1132
            },
            {
                "name": "Refrigerated Baked Goods",
                "id": 1149
            }
        ]
    },
    {
        "id": 1150,
        "parent_id": 1149,
        "tax_name": "Baked Goods",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Baked Goods",
                "id": 1149
            },
            {
                "name": "Baked Goods",
                "id": 1150
            }
        ]
    },
    {
        "id": 1151,
        "parent_id": 1132,
        "tax_name": "Refrigerated Beverages",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated",
                "id": 1132
            },
            {
                "name": "Refrigerated Beverages",
                "id": 1151
            }
        ]
    },
    {
        "id": 1152,
        "parent_id": 1151,
        "tax_name": "Juices/Drinks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Beverages",
                "id": 1151
            },
            {
                "name": "Juices/Drinks",
                "id": 1152
            }
        ]
    },
    {
        "id": 1153,
        "parent_id": 1151,
        "tax_name": "Tea/Coffee",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Beverages",
                "id": 1151
            },
            {
                "name": "Tea/Coffee",
                "id": 1153
            }
        ]
    },
    {
        "id": 1154,
        "parent_id": 1132,
        "tax_name": "Refrigerated Condiments",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated",
                "id": 1132
            },
            {
                "name": "Refrigerated Condiments",
                "id": 1154
            }
        ]
    },
    {
        "id": 1155,
        "parent_id": 1154,
        "tax_name": "Dips",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Condiments",
                "id": 1154
            },
            {
                "name": "Dips",
                "id": 1155
            }
        ]
    },
    {
        "id": 1156,
        "parent_id": 1154,
        "tax_name": "Other Condiments",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Condiments",
                "id": 1154
            },
            {
                "name": "Other Condiments",
                "id": 1156
            }
        ]
    },
    {
        "id": 1157,
        "parent_id": 1154,
        "tax_name": "Pickles/Relish",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Condiments",
                "id": 1154
            },
            {
                "name": "Pickles/Relish",
                "id": 1157
            }
        ]
    },
    {
        "id": 1158,
        "parent_id": 1154,
        "tax_name": "Salad Dressing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Condiments",
                "id": 1154
            },
            {
                "name": "Salad Dressing",
                "id": 1158
            }
        ]
    },
    {
        "id": 1159,
        "parent_id": 1154,
        "tax_name": "Spreads",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Condiments",
                "id": 1154
            },
            {
                "name": "Spreads",
                "id": 1159
            }
        ]
    },
    {
        "id": 1160,
        "parent_id": 1132,
        "tax_name": "Refrigerated Desserts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated",
                "id": 1132
            },
            {
                "name": "Refrigerated Desserts",
                "id": 1160
            }
        ]
    },
    {
        "id": 1161,
        "parent_id": 1160,
        "tax_name": "Cheesecakes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Desserts",
                "id": 1160
            },
            {
                "name": "Cheesecakes",
                "id": 1161
            }
        ]
    },
    {
        "id": 1162,
        "parent_id": 1160,
        "tax_name": "Desserts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Desserts",
                "id": 1160
            },
            {
                "name": "Desserts",
                "id": 1162
            }
        ]
    },
    {
        "id": 1163,
        "parent_id": 1132,
        "tax_name": "Refrigerated Dough",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated",
                "id": 1132
            },
            {
                "name": "Refrigerated Dough",
                "id": 1163
            }
        ]
    },
    {
        "id": 1164,
        "parent_id": 1163,
        "tax_name": "Dough/Biscuit Dough",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Dough",
                "id": 1163
            },
            {
                "name": "Dough/Biscuit Dough",
                "id": 1164
            }
        ]
    },
    {
        "id": 1165,
        "parent_id": 1163,
        "tax_name": "Pizza",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Dough",
                "id": 1163
            },
            {
                "name": "Pizza",
                "id": 1165
            }
        ]
    },
    {
        "id": 1166,
        "parent_id": 1132,
        "tax_name": "Refrigerated Meals",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated",
                "id": 1132
            },
            {
                "name": "Refrigerated Meals",
                "id": 1166
            }
        ]
    },
    {
        "id": 1167,
        "parent_id": 1166,
        "tax_name": "Entrees",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meals",
                "id": 1166
            },
            {
                "name": "Entrees",
                "id": 1167
            }
        ]
    },
    {
        "id": 1168,
        "parent_id": 1166,
        "tax_name": "Lunches",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meals",
                "id": 1166
            },
            {
                "name": "Lunches",
                "id": 1168
            }
        ]
    },
    {
        "id": 1169,
        "parent_id": 1166,
        "tax_name": "Meat Pies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meals",
                "id": 1166
            },
            {
                "name": "Meat Pies",
                "id": 1169
            }
        ]
    },
    {
        "id": 1170,
        "parent_id": 1166,
        "tax_name": "Pasta",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meals",
                "id": 1166
            },
            {
                "name": "Pasta",
                "id": 1170
            }
        ]
    },
    {
        "id": 1171,
        "parent_id": 1166,
        "tax_name": "Side Dishes ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meals",
                "id": 1166
            },
            {
                "name": "Side Dishes ",
                "id": 1171
            }
        ]
    },
    {
        "id": 1172,
        "parent_id": 1166,
        "tax_name": "Breakfast Meats",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meats",
                "id": 1166
            },
            {
                "name": "Breakfast Meats",
                "id": 1172
            }
        ]
    },
    {
        "id": 1173,
        "parent_id": 1166,
        "tax_name": "Dinner Sausage",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meats",
                "id": 1166
            },
            {
                "name": "Dinner Sausage",
                "id": 1173
            }
        ]
    },
    {
        "id": 1174,
        "parent_id": 1166,
        "tax_name": "Frankfurters",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meats",
                "id": 1166
            },
            {
                "name": "Frankfurters",
                "id": 1174
            }
        ]
    },
    {
        "id": 1175,
        "parent_id": 1166,
        "tax_name": "Ham",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meats",
                "id": 1166
            },
            {
                "name": "Ham",
                "id": 1175
            }
        ]
    },
    {
        "id": 1176,
        "parent_id": 1166,
        "tax_name": "Luncheon Meats",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meats",
                "id": 1166
            },
            {
                "name": "Luncheon Meats",
                "id": 1176
            }
        ]
    },
    {
        "id": 1177,
        "parent_id": 1166,
        "tax_name": "Meat",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meats",
                "id": 1166
            },
            {
                "name": "Meat",
                "id": 1177
            }
        ]
    },
    {
        "id": 1178,
        "parent_id": 1166,
        "tax_name": "Seafood ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Edible"
            },
            {
                "name": "Refrigerated"
            },
            {
                "name": "Refrigerated Meats",
                "id": 1166
            },
            {
                "name": "Seafood ",
                "id": 1178
            }
        ]
    },
    {
        "id": 1179,
        "parent_id": 972,
        "tax_name": "Non-edible",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods",
                "id": 972
            },
            {
                "name": "Non-edible",
                "id": 1179
            }
        ]
    },
    {
        "id": 1180,
        "parent_id": 1179,
        "tax_name": "Beauty",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Beauty",
                "id": 1180
            }
        ]
    },
    {
        "id": 1181,
        "parent_id": 1180,
        "tax_name": "Cosmetics",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty",
                "id": 1180
            },
            {
                "name": "Cosmetics",
                "id": 1181
            }
        ]
    },
    {
        "id": 1182,
        "parent_id": 1181,
        "tax_name": "Storage",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Cosmetics",
                "id": 1181
            },
            {
                "name": "Storage",
                "id": 1182
            }
        ]
    },
    {
        "id": 1183,
        "parent_id": 1181,
        "tax_name": "Eye",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Cosmetics",
                "id": 1181
            },
            {
                "name": "Eye",
                "id": 1183
            }
        ]
    },
    {
        "id": 1184,
        "parent_id": 1181,
        "tax_name": "Facial",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Cosmetics",
                "id": 1181
            },
            {
                "name": "Facial",
                "id": 1184
            }
        ]
    },
    {
        "id": 1185,
        "parent_id": 1181,
        "tax_name": "Lip",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Cosmetics",
                "id": 1181
            },
            {
                "name": "Lip",
                "id": 1185
            }
        ]
    },
    {
        "id": 1186,
        "parent_id": 1181,
        "tax_name": "Cosmetics-Nail",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Cosmetics",
                "id": 1181
            },
            {
                "name": "Cosmetics-Nail",
                "id": 1186
            }
        ]
    },
    {
        "id": 1187,
        "parent_id": 1181,
        "tax_name": "Cosmetics Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Cosmetics",
                "id": 1181
            },
            {
                "name": "Cosmetics Accessories",
                "id": 1187
            }
        ]
    },
    {
        "id": 1188,
        "parent_id": 1180,
        "tax_name": "Fragrance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty",
                "id": 1180
            },
            {
                "name": "Fragrance",
                "id": 1188
            }
        ]
    },
    {
        "id": 1189,
        "parent_id": 1188,
        "tax_name": "Fragrances - Women's ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Fragrance",
                "id": 1188
            },
            {
                "name": "Fragrances - Women's ",
                "id": 1189
            }
        ]
    },
    {
        "id": 1190,
        "parent_id": 1188,
        "tax_name": "Shaving Lotion/Men's Fragrance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Fragrance",
                "id": 1188
            },
            {
                "name": "Shaving Lotion/Men's Fragrance",
                "id": 1190
            }
        ]
    },
    {
        "id": 1191,
        "parent_id": 1180,
        "tax_name": "Grooming Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty",
                "id": 1180
            },
            {
                "name": "Grooming Supplies",
                "id": 1191
            }
        ]
    },
    {
        "id": 1192,
        "parent_id": 1191,
        "tax_name": "Cotton Balls/Swabs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Grooming Supplies",
                "id": 1191
            },
            {
                "name": "Cotton Balls/Swabs",
                "id": 1192
            }
        ]
    },
    {
        "id": 1193,
        "parent_id": 1191,
        "tax_name": "Electric Shaver Groomer ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Grooming Supplies",
                "id": 1191
            },
            {
                "name": "Electric Shaver Groomer ",
                "id": 1193
            }
        ]
    },
    {
        "id": 1194,
        "parent_id": 1191,
        "tax_name": "Hair Appliances",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Grooming Supplies",
                "id": 1191
            },
            {
                "name": "Hair Appliances",
                "id": 1194
            }
        ]
    },
    {
        "id": 1195,
        "parent_id": 1191,
        "tax_name": "Other Grooming Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Grooming Supplies",
                "id": 1191
            },
            {
                "name": "Other Grooming Supplies",
                "id": 1195
            }
        ]
    },
    {
        "id": 1196,
        "parent_id": 1180,
        "tax_name": "Hair Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty",
                "id": 1180
            },
            {
                "name": "Hair Care",
                "id": 1196
            }
        ]
    },
    {
        "id": 1197,
        "parent_id": 1196,
        "tax_name": "Hair Accessories ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Hair Care",
                "id": 1196
            },
            {
                "name": "Hair Accessories ",
                "id": 1197
            }
        ]
    },
    {
        "id": 1198,
        "parent_id": 1196,
        "tax_name": "Hair Coloring ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Hair Care",
                "id": 1196
            },
            {
                "name": "Hair Coloring ",
                "id": 1198
            }
        ]
    },
    {
        "id": 1199,
        "parent_id": 1196,
        "tax_name": "Hair Conditioner ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Hair Care",
                "id": 1196
            },
            {
                "name": "Hair Conditioner ",
                "id": 1199
            }
        ]
    },
    {
        "id": 1200,
        "parent_id": 1196,
        "tax_name": "Hair Growth Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Hair Care",
                "id": 1196
            },
            {
                "name": "Hair Growth Products",
                "id": 1200
            }
        ]
    },
    {
        "id": 1201,
        "parent_id": 1196,
        "tax_name": "Hair Spray/Spritz",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Hair Care",
                "id": 1196
            },
            {
                "name": "Hair Spray/Spritz",
                "id": 1201
            }
        ]
    },
    {
        "id": 1202,
        "parent_id": 1196,
        "tax_name": "Hair Styling Gel/Mousse ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Hair Care",
                "id": 1196
            },
            {
                "name": "Hair Styling Gel/Mousse ",
                "id": 1202
            }
        ]
    },
    {
        "id": 1203,
        "parent_id": 1196,
        "tax_name": "Home Permanent/Relaxer Kits",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Hair Care",
                "id": 1196
            },
            {
                "name": "Home Permanent/Relaxer Kits",
                "id": 1203
            }
        ]
    },
    {
        "id": 1204,
        "parent_id": 1196,
        "tax_name": "Shampoo",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Hair Care",
                "id": 1196
            },
            {
                "name": "Shampoo",
                "id": 1204
            }
        ]
    },
    {
        "id": 1205,
        "parent_id": 1180,
        "tax_name": "Personal Cleansing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty",
                "id": 1180
            },
            {
                "name": "Personal Cleansing",
                "id": 1205
            }
        ]
    },
    {
        "id": 1206,
        "parent_id": 1205,
        "tax_name": "Bath Products ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Personal Cleansing",
                "id": 1205
            },
            {
                "name": "Bath Products ",
                "id": 1206
            }
        ]
    },
    {
        "id": 1207,
        "parent_id": 1205,
        "tax_name": "Bath/Body Scrubbers/Massagers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Personal Cleansing",
                "id": 1205
            },
            {
                "name": "Bath/Body Scrubbers/Massagers",
                "id": 1207
            }
        ]
    },
    {
        "id": 1208,
        "parent_id": 1205,
        "tax_name": "Deodorant",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Personal Cleansing",
                "id": 1205
            },
            {
                "name": "Deodorant",
                "id": 1208
            }
        ]
    },
    {
        "id": 1209,
        "parent_id": 1205,
        "tax_name": "Moist Towelettes ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Personal Cleansing",
                "id": 1205
            },
            {
                "name": "Moist Towelettes ",
                "id": 1209
            }
        ]
    },
    {
        "id": 1210,
        "parent_id": 1205,
        "tax_name": "Soap",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Personal Cleansing",
                "id": 1205
            },
            {
                "name": "Soap",
                "id": 1210
            }
        ]
    },
    {
        "id": 1211,
        "parent_id": 1180,
        "tax_name": "Shaving",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty",
                "id": 1180
            },
            {
                "name": "Shaving",
                "id": 1211
            }
        ]
    },
    {
        "id": 1212,
        "parent_id": 1211,
        "tax_name": "Blades",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Shaving",
                "id": 1211
            },
            {
                "name": "Blades",
                "id": 1212
            }
        ]
    },
    {
        "id": 1213,
        "parent_id": 1211,
        "tax_name": "Razors",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Shaving",
                "id": 1211
            },
            {
                "name": "Razors",
                "id": 1213
            }
        ]
    },
    {
        "id": 1214,
        "parent_id": 1211,
        "tax_name": "Shaving Cream",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Shaving",
                "id": 1211
            },
            {
                "name": "Shaving Cream",
                "id": 1214
            }
        ]
    },
    {
        "id": 1215,
        "parent_id": 1180,
        "tax_name": "Skin Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty",
                "id": 1180
            },
            {
                "name": "Skin Care",
                "id": 1215
            }
        ]
    },
    {
        "id": 1216,
        "parent_id": 1215,
        "tax_name": "Hand & Body Lotion",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Skin Care",
                "id": 1215
            },
            {
                "name": "Hand & Body Lotion",
                "id": 1216
            }
        ]
    },
    {
        "id": 1217,
        "parent_id": 1215,
        "tax_name": "Skin Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Skin Care",
                "id": 1215
            },
            {
                "name": "Skin Care",
                "id": 1217
            }
        ]
    },
    {
        "id": 1218,
        "parent_id": 1215,
        "tax_name": "Suntan Products ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Beauty"
            },
            {
                "name": "Skin Care",
                "id": 1215
            },
            {
                "name": "Suntan Products ",
                "id": 1218
            }
        ]
    },
    {
        "id": 1219,
        "parent_id": 1179,
        "tax_name": "General Merchandise",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "General Merchandise",
                "id": 1219
            }
        ]
    },
    {
        "id": 1220,
        "parent_id": 1219,
        "tax_name": "Automotive",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Automotive",
                "id": 1220
            }
        ]
    },
    {
        "id": 1221,
        "parent_id": 1220,
        "tax_name": "Automobile Fluids/Antifreeze",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Automotive",
                "id": 1220
            },
            {
                "name": "Automobile Fluids/Antifreeze",
                "id": 1221
            }
        ]
    },
    {
        "id": 1222,
        "parent_id": 1220,
        "tax_name": "Automobile Waxes/Polishes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Automotive",
                "id": 1220
            },
            {
                "name": "Automobile Waxes/Polishes",
                "id": 1222
            }
        ]
    },
    {
        "id": 1223,
        "parent_id": 1220,
        "tax_name": "Motor Oil",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Automotive",
                "id": 1220
            },
            {
                "name": "Motor Oil",
                "id": 1223
            }
        ]
    },
    {
        "id": 1224,
        "parent_id": 1219,
        "tax_name": "Barbeque",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Barbeque",
                "id": 1224
            }
        ]
    },
    {
        "id": 1225,
        "parent_id": 1224,
        "tax_name": "Charcoal",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Barbeque",
                "id": 1224
            },
            {
                "name": "Charcoal",
                "id": 1225
            }
        ]
    },
    {
        "id": 1226,
        "parent_id": 1224,
        "tax_name": "Charcoal Lighter Fluids ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Barbeque",
                "id": 1224
            },
            {
                "name": "Charcoal Lighter Fluids ",
                "id": 1226
            }
        ]
    },
    {
        "id": 1227,
        "parent_id": 1219,
        "tax_name": "Disposable Tableware",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Disposable Tableware",
                "id": 1227
            }
        ]
    },
    {
        "id": 1228,
        "parent_id": 1227,
        "tax_name": "Cups & Plates",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Disposable Tableware",
                "id": 1227
            },
            {
                "name": "Cups & Plates",
                "id": 1228
            }
        ]
    },
    {
        "id": 1229,
        "parent_id": 1227,
        "tax_name": "Disposable Tableware ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Disposable Tableware",
                "id": 1227
            },
            {
                "name": "Disposable Tableware ",
                "id": 1229
            }
        ]
    },
    {
        "id": 1230,
        "parent_id": 1219,
        "tax_name": "Electronics/Photography",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Electronics/Photography",
                "id": 1230
            }
        ]
    },
    {
        "id": 1231,
        "parent_id": 1230,
        "tax_name": "Batteries",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Electronics/Photography",
                "id": 1230
            },
            {
                "name": "Batteries",
                "id": 1231
            }
        ]
    },
    {
        "id": 1232,
        "parent_id": 1230,
        "tax_name": "Blank Audio/Video Media",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Electronics/Photography",
                "id": 1230
            },
            {
                "name": "Blank Audio/Video Media",
                "id": 1232
            }
        ]
    },
    {
        "id": 1233,
        "parent_id": 1230,
        "tax_name": "Photography Supplies ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Electronics/Photography",
                "id": 1230
            },
            {
                "name": "Photography Supplies ",
                "id": 1233
            }
        ]
    },
    {
        "id": 1234,
        "parent_id": 1219,
        "tax_name": "Foils, Wraps, & Bags",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Foils, Wraps, & Bags",
                "id": 1234
            }
        ]
    },
    {
        "id": 1235,
        "parent_id": 1234,
        "tax_name": "Foil Pans",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Foils, Wraps, & Bags",
                "id": 1234
            },
            {
                "name": "Foil Pans",
                "id": 1235
            }
        ]
    },
    {
        "id": 1236,
        "parent_id": 1234,
        "tax_name": "Foils & Wraps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Foils, Wraps, & Bags",
                "id": 1234
            },
            {
                "name": "Foils & Wraps",
                "id": 1236
            }
        ]
    },
    {
        "id": 1237,
        "parent_id": 1234,
        "tax_name": "Food & Trash Bags",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Foils, Wraps, & Bags",
                "id": 1234
            },
            {
                "name": "Food & Trash Bags",
                "id": 1237
            }
        ]
    },
    {
        "id": 1238,
        "parent_id": 1219,
        "tax_name": "Hosiery",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Hosiery",
                "id": 1238
            }
        ]
    },
    {
        "id": 1239,
        "parent_id": 1238,
        "tax_name": "Pantyhose/Nylons ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Hosiery",
                "id": 1238
            },
            {
                "name": "Pantyhose/Nylons ",
                "id": 1239
            }
        ]
    },
    {
        "id": 1240,
        "parent_id": 1238,
        "tax_name": "Socks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Hosiery",
                "id": 1238
            },
            {
                "name": "Socks",
                "id": 1240
            }
        ]
    },
    {
        "id": 1241,
        "parent_id": 1238,
        "tax_name": "Tights ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Hosiery",
                "id": 1238
            },
            {
                "name": "Tights ",
                "id": 1241
            }
        ]
    },
    {
        "id": 1242,
        "parent_id": 1219,
        "tax_name": "Household/Plastics/Storage",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Household/Plastics/Storage",
                "id": 1242
            }
        ]
    },
    {
        "id": 1243,
        "parent_id": 1242,
        "tax_name": "Bottles",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Household/Plastics/Storage",
                "id": 1242
            },
            {
                "name": "Bottles",
                "id": 1243
            }
        ]
    },
    {
        "id": 1244,
        "parent_id": 1242,
        "tax_name": "Drinkware",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Household/Plastics/Storage",
                "id": 1242
            },
            {
                "name": "Drinkware",
                "id": 1244
            }
        ]
    },
    {
        "id": 1245,
        "parent_id": 1242,
        "tax_name": "Household Plastics",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Household/Plastics/Storage",
                "id": 1242
            },
            {
                "name": "Household Plastics",
                "id": 1245
            }
        ]
    },
    {
        "id": 1246,
        "parent_id": 1242,
        "tax_name": "Kitchen Storage",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Household/Plastics/Storage",
                "id": 1242
            },
            {
                "name": "Kitchen Storage",
                "id": 1246
            }
        ]
    },
    {
        "id": 1247,
        "parent_id": 1242,
        "tax_name": "Soap Dishes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Household/Plastics/Storage",
                "id": 1242
            },
            {
                "name": "Soap Dishes",
                "id": 1247
            }
        ]
    },
    {
        "id": 1248,
        "parent_id": 1219,
        "tax_name": "Miscellaneous General Merch",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            }
        ]
    },
    {
        "id": 1249,
        "parent_id": 1248,
        "tax_name": "Candles",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Candles",
                "id": 1249
            }
        ]
    },
    {
        "id": 1250,
        "parent_id": 1248,
        "tax_name": "Cloth Dye",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Cloth Dye",
                "id": 1250
            }
        ]
    },
    {
        "id": 1251,
        "parent_id": 1248,
        "tax_name": "Culinary",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Culinary",
                "id": 1251
            }
        ]
    },
    {
        "id": 1252,
        "parent_id": 1248,
        "tax_name": "Firelog/Firestarter/Firewood",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Firelog/Firestarter/Firewood",
                "id": 1252
            }
        ]
    },
    {
        "id": 1253,
        "parent_id": 1248,
        "tax_name": "Flashlights",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Flashlights",
                "id": 1253
            }
        ]
    },
    {
        "id": 1254,
        "parent_id": 1248,
        "tax_name": "Frozen & Dry Ice",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Frozen & Dry Ice",
                "id": 1254
            }
        ]
    },
    {
        "id": 1255,
        "parent_id": 1248,
        "tax_name": "Gloves",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Gloves",
                "id": 1255
            }
        ]
    },
    {
        "id": 1256,
        "parent_id": 1248,
        "tax_name": "Household Lubricants ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Household Lubricants ",
                "id": 1256
            }
        ]
    },
    {
        "id": 1257,
        "parent_id": 1248,
        "tax_name": "Ice Substitute ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Ice Substitute ",
                "id": 1257
            }
        ]
    },
    {
        "id": 1258,
        "parent_id": 1248,
        "tax_name": "Light Bulbs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Light Bulbs",
                "id": 1258
            }
        ]
    },
    {
        "id": 1259,
        "parent_id": 1248,
        "tax_name": "Lighters",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Lighters",
                "id": 1259
            }
        ]
    },
    {
        "id": 1260,
        "parent_id": 1248,
        "tax_name": "Matches",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Matches",
                "id": 1260
            }
        ]
    },
    {
        "id": 1261,
        "parent_id": 1248,
        "tax_name": "Outdoor/Lawn Fertilizer/Weed Killer",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Outdoor/Lawn Fertilizer/Weed Killer",
                "id": 1261
            }
        ]
    },
    {
        "id": 1262,
        "parent_id": 1248,
        "tax_name": "Playing Cards",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Playing Cards",
                "id": 1262
            }
        ]
    },
    {
        "id": 1263,
        "parent_id": 1248,
        "tax_name": "Pool/Spa Chemicals",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Pool/Spa Chemicals",
                "id": 1263
            }
        ]
    },
    {
        "id": 1264,
        "parent_id": 1248,
        "tax_name": "Shoe Polish & Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Shoe Polish & Accessories",
                "id": 1264
            }
        ]
    },
    {
        "id": 1265,
        "parent_id": 1248,
        "tax_name": "Vacuum Bags/Belts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Miscellaneous General Merch",
                "id": 1248
            },
            {
                "name": "Vacuum Bags/Belts",
                "id": 1265
            }
        ]
    },
    {
        "id": 1266,
        "parent_id": 1219,
        "tax_name": "Office/School Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Office/School Supplies",
                "id": 1266
            }
        ]
    },
    {
        "id": 1267,
        "parent_id": 1266,
        "tax_name": "Children's Art Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Office/School Supplies",
                "id": 1266
            },
            {
                "name": "Children's Art Supplies",
                "id": 1267
            }
        ]
    },
    {
        "id": 1268,
        "parent_id": 1266,
        "tax_name": "Computer Disks Frmtd/UnFrmtd",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Office/School Supplies",
                "id": 1266
            },
            {
                "name": "Computer Disks Frmtd/UnFrmtd",
                "id": 1268
            }
        ]
    },
    {
        "id": 1269,
        "parent_id": 1266,
        "tax_name": "Office Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Office/School Supplies",
                "id": 1266
            },
            {
                "name": "Office Products",
                "id": 1269
            }
        ]
    },
    {
        "id": 1270,
        "parent_id": 1266,
        "tax_name": "Writing Instruments ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Office/School Supplies",
                "id": 1266
            },
            {
                "name": "Writing Instruments ",
                "id": 1270
            }
        ]
    },
    {
        "id": 1271,
        "parent_id": 1219,
        "tax_name": "Paper Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Paper Products",
                "id": 1271
            }
        ]
    },
    {
        "id": 1272,
        "parent_id": 1271,
        "tax_name": "Facial Tissue",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Paper Products",
                "id": 1271
            },
            {
                "name": "Facial Tissue",
                "id": 1272
            }
        ]
    },
    {
        "id": 1273,
        "parent_id": 1271,
        "tax_name": "Paper Napkins ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Paper Products",
                "id": 1271
            },
            {
                "name": "Paper Napkins ",
                "id": 1273
            }
        ]
    },
    {
        "id": 1274,
        "parent_id": 1271,
        "tax_name": "Paper Towels",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Paper Products",
                "id": 1271
            },
            {
                "name": "Paper Towels",
                "id": 1274
            }
        ]
    },
    {
        "id": 1275,
        "parent_id": 1271,
        "tax_name": "Toilet Tissue ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Paper Products",
                "id": 1271
            },
            {
                "name": "Toilet Tissue ",
                "id": 1275
            }
        ]
    },
    {
        "id": 1276,
        "parent_id": 1219,
        "tax_name": "Pest Control",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Pest Control",
                "id": 1276
            }
        ]
    },
    {
        "id": 1277,
        "parent_id": 1276,
        "tax_name": "Outdoor Insect/Rodent Control Chem",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Pest Control",
                "id": 1276
            },
            {
                "name": "Outdoor Insect/Rodent Control Chem",
                "id": 1277
            }
        ]
    },
    {
        "id": 1278,
        "parent_id": 1276,
        "tax_name": "Pest Control",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Pest Control",
                "id": 1276
            },
            {
                "name": "Pest Control",
                "id": 1278
            }
        ]
    },
    {
        "id": 1279,
        "parent_id": 1219,
        "tax_name": "Pet Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Pet Care",
                "id": 1279
            }
        ]
    },
    {
        "id": 1280,
        "parent_id": 1279,
        "tax_name": "Cat/Dog Litter",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Pet Care",
                "id": 1279
            },
            {
                "name": "Cat/Dog Litter",
                "id": 1280
            }
        ]
    },
    {
        "id": 1281,
        "parent_id": 1279,
        "tax_name": "Pet Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Pet Care",
                "id": 1279
            },
            {
                "name": "Pet Food",
                "id": 1281
            }
        ]
    },
    {
        "id": 1282,
        "parent_id": 1279,
        "tax_name": "Pet Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Pet Care",
                "id": 1279
            },
            {
                "name": "Pet Supplies",
                "id": 1282
            }
        ]
    },
    {
        "id": 1283,
        "parent_id": 1279,
        "tax_name": "Pet Treats ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Pet Care",
                "id": 1279
            },
            {
                "name": "Pet Treats ",
                "id": 1283
            }
        ]
    },
    {
        "id": 1284,
        "parent_id": 1219,
        "tax_name": "Water Treatment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise",
                "id": 1219
            },
            {
                "name": "Water Treatment",
                "id": 1284
            }
        ]
    },
    {
        "id": 1285,
        "parent_id": 1284,
        "tax_name": "Water Filter/Devices",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Water Treatment",
                "id": 1284
            },
            {
                "name": "Water Filter/Devices",
                "id": 1285
            }
        ]
    },
    {
        "id": 1286,
        "parent_id": 1284,
        "tax_name": "Water Softeners/Treatment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "General Merchandise"
            },
            {
                "name": "Water Treatment",
                "id": 1284
            },
            {
                "name": "Water Softeners/Treatment",
                "id": 1286
            }
        ]
    },
    {
        "id": 1287,
        "parent_id": 1179,
        "tax_name": "Household Appliances",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Household Appliances",
                "id": 1287
            }
        ]
    },
    {
        "id": 1288,
        "parent_id": 1287,
        "tax_name": "Air Conditioners",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Air Conditioners",
                "id": 1288
            }
        ]
    },
    {
        "id": 1289,
        "parent_id": 1287,
        "tax_name": "Air Purifiers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Air Purifiers",
                "id": 1289
            }
        ]
    },
    {
        "id": 1290,
        "parent_id": 1287,
        "tax_name": "Blenders",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Blenders",
                "id": 1290
            }
        ]
    },
    {
        "id": 1291,
        "parent_id": 1287,
        "tax_name": "Breadmakers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Breadmakers",
                "id": 1291
            }
        ]
    },
    {
        "id": 1292,
        "parent_id": 1287,
        "tax_name": "Coffee Grinders",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Coffee Grinders",
                "id": 1292
            }
        ]
    },
    {
        "id": 1293,
        "parent_id": 1287,
        "tax_name": "Coffee Makers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Coffee Makers",
                "id": 1293
            }
        ]
    },
    {
        "id": 1294,
        "parent_id": 1287,
        "tax_name": "Deep Fryers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Deep Fryers",
                "id": 1294
            }
        ]
    },
    {
        "id": 1295,
        "parent_id": 1287,
        "tax_name": "Dehumidifiers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Dehumidifiers",
                "id": 1295
            }
        ]
    },
    {
        "id": 1296,
        "parent_id": 1287,
        "tax_name": "Dishwashers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Dishwashers",
                "id": 1296
            }
        ]
    },
    {
        "id": 1297,
        "parent_id": 1287,
        "tax_name": "Espresso Machines",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Espresso Machines",
                "id": 1297
            }
        ]
    },
    {
        "id": 1298,
        "parent_id": 1287,
        "tax_name": "Fans",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Fans",
                "id": 1298
            }
        ]
    },
    {
        "id": 1299,
        "parent_id": 1287,
        "tax_name": "Food Processors",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Food Processors",
                "id": 1299
            }
        ]
    },
    {
        "id": 1300,
        "parent_id": 1287,
        "tax_name": "Freezers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Freezers",
                "id": 1300
            }
        ]
    },
    {
        "id": 1301,
        "parent_id": 1287,
        "tax_name": "Heaters",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Heaters",
                "id": 1301
            }
        ]
    },
    {
        "id": 1302,
        "parent_id": 1287,
        "tax_name": "Humidifiers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Humidifiers",
                "id": 1302
            }
        ]
    },
    {
        "id": 1303,
        "parent_id": 1287,
        "tax_name": "Ice Cream Makers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Ice Cream Makers",
                "id": 1303
            }
        ]
    },
    {
        "id": 1304,
        "parent_id": 1287,
        "tax_name": "Juicers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Juicers",
                "id": 1304
            }
        ]
    },
    {
        "id": 1305,
        "parent_id": 1287,
        "tax_name": "Microwave Ovens",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Microwave Ovens",
                "id": 1305
            }
        ]
    },
    {
        "id": 1306,
        "parent_id": 1287,
        "tax_name": "Mixers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Mixers",
                "id": 1306
            }
        ]
    },
    {
        "id": 1307,
        "parent_id": 1287,
        "tax_name": "Ovens",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Ovens",
                "id": 1307
            }
        ]
    },
    {
        "id": 1308,
        "parent_id": 1287,
        "tax_name": "Ranges",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Ranges",
                "id": 1308
            }
        ]
    },
    {
        "id": 1309,
        "parent_id": 1287,
        "tax_name": "Refrigerators",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Refrigerators",
                "id": 1309
            }
        ]
    },
    {
        "id": 1310,
        "parent_id": 1287,
        "tax_name": "Sandwich Makers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Sandwich Makers",
                "id": 1310
            }
        ]
    },
    {
        "id": 1311,
        "parent_id": 1287,
        "tax_name": "Tea Kettles",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Tea Kettles",
                "id": 1311
            }
        ]
    },
    {
        "id": 1312,
        "parent_id": 1287,
        "tax_name": "Toasters",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Toasters",
                "id": 1312
            }
        ]
    },
    {
        "id": 1313,
        "parent_id": 1287,
        "tax_name": "Vacuums",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Vacuums",
                "id": 1313
            }
        ]
    },
    {
        "id": 1314,
        "parent_id": 1287,
        "tax_name": "Washers and Dryers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Household Appliances",
                "id": 1287
            },
            {
                "name": "Washers and Dryers",
                "id": 1314
            }
        ]
    },
    {
        "id": 1315,
        "parent_id": 1179,
        "tax_name": "Home Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Home Care",
                "id": 1315
            }
        ]
    },
    {
        "id": 1316,
        "parent_id": 1315,
        "tax_name": "Air Fresheners",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care",
                "id": 1315
            },
            {
                "name": "Air Fresheners",
                "id": 1316
            }
        ]
    },
    {
        "id": 1317,
        "parent_id": 1315,
        "tax_name": "Household Cleaning",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care",
                "id": 1315
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            }
        ]
    },
    {
        "id": 1318,
        "parent_id": 1317,
        "tax_name": "Cleaning Tools/Mops/Brooms",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Cleaning Tools/Mops/Brooms",
                "id": 1318
            }
        ]
    },
    {
        "id": 1319,
        "parent_id": 1317,
        "tax_name": "Dish Detergent",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Dish Detergent",
                "id": 1319
            }
        ]
    },
    {
        "id": 1320,
        "parent_id": 1317,
        "tax_name": "Floor Cleaners/Wax Removers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Floor Cleaners/Wax Removers",
                "id": 1320
            }
        ]
    },
    {
        "id": 1321,
        "parent_id": 1317,
        "tax_name": "Furniture Polish",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Furniture Polish",
                "id": 1321
            }
        ]
    },
    {
        "id": 1322,
        "parent_id": 1317,
        "tax_name": "Household Cleaner ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Household Cleaner ",
                "id": 1322
            }
        ]
    },
    {
        "id": 1323,
        "parent_id": 1317,
        "tax_name": "Household Cleaner Cloths",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Household Cleaner Cloths",
                "id": 1323
            }
        ]
    },
    {
        "id": 1324,
        "parent_id": 1317,
        "tax_name": "Multi Task Sheets",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Multi Task Sheets",
                "id": 1324
            }
        ]
    },
    {
        "id": 1325,
        "parent_id": 1317,
        "tax_name": "Rug/Upholstery/Fabric Treatment ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Rug/Upholstery/Fabric Treatment ",
                "id": 1325
            }
        ]
    },
    {
        "id": 1326,
        "parent_id": 1317,
        "tax_name": "Sponges & Scouring Pads",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Household Cleaning",
                "id": 1317
            },
            {
                "name": "Sponges & Scouring Pads",
                "id": 1326
            }
        ]
    },
    {
        "id": 1327,
        "parent_id": 1315,
        "tax_name": "Laundry",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care",
                "id": 1315
            },
            {
                "name": "Laundry",
                "id": 1327
            }
        ]
    },
    {
        "id": 1328,
        "parent_id": 1327,
        "tax_name": "Bleach",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Laundry",
                "id": 1327
            },
            {
                "name": "Bleach",
                "id": 1328
            }
        ]
    },
    {
        "id": 1329,
        "parent_id": 1327,
        "tax_name": "Fabric Softener ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Laundry",
                "id": 1327
            },
            {
                "name": "Fabric Softener ",
                "id": 1329
            }
        ]
    },
    {
        "id": 1330,
        "parent_id": 1327,
        "tax_name": "Laundry Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Laundry",
                "id": 1327
            },
            {
                "name": "Laundry Care",
                "id": 1330
            }
        ]
    },
    {
        "id": 1331,
        "parent_id": 1327,
        "tax_name": "Laundry Detergent ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home Care"
            },
            {
                "name": "Laundry",
                "id": 1327
            },
            {
                "name": "Laundry Detergent ",
                "id": 1331
            }
        ]
    },
    {
        "id": 1332,
        "parent_id": 1179,
        "tax_name": "Home and Garden Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            }
        ]
    },
    {
        "id": 1333,
        "parent_id": 1332,
        "tax_name": "Bathroom Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Bathroom Accessories",
                "id": 1333
            }
        ]
    },
    {
        "id": 1334,
        "parent_id": 1332,
        "tax_name": "Home Decor",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Home Decor",
                "id": 1334
            }
        ]
    },
    {
        "id": 1335,
        "parent_id": 1332,
        "tax_name": "Bedroom Furniture and Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Bedroom Furniture and Accessories",
                "id": 1335
            }
        ]
    },
    {
        "id": 1336,
        "parent_id": 1332,
        "tax_name": "Fireplaces",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Fireplaces",
                "id": 1336
            }
        ]
    },
    {
        "id": 1337,
        "parent_id": 1332,
        "tax_name": "Kitchen and Dining Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Kitchen and Dining Products",
                "id": 1337
            }
        ]
    },
    {
        "id": 1338,
        "parent_id": 1332,
        "tax_name": "Lawn and Garden Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Lawn and Garden Products",
                "id": 1338
            }
        ]
    },
    {
        "id": 1339,
        "parent_id": 1332,
        "tax_name": "Lighting",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Lighting",
                "id": 1339
            }
        ]
    },
    {
        "id": 1340,
        "parent_id": 1332,
        "tax_name": "Linens and Bedding",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Linens and Bedding",
                "id": 1340
            }
        ]
    },
    {
        "id": 1341,
        "parent_id": 1332,
        "tax_name": "Plants",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Plants",
                "id": 1341
            }
        ]
    },
    {
        "id": 1342,
        "parent_id": 1332,
        "tax_name": "Housewares",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Housewares",
                "id": 1342
            }
        ]
    },
    {
        "id": 1343,
        "parent_id": 1332,
        "tax_name": "Carpets and Rugs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Home and Garden Products",
                "id": 1332
            },
            {
                "name": "Carpets and Rugs",
                "id": 1343
            }
        ]
    },
    {
        "id": 1344,
        "parent_id": 1179,
        "tax_name": "Religious Items",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Religious Items",
                "id": 1344
            }
        ]
    },
    {
        "id": 1345,
        "parent_id": 1179,
        "tax_name": "Back to School Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Back to School Supplies",
                "id": 1345
            }
        ]
    },
    {
        "id": 1346,
        "parent_id": 1179,
        "tax_name": "Baby and Toddler Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            }
        ]
    },
    {
        "id": 1347,
        "parent_id": 1346,
        "tax_name": "Baby Bath and Potty Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Baby Bath and Potty Products",
                "id": 1347
            }
        ]
    },
    {
        "id": 1348,
        "parent_id": 1346,
        "tax_name": "Baby Gift Sets",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Baby Gift Sets",
                "id": 1348
            }
        ]
    },
    {
        "id": 1349,
        "parent_id": 1346,
        "tax_name": "Baby Toys and Activity Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Baby Toys and Activity Equipment",
                "id": 1349
            }
        ]
    },
    {
        "id": 1350,
        "parent_id": 1346,
        "tax_name": "Diapers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Diapers",
                "id": 1350
            }
        ]
    },
    {
        "id": 1351,
        "parent_id": 1346,
        "tax_name": "Baby Safety Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Baby Safety Products",
                "id": 1351
            }
        ]
    },
    {
        "id": 1352,
        "parent_id": 1346,
        "tax_name": "Nursing and Feeding Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Nursing and Feeding Products",
                "id": 1352
            }
        ]
    },
    {
        "id": 1353,
        "parent_id": 1346,
        "tax_name": "Baby Bouncers and Rockers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Baby Bouncers and Rockers",
                "id": 1353
            }
        ]
    },
    {
        "id": 1354,
        "parent_id": 1346,
        "tax_name": "Baby Carriers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Baby Carriers",
                "id": 1354
            }
        ]
    },
    {
        "id": 1355,
        "parent_id": 1346,
        "tax_name": "High Chairs and Boosters",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "High Chairs and Boosters",
                "id": 1355
            }
        ]
    },
    {
        "id": 1356,
        "parent_id": 1346,
        "tax_name": "Strollers and Joggers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Baby and Toddler Products",
                "id": 1346
            },
            {
                "name": "Strollers and Joggers",
                "id": 1356
            }
        ]
    },
    {
        "id": 1357,
        "parent_id": 1179,
        "tax_name": "Media",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Media",
                "id": 1357
            }
        ]
    },
    {
        "id": 1358,
        "parent_id": 1357,
        "tax_name": "Magazines and Newspapers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Media",
                "id": 1357
            },
            {
                "name": "Magazines and Newspapers",
                "id": 1358
            }
        ]
    },
    {
        "id": 1359,
        "parent_id": 1357,
        "tax_name": "DVDs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Media",
                "id": 1357
            },
            {
                "name": "DVDs",
                "id": 1359
            }
        ]
    },
    {
        "id": 1360,
        "parent_id": 1357,
        "tax_name": "Books and Audio Books",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Media",
                "id": 1357
            },
            {
                "name": "Books and Audio Books",
                "id": 1360
            }
        ]
    },
    {
        "id": 1361,
        "parent_id": 1357,
        "tax_name": "CDs and Vinyl Records",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Media",
                "id": 1357
            },
            {
                "name": "CDs and Vinyl Records",
                "id": 1361
            }
        ]
    },
    {
        "id": 1362,
        "parent_id": 1179,
        "tax_name": "Toys and Games",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Toys and Games",
                "id": 1362
            }
        ]
    },
    {
        "id": 1363,
        "parent_id": 1362,
        "tax_name": "Games",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Toys and Games",
                "id": 1362
            },
            {
                "name": "Games",
                "id": 1363
            }
        ]
    },
    {
        "id": 1364,
        "parent_id": 1362,
        "tax_name": "Outdoor Play Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Toys and Games",
                "id": 1362
            },
            {
                "name": "Outdoor Play Equipment",
                "id": 1364
            }
        ]
    },
    {
        "id": 1365,
        "parent_id": 1362,
        "tax_name": "Puzzles",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Toys and Games",
                "id": 1362
            },
            {
                "name": "Puzzles",
                "id": 1365
            }
        ]
    },
    {
        "id": 1366,
        "parent_id": 1362,
        "tax_name": "Toys",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible"
            },
            {
                "name": "Toys and Games",
                "id": 1362
            },
            {
                "name": "Toys",
                "id": 1366
            }
        ]
    },
    {
        "id": 1367,
        "parent_id": 1179,
        "tax_name": "Luggage and Bags",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Consumer Packaged Goods"
            },
            {
                "name": "Non-edible",
                "id": 1179
            },
            {
                "name": "Luggage and Bags",
                "id": 1367
            }
        ]
    },
    {
        "id": 1368,
        "parent_id": 752,
        "tax_name": "Education and Careers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            }
        ]
    },
    {
        "id": 1369,
        "parent_id": 1368,
        "tax_name": "Adult Education",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            },
            {
                "name": "Adult Education",
                "id": 1369
            }
        ]
    },
    {
        "id": 1370,
        "parent_id": 1368,
        "tax_name": "Career Improvement and Advice",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            },
            {
                "name": "Career Improvement and Advice",
                "id": 1370
            }
        ]
    },
    {
        "id": 1371,
        "parent_id": 1368,
        "tax_name": "Colleges and Universities",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            },
            {
                "name": "Colleges and Universities",
                "id": 1371
            }
        ]
    },
    {
        "id": 1372,
        "parent_id": 1368,
        "tax_name": "Employment Agencies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            },
            {
                "name": "Employment Agencies",
                "id": 1372
            }
        ]
    },
    {
        "id": 1373,
        "parent_id": 1368,
        "tax_name": "Language Learning",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            },
            {
                "name": "Language Learning",
                "id": 1373
            }
        ]
    },
    {
        "id": 1374,
        "parent_id": 1368,
        "tax_name": "Online Education",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            },
            {
                "name": "Online Education",
                "id": 1374
            }
        ]
    },
    {
        "id": 1375,
        "parent_id": 1368,
        "tax_name": "Study Skills",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            },
            {
                "name": "Study Skills",
                "id": 1375
            }
        ]
    },
    {
        "id": 1376,
        "parent_id": 1368,
        "tax_name": "Teaching Resources",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Education and Careers",
                "id": 1368
            },
            {
                "name": "Teaching Resources",
                "id": 1376
            }
        ]
    },
    {
        "id": 1377,
        "parent_id": 752,
        "tax_name": "Family and Parenting",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Family and Parenting",
                "id": 1377
            }
        ]
    },
    {
        "id": 1378,
        "parent_id": 1377,
        "tax_name": "Childcare",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Family and Parenting",
                "id": 1377
            },
            {
                "name": "Childcare",
                "id": 1378
            }
        ]
    },
    {
        "id": 1379,
        "parent_id": 1379,
        "tax_name": "Day Care Centers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Family and Parenting"
            },
            {
                "name": "Childcare",
                "id": 1379
            },
            {
                "name": "Day Care Centers",
                "id": 1379
            }
        ]
    },
    {
        "id": 1380,
        "parent_id": 1379,
        "tax_name": "Nanny Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Family and Parenting"
            },
            {
                "name": "Childcare",
                "id": 1379
            },
            {
                "name": "Nanny Services",
                "id": 1380
            }
        ]
    },
    {
        "id": 1381,
        "parent_id": 1378,
        "tax_name": "Genealogy and Family Trees",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Family and Parenting",
                "id": 1378
            },
            {
                "name": "Genealogy and Family Trees",
                "id": 1381
            }
        ]
    },
    {
        "id": 1382,
        "parent_id": 1378,
        "tax_name": "Kids Activities",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Family and Parenting",
                "id": 1378
            },
            {
                "name": "Kids Activities",
                "id": 1382
            }
        ]
    },
    {
        "id": 1383,
        "parent_id": 752,
        "tax_name": "Finance and Insurance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            }
        ]
    },
    {
        "id": 1384,
        "parent_id": 1383,
        "tax_name": "Accountants",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Accountants",
                "id": 1384
            }
        ]
    },
    {
        "id": 1385,
        "parent_id": 1383,
        "tax_name": "Banking",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Banking",
                "id": 1385
            }
        ]
    },
    {
        "id": 1386,
        "parent_id": 1383,
        "tax_name": "Bookkeepers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Bookkeepers",
                "id": 1386
            }
        ]
    },
    {
        "id": 1387,
        "parent_id": 1383,
        "tax_name": "Credit and Debt Repair/Credit Reporting",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Credit and Debt Repair/Credit Reporting",
                "id": 1387
            }
        ]
    },
    {
        "id": 1388,
        "parent_id": 1383,
        "tax_name": "Credit Cards",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Credit Cards",
                "id": 1388
            }
        ]
    },
    {
        "id": 1389,
        "parent_id": 1383,
        "tax_name": "Insurance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Insurance",
                "id": 1389
            }
        ]
    },
    {
        "id": 1390,
        "parent_id": 1389,
        "tax_name": "Auto Insurance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance"
            },
            {
                "name": "Insurance",
                "id": 1389
            },
            {
                "name": "Auto Insurance",
                "id": 1390
            }
        ]
    },
    {
        "id": 1391,
        "parent_id": 1390,
        "tax_name": "Home Insurance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance"
            },
            {
                "name": "Insurance",
                "id": 1390
            },
            {
                "name": "Home Insurance",
                "id": 1391
            }
        ]
    },
    {
        "id": 1392,
        "parent_id": 1390,
        "tax_name": "Life Insurance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance"
            },
            {
                "name": "Insurance",
                "id": 1390
            },
            {
                "name": "Life Insurance",
                "id": 1392
            }
        ]
    },
    {
        "id": 1393,
        "parent_id": 1390,
        "tax_name": "Medical Insurance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance"
            },
            {
                "name": "Insurance",
                "id": 1390
            },
            {
                "name": "Medical Insurance",
                "id": 1393
            }
        ]
    },
    {
        "id": 1394,
        "parent_id": 1383,
        "tax_name": "Mortgage Lenders and Brokers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Mortgage Lenders and Brokers",
                "id": 1394
            }
        ]
    },
    {
        "id": 1395,
        "parent_id": 1383,
        "tax_name": "Payday and Emergency Loans",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Payday and Emergency Loans",
                "id": 1395
            }
        ]
    },
    {
        "id": 1396,
        "parent_id": 1383,
        "tax_name": "Retirement Planning",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Retirement Planning",
                "id": 1396
            }
        ]
    },
    {
        "id": 1397,
        "parent_id": 1383,
        "tax_name": "Stocks and Investments",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Stocks and Investments",
                "id": 1397
            }
        ]
    },
    {
        "id": 1398,
        "parent_id": 1383,
        "tax_name": "Student Financial Aid",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Student Financial Aid",
                "id": 1398
            }
        ]
    },
    {
        "id": 1399,
        "parent_id": 1383,
        "tax_name": "Tax Preparation Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Finance and Insurance",
                "id": 1383
            },
            {
                "name": "Tax Preparation Services",
                "id": 1399
            }
        ]
    },
    {
        "id": 1400,
        "parent_id": 752,
        "tax_name": "Food and Beverage Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Food and Beverage Services",
                "id": 1400
            }
        ]
    },
    {
        "id": 1401,
        "parent_id": 1400,
        "tax_name": "Bakeries",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Food and Beverage Services",
                "id": 1400
            },
            {
                "name": "Bakeries",
                "id": 1401
            }
        ]
    },
    {
        "id": 1402,
        "parent_id": 1400,
        "tax_name": "Bars",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Food and Beverage Services",
                "id": 1400
            },
            {
                "name": "Bars",
                "id": 1402
            }
        ]
    },
    {
        "id": 1403,
        "parent_id": 1400,
        "tax_name": "Catering",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Food and Beverage Services",
                "id": 1400
            },
            {
                "name": "Catering",
                "id": 1403
            }
        ]
    },
    {
        "id": 1404,
        "parent_id": 1400,
        "tax_name": "Fast Food",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Food and Beverage Services",
                "id": 1400
            },
            {
                "name": "Fast Food",
                "id": 1404
            }
        ]
    },
    {
        "id": 1405,
        "parent_id": 1400,
        "tax_name": "Food Delivery Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Food and Beverage Services",
                "id": 1400
            },
            {
                "name": "Food Delivery Services",
                "id": 1405
            }
        ]
    },
    {
        "id": 1406,
        "parent_id": 1400,
        "tax_name": "Restaurants",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Food and Beverage Services",
                "id": 1400
            },
            {
                "name": "Restaurants",
                "id": 1406
            }
        ]
    },
    {
        "id": 1407,
        "parent_id": 752,
        "tax_name": "Furniture",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            }
        ]
    },
    {
        "id": 1408,
        "parent_id": 1407,
        "tax_name": "Baby and Toddler Furniture",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Baby and Toddler Furniture",
                "id": 1408
            }
        ]
    },
    {
        "id": 1409,
        "parent_id": 1407,
        "tax_name": "BBQ/Grills/Outdoor Dining",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "BBQ/Grills/Outdoor Dining",
                "id": 1409
            }
        ]
    },
    {
        "id": 1410,
        "parent_id": 1407,
        "tax_name": "Beds and Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Beds and Accessories",
                "id": 1410
            }
        ]
    },
    {
        "id": 1411,
        "parent_id": 1407,
        "tax_name": "Benches",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Benches",
                "id": 1411
            }
        ]
    },
    {
        "id": 1412,
        "parent_id": 1407,
        "tax_name": "Cabinets and Storage",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Cabinets and Storage",
                "id": 1412
            }
        ]
    },
    {
        "id": 1413,
        "parent_id": 1407,
        "tax_name": "Chairs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Chairs",
                "id": 1413
            }
        ]
    },
    {
        "id": 1414,
        "parent_id": 1407,
        "tax_name": "Entertainment Centers and TV Stands",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Entertainment Centers and TV Stands",
                "id": 1414
            }
        ]
    },
    {
        "id": 1415,
        "parent_id": 1407,
        "tax_name": "Furniture Sets",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Furniture Sets",
                "id": 1415
            }
        ]
    },
    {
        "id": 1416,
        "parent_id": 1407,
        "tax_name": "Outdoor Furniture",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Outdoor Furniture",
                "id": 1416
            }
        ]
    },
    {
        "id": 1417,
        "parent_id": 1407,
        "tax_name": "Shelving",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Shelving",
                "id": 1417
            }
        ]
    },
    {
        "id": 1418,
        "parent_id": 1407,
        "tax_name": "Sofas",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Sofas",
                "id": 1418
            }
        ]
    },
    {
        "id": 1419,
        "parent_id": 1407,
        "tax_name": "Tables",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Furniture",
                "id": 1407
            },
            {
                "name": "Tables",
                "id": 1419
            }
        ]
    },
    {
        "id": 1420,
        "parent_id": 752,
        "tax_name": "Gifts and Holiday Items",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Gifts and Holiday Items",
                "id": 1420
            }
        ]
    },
    {
        "id": 1421,
        "parent_id": 1420,
        "tax_name": "Flowers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Gifts and Holiday Items",
                "id": 1420
            },
            {
                "name": "Flowers",
                "id": 1421
            }
        ]
    },
    {
        "id": 1422,
        "parent_id": 1420,
        "tax_name": "Gift Baskets",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Gifts and Holiday Items",
                "id": 1420
            },
            {
                "name": "Gift Baskets",
                "id": 1422
            }
        ]
    },
    {
        "id": 1423,
        "parent_id": 1420,
        "tax_name": "Gift Cards and Coupons",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Gifts and Holiday Items",
                "id": 1420
            },
            {
                "name": "Gift Cards and Coupons",
                "id": 1423
            }
        ]
    },
    {
        "id": 1424,
        "parent_id": 1420,
        "tax_name": "Gift Certificates",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Gifts and Holiday Items",
                "id": 1420
            },
            {
                "name": "Gift Certificates",
                "id": 1424
            }
        ]
    },
    {
        "id": 1425,
        "parent_id": 1420,
        "tax_name": "Greeting Cards",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Gifts and Holiday Items",
                "id": 1420
            },
            {
                "name": "Greeting Cards",
                "id": 1425
            }
        ]
    },
    {
        "id": 1426,
        "parent_id": 1420,
        "tax_name": "Holiday and Ethnic Items",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Gifts and Holiday Items",
                "id": 1420
            },
            {
                "name": "Holiday and Ethnic Items",
                "id": 1426
            }
        ]
    },
    {
        "id": 1427,
        "parent_id": 1420,
        "tax_name": "Party Goods",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Gifts and Holiday Items",
                "id": 1420
            },
            {
                "name": "Party Goods",
                "id": 1427
            }
        ]
    },
    {
        "id": 1428,
        "parent_id": 752,
        "tax_name": "Hardware Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            }
        ]
    },
    {
        "id": 1429,
        "parent_id": 1428,
        "tax_name": "Agriculture and Farming Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Agriculture and Farming Equipment",
                "id": 1429
            }
        ]
    },
    {
        "id": 1430,
        "parent_id": 1428,
        "tax_name": "Building Materials",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Building Materials",
                "id": 1430
            }
        ]
    },
    {
        "id": 1431,
        "parent_id": 1428,
        "tax_name": "Building Products",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Building Products",
                "id": 1431
            }
        ]
    },
    {
        "id": 1432,
        "parent_id": 1428,
        "tax_name": "Building Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Building Supplies",
                "id": 1432
            }
        ]
    },
    {
        "id": 1433,
        "parent_id": 1428,
        "tax_name": "Carpentry Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Carpentry Supplies",
                "id": 1433
            }
        ]
    },
    {
        "id": 1434,
        "parent_id": 1428,
        "tax_name": "Electrical Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Electrical Equipment",
                "id": 1434
            }
        ]
    },
    {
        "id": 1435,
        "parent_id": 1428,
        "tax_name": "Fencing and Barriers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Fencing and Barriers",
                "id": 1435
            }
        ]
    },
    {
        "id": 1436,
        "parent_id": 1428,
        "tax_name": "Fuel Containers and Tanks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Fuel Containers and Tanks",
                "id": 1436
            }
        ]
    },
    {
        "id": 1437,
        "parent_id": 1428,
        "tax_name": "Hardware Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Hardware Accessories",
                "id": 1437
            }
        ]
    },
    {
        "id": 1438,
        "parent_id": 1428,
        "tax_name": "Hardware Pumps",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Hardware Pumps",
                "id": 1438
            }
        ]
    },
    {
        "id": 1439,
        "parent_id": 1428,
        "tax_name": "Heating/Ventilation/Air Conditioning",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Heating/Ventilation/Air Conditioning",
                "id": 1439
            }
        ]
    },
    {
        "id": 1440,
        "parent_id": 1428,
        "tax_name": "Locks and Keys",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Locks and Keys",
                "id": 1440
            }
        ]
    },
    {
        "id": 1441,
        "parent_id": 1428,
        "tax_name": "Machinery",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Machinery",
                "id": 1441
            }
        ]
    },
    {
        "id": 1442,
        "parent_id": 1428,
        "tax_name": "Plumbing Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Plumbing Supplies",
                "id": 1442
            }
        ]
    },
    {
        "id": 1443,
        "parent_id": 1428,
        "tax_name": "Power and Electrical Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Power and Electrical Supplies",
                "id": 1443
            }
        ]
    },
    {
        "id": 1444,
        "parent_id": 1428,
        "tax_name": "Small Engines",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Small Engines",
                "id": 1444
            }
        ]
    },
    {
        "id": 1445,
        "parent_id": 1428,
        "tax_name": "Storage Tanks",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Storage Tanks",
                "id": 1445
            }
        ]
    },
    {
        "id": 1446,
        "parent_id": 1428,
        "tax_name": "Tools",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Tools",
                "id": 1446
            }
        ]
    },
    {
        "id": 1447,
        "parent_id": 1428,
        "tax_name": "Work Safety Protective Gear",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hardware Supplies",
                "id": 1428
            },
            {
                "name": "Work Safety Protective Gear",
                "id": 1447
            }
        ]
    },
    {
        "id": 1448,
        "parent_id": 752,
        "tax_name": "Health and Medical Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            }
        ]
    },
    {
        "id": 1449,
        "parent_id": 1448,
        "tax_name": "Alternative and Natural Medicine",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Alternative and Natural Medicine",
                "id": 1449
            }
        ]
    },
    {
        "id": 1451,
        "parent_id": 1448,
        "tax_name": "Chiropractors",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Chiropractors",
                "id": 1451
            }
        ]
    },
    {
        "id": 1452,
        "parent_id": 1448,
        "tax_name": "Clinical Research",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Clinical Research",
                "id": 1452
            }
        ]
    },
    {
        "id": 1453,
        "parent_id": 1448,
        "tax_name": "Cosmetic Medical Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Cosmetic Medical Services",
                "id": 1453
            }
        ]
    },
    {
        "id": 1454,
        "parent_id": 1448,
        "tax_name": "Dental Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Dental Care",
                "id": 1454
            }
        ]
    },
    {
        "id": 1455,
        "parent_id": 1448,
        "tax_name": "Drugstores and Pharmacies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Drugstores and Pharmacies",
                "id": 1455
            }
        ]
    },
    {
        "id": 1456,
        "parent_id": 1448,
        "tax_name": "Elder Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Elder Care",
                "id": 1456
            }
        ]
    },
    {
        "id": 1458,
        "parent_id": 1448,
        "tax_name": "Hair Loss Treatments",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Hair Loss Treatments",
                "id": 1458
            }
        ]
    },
    {
        "id": 1459,
        "parent_id": 1448,
        "tax_name": "Health Care and Physicians",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Health Care and Physicians",
                "id": 1459
            }
        ]
    },
    {
        "id": 1460,
        "parent_id": 1448,
        "tax_name": "Health Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Health Services",
                "id": 1460
            }
        ]
    },
    {
        "id": 1461,
        "parent_id": 1448,
        "tax_name": "Hospitals",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Hospitals",
                "id": 1461
            }
        ]
    },
    {
        "id": 1462,
        "parent_id": 1448,
        "tax_name": "Massage Therapists",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Massage Therapists",
                "id": 1462
            }
        ]
    },
    {
        "id": 1465,
        "parent_id": 1448,
        "tax_name": "Physical Therapists",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Physical Therapists",
                "id": 1465
            }
        ]
    },
    {
        "id": 1466,
        "parent_id": 1448,
        "tax_name": "Skin Care Treatments",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Skin Care Treatments",
                "id": 1466
            }
        ]
    },
    {
        "id": 1467,
        "parent_id": 1448,
        "tax_name": "Smoking Cessation",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Smoking Cessation",
                "id": 1467
            }
        ]
    },
    {
        "id": 1469,
        "parent_id": 1448,
        "tax_name": "Vaccines",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Vaccines",
                "id": 1469
            }
        ]
    },
    {
        "id": 1470,
        "parent_id": 1448,
        "tax_name": "Vision Care",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Health and Medical Services",
                "id": 1448
            },
            {
                "name": "Vision Care",
                "id": 1470
            }
        ]
    },
    {
        "id": 1471,
        "parent_id": 752,
        "tax_name": "Hobbies and Interests",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hobbies and Interests",
                "id": 1471
            }
        ]
    },
    {
        "id": 1472,
        "parent_id": 1471,
        "tax_name": "Arts and Crafts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hobbies and Interests",
                "id": 1471
            },
            {
                "name": "Arts and Crafts",
                "id": 1472
            }
        ]
    },
    {
        "id": 1473,
        "parent_id": 1471,
        "tax_name": "Musical Instruments and Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hobbies and Interests",
                "id": 1471
            },
            {
                "name": "Musical Instruments and Accessories",
                "id": 1473
            }
        ]
    },
    {
        "id": 1474,
        "parent_id": 1471,
        "tax_name": "Psychics and Astrology",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hobbies and Interests",
                "id": 1471
            },
            {
                "name": "Psychics and Astrology",
                "id": 1474
            }
        ]
    },
    {
        "id": 1475,
        "parent_id": 1471,
        "tax_name": "Workshops and Classes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Hobbies and Interests",
                "id": 1471
            },
            {
                "name": "Workshops and Classes",
                "id": 1475
            }
        ]
    },
    {
        "id": 1476,
        "parent_id": 752,
        "tax_name": "Home and Garden Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            }
        ]
    },
    {
        "id": 1477,
        "parent_id": 1476,
        "tax_name": "Appliance Repair",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Appliance Repair",
                "id": 1477
            }
        ]
    },
    {
        "id": 1478,
        "parent_id": 1476,
        "tax_name": "Business and Home Security Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Business and Home Security Services",
                "id": 1478
            }
        ]
    },
    {
        "id": 1479,
        "parent_id": 1476,
        "tax_name": "Carpeting and Flooring Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Carpeting and Flooring Services",
                "id": 1479
            }
        ]
    },
    {
        "id": 1480,
        "parent_id": 1476,
        "tax_name": "Emergency Preparedness",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Emergency Preparedness",
                "id": 1480
            }
        ]
    },
    {
        "id": 1481,
        "parent_id": 1476,
        "tax_name": "Flood, Fire and Gas Safety",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Flood, Fire and Gas Safety",
                "id": 1481
            }
        ]
    },
    {
        "id": 1482,
        "parent_id": 1476,
        "tax_name": "Gas and Electric Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Gas and Electric Services",
                "id": 1482
            }
        ]
    },
    {
        "id": 1483,
        "parent_id": 1476,
        "tax_name": "Home Improvement and Repair",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Home Improvement and Repair",
                "id": 1483
            }
        ]
    },
    {
        "id": 1484,
        "parent_id": 1476,
        "tax_name": "Housekeeping Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Housekeeping Services",
                "id": 1484
            }
        ]
    },
    {
        "id": 1485,
        "parent_id": 1476,
        "tax_name": "Landscaping Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Landscaping Services",
                "id": 1485
            }
        ]
    },
    {
        "id": 1486,
        "parent_id": 1476,
        "tax_name": "Lawn and Garden Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Lawn and Garden Services",
                "id": 1486
            }
        ]
    },
    {
        "id": 1487,
        "parent_id": 1476,
        "tax_name": "Pest Exterminators",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Pest Exterminators",
                "id": 1487
            }
        ]
    },
    {
        "id": 1488,
        "parent_id": 1476,
        "tax_name": "Plumbers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Plumbers",
                "id": 1488
            }
        ]
    },
    {
        "id": 1489,
        "parent_id": 1476,
        "tax_name": "Pool and Spa Installation and Maintenance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Pool and Spa Installation and Maintenance",
                "id": 1489
            }
        ]
    },
    {
        "id": 1490,
        "parent_id": 1476,
        "tax_name": "Remodeling and Construction",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Remodeling and Construction",
                "id": 1490
            }
        ]
    },
    {
        "id": 1491,
        "parent_id": 1476,
        "tax_name": "Water Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Water Services",
                "id": 1491
            }
        ]
    },
    {
        "id": 1492,
        "parent_id": 1476,
        "tax_name": "Window Installation and Treatments",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Home and Garden Services",
                "id": 1476
            },
            {
                "name": "Window Installation and Treatments",
                "id": 1492
            }
        ]
    },
    {
        "id": 1493,
        "parent_id": 752,
        "tax_name": "Legal Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Legal Services",
                "id": 1493
            }
        ]
    },
    {
        "id": 1494,
        "parent_id": 1493,
        "tax_name": "Attorneys",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Legal Services",
                "id": 1493
            },
            {
                "name": "Attorneys",
                "id": 1494
            }
        ]
    },
    {
        "id": 1495,
        "parent_id": 1493,
        "tax_name": "Bail Bonds",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Legal Services",
                "id": 1493
            },
            {
                "name": "Bail Bonds",
                "id": 1495
            }
        ]
    },
    {
        "id": 1496,
        "parent_id": 752,
        "tax_name": "Life Events",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            }
        ]
    },
    {
        "id": 1497,
        "parent_id": 1496,
        "tax_name": "Anniversary",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Anniversary",
                "id": 1497
            }
        ]
    },
    {
        "id": 1498,
        "parent_id": 1496,
        "tax_name": "Baby Showers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Baby Showers",
                "id": 1498
            }
        ]
    },
    {
        "id": 1499,
        "parent_id": 1496,
        "tax_name": "Bachelor and Bachelorette Parties",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Bachelor and Bachelorette Parties",
                "id": 1499
            }
        ]
    },
    {
        "id": 1500,
        "parent_id": 1496,
        "tax_name": "Birthdays",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Birthdays",
                "id": 1500
            }
        ]
    },
    {
        "id": 1501,
        "parent_id": 1496,
        "tax_name": "Births",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Births",
                "id": 1501
            }
        ]
    },
    {
        "id": 1502,
        "parent_id": 1496,
        "tax_name": "Funeral Supplies and Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Funeral Supplies and Services",
                "id": 1502
            }
        ]
    },
    {
        "id": 1503,
        "parent_id": 1496,
        "tax_name": "Graduations",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Graduations",
                "id": 1503
            }
        ]
    },
    {
        "id": 1504,
        "parent_id": 1496,
        "tax_name": "Proms",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Proms",
                "id": 1504
            }
        ]
    },
    {
        "id": 1505,
        "parent_id": 1496,
        "tax_name": "Wedding Services and Supplies ",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Life Events",
                "id": 1496
            },
            {
                "name": "Wedding Services and Supplies ",
                "id": 1505
            }
        ]
    },
    {
        "id": 1506,
        "parent_id": 752,
        "tax_name": "Logistics and Delivery",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Logistics and Delivery",
                "id": 1506
            }
        ]
    },
    {
        "id": 1507,
        "parent_id": 1506,
        "tax_name": "Shipping Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Logistics and Delivery",
                "id": 1506
            },
            {
                "name": "Shipping Services",
                "id": 1507
            }
        ]
    },
    {
        "id": 1508,
        "parent_id": 1506,
        "tax_name": "Storage Facilities",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Logistics and Delivery",
                "id": 1506
            },
            {
                "name": "Storage Facilities",
                "id": 1508
            }
        ]
    },
    {
        "id": 1538,
        "parent_id": 752,
        "tax_name": "Non-Profits",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Non-Profits",
                "id": 1538
            }
        ]
    },
    {
        "id": 1539,
        "parent_id": 1538,
        "tax_name": "Charities and Donations",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Non-Profits",
                "id": 1538
            },
            {
                "name": "Charities and Donations",
                "id": 1539
            }
        ]
    },
    {
        "id": 1540,
        "parent_id": 1538,
        "tax_name": "Civic Organizations",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Non-Profits",
                "id": 1538
            },
            {
                "name": "Civic Organizations",
                "id": 1540
            }
        ]
    },
    {
        "id": 1541,
        "parent_id": 1538,
        "tax_name": "Federations and Professional Associations",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Non-Profits",
                "id": 1538
            },
            {
                "name": "Federations and Professional Associations",
                "id": 1541
            }
        ]
    },
    {
        "id": 1542,
        "parent_id": 1538,
        "tax_name": "Military Organizations",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Non-Profits",
                "id": 1538
            },
            {
                "name": "Military Organizations",
                "id": 1542
            }
        ]
    },
    {
        "id": 1543,
        "parent_id": 1538,
        "tax_name": "NGOs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Non-Profits",
                "id": 1538
            },
            {
                "name": "NGOs",
                "id": 1543
            }
        ]
    },
    {
        "id": 1544,
        "parent_id": 1538,
        "tax_name": "PSAs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Non-Profits",
                "id": 1538
            },
            {
                "name": "PSAs",
                "id": 1544
            }
        ]
    },
    {
        "id": 1546,
        "parent_id": 752,
        "tax_name": "Office Equipment and Supplies",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Office Equipment and Supplies",
                "id": 1546
            }
        ]
    },
    {
        "id": 1547,
        "parent_id": 1546,
        "tax_name": "Office Furniture",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Office Equipment and Supplies",
                "id": 1546
            },
            {
                "name": "Office Furniture",
                "id": 1547
            }
        ]
    },
    {
        "id": 1548,
        "parent_id": 1546,
        "tax_name": "Stationery",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Office Equipment and Supplies",
                "id": 1546
            },
            {
                "name": "Stationery",
                "id": 1548
            }
        ]
    },
    {
        "id": 1549,
        "parent_id": 752,
        "tax_name": "Pet Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Pet Services",
                "id": 1549
            }
        ]
    },
    {
        "id": 1550,
        "parent_id": 1549,
        "tax_name": "Pet Breeders",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Pet Services",
                "id": 1549
            },
            {
                "name": "Pet Breeders",
                "id": 1550
            }
        ]
    },
    {
        "id": 1551,
        "parent_id": 1549,
        "tax_name": "Pet Grooming",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Pet Services",
                "id": 1549
            },
            {
                "name": "Pet Grooming",
                "id": 1551
            }
        ]
    },
    {
        "id": 1552,
        "parent_id": 1549,
        "tax_name": "Pet Sitting",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Pet Services",
                "id": 1549
            },
            {
                "name": "Pet Sitting",
                "id": 1552
            }
        ]
    },
    {
        "id": 1553,
        "parent_id": 1549,
        "tax_name": "Pet Stores",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Pet Services",
                "id": 1549
            },
            {
                "name": "Pet Stores",
                "id": 1553
            }
        ]
    },
    {
        "id": 1554,
        "parent_id": 1549,
        "tax_name": "Veterinary Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Pet Services",
                "id": 1549
            },
            {
                "name": "Veterinary Services",
                "id": 1554
            }
        ]
    },
    {
        "id": 1555,
        "parent_id": 752,
        "tax_name": "Pharmaceuticals, Conditions, and Symptoms",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Pharmaceuticals, Conditions, and Symptoms",
                "id": 1555
            }
        ]
    },
    {
        "id": 1585,
        "parent_id": 752,
        "tax_name": "Real Estate",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Real Estate",
                "id": 1585
            }
        ]
    },
    {
        "id": 1586,
        "parent_id": 1585,
        "tax_name": "Commercial Real Estate",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Real Estate",
                "id": 1585
            },
            {
                "name": "Commercial Real Estate",
                "id": 1586
            }
        ]
    },
    {
        "id": 1587,
        "parent_id": 1585,
        "tax_name": "Real Estate Rentals",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Real Estate",
                "id": 1585
            },
            {
                "name": "Real Estate Rentals",
                "id": 1587
            }
        ]
    },
    {
        "id": 1588,
        "parent_id": 1585,
        "tax_name": "Real Estate Sales",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Real Estate",
                "id": 1585
            },
            {
                "name": "Real Estate Sales",
                "id": 1588
            }
        ]
    },
    {
        "id": 1589,
        "parent_id": 1585,
        "tax_name": "Real Estate Services For Owners",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Real Estate",
                "id": 1585
            },
            {
                "name": "Real Estate Services For Owners",
                "id": 1589
            }
        ]
    },
    {
        "id": 1590,
        "parent_id": 1585,
        "tax_name": "Residential Real Estate",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Real Estate",
                "id": 1585
            },
            {
                "name": "Residential Real Estate",
                "id": 1590
            }
        ]
    },
    {
        "id": 1591,
        "parent_id": 752,
        "tax_name": "Recreation and Fitness Activities",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Recreation and Fitness Activities",
                "id": 1591
            }
        ]
    },
    {
        "id": 1592,
        "parent_id": 1591,
        "tax_name": "Dance Studios",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Recreation and Fitness Activities",
                "id": 1591
            },
            {
                "name": "Dance Studios",
                "id": 1592
            }
        ]
    },
    {
        "id": 1593,
        "parent_id": 1591,
        "tax_name": "Gyms and Health Clubs",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Recreation and Fitness Activities",
                "id": 1591
            },
            {
                "name": "Gyms and Health Clubs",
                "id": 1593
            }
        ]
    },
    {
        "id": 1594,
        "parent_id": 1591,
        "tax_name": "Participant Sports Leagues",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Recreation and Fitness Activities",
                "id": 1591
            },
            {
                "name": "Participant Sports Leagues",
                "id": 1594
            }
        ]
    },
    {
        "id": 1595,
        "parent_id": 1591,
        "tax_name": "Personal Trainers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Recreation and Fitness Activities",
                "id": 1591
            },
            {
                "name": "Personal Trainers",
                "id": 1595
            }
        ]
    },
    {
        "id": 1596,
        "parent_id": 1591,
        "tax_name": "Self Defense and Martial Arts Classes",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Recreation and Fitness Activities",
                "id": 1591
            },
            {
                "name": "Self Defense and Martial Arts Classes",
                "id": 1596
            }
        ]
    },
    {
        "id": 1597,
        "parent_id": 1591,
        "tax_name": "Swimming Facilities",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Recreation and Fitness Activities",
                "id": 1591
            },
            {
                "name": "Swimming Facilities",
                "id": 1597
            }
        ]
    },
    {
        "id": 1598,
        "parent_id": 1591,
        "tax_name": "Yoga Studios",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Recreation and Fitness Activities",
                "id": 1591
            },
            {
                "name": "Yoga Studios",
                "id": 1598
            }
        ]
    },
    {
        "id": 1599,
        "parent_id": 752,
        "tax_name": "Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software",
                "id": 1599
            }
        ]
    },
    {
        "id": 1600,
        "parent_id": 1599,
        "tax_name": "Computer Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software",
                "id": 1599
            },
            {
                "name": "Computer Software",
                "id": 1600
            }
        ]
    },
    {
        "id": 1601,
        "parent_id": 1600,
        "tax_name": "3-D Graphics",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "3-D Graphics",
                "id": 1601
            }
        ]
    },
    {
        "id": 1602,
        "parent_id": 1600,
        "tax_name": "Photo Editing Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Photo Editing Software",
                "id": 1602
            }
        ]
    },
    {
        "id": 1603,
        "parent_id": 1600,
        "tax_name": "Shareware and Freeware",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Shareware and Freeware",
                "id": 1603
            }
        ]
    },
    {
        "id": 1604,
        "parent_id": 1600,
        "tax_name": "Video Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Video Software",
                "id": 1604
            }
        ]
    },
    {
        "id": 1605,
        "parent_id": 1600,
        "tax_name": "Web Conferencing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Web Conferencing",
                "id": 1605
            }
        ]
    },
    {
        "id": 1606,
        "parent_id": 1600,
        "tax_name": "Antivirus Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Antivirus Software",
                "id": 1606
            }
        ]
    },
    {
        "id": 1607,
        "parent_id": 1600,
        "tax_name": "Browsers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Browsers",
                "id": 1607
            }
        ]
    },
    {
        "id": 1608,
        "parent_id": 1600,
        "tax_name": "Computer Animation",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Computer Animation",
                "id": 1608
            }
        ]
    },
    {
        "id": 1609,
        "parent_id": 1600,
        "tax_name": "Databases",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Databases",
                "id": 1609
            }
        ]
    },
    {
        "id": 1610,
        "parent_id": 1600,
        "tax_name": "Desktop Publishing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Desktop Publishing",
                "id": 1610
            }
        ]
    },
    {
        "id": 1611,
        "parent_id": 1600,
        "tax_name": "Digital Audio",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Digital Audio",
                "id": 1611
            }
        ]
    },
    {
        "id": 1612,
        "parent_id": 1600,
        "tax_name": "Graphics Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Graphics Software",
                "id": 1612
            }
        ]
    },
    {
        "id": 1613,
        "parent_id": 1600,
        "tax_name": "Operating Systems",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Operating Systems",
                "id": 1613
            }
        ]
    },
    {
        "id": 1614,
        "parent_id": 1600,
        "tax_name": "Productivity Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Productivity Software",
                "id": 1614
            }
        ]
    },
    {
        "id": 1615,
        "parent_id": 1600,
        "tax_name": "Messaging Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Messaging Software",
                "id": 1615
            }
        ]
    },
    {
        "id": 1616,
        "parent_id": 1600,
        "tax_name": "Gaming Software",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software"
            },
            {
                "name": "Computer Software",
                "id": 1600
            },
            {
                "name": "Gaming Software",
                "id": 1616
            }
        ]
    },
    {
        "id": 1617,
        "parent_id": 1599,
        "tax_name": "Digital Goods and Currency",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Software",
                "id": 1599
            },
            {
                "name": "Digital Goods and Currency",
                "id": 1617
            }
        ]
    },
    {
        "id": 1618,
        "parent_id": 752,
        "tax_name": "Sporting Goods",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods",
                "id": 1618
            }
        ]
    },
    {
        "id": 1619,
        "parent_id": 1618,
        "tax_name": "Athletics Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods",
                "id": 1618
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            }
        ]
    },
    {
        "id": 1620,
        "parent_id": 1619,
        "tax_name": "Baseball and Softball Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Baseball and Softball Equipment",
                "id": 1620
            }
        ]
    },
    {
        "id": 1621,
        "parent_id": 1619,
        "tax_name": "Basketball Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Basketball Equipment",
                "id": 1621
            }
        ]
    },
    {
        "id": 1622,
        "parent_id": 1619,
        "tax_name": "Boxing and Martial Arts Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Boxing and Martial Arts Equipment",
                "id": 1622
            }
        ]
    },
    {
        "id": 1623,
        "parent_id": 1619,
        "tax_name": "Figure Skating and Hockey Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Figure Skating and Hockey Equipment",
                "id": 1623
            }
        ]
    },
    {
        "id": 1624,
        "parent_id": 1619,
        "tax_name": "Football Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Football Equipment",
                "id": 1624
            }
        ]
    },
    {
        "id": 1625,
        "parent_id": 1619,
        "tax_name": "General Purpose Athletic Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "General Purpose Athletic Equipment",
                "id": 1625
            }
        ]
    },
    {
        "id": 1626,
        "parent_id": 1619,
        "tax_name": "Gymnastics Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Gymnastics Equipment",
                "id": 1626
            }
        ]
    },
    {
        "id": 1627,
        "parent_id": 1619,
        "tax_name": "Soccer Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Soccer Equipment",
                "id": 1627
            }
        ]
    },
    {
        "id": 1628,
        "parent_id": 1619,
        "tax_name": "Tennis Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Tennis Equipment",
                "id": 1628
            }
        ]
    },
    {
        "id": 1629,
        "parent_id": 1619,
        "tax_name": "Track and Field Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Track and Field Equipment",
                "id": 1629
            }
        ]
    },
    {
        "id": 1630,
        "parent_id": 1619,
        "tax_name": "Volleyball Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Volleyball Equipment",
                "id": 1630
            }
        ]
    },
    {
        "id": 1631,
        "parent_id": 1619,
        "tax_name": "Water Polo Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Water Polo Equipment",
                "id": 1631
            }
        ]
    },
    {
        "id": 1632,
        "parent_id": 1619,
        "tax_name": "Wrestling Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Athletics Equipment",
                "id": 1619
            },
            {
                "name": "Wrestling Equipment",
                "id": 1632
            }
        ]
    },
    {
        "id": 1633,
        "parent_id": 1618,
        "tax_name": "Exercise and Fitness Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods",
                "id": 1618
            },
            {
                "name": "Exercise and Fitness Equipment",
                "id": 1633
            }
        ]
    },
    {
        "id": 1634,
        "parent_id": 1618,
        "tax_name": "Indoor Games Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods",
                "id": 1618
            },
            {
                "name": "Indoor Games Equipment",
                "id": 1634
            }
        ]
    },
    {
        "id": 1635,
        "parent_id": 1618,
        "tax_name": "Outdoor Recreation Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods",
                "id": 1618
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            }
        ]
    },
    {
        "id": 1636,
        "parent_id": 1635,
        "tax_name": "Boating and Water Sports Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Boating and Water Sports Equipment",
                "id": 1636
            }
        ]
    },
    {
        "id": 1637,
        "parent_id": 1635,
        "tax_name": "Camping and Hiking Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Camping and Hiking Equipment",
                "id": 1637
            }
        ]
    },
    {
        "id": 1638,
        "parent_id": 1635,
        "tax_name": "Climbing Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Climbing Equipment",
                "id": 1638
            }
        ]
    },
    {
        "id": 1639,
        "parent_id": 1635,
        "tax_name": "Bicycles and Cycling Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Bicycles and Cycling Equipment",
                "id": 1639
            }
        ]
    },
    {
        "id": 1640,
        "parent_id": 1635,
        "tax_name": "Equestrian Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Equestrian Equipment",
                "id": 1640
            }
        ]
    },
    {
        "id": 1641,
        "parent_id": 1635,
        "tax_name": "Fishing Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Fishing Equipment",
                "id": 1641
            }
        ]
    },
    {
        "id": 1642,
        "parent_id": 1635,
        "tax_name": "Golf Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Golf Equipment",
                "id": 1642
            }
        ]
    },
    {
        "id": 1643,
        "parent_id": 1635,
        "tax_name": "Hang Gliding and Skydiving Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Hang Gliding and Skydiving Equipment",
                "id": 1643
            }
        ]
    },
    {
        "id": 1644,
        "parent_id": 1635,
        "tax_name": "Hunting and Shooting Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Hunting and Shooting Equipment",
                "id": 1644
            }
        ]
    },
    {
        "id": 1645,
        "parent_id": 1635,
        "tax_name": "Inline and Roller Skating Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Inline and Roller Skating Equipment",
                "id": 1645
            }
        ]
    },
    {
        "id": 1646,
        "parent_id": 1635,
        "tax_name": "Outdoor Games Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Outdoor Games Equipment",
                "id": 1646
            }
        ]
    },
    {
        "id": 1647,
        "parent_id": 1635,
        "tax_name": "Skateboards and Accessories",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Skateboards and Accessories",
                "id": 1647
            }
        ]
    },
    {
        "id": 1648,
        "parent_id": 1635,
        "tax_name": "Winter Sports Equipment",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Sporting Goods"
            },
            {
                "name": "Outdoor Recreation Equipment",
                "id": 1635
            },
            {
                "name": "Winter Sports Equipment",
                "id": 1648
            }
        ]
    },
    {
        "id": 1649,
        "parent_id": 752,
        "tax_name": "Travel and Tourism",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            }
        ]
    },
    {
        "id": 1650,
        "parent_id": 1649,
        "tax_name": "Adventure Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Adventure Travel",
                "id": 1650
            }
        ]
    },
    {
        "id": 1651,
        "parent_id": 1649,
        "tax_name": "Air Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Air Travel",
                "id": 1651
            }
        ]
    },
    {
        "id": 1652,
        "parent_id": 1649,
        "tax_name": "Auto Rental",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Auto Rental",
                "id": 1652
            }
        ]
    },
    {
        "id": 1653,
        "parent_id": 1649,
        "tax_name": "Beach Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Beach Travel",
                "id": 1653
            }
        ]
    },
    {
        "id": 1654,
        "parent_id": 1649,
        "tax_name": "Bed and Breakfasts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Bed and Breakfasts",
                "id": 1654
            }
        ]
    },
    {
        "id": 1655,
        "parent_id": 1649,
        "tax_name": "Budget Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Budget Travel",
                "id": 1655
            }
        ]
    },
    {
        "id": 1656,
        "parent_id": 1649,
        "tax_name": "Business Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Business Travel",
                "id": 1656
            }
        ]
    },
    {
        "id": 1657,
        "parent_id": 1656,
        "tax_name": "Taxi Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism"
            },
            {
                "name": "Business Travel",
                "id": 1656
            },
            {
                "name": "Taxi Services",
                "id": 1657
            }
        ]
    },
    {
        "id": 1658,
        "parent_id": 1656,
        "tax_name": "Ride-sharing Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism"
            },
            {
                "name": "Business Travel",
                "id": 1656
            },
            {
                "name": "Ride-sharing Services",
                "id": 1658
            }
        ]
    },
    {
        "id": 1659,
        "parent_id": 1649,
        "tax_name": "Camping",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Camping",
                "id": 1659
            }
        ]
    },
    {
        "id": 1660,
        "parent_id": 1649,
        "tax_name": "Coach Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Coach Travel",
                "id": 1660
            }
        ]
    },
    {
        "id": 1661,
        "parent_id": 1649,
        "tax_name": "Cruise Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Cruise Travel",
                "id": 1661
            }
        ]
    },
    {
        "id": 1662,
        "parent_id": 1649,
        "tax_name": "Day Trips",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Day Trips",
                "id": 1662
            }
        ]
    },
    {
        "id": 1663,
        "parent_id": 1649,
        "tax_name": "Family Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Family Travel",
                "id": 1663
            }
        ]
    },
    {
        "id": 1664,
        "parent_id": 1649,
        "tax_name": "Ferry Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Ferry Travel",
                "id": 1664
            }
        ]
    },
    {
        "id": 1665,
        "parent_id": 1649,
        "tax_name": "Honeymoons and Getaways",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Honeymoons and Getaways",
                "id": 1665
            }
        ]
    },
    {
        "id": 1666,
        "parent_id": 1649,
        "tax_name": "Hotels and Resorts",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Hotels and Resorts",
                "id": 1666
            }
        ]
    },
    {
        "id": 1667,
        "parent_id": 1649,
        "tax_name": "Motels",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Motels",
                "id": 1667
            }
        ]
    },
    {
        "id": 1668,
        "parent_id": 1649,
        "tax_name": "Passenger Transportation",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Passenger Transportation",
                "id": 1668
            }
        ]
    },
    {
        "id": 1669,
        "parent_id": 1649,
        "tax_name": "Rail Travel",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Rail Travel",
                "id": 1669
            }
        ]
    },
    {
        "id": 1670,
        "parent_id": 1649,
        "tax_name": "Road Trips",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Road Trips",
                "id": 1670
            }
        ]
    },
    {
        "id": 1671,
        "parent_id": 1649,
        "tax_name": "Sightseeing Tours and Activities",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Sightseeing Tours and Activities",
                "id": 1671
            }
        ]
    },
    {
        "id": 1672,
        "parent_id": 1649,
        "tax_name": "Spas",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Spas",
                "id": 1672
            }
        ]
    },
    {
        "id": 1673,
        "parent_id": 1649,
        "tax_name": "Timeshares",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Timeshares",
                "id": 1673
            }
        ]
    },
    {
        "id": 1674,
        "parent_id": 1649,
        "tax_name": "Travel Agents and Online Travel Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Travel Agents and Online Travel Services",
                "id": 1674
            }
        ]
    },
    {
        "id": 1675,
        "parent_id": 1649,
        "tax_name": "Travel Insurance",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Travel and Tourism",
                "id": 1649
            },
            {
                "name": "Travel Insurance",
                "id": 1675
            }
        ]
    },
    {
        "id": 1676,
        "parent_id": 752,
        "tax_name": "Web Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Web Services",
                "id": 1676
            }
        ]
    },
    {
        "id": 1677,
        "parent_id": 1676,
        "tax_name": "Domain Services",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Web Services",
                "id": 1676
            },
            {
                "name": "Domain Services",
                "id": 1677
            }
        ]
    },
    {
        "id": 1678,
        "parent_id": 1676,
        "tax_name": "Internet Providers",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Web Services",
                "id": 1676
            },
            {
                "name": "Internet Providers",
                "id": 1678
            }
        ]
    },
    {
        "id": 1679,
        "parent_id": 1676,
        "tax_name": "Web Hosting and Cloud Computing",
        "tier": [
            {
                "name": "Purchase Intent*",
                "id": 752
            },
            {
                "name": "Web Services",
                "id": 1676
            },
            {
                "name": "Web Hosting and Cloud Computing",
                "id": 1679
            }
        ]
    }
]