import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Aluno, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
Photo.associate(connection.models);
Aluno.associate(connection.models);
