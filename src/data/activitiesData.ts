
  export interface Activities {
    id: number
    name: string,
    status: string,
    date: Date
  }
  
  const activities: Activities[] = [
    {
        id: 1,
        name: 'Hormone replacement therapy',
        status: 'complated',
        date: new Date('2023-03-25')
    },
    {
        id: 2,
        name: 'Ozone therapy',
        status: 'complated',
        date: new Date('2023-03-25')
    },
    {
        id: 3,
        name: 'NAD',
        status: 'complated',
        date: new Date('2023-03-25')
    },
    {
        id: 4,
        name: 'Hormone replacement terapy',
        status: 'booked',    
        date: new Date('2023-01-25')
    },
    {
        id: 5,
        name: 'Hormone replacement terapy',
        status: 'booked',   
        date: new Date('2023-01-25')
    },
    {
        id: 6,
        name: 'Hormone replacement terapy',
        status: 'book',
        date: new Date('2023-08-25')
    },
 ]
  
  
 export default activities;
  