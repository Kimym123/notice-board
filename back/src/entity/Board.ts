import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from './Entity';
import User from './User';
import { JoinColumn } from 'typeorm/browser';
import Post from './Post';

@Entity('Board')
export default class Board extends BaseEntity {
  @Index()
  @Column({ unique: true })
  name: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  imageUrn: string;

  @Column({ nullable: true })
  bannerUrn: string;

  @Column()
  username: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User;

  @OneToMany(() => Post, (post) => post.board)
  posts: Post[];
}
