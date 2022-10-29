import React, { useState } from 'react';

const Hooks = () => {

    //Question 3a.
    const personArr = [
        { id: 1, name: "Jun Hui", age: 26, country: "Singapore", },
        { id: 2, name: "Sean", age: 25, country: "Malaysia", },
        { id: 3, name: "Rafi", age: 30, country: "Indonesia", }
    ];

    const [arrOfObj, setarrOfObj] = useState(personArr);

    //Question 3b.
    const person = {
        id: 1,
        name: "Jun Hui",
        age: 26,
        dob: "26/04/1996",
        designation: "Developer"
    }
    const [user, setUser] = useState(person);


    const handleChange = () => {
        const arrUpdate = [...arrOfObj]
        arrUpdate[2].age = 32;
        arrUpdate[2].country = "Vietnam"
        setarrOfObj(arrUpdate);
        setUser({ ...user, dob: '1/1/1996', designation: 'Manager' });
    }

    console.log(arrOfObj)
    console.log(user)
    return (
        <React.Fragment>
            <p><button onClick={handleChange}>Update</button></p>
        </React.Fragment>
    )
}

export default Hooks;