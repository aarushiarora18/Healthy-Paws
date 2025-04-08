import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  dogId: {
    type: String,
    required: true,
  },
  name: String,
  email: String,
  phone: String,
  address: String,
  experience: String,
  reason: {
    type: String,
    required: true,
  },
});

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

export default Application;
