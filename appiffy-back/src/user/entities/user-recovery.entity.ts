import { RefreshSession } from '../../auth/entities/refreshSession.entity'
import { Entity, Column, PrimaryGeneratedColumn, Index, Unique, OneToMany } from 'typeorm'

@Entity('user-recovery')
@Index( ['username'] )
@Unique( 'username', ['username'] ) 
export class UserRecovery {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  email: string;

  @Column()
  password: string

}