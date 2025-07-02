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
    return this.bookingRepository.save(createBookingDto);
  }

  findAll() {
    return this.bookingRepository.find({  order: { createdAt: 'DESC' },});

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
