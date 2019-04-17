const mongoose = require('mongoose');

let hospitalSchema = new mongoose.Schema({
  hid: {
    type: Number,
    required: "Must provide a unique id for each hospital",
    unique: true
  },
  name: {
    type: String,
    required: "Must provide a valid name for hospital"
  },
  rac: {
    type: String,
    required: true
  },
  traumaLevel: {
    type: String,
    required: true
  },
  services: {
    type: [String],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  phoneDirectory: [
    {
      connection: String,
      number: String
    }
  ],
  email: {
    type: String
  },
  notes: {
    type: String
  }
});

// Custom validation for email
hospitalSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Hospital', hospitalSchema);
