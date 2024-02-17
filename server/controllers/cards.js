import Card from '../Models/Card.js';
import Task from '../Models/Task.js';

export const getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const createCard = async (req, res) => {
    try {
        const { title, description ,xp} = req.body;
        const newCard = new Card({ title, description,xp});
        await newCard.save();
        res.status(200).json({ message: 'Card created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ cardId: req.params.id });
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
