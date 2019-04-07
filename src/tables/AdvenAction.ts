import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import Actions from "./Actions";
import Adventure from "./Adventure";
import Hashing from './Hashing';

@Table
class AdvenAction extends Model<AdvenAction> {

  @ForeignKey(() => Adventure)
  @Column(DataType.STRING)
  title: string | undefined;

  @ForeignKey(() => Actions)
  @Column(DataType.STRING)
  adventure: string | undefined;

  @ForeignKey(() => Hashing)
  @Column(DataType.STRING)
  hashing: string | undefined;
}

export = AdvenAction;
