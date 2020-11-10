import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import { entity } from './entity';

dotenv.config();
const configTypeOrm: ConnectionOptions = {
  charset: 'utf8mb4',
  database: process.env.DB_TABLE || 'mydatabase',
  entities: entity,
  host: process.env.DB_HOST || 'localhost',
  logging: true,
  password: process.env.DB_PASSWORD || 'admin',
  port: 3306,
	synchronize: true,
  type: 'mysql',
  username: process.env.DB_USER || 'root',
};

export const getConfig = () => configTypeOrm;
