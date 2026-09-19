import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWaitlist extends Document {
  name: string;
  phone: string;
  createdAt: Date;
}

const WaitlistSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Waitlist: Model<IWaitlist> =
  mongoose.models.Waitlist || mongoose.model<IWaitlist>('Waitlist', WaitlistSchema);
