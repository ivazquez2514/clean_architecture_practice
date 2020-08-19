import { Rol } from "../entities";

export default interface RolesRepository {
    fetchAll(): Promise<Rol[]>;
    fetchById(): Promise<Rol>;
}