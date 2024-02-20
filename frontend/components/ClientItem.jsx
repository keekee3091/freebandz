import React from "react"
import styles from '../styles/Clients.module.css'


function ClientItem({ client }) {
    return (
        <div className={styles.client}>
            <div className={styles.clientHeader}>
                <h3 className={styles.clientText}>{client.clientName}</h3>
            </div>
            <div>
                <div className={styles.clientDesc}>
                    <h4 className={styles.clientDescText}>{client.clientContract}</h4>
                </div>
                <div className={styles.clientProject}>
                    {client.clientProject}
                </div>
            </div>

        </div>
    )
}

export default ClientItem