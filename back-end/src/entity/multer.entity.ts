import { Entity, Column, CreateDateColumn, ObjectIdColumn, ObjectID, Binary, ObjectType } from 'typeorm';

@Entity('MULTER')
export class MulterEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    originalname: string

    @Column()
    encoding: string

    @Column()
    mimetype: string

    @Column()
    filename: string

    @Column()
    metadata: number

    @Column()
    bucketName: string

    @Column()
    chunkSize: number

    @Column()
    size: number

    @Column()
    md5: string

    @Column()
    uploadDate: Date

    @Column()
    contentType: string
}