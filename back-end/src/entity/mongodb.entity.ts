import { Entity, Column, CreateDateColumn, ObjectIdColumn, ObjectID, Binary } from 'typeorm';
import "reflect-metadata";

@Entity('PDF')
export class Pdf {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    pdf: Buffer;
}