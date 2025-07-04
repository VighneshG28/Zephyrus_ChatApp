import profile_maki from '../assets/profile_maki.jpg';
import profile_enrique from '../assets/profile_enrique.png'

export const userDummyData = [
    {
        "_id": "680f50aaf10f3cd28382ecf2",
        "email": "test1@greatstack.dev",
        "fullName": "Maki Tomoda",
        "profilePic": profile_maki,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f510af10f3cd28382ed01",
        "email": "test3@greatstack.dev",
        "fullName": "Enrique Martinez",
        "profilePic": profile_enrique,
        "bio": "Hi Everyone, I am Using QuickChat",
    }
]

export const messagesDummyData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    }
]
