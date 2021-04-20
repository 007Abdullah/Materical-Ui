import React from 'react'
import EmployeesForm from './EmployeesForm';
import Pageheader from './../../components/Pageheader';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';

export default function Employees() {
    return (
        <React.Fragment>
            <Pageheader title="Page Header" subtitle="Page description" icon={<PeopleAltTwoToneIcon fontSize="large" />} />
            <EmployeesForm />
        </React.Fragment>
    )
}
