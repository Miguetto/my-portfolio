export const getProyects = async () => {

    const resp = await fetch('../../../public/proyects/proyects.json');
    
    const { data } = await resp.json();
    console.log(data);
    const proyects = data.map(proyect => ({
        url: proyect.url,
        title: proyect.title,
        description: proyect.description,
        language: proyect.language,
    }));

    return proyects;
}