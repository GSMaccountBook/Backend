import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
  } from "typeorm";

@Entity()
export class MoneyData {
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
    