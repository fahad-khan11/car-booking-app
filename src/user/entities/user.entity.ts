import { BaseEntity } from 'base.entity';
import { Booking } from 'src/bookings/entities/booking.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('Hotels')
export class User extends BaseEntity {
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column({nullable:true})
  role: Role;

@OneToMany(() => Booking, (booking) => booking.user, { nullable: true })
bookings: Booking[];


  

}

export enum Role {
  HOTEL= 'hotel',
  ADMIN = 'admin',
}
