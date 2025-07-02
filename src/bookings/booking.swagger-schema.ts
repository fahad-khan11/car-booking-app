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
        vehicleInfo: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['scLASS', 'vclass', 'others'],
            },
            quantity: {
              type: 'number',
            },
          },
        },
        bookingType: {
          type: 'string',
          enum: ['pickAnddrop', 'hourly'],
        },
        status: {
          type: 'string',
          enum: ['completed', 'rejected', 'in_progress'],
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
          type: 'number',
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
        
      },
    },
  },
};
