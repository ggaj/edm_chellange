import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

import Category from './../../../categories/domain/entity/category-entity';

@Entity('devices')
class Device {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 16})
  color: string

  @Column()
  partNumber: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => Category, devices => Device)
  @JoinColumn()
  category: Category
}

export default Device
