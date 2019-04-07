import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import Actions from './Actions';
import Hashing from './Hashing';

@Table
class Adventure extends Model<Adventure> {
    @ForeignKey(() => Actions)
    @Column(DataType.STRING)
    numberAction: string | undefined;

    @AllowNull(false)
    @ForeignKey(() => Hashing)
    @Column(DataType.STRING)
    title: string | undefined;

    @Column(DataType.STRING)
    description: string | undefined;
}

export = Adventure;
