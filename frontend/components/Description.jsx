import React from 'react';
import styles from '../styles/Description.module.css'; // Import your CSS module

function Description() {
    return (
        <div className={styles.descriptionContainer}>
            <h2 className={styles.sectionTitle}>Services Offered</h2>
            <p className={styles.descriptionText}>
                Our finance app for freelancers offers a range of features to help you manage your finances more effectively:
            </p>
            <ul className={styles.featureList}>
                <li>Track income and expenses</li>
                <li>Create and send professional invoices</li>
                <li>Manage clients and projects</li>
                <li>Automatically categorize transactions</li>
                <li>Generate insightful financial reports</li>
                <li>Stay organized with customizable dashboards</li>
            </ul>
            <p className={styles.descriptionText}>
                With our user-friendly interface and powerful tools, managing your finances as a freelancer has never been easier.
            </p>
        </div>
    );
}

export default Description;
