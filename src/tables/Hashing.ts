import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import Adventure from './Adventure';

@Table
class Hashing extends Model<Hashing> {
    @ForeignKey(() => Adventure)
    @Column(DataType.STRING)
    title: string | undefined;

    @AllowNull(false)
    @Column(DataType.STRING)
    hash: string | undefined;

    @AllowNull(false)
    @Column(DataType.STRING)
    hashEN: string | undefined;
}

export = Hashing;
