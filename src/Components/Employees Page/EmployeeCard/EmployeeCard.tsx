import React from 'react';
import { Avatar, Card, CardHeader, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import styles from './EmployeeCard.module.scss';

// Single employee card on employees page

const EmployeeCard = (employee: any) => {
  return (
    <div className={styles.EmployeeCard}>
      <Card className={styles.EmployeeInformation}>
        <CardHeader
          avatar={<Avatar />}
          title={`${employee.employee.firstName} ${employee.employee.lastName}`}
          subheader={employee.employee.department}
        />
      </Card>
      {/* Edit Button */}
      <Fab color="primary" onClick={employee.openEdit}>
        <EditIcon />
      </Fab>
    </div>
  );
};

export default EmployeeCard;
