import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {
   constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepository.save(createBookingDto,);
  }

  async findAll(hotelId: number) {
   const bookings = await this.bookingRepository
  .createQueryBuilder('booking')
  .innerJoin('booking.user', 'hotel')
  .where('hotel.id= :hotelId', { hotelId })
  .orderBy(`
    CASE
      WHEN date >= CURRENT_DATE THEN 0
      ELSE 1
    END
  `)
  .addOrderBy('date', 'ASC')
  .getMany();
  return bookings;

  }

  findByHotelId(hotelId: number) {
    return this.bookingRepository.find({
      where: { user:{id:hotelId} },
      order: { date: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.bookingRepository.findOne({
      where: { id },
      order: { createdAt: 'DESC' },
    });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepository.update(id, updateBookingDto);
  }

  remove(id: number) {
    return this.bookingRepository.delete(id);
  }
}
