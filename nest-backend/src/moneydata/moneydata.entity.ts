import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
  } from "typeorm";

@Entity()
export class Moneydata {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    userid:string

    @Column()
    money?:number

    @Column()
    spend?:number

    @Column()
    income?:number

}
    