import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export class Testorm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  age: number;
}
