'use client';

import { useEffect, useState } from "react"

export const PreciseAge = ({ birthDate }: { birthDate: Date }) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const [currentAge, setCurrentAge] = useState(age);
    
    useEffect(() => {
    }, []);

    return <div>
        {age}
    </div>
}