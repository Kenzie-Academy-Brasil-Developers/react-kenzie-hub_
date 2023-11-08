import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UsersContext";
import { api } from "../services";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

    const { user } = useContext(UserContext)
    const [techList, setTechList] = useState([]);

    useEffect(() => {
        const getTechs = async () => {
            try {
                const { data } = await api.get("/techs")
                setTechList(data)
            } catch (error) {
                console.log(error)
            }
        }
        getTechs();
    }, [])

    const createTech = async (formData) => {
        try {
            const token = localStorage.get("@TOKEN");

            const { status } = formData;

            const newTech = {
                title: user.name,
                status,
            }
            const { data } = await api.post("/tech", newTech, {
                headers: {
                    Authorization: 'Bearer ${token}'
                }
            })
            setTechList([...techList, data]);
        }catch (error) {
            console.log(error)
        } 
    };



    return (
        <TechContext.Provider value={{ techList, createTech }}>
            {children}
        </TechContext.Provider>
    );
};