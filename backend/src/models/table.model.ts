import mongoose, { Document, Schema } from 'mongoose';

export interface ITableCell extends Document {
    row: number;
    col: string;
    value: string;
}

const Table: Schema = new Schema<ITableCell> ({
    row: { type: Number, required: true},
    col: { type: String, required: true },
    value: { type: String, required: true}
})

export default mongoose.model<ITableCell>('Table', Table);