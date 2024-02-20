import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ClientItem from './ClientItem'

function ClientList() {
    const [clients, setClients] = useState([])
    const [isClientAdded, setIsClientAdded] = useState(false)

    const user = useSelector(state => state.user.value)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const updatedClients = await fetch(`http://localhost:3000/clients/${user.token}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({})
                });
                setClients(updatedClients)
            } catch (error) {
                console.error('Error fetching updated client data:', error)
            }
        };
        if (isClientAdded) {
            fetchData();
            setIsClientAdded(false)
        }
    }, [isClientAdded]);

    const handleAddClient = async (clientName, clientContract, clientProject) => {
        try {
            await fetch(`http://localhost:3000/clients${user.token}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ clientName, clientContract, clientProject })
            });
            setIsClientAdded(true);
        } catch (error) {
            console.error('Error adding client:', error)
        }
    }

    const clientsData = clients.map((data, i) => {
        <ClientItem key={i} {...data} />
    })

    return (
        <div>
            <h2>Clients</h2>
            <ul>
                {clientsData}
            </ul>
            <button onClick={handleAddClient}>Add Client</button>
        </div>
    )
}

export default ClientList