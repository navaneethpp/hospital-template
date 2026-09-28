export interface Doctor {
  name: string;
  title: string;
  photo: string;
  experience: string;
}

export interface RelatedService {
  title: string;
  description: string;
}

export interface Department {
  slug: string;
  name: string;
  icon:
    | "HeartPulse"
    | "Baby"
    | "Ambulance"
    | "Brain"
    | "Bone"
    | "Ribbon"
    | "Sparkles"
    | "Venus"
    | "ShieldAlert"
    | "HeartHandshake";
  shortDescription: string;
  fullDescription: string;
  whyYouNeedIt: string;
  heroImage: string;
  doctors: Doctor[];
  relatedServices: RelatedService[];
}

export const departments: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "HeartPulse",
    shortDescription: "Advanced cardiac diagnostics, interventional catheterization, and heart disease management.",
    fullDescription:
      "World-class cardiovascular care combining state-of-the-art diagnostic imaging, preventive cardiology, and groundbreaking interventional therapies.",
    whyYouNeedIt:
      "Consult our cardiology specialists if you experience chest tightness, shortness of breath, unexplained palpitations, high blood pressure, or have a family history of cardiovascular disease.",
    heroImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "Dr. Michael Adams",
        title: "Chief Cardiologist & Interventional Specialist",
        photo:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
        experience: "18+ years · Fellow of the American College of Cardiology",
      },
      {
        name: "Dr. Elena Rostova",
        title: "Electrophysiology & Heart Rhythm Consultant",
        photo:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
        experience: "14+ years · Complex Arrhythmia & Pacemaker Therapy",
      },
    ],
    relatedServices: [
      {
        title: "Cardiac Catheterization & Angioplasty",
        description: "Minimally invasive diagnostic and coronary revascularization procedures in hybrid suites.",
      },
      {
        title: "3D Echocardiography & Stress Testing",
        description: "Comprehensive functional ultrasound assessments of heart valves and ventricular function.",
      },
      {
        title: "Cardiovascular Rehabilitation",
        description: "Structured recovery programs guided by clinical cardiologists and physical therapists.",
      },
    ],
  },
  {
    slug: "pediatrics",
    name: "Pediatric Department",
    icon: "Baby",
    shortDescription: "Gentle, specialist-led care for infants, children, and adolescents in a family-first clinic.",
    fullDescription:
      "Dedicated to the physical, emotional, and developmental health of young patients from newborn infancy through young adulthood.",
    whyYouNeedIt:
      "Schedule with Pediatrics for routine well-child developmental milestones, childhood vaccinations, recurring allergies, asthma management, or urgent childhood infections.",
    heroImage:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "Dr. Sarah Chen",
        title: "Senior Pediatric Consultant & Neonatologist",
        photo:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
        experience: "15+ years · Pediatric Intensive Care Certified",
      },
      {
        name: "Dr. David Kim",
        title: "Pediatric Allergy & Immunology Specialist",
        photo:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
        experience: "11+ years · Childhood Respiratory Care",
      },
    ],
    relatedServices: [
      {
        title: "Well-Child Milestones & Immunization",
        description: "Evidence-based preventative vaccine schedules and sensory-motor growth screenings.",
      },
      {
        title: "Pediatric Urgent Assessment Clinic",
        description: "Immediate triage for pediatric fevers, dehydration, and acute respiratory episodes.",
      },
      {
        title: "Adolescent Health & Nutrition",
        description: "Confidential guidance on teen wellness, sports clearances, and metabolic health.",
      },
    ],
  },
  {
    slug: "emergency-care",
    name: "Emergency Care",
    icon: "Ambulance",
    shortDescription: "Rapid response resuscitation teams and 24/7 Level-1 trauma stabilization.",
    fullDescription:
      "Round-the-clock emergency medical services with dedicated resuscitation bays, point-of-care rapid imaging, and immediate surgical standby.",
    whyYouNeedIt:
      "Seek emergency care immediately for sudden chest pain, stroke symptoms (facial droop, speech difficulty), severe trauma, acute bleeding, or unremitting respiratory distress.",
    heroImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "Dr. Marcus Vance",
        title: "Director of Emergency Medicine & Trauma",
        photo:
          "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
        experience: "20+ years · Board Certified Emergency Physician",
      },
      {
        name: "Dr. Ananya Rao",
        title: "Critical Care Resuscitation Specialist",
        photo:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
        experience: "12+ years · Acute Trauma & Sepsis Protocol Lead",
      },
    ],
    relatedServices: [
      {
        title: "Rapid Trauma Resuscitation",
        description: "Immediate multimodal intervention for poly-trauma and critical hypovolemia.",
      },
      {
        title: "Stroke Fast-Track Team",
        description: "Immediate CT angiography and stroke neurologist evaluation within 15 minutes.",
      },
      {
        title: "On-Site Urgent Care & Minor Injuries",
        description: "Streamlined care for sprains, lacerations, burns, and fracture casting.",
      },
    ],
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "Brain",
    shortDescription: "Specialized clinical diagnosis and treatment for neurological disorders, migraines, and epilepsy.",
    fullDescription:
      "Comprehensive neurological care featuring high-resolution neuroimaging, neuro-telemetry, and targeted management for acute and chronic nervous system conditions.",
    whyYouNeedIt:
      "Schedule a consultation for chronic unmanageable migraines, seizures, numbness or tingling in extremities, movement tremors, or memory and cognitive changes.",
    heroImage:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "Dr. Evelyn Ward",
        title: "Consultant Neurologist & Stroke Lead",
        photo:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
        experience: "16+ years · Neurovascular Medicine Fellow",
      },
      {
        name: "Dr. Sean Bennett",
        title: "Epilepsy & Neurophysiology Specialist",
        photo:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
        experience: "13+ years · Video EEG & Neuromodulation",
      },
    ],
    relatedServices: [
      {
        title: "Digital Video EEG & Sleep Studies",
        description: "Continuous ambulatory and in-clinic neurophysiologic recording and mapping.",
      },
      {
        title: "Headache & Migraine Infusion Suite",
        description: "Targeted outpatient biologic injections and acute migraine rescue therapy.",
      },
      {
        title: "Neuromuscular Ultrasound & EMG",
        description: "Precise nerve conduction velocity and needle electromyography diagnostics.",
      },
    ],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    icon: "Bone",
    shortDescription: "Joint reconstruction, sports medicine arthroscopy, and spine rehabilitation.",
    fullDescription:
      "Restoring mobility and freedom from pain through robot-assisted joint replacements, arthroscopic sports surgeries, and comprehensive rehabilitation.",
    whyYouNeedIt:
      "Visit Orthopedics if you have persistent joint stiffness, ACL/meniscus sports injuries, osteoarthritis, chronic back pain, or require joint replacement surgery.",
    heroImage:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "Dr. James Callahan",
        title: "Lead Orthopedic Surgeon & Joint Specialist",
        photo:
          "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
        experience: "19+ years · Robotic Knee & Hip Replacement",
      },
      {
        name: "Dr. Michelle Fong",
        title: "Sports Medicine & Arthroscopic Surgeon",
        photo:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
        experience: "12+ years · Consultant to Collegiate Athletics",
      },
    ],
    relatedServices: [
      {
        title: "Mako Robotic-Arm Joint Replacement",
        description: "Sub-millimeter accuracy for total and partial knee and hip arthroplasty.",
      },
      {
        title: "Minimally Invasive Spine Procedures",
        description: "Targeted decompression and disc repairs with rapid same-day mobilization.",
      },
      {
        title: "Sports Rehabilitation & Biomechanics",
        description: "Individualized return-to-sport physical therapy with motion-capture analysis.",
      },
    ],
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: "Ribbon",
    shortDescription: "Compassionate cancer care with genomic profiling, targeted immunotherapy, and radiation therapy.",
    fullDescription:
      "Patient-centered cancer treatment delivering personalized precision oncology, multidisciplinary tumor boards, and supportive integrative care.",
    whyYouNeedIt:
      "Schedule a consultation for suspicious biopsies, second opinions on tumor diagnosis, personalized systemic chemotherapy, targeted immunotherapy, or post-remission surveillance.",
    heroImage:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "Dr. Rajesh Patel",
        title: "Senior Medical Oncologist & Clinical Director",
        photo:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
        experience: "17+ years · Targeted Immunotherapy Research Lead",
      },
      {
        name: "Dr. Claire Dubois",
        title: "Radiation Oncology Consultant",
        photo:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
        experience: "14+ years · Stereotactic Body Radiotherapy Specialist",
      },
    ],
    relatedServices: [
      {
        title: "Comprehensive Outpatient Infusion Suite",
        description: "Private chemo and immunotherapy bays with dedicated clinical oncology nurses.",
      },
      {
        title: "Molecular Tumor Profiling",
        description: "Next-generation genetic sequencing to identify mutations and targeted drug candidates.",
      },
      {
        title: "Cancer Survivorship & Integrative Care",
        description: "Nutritional support, pain management, and psycho-oncology counseling.",
      },
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "Sparkles",
    shortDescription: "Comprehensive medical and surgical skincare, skin cancer screenings, and clinical aesthetics.",
    fullDescription:
      "Advanced dermatologic diagnostics for melanoma detection, chronic inflammatory skin conditions, and minimally invasive laser therapeutics.",
    whyYouNeedIt:
      "Consult dermatology for annual full-body mole checks, changes in skin lesions, severe eczema or psoriasis, adult acne, or hair and nail disorders.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "Dr. Emily Taylor",
        title: "Dermatologist & Mohs Micrographic Surgeon",
        photo:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
        experience: "13+ years · American Academy of Dermatology Fellow",
      },
      {
        name: "Dr. Anthony Ross",
        title: "Medical Dermatology & Laser Specialist",
        photo:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
        experience: "10+ years · Clinical Phototherapy & Biologics",
      },
    ],
    relatedServices: [
      {
        title: "Digital Dermoscopy & Mole Mapping",
        description: "High-magnification baseline imaging for early melanoma surveillance.",
      },
      {
        title: "Mohs Micrographic Skin Cancer Surgery",
        description: "Tissue-sparing precision tumor excisions with on-site pathology verification.",
      },
      {
        title: "Targeted Phototherapy & Biologics",
        description: "Narrowband UVB light chambers for recalcitrant psoriasis and vitiligo.",
      },
    ],
  },
  {
    slug: "gynecology",
    name: "Gynecology",
    icon: "Venus",
    shortDescription: "Obstetrics, gynecology, fertility consultation, and personalized preventive health through all life stages.",
    fullDescription:
      "Holistic, empathetic obstetric and gynecological care ranging from family planning and high-risk pregnancy management to menopause medicine.",
    whyYouNeedIt:
      "Book an appointment for annual pelvic exams, prenatal care, fertility counseling, menstrual cycle irregularities, or perimenopausal hormone guidance.",
    heroImage:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "Dr. Kimberly Foster",
        title: "Director of Obstetrics & Maternal-Fetal Health",
        photo:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
        experience: "18+ years · High-Risk Pregnancy Specialist",
      },
      {
        name: "Dr. Priya Nair",
        title: "Minimally Invasive Gynecologic Surgeon",
        photo:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
        experience: "12+ years · Endometriosis & Pelvic Health",
      },
    ],
    relatedServices: [
      {
        title: "Comprehensive Prenatal & Delivery Suites",
        description: "One-on-one obstetric care in peaceful, high-tech private birthing suites.",
      },
      {
        title: "Advanced 4D Pelvic & Fetal Ultrasound",
        description: "Detailed fetal anatomical scans and non-invasive prenatal genetic testing.",
      },
      {
        title: "Menopause & Bone Density Center",
        description: "Individualized hormone therapy balancing, DXA scans, and cardiovascular screening.",
      },
    ],
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  if (slug === "womens-health") {
    return departments.find((dept) => dept.slug === "gynecology");
  }
  return departments.find((dept) => dept.slug === slug);
}
