import {create,update,getById,getAll,deleteById} from './dbHelper';

export const createItem = async (body) => {
    try {
        await create(body);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const updateItem = async (body) => {
    try {
        await update(body);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getItemById = async (id) => {
    try {
        return await getById(id);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getAllItem = async () => {
    try {
        return await getAll();
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteItemById = async (id) => {
    try {
        await deleteById(id);
    } catch (error) {
        return Promise.reject(error);
    }
}
