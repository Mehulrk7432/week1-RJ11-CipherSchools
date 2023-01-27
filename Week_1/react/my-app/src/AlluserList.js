import React from "react";

const AlluserList = () => {
    let allusers = [{
        name: "John",
        email: "johan@gmail.com",
        phoneNumber: "9876543210",
    },
    {
        name: "shiva",
        email: "Shiva@gmail.com",
        phoneNumber: "9876543210",
    },
    {
        name: "manish",
        email: "manish@gmail.com",
        phoneNumber: "9876543210",
    },
];
return (
    <div>
        <Userdetails user={allusers[0]}/>
        <Userdetails user={allusers[1]}/>
        <Userdetails user={allusers[2]}/>
        <Userdetails />
    </div>
)
};

export default AlluserList;