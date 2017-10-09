import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: String,
  displayName: String,
  polls: Array,
});

export default mongoose.model('User', userSchema);
