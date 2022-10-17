import styles from './ContactsInfo.module.scss';
import React from 'react';
import { Box } from '@mui/material';

const ContactsInfo = ({ info, address, phone, email, align }) => {
  return (
    <Box className={styles.contactsInfo}>
      <ul>
        {address && (
          <li
            style={{
              justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
            }}>
            <i className={styles.icon}>
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
                  stroke="#F6296F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9499 15.0374L9.23725 19.3986C8.90911 19.7837 8.46426 20 8.00044 20C7.53661 20 7.09176 19.7837 6.76363 19.3986L3.05013 15.0374C2.0712 13.8873 1.40455 12.4221 1.13448 10.827C0.864413 9.23196 1.00306 7.57861 1.53288 6.07608C2.0627 4.57356 2.95991 3.28933 4.11105 2.38579C5.26218 1.48226 6.61555 1 8 1C9.38445 1 10.7378 1.48226 11.889 2.38579C13.0401 3.28933 13.9373 4.57356 14.4671 6.07608C14.9969 7.57861 15.1356 9.23196 14.8655 10.827C14.5955 12.4221 13.9288 13.8873 12.9499 15.0374V15.0374Z"
                  stroke="#F6296F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>

            <a
              target="_blank"
              rel="noreferrer"
              href={info && info.attributes?.addressLink}
              className={styles.link}>
              {info && info.attributes?.address}
            </a>
          </li>
        )}
        {phone && (
          <li
            style={{
              justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
            }}>
            <i className={styles.icon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_106_411)">
                  <path
                    d="M0.75 17.25L2.2625 13.7667C1.10536 12.1241 0.587445 10.1156 0.805958 8.1183C1.02447 6.12095 1.96439 4.27199 3.44932 2.91843C4.93424 1.56486 6.8621 0.799728 8.8711 0.766624C10.8801 0.733519 12.8321 1.43472 14.3608 2.73862C15.8896 4.04253 16.8899 5.85951 17.1741 7.84858C17.4583 9.83765 17.0068 11.8621 15.9044 13.5419C14.802 15.2218 13.1245 16.4416 11.1866 16.9724C9.24873 17.5032 7.18374 17.3086 5.37917 16.425L0.75 17.25"
                    stroke="#61BB5F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.25 7.16663C6.25 7.28818 6.29829 7.40476 6.38424 7.49072C6.4702 7.57667 6.58678 7.62496 6.70833 7.62496C6.82989 7.62496 6.94647 7.57667 7.03242 7.49072C7.11838 7.40476 7.16667 7.28818 7.16667 7.16663V6.24996C7.16667 6.1284 7.11838 6.01182 7.03242 5.92587C6.94647 5.83991 6.82989 5.79163 6.70833 5.79163C6.58678 5.79163 6.4702 5.83991 6.38424 5.92587C6.29829 6.01182 6.25 6.1284 6.25 6.24996V7.16663ZM6.25 7.16663C6.25 8.3822 6.73289 9.54799 7.59243 10.4075C8.45197 11.2671 9.61776 11.75 10.8333 11.75H11.75C11.8716 11.75 11.9881 11.7017 12.0741 11.6157C12.16 11.5298 12.2083 11.4132 12.2083 11.2916C12.2083 11.1701 12.16 11.0535 12.0741 10.9675C11.9881 10.8816 11.8716 10.8333 11.75 10.8333H10.8333C10.7118 10.8333 10.5952 10.8816 10.5092 10.9675C10.4233 11.0535 10.375 11.1701 10.375 11.2916C10.375 11.4132 10.4233 11.5298 10.5092 11.6157C10.5952 11.7017 10.7118 11.75 10.8333 11.75"
                    stroke="#61BB5F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_106_411">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <a
              href={`tel:${info && info.attributes?.phoneLInk}`}
              className={styles.link}
              style={{ whiteSpace: 'nowrap' }}>
              {info && info.attributes?.phone}
            </a>
          </li>
        )}
        {email && (
          <li
            style={{
              justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
            }}>
            <i className={styles.icon}>
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_479_866)">
                  <path
                    d="M15.4167 0.583496H2.58333C1.57081 0.583496 0.75 1.40431 0.75 2.41683V11.5835C0.75 12.596 1.57081 13.4168 2.58333 13.4168H15.4167C16.4292 13.4168 17.25 12.596 17.25 11.5835V2.41683C17.25 1.40431 16.4292 0.583496 15.4167 0.583496Z"
                    stroke="#0058AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.75 2.4165L9 7.9165L17.25 2.4165"
                    stroke="#0058AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_479_866">
                    <rect width="18" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <a
              href={`mailto:${info && info.attributes?.email}`}
              className={styles.link}
              style={{ whiteSpace: 'nowrap' }}>
              {info && info.attributes?.email}
            </a>
          </li>
        )}
      </ul>
    </Box>
  );
};

export default ContactsInfo;
