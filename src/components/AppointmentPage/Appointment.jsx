import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import DateTable from './HeaderPart/DateTable';
import AppointmentModal from './Modal/AppointmentModal';

const Appointment = () => {
    const [selected, setSelected] = useState();
    const [diseasesData, setdiseasesData] = useState({});

    const date = selected ? format(selected, 'PP') : "";


    const { isLoading, data:diseases=[] ,refetch} = useQuery({
        queryKey: ['diseases'],
        queryFn: () =>
          fetch(`http://localhost:5000/appointmentCategori?date=${date}`).then(res =>
            res.json()
          )
      })

    return (
        <div>
            <DateTable
                selected={selected}
                setSelected={setSelected}
            >
            </DateTable>

            <AvailableAppointment
                setdiseasesData={setdiseasesData}
                selected={selected}
                diseases={diseases}
                setSelected={setSelected}
            >
            </AvailableAppointment>


            <AppointmentModal
                selected={selected}
                refetch={refetch}
                diseasesData={diseasesData}
            ></AppointmentModal>
        </div>
    );
};

export default Appointment;