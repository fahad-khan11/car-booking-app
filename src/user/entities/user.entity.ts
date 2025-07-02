import { BaseEntity } from 'base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

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

}

export enum Role {
  HOTEL= 'hotel',
  ADMIN = 'admin',
}
