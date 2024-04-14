import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,  Index, Unique } from 'typeorm'

import { User } from '../../user/entities/user.entity'

@Entity()
@Index( ['refreshToken'] )
@Unique( 'refreshToken', ['refreshToken'] ) 
export class RefreshSession {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, user => user.sessions)
  user: User

  @Column()
  refreshToken: string

  @Column()
  expiresIn: number
  
  @Column()
  createdAt: number
  
}