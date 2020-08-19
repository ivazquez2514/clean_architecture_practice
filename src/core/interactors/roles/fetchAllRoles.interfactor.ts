import RolesRepository from "../../repositories/rolesRepository";

const fetchAll = (rolesRepository: RolesRepository) => async () => {
    const roles = await rolesRepository.fetchAll();

    return roles;
}

export default fetchAll;