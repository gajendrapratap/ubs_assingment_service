import model from './model';

export const create = async (itemObj) => {
    try {
        const obj = new model(itemObj);
        await obj.save();
    } catch (error) {
        return Promise.reject(err);
    }
}

export const update = async (itemObj) => {
    try {
        if (itemObj.name && itemObj.attribute) {
            await model.updateOne({ id: itemObj.id },
                {
                    $set: {
                        name: itemObj.name
                    },
                    $push: { attributes: itemObj.attribute }
                })
        } else if (itemObj.name) {
            await model.updateOne({ id: itemObj.id },
                {
                    $set: {
                        name: itemObj.name
                    }
                })
        } else if(itemObj.attribute){
            await model.updateOne({ id: itemObj.id },
                {
                    $push: { attributes: itemObj.attribute }
                })
        }

    } catch (error) {
        return Promise.reject(err);
    }
}

export const getById = async (id) => {
    try {
        return await model.findOne({ id });
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getAll = async () => {
    try {
        return await model.find({});
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteById = async (id) => {
    try {
        return await model.deleteOne({ id });
    } catch (error) {
        return Promise.reject(error);
    }
}
