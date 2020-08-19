import RolesRepository from "../../../core/repositories/rolesRepository";
import { Rol } from '../../../core/entities/index';
import { Connection, r as rethinkDb } from "rethinkdb-ts";
import RethinkConnection from "../rethinkConnection";

export default class Roles implements RolesRepository {

    async fetchAll(): Promise<Rol[]> {
        const rethinkConnection: Connection = await new RethinkConnection().connection();
        return rethinkDb.table('roles').run(rethinkConnection)
            .then((data: Rol[]) => {
                rethinkConnection.close();
                return Promise.resolve(data);
            });
    }

    fetchById(): Promise<Rol> {
        throw new Error("Method not implemented.");
    }
    
}