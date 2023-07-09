import DerinKomponent from "./DerinKomponent"

const AltKomponent = ({bilgi})=> {


    return(
        <>
            <p>Ben AltKomponent mesajıyım</p>
            <p>Üst komponentten gelen bilgi : {bilgi} </p>

            <DerinKomponent bilgi={bilgi} />
        </>
    )
}

export default AltKomponent