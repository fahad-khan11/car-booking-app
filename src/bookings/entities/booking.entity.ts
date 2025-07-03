import { BaseEntity } from '../../../base.entity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';


@Entity('bookings')
export class Booking extends BaseEntity {
  @Column({nullable: true})
  date: Date;

  @Column({ nullable: true })
  roomNo: string;

  @Column({nullable: true})
  passengerName: string;

  @Column({nullable: true})
  guest_phoneno: string;

  @Column({nullable: true})
  pickupAdress: string;

  @Column({nullable: true})
  destination: string;

  @Column({nullable: true})
  time: string;

  @Column({ nullable: true })
  flightNumber: string;

  @Column({nullable: true})
  sClass: number;

  @Column({nullable: true})
  vClass: number;
  @Column({ type: 'jsonb',nullable: true })
    others:{
      vehicleType:String
      quantity:number
    };

  @Column({nullable: true})
  status: BookingStatus;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  bookBy: string;

  @Column({ nullable: true })
  fare: number;

  @Column({ nullable:true })
  noOfVehicle: string;

  @Column({ nullable:true })
  extraCharge: number;

  @Column({ nullable:true})
  totalFare: number;

  @Column({ nullable: true })
  driverName: string;

  @Column({ nullable: true })
  driverNumber: string;

  @Column({ nullable: true })
  bookingType: string;


  @ManyToOne(() => User,(user)=>user.bookings, { nullable: true })
  @JoinColumn()
  user: User;
}

export enum BookingType {
  PICKUP_DROP = 'pickAnddrop',
  HOURLY = 'hourly'
}

export enum VehicleType {
  SCLASS = 'sCLASS',
  VCLASS = 'vClass',
  OTHER = 'others',
 
}

export interface VehicleInfo {
  type: VehicleType;
  quantity: number;
}

export enum BookingStatus {
  COMPLETED = 'completed',
  REJECTED = 'rejected',
  IN_PROGRESS = 'in_progress'
}
