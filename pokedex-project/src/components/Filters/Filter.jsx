import React,{ useEffect, useState } from 'react';

export default function Filter() {
    const [types, setTypes] = useState([]);

    const fetchTypes = async () => {
        const { results } = await fetch('https://pokeapi.co/api/v2/type').then((res) => res.json())
        setTypes(results);
    }


    useEffect(() => {
        fetchTypes()
    },[])

    return (
        <>
            {
                types && React.Children.toArray(types.map((type) => (
                    <button type='button'className={`${type.name}`}>{ type.name }</button>
                )))
            }
        </>
    )
};
