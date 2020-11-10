import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class SteamGames {

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    length: 10,
    type: 'varchar',
  })
  public appid!: string;

  @Column({
    type: 'text',
  })
  public name!: string;

  @CreateDateColumn()
  public createdDate!: Date;

  @UpdateDateColumn()
  public updatedDate!: Date;
}
