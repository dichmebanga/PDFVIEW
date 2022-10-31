import { Entity, Column, CreateDateColumn, ObjectIdColumn, ObjectID, Binary } from 'typeorm';
import "reflect-metadata";

@Entity('USER')
export class userEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string

    @Column()
    age: number

}