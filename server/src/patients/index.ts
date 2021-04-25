import * as express from 'express';
import { PatientModel } from '../database/patient';

const PatientsRouter = express.Router();

PatientsRouter.get('/ping', (req, res) => {
  res.json({ success: true, message: 'pong' });
});

PatientsRouter.get('/', async (req, res) => {
  // Try find by ID Number
  if (req.query.id_number) {
    const patients = await PatientModel.find({ idNumber: req.query.id_number as string });
    return res.json({ success: true, data: patients });
  }

  // Try fuzzy search
  if (req.query.search) {
    // TODO: Typed fuzzySearch from plugin?
    const patients = await (PatientModel as any).fuzzySearch(req.query.search as string);
    return res.json({ success: true, data: patients });
  }

  // Otherwise, return all
  const patients = await PatientModel.find();
  res.json({ success: true, data: patients });
});

PatientsRouter.post('/', async (req, res) => {
  // TODO: Additional validation?

  try {
    const newPatient = await PatientModel.create(req.body);
    return res.json({ success: true, data: newPatient });
  } catch (err) {
    console.log('Failed to create patient: ', err);
    return res.json({ success: false, message: 'Failed to create patient' }).status(500);
  }
});

export { PatientsRouter };
