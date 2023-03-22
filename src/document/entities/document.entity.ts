import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'documentos' })
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  titleDocument: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'bool',
    default: true,
  })
  isActive: boolean;

  @Column({
    type: 'text',
    nullable: true,
  })
  image: string;

  // TODO relaciones con subcategorias
}
