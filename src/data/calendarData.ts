interface activity {
  count: number,
  status: string
}
export interface Calendar {
  id: number
  name: string,
  activity: activity
}

const calendar: Calendar[] = [
    {
      id: 1,
      name: 'Jan',
      activity:  {
          count: 0,
          status: ''
        }
    },
    {
      id: 2,
      name: 'Feb',
      activity: {
          count: 0,
          status: ''
        }
    },
    {
      id: 3,
      name: 'Mar',
      activity:  {
          count: 0,
          status: ''
        }
    },
    {
      id: 4,
      name: 'Apr',
      activity: {
          count: 0,
          status: ''
        }
    },
    {
      id: 5,
      name: 'May',
      activity: {
          count: 0,
          status: ''
        }
    },
    {
      id: 6,
      name: 'Jun',
      activity:  {
          count: 0,
          status: ''
        }
    },
    {
      id: 7,
      name: 'Jul',
      activity: {
          count: 0,
          status: ''
        }
    },
     {
      id: 8,
      name: 'Aug',
      activity: {
          count: 0,
          status: ''
        }
    },
    {
      id: 9,
      name: 'Sep',
      activity: {
          count: 0,
          status: ''
        }
    },
    {
      id: 10,
      name: 'Oct',
      activity: {
          count: 0,
          status: ''
        }
    },
    {
      id: 11,
      name: 'Nov',
      activity: {
          count: 0,
          status: ''
        }
    },
    {
      id: 12,
      name: 'Dec',
      activity: {
          count: 0,
          status: ''
        }
    },
  ]


  export default calendar;

