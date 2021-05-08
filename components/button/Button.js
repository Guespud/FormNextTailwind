import React from 'react'

const Button = ({title,img,type}) => {

    let small = "text-center m-2 bg-gray-100 w-52 h-8 rounded-xl text-black font-medium";

    let medium = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-12 border border-gray-400 rounded shadow"

    return (
        <div>
            <button className={type ? small : medium }><img src={img} />{title}</button>
        </div>
    )
}

export default Button