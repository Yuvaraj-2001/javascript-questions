const users = [
    {
        user: "Jack",
        id:1
    },
    {
        user: "Yuvaraj",
        id:2
    },
    {
        user: "John",
        id:3
    }
];

const usersStatus = [
    {
        userStatus: "active",
        id:1
    },
    {
        userStatus: "inactive",
        id:2
    },
    {
        userStatus: "active",
        id:3
    }
];


const getUsers = function(){
    return new Promise(resolve => {
        resolve(users)
    })
}
const getStatus = function(){
    return new Promise(resolve => {
        resolve(usersStatus)
    })
}

// Method 01
getUsers.then((users)=>{
    getStatus.then(userStatus => {
        const mappedUser = users.map(user => (
            {...user, 
            status: userStatus.find(usersStatus => usersStatus.id === user.id
            ).userStatus})
        );

        console.log(mappedUser);
    })
});

// Method 02
Promise.all([getUsers(), getStatus()]).then(([users, userStatus])=>{
    const mappedUser = users.map(user => (
        {...user, 
        status: userStatus.find(usersStatus => usersStatus.id === user.id
        ).userStatus})
    );
    console.log(mappedUser);
})