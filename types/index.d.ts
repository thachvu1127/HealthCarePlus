declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
// [key: string] tells Next.js that we don't know what the exact property name will be
// using [] is similar to dynamic routing, where the key can be anything

declare type Gender = "Male" | "Female" | "Other";
declare type Status = "Pending" | "Scheduled" | "Cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

declare interface User extends CreateUserParams {
  $id: string; // $ is an appwrite feature to distinguish between built-in properties and custom properties
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

declare interface CreateAppointmentParams {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
}

declare interface UpdateAppointmentParams {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
}
