import mongoose, { Schema, Document } from 'mongoose'

const GameStatsSchema: Schema = new Schema({
  course: { type: String, required: true },
  courseType: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  finalScore: { type: String, required: true },
  gameDate: { type: Date, required: true, default: Date.now },
  holes: [
    {
      score: { type: String, required: true },
      par: { type: String, required: true },
      hole: { type: String, required: true },
    },
  ],
})

export interface GameStatsInterface extends Document {
  course: string
  courseType: string
  userId: mongoose.Types.ObjectId
  finalScore: string
  gameDate: Date
  holes: [
    {
      score: string
      par: string
      hole: string
    }
  ]
}

export default mongoose.models.GameStats ||
  mongoose.model<GameStatsInterface>('GameStats', GameStatsSchema)
