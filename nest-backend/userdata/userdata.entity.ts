import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Userdata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  email: string;

}