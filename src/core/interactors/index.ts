import fetchAllRoles from './roles/fetchAllRoles.interfactor';
import RolesRepository from '../repositories/rolesRepository';
import Roles from '../../dataSources/rethink/entities/rol';

const rolesRepository = new Roles();
export default {
    fetchAllRoles: fetchAllRoles(rolesRepository)
};