import { DayPicker } from 'react-day-picker';

const DateTable = ({ selected, setSelected }) => {

    return (
        <section className="datetime mb-5 w-full dark:text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex align-middle flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 w-full lg:w-1/2 xl:w-2/5 dark:text-gray-900">
                    <DayPicker mode="single" selected={selected} onSelect={setSelected}></DayPicker>
                </div>
                <div className="lg:w-1/2 xl:w-3/5">
                    <div className="flex w-full items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src="https://source.unsplash.com/640x480/" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video w-full" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default DateTable;