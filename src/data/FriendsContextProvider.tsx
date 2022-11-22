import React,{useState} from "react";
import FriendsContext, {Friend} from "./friend-context";
import gambarSatu from "../gambar/a.png";
import gambarDua from "../gambar/s.jpg";
import gambarTiga from "../gambar/c.jpg";
import gambarEmpat from "../gambar/e.jpg";
import gambarLima from "../gambar/d.jpg";
import gambarEnam from "../gambar/k.jpg";
import thor from "../gambar/thor.jpg";

const FriendsContextProvider: React.FC<{children?:any}> = props =>{
    const [friends, setFriends] = useState<Friend[]>([
        {
            id:'f1',
            name:'Rianto',
            photo:thor,
            description:'Mardy bum',
            gender:'male',
            love:0
        },
        {
            id:'f2',
            name:'Jinx',
            photo:gambarSatu,
            description:'Shot me!',
            gender:'female',
            love:0
        },
        {
            id:'f3',
            name:'Aca',
            photo:gambarDua,
            description:'@faisafch',
            gender:'female',
            love:0
        },
        {
            id:'f4',
            name:'Gawr Gura',
            photo:gambarTiga,
            description:'A',
            gender:'female',
            love:0
        },
        {
            id:'f5',
            name:'Caitlyn',
            photo:gambarEmpat,
            description:'My duty is to protect the citizens of Piltover, and I will see that through',
            gender:'female',
            love:0
        },
        {
            id:'f6',
            name:'Kayess',
            photo:gambarEnam,
            description:'abis diputusin celiboy',
            gender:'female',
            love:0
        },
        {
            id:'f7',
            name:'Christine',
            photo:gambarLima,
            description:'I love you in every universe',
            gender:'female',
            love:0
        },
    ]);

    const addFriend = (name:string, photo: string,gender:string, description:string)=>{
        const newFriend: Friend={
            id: Math.random().toString(),
            name:name,
            photo:photo,
            gender:gender,
            description:description,
            love:0
        }

        setFriends((currFriends:Friend[]) => {
            return currFriends.concat(newFriend);
        })
    }
    const updateFriend = () =>{};
    const deleteFriend = (name:string, photo: string,gender:string, description:string , id:string) => {
        const findId = friends.findIndex(friend => friend.id === id);
        console.log("findId: ",findId);

        const newFriend: Friend={
            id: Math.random().toString(),
            name:name,
            photo:photo,
            gender:gender,
            description:description,
            love:0
        }

        setFriends((currFriends:Friend[]) => {
            currFriends.splice(findId,1);
            return currFriends.concat(newFriend);
        })
    };
    const storeFriend= (name:string, photo: string,gender:string, description:string , id:string) => {
        //delete friend with id
        const findId = friends.findIndex(friend => friend.id === id);
        console.log("findId: ",findId);

        const newFriend: Friend={
            id: Math.random().toString(),
            name:name,
            photo:photo,
            gender:gender,
            description:description,
            love:1
        }

        setFriends((currFriends:Friend[]) => {
            currFriends.splice(findId,1);
            return currFriends.concat(newFriend);
        })
    };

    return (
            <FriendsContext.Provider value={{ 
                friends,
                addFriend,
                updateFriend,
                deleteFriend,
                storeFriend,
            }}>
                {props.children}
            </FriendsContext.Provider>
    )
}

export default FriendsContextProvider;