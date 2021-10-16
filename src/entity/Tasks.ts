import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Tasks")
export class Tasks{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}