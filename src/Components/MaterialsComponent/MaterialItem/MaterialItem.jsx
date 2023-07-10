export const MaterialItem = ({ item, deleteMaterial, updateMaterial }) => {
    return (
        <div>
            <p>
                <b> Title: {item.title}</b>
            </p>
            <p>
                <i>Link: {item.link}</i>
            </p>
            <button
                type='button'
                onClick={() => deleteMaterial(item.id)}
            >
                Delete material
            </button>
            <button
                type='button'
                onClick={() => updateMaterial({
                    id: item.id, title: new Date(),
                })}
            >
                edit
            </button>
        </div>
    );
};
