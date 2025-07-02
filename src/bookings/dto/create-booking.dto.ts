import { BookingType, BookingStatus, VehicleInfo } from '../entities/booking.entity';
import { IsOptional } from 'class-validator';

export class CreateBookingDto {
  
  @IsOptional()
  date: Date;

  @IsOptional()
  roomNo: string;

  @IsOptional()
  passengerName: string;
   
  @IsOptional()
  guest_phoneno: string;

  @IsOptional()
  pickupAdress: string;

  @IsOptional()
  destination: string;

  @IsOptional()
  time: string;

  @IsOptional()
  flightNumber: string;

   @IsOptional()
  vehicleInfo: VehicleInfo;

  @IsOptional()
  bookingType: BookingType;

  @IsOptional()
  status: BookingStatus;

  @IsOptional()
  note: string;

  @IsOptional()
  bookBy: string;

  @IsOptional()
  fare: number;

  @IsOptional()
  noOfVehicle: number;

  @IsOptional()
  extraCharge: number;

  @IsOptional()
  totalFare: number;

  @IsOptional()
  driverName: string;

  @IsOptional()
  driverNumber: string;
  

}
