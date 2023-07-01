import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

const AvailableAppointment = ({ selected, setdiseasesData}) => {

    const date = selected ? format(selected, 'PP') : "";


    const { isLoading, data:diseases=[]} = useQuery({
        queryKey: ['diseases'],
        queryFn: () =>
          fetch(`http://localhost:5000/appointmentCategori?date=${date}`).then(res =>
            res.json()
          )
      })

    return (
        <div>
            <h1 className='text-center font-bold text-primary'>Available Appointments on {selected ? format(selected, 'PP') : ""}</h1>

            <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    diseases.map(disease =>
                        <div className="card w-full bg-base-100 shadow-lg my-5">
                            <div className="card-body">
                                <h2 className="text-center font-bold text-lg">{disease.name}</h2>
                                <p className='text-center'>{disease.slots[0]}</p>
                                <p className='text-center'>{disease.slots.length > 1 ? `${disease.slots.length} spaces` : `${disease.slots.length} space`}  available</p>
                                <div className="card-actions justify-center">
                                    <label onClick={() => setdiseasesData(disease)} htmlFor="my-modal-3" className="btn btn-primary">Book Appointment</label>
                                </div>
                            </div>
                        </div>)
                }
                
            </section>
  
        </div>
    );
};

export default AvailableAppointment;