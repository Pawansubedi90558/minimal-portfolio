import React from "react";
import Title from "./Title";

function Contact(){
    const validateForm = (e) => {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ ;
        if(!emailPattern.test(email)){
            alert("Please enter a valid email address");
            return false;
        }
        // Check if name or message fields are empty or contain only whitespace
        if(name.trim() === "" || message.trim() === ""){
            alert("Please fill in all fields");
            return false;
        }
        e.target.submit();
        return true;
    }

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/paygjoda"
                      method="POST"
                      onSubmit={validateForm}
                      className="flex flex-col w-full md:w-7/12"
                >  
                <Title>Contact</Title>
                    <input type="text"
                           name="name"
                           placeholder="Name"
                           required
                           className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input type="text"
                           name="email"
                           placeholder="Email"
                           required
                           className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea name="message"
                              placeholder="Message"
                              rows="10"
                              required
                              className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                   />
                   <button type="submit"
                            // className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
                            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white dark:text-white"
                            >Contact Me</button>

                </form>
            </div>
        </div>
    )
}
export default Contact;