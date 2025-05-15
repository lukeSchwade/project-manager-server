//project Model
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const projectSchema = new Schema({




}, {timestamps: true});


const Project = mongoose.model('Project', projectSchema);


module.exports = Project;