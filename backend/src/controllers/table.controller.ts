import { Request, Response } from 'express';
import Table from '../models/table.model';

export const getTable = async (req: Request, res: Response) => {
    try {
        const table = await Table.find();
        res.status(200).json(table);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching table' });
    }
}

export const initTable = async (req: Request, res: Response) => {
    try {
        const count = await Table.countDocuments();
        if (count > 0) {
             return res.status(200).json({ message: 'Table already initialized' });
        }

        const cells = [];

        for (let row = 1; row <= 10; row++) {
            for (let col of 'ABCDEFGHIJ') {
                cells.push({
                    row,
                    col,
                    value: `Cell ${col}${row}`
                })
            }
        }
        await Table.insertMany(cells);

        res.status(201).json({ message: 'Table init done'})
    } catch (error) {
        console.error('Error initializing table:', error);
        res.status(500).json({ message: 'Error initializing table' });
    }
}

export const updateCell = async (req: Request, res: Response) => {
    try {
        const { row, col, value } = req.body;

        if (typeof row !== 'number' || typeof col !== 'string' || typeof value !== 'string') {
            return res.status(400).json({ message: 'Invalid request' });
        }

        await Table.findOneAndUpdate(
            { row, col },
            { value },
            { upsert: true, new: true}    
        );

        res.status(200).json({ success: true});
    } catch (err) {
        console.error("POST /table error :", err);
        res.status(500).json({ error: 'Server error' });
    }
}