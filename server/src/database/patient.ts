import * as mongoose from 'mongoose';
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

export class Patient extends mongoose.Document {
  firstName?: string;
  lastName?: string;
  idNumber?: string;
  address?: string;
  maritalStatus?: string;
  ethnicity?: string;
  gender?: string;
  email?: string;
  phoneNumber?: string;
  nationality?: string;
  age?: string;
  occuptation?: string;
}

export const PatientSchema: mongoose.Schema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  idNumber: { type: String, required: false },
  address: { type: String, required: false },
  maritalStatus: { type: String, required: false },
  ethnicity: { type: String, required: false },
  gender: { type: String, required: false },
  email: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  nationality: { type: String, required: false},
  age: { type: String, required: false},
  occupation: { type: String, required: false},
});

PatientSchema.plugin(mongoose_fuzzy_searching, { fields: ['firstName', 'lastName', 'idNumber', 'email'] });

export const PatientModel = mongoose.model<Patient>('Patient', PatientSchema);
