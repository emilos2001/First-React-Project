export function SourceData(props) {
    return(
        <>
            {props.id && <p className='id'>Id: {props.id}</p>}
            {props.title && <p className='title'>Title: {props.title}</p>}
        </>
    )
}