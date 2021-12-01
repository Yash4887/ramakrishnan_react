export const app = "hello from app";

export const app1 = "hello from app1";

const loadData = () => {
    return `${app} ${app1}`
}


// per file only 1 export default is allowed
export default loadData;

