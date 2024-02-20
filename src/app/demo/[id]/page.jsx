'use client'
import { useState, useEffect } from "react";

export default function Page({ params }) {
    const id = params.id;
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const res = await fetch(`/api/${id}`);

                if (res.ok) {
                    const jsonData = await res.json();
                    setData(jsonData);
                    console.log(jsonData);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchDataFromApi();

        // Cleanup function to prevent memory leaks
        return () => {
            // Optionally, you can perform cleanup here if needed
        };
    }, []); // Empty dependency array to run only once on component mount

    return (
        <div>/demo/{id}
        <div>
            {JSON.stringify(data)}
        </div>
        
        </div>
    );
}
