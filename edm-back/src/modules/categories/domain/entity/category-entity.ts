import Device from './../../../devices/domain/entity/device-entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 128})
  name: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(type => Device, category => Category)
  devices: Device[]
}

export default Category
