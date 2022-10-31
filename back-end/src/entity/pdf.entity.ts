import { Entity, Column, CreateDateColumn, ObjectIdColumn, ObjectID, Binary, ObjectType } from 'typeorm';

@Entity('FILE')
export class PdfEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    url: { type: string, unique:true };

    @Column()
    pdf: Buffer

}