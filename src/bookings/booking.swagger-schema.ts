export const BookingSwaggerSchema = {
  createBookingBody: {
    description: 'Body for creating booking',
    schema: {
      type: 'object',
      properties: {
        date: {
          type: 'string',
          format: 'date',
        },
        roomNo: {
          type: 'string',
        },
        passengerName: {
          type: 'string',
        },
        guest_phoneno: {
          type: 'string',
        },
        pickupAdress: {
          type: 'string',
        },
        destination: {
          type: 'string',
        },
        time: {
          type: 'string',
        },
        flightNumber: {
          type: 'string',
        },
        note: {
          type: 'string',
        },
        bookBy: {
          type: 'string',
        },
        fare: {
          type: 'number',
        },
        noOfVehicle: {
          type: 'string',
        },
        extraCharge: {
          type: 'number',
        },
        totalFare: {
          type: 'number',
        },
        driverName: {
          type: 'string',
        },
        driverNumber: {
          type: 'string',
        },
        sClass:{
          type: 'number',
        },
        vClass: {
          type: 'number',
        },

        others:{
       vehicleType:'string',
       quantity:'number'
    },

        bookingType: {
          type: 'string',
        },
        user:{
          type:'number'
        }
        
      },
    },
  },
};
