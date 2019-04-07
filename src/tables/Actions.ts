import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import Adventure from './Adventure';

@Table
class Action extends Model<Action> {
    @AllowNull(false)
    @ForeignKey(() => Adventure)
    @Column(DataType.STRING)
    adventure: string | undefined;

    @AllowNull(false)
    @Column(DataType.STRING)
    action: string | undefined;

    @AllowNull(false)
    @Column(DataType.STRING)
    nextAction: string | undefined;
}

export = Action;
