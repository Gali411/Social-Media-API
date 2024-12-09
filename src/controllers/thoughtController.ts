import { Thought } from '../models/index.js';
import { Request, Response } from 'express';


  export const getThoughts = async (_req: Request, res: Response) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const getSingleThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought found' });
      }

      res.json(thought);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  };

  export const createThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const updateThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      ); 
  
      if (!thought) {
        return res.status(404).json({ message: 'No thought found' });
      }
  
      return res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }; 

  export const deleteThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndDelete(
        { _id: req.params.thoughtId }
      ); 
  
      if (!thought) {
        return res.status(404).json({ message: 'No thought found' });
      }
  
      return res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }; 

  export const AddReact = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true });
 
      if (!thought) {
        return res.status(404).json({ message: 'No thought found' });
      }
 
      return res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    } 
  };

  export const deleteReact = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },  { $pull: { reactions: { reactionId: req.params.ReactID } } }, { runValidators: true, new: true });
 
      if (!thought) {
        return res.status(404).json({ message: 'No thought found' });
      }
 
      return res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    } 
  };