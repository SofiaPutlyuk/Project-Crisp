
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdSearch } from "react-icons/io";
export const HeaderCrisp = ({logo}) => {
    return (
        <header className="header-crisp">
            <div className="hamburger-container">
                <div className="dash"></div>
                <div className="dash"></div>
                <div className="dash"></div>
            </div>
            <IoMdSearch style={{color:'white', fontSize:'24px'}}/>
           <LiaShoppingBagSolid style={{ color: 'white', fontSize: '24px' }}/>
            </header>

    )
}