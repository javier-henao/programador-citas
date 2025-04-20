export const GenderOptions = ["Masculino", "Femenino", "Otro"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Masculino" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Registro civil",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Registro civil",
  "Tarjeta de identidad",
  "Cédula de ciudadanía",
  "Pasaporte",
  "Cédula de extranjería",
  "Permiso especial de permanencia",
  "Documento de identificación extranjero",
];

export const Doctors = [
  {
    image: "/assets/images/teraOcup-Maria.png",
    name: "Maria Cristina Moya Nieto (Terapeuta Ocupacional)",
  },
  {
    image: "/assets/images/fono-Alfredo.png",
    name: "Alfredo Cardona Chavez (Fonoaudiólogo)",
  },
  {
    image: "/assets/images/psico-Lorena.png",
    name: "Lorena Monsalve Freyre (Psicologa especialista en Neuropsicología Infantil, Magister en Neuropsicología y Educación) ",
  },
  {
    image: "/assets/images/docen-Soraya.png",
    name: "Soraya Perlaza Correa (Docente)",
  },
  {
    image: "/assets/images/docen-Yurani.png",
    name: "Yurani Dorado Quenguan (Docente)",
  },
  {
    image: "/assets/images/neuro-Carlos.png",
    name: "Dr. Carlos Andrés Clavijo Prado (Neurología)",
  },
  {
    image: "/assets/images/coord-Ruth.png",
    name: "Ruth Ximena Satizabal García (Coordinadora General)",
  },
  {
    image: "/assets/images/directora-luz.png",
    name: "Luz Mary Garcia Rodas (Directora)",
  },
  // {
  //   image: "/assets/images/dr-sharma.png",
  //   name: "Hardik Sharma",
  // },
];

export const StatusIcon = {
  programada: "/assets/icons/check.svg",
  pendiente: "/assets/icons/pending.svg",
  cancelada: "/assets/icons/cancelled.svg",
};
