import { User } from '../models/index.js';
import { Request, Response } from 'express';


  export const getUsers = async (_req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const getSingleUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  };

  export const createUser = async (req: Request, res: Response) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const updateUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      ); 
  
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
  
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }; 

  export const deleteUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findOneAndDelete(
        { _id: req.params.userId }
      ); 
  
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
  
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }; 

  export const createFriend = async (req: Request, res: Response) =>{
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true });
 
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
 
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    } 
  };

  export const deleteFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });
  
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
  
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }; 

  