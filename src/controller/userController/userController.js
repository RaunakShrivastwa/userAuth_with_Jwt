import User from '../../model/User/User.js';

class userController {
    // Add user
    addUser = async (req, res) => {
        try {
            const user = await User.create(req.body);
            return res.status(201).json(user);
        } catch (err) {
            return res.status(500).json({ Error: err.message })
        }
    }

    // getAll User
    getAllUSer = async (req, res) => {
        try {

            // redisClient.setEx(name1,'shubham')
            const users = await User.find({});
            return res.status(200).json({ user: users })
        } catch (err) {
            return res.json({ Error: err })
        }
    }


    // delete
    deleteUser = (req, res) => {

    }


    // get Singal User
    getSingleUser = async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                return res.status(501).json({ Error: 'User Doest Exist' });
            }

            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(501).json({Error:`There is Error ${error}`})
        }
    }


    // for the update user
    updateUser = (req, res) => {

    }
}

export default new userController();