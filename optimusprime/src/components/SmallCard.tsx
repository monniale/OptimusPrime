export const SmallCard = (prop:any) => {
    return(
        <>
            <div className="SmallCard">
                <h3 className="SmallCardTitle">{prop.title}</h3>
                <h4 className="SmallCardSubTitle">{prop.subtitle}</h4>
                <p className="SmallCardComp">{prop.comp}</p>
            </div>      
        </>
    )
}
