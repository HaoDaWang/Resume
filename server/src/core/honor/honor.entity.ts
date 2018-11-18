import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';

import {User} from '../user';

@Entity()
export class Honor {
  @PrimaryColumn()
  competitionName!: string;

  @Column()
  level!: number;

  @OneToOne(_type => User)
  @JoinColumn()
  user!: User;
}
