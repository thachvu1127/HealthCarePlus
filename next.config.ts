import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    API_KEY: process.env.API_KEY,
    DATABASE_ID: process.env.DATABASE_ID,
    PATIENT_TABLE_ID: process.env.PATIENT_TABLE_ID,
    DOCTOR_TABLE_ID: process.env.DOCTOR_TABLE_ID,
    APPOINTMENT_TABLE_ID: process.env.APPOINTMENT_TABLE_ID,
  },
};

export default nextConfig;
