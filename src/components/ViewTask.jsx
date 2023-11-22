export default function ViewTask({ data }) {
    return (
        <>
            <p>{data.title}</p>
            <p>{data.description}</p>
        </>
    )
}