import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre debe tener máximo 50 caracteres."),
  email: z.string().email("Dirección de correo electrónico no válida"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de celular no válido"
    ),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre debe tener máximo 50 caracteres."),
  email: z.string().email("Dirección de correo electrónico no válida"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de celular no válido"
    ),
  birthDate: z.coerce.date(),
  gender: z.enum(["Masculino", "Femenino", "Otro"]),
  address: z
    .string()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(500, "La dirección debe tener máximo 500 caracteres"),
  occupation: z
    .string()
    .min(2, "La ocupación debe tener al menos 2 caracteres")
    .max(500, "La ocupación debe tener máximo 500 caracteres"),
  emergencyContactName: z
    .string()
    .min(2, "El nombre del contacto debe tener al menos 2 caracteres")
    .max(50, "El nombre del contacto debe tener máximo 50 caracteres"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Número de celular no válido"
    ),
  primaryPhysician: z.string().min(2, "Seleccione al menos un profesional"),
  insuranceProvider: z
    .string()
    .min(2, "El nombre de EPS debe tener al menos 2 caracteres")
    .max(50, "El nombre de EPS debe tener máximo 50 caracteres"),
  insurancePolicyNumber: z
    .string()
    .min(2, "El número de póliza debe tener al menos 2 caracteres")
    .max(50, "El número de póliza debe tener máximo 50 caracteres"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message:
        "Debe dar su consentimiento para el tratamiento para poder continuar",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message:
        "Debe dar su consentimiento para la divulgación para poder continuar",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debes dar tu consentimiento a la privacidad para continuar",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Seleccione al menos un profesional"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "El motivo debe tener al menos 2 caracteres")
    .max(500, "El motivo debe tener máximo 500 caracteres"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Seleccione al menos un profesional"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Seleccione al menos un profesional"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "El motivo debe tener al menos 2 caracteres")
    .max(500, "El motivo debe tener máximo 500 caracteres"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
