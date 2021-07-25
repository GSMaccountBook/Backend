import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Userdata {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  email: string;

}