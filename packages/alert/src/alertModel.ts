import { model, Schema, Types } from "mongoose";
import { writeConcern } from "@crypto-alert/mongo";

type Alert = {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  price: number;
  symbol: string;
  active: boolean;
  reachedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  removedAt: Date;
};

export type AlertDocument = Alert & Document;

const AlertSchema = new Schema<AlertDocument>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    price: { type: Number, required: true },
    symbol: { type: String, required: true },
    active: { type: Boolean, default: true },
    reachedAt: { type: Date, default: null },
    removedAt: { type: Date, default: null },
  },
  {
    collection: "Alert",
    writeConcern,
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const AlertModel = model<AlertDocument>("Alert", AlertSchema);
