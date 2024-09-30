import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string
}
