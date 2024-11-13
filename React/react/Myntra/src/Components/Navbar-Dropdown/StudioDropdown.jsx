import {StudioNavBanner,Studio} from './../../images/images.jsx'

function StudioDropdown() {
    return (
        <div className="dropdownmenu StudioDropdown">
            <div className="">
                <div><img src={Studio}/></div>
                <div>Your daily inspiration for everything fashion</div>
                <div><img src={StudioNavBanner} width={500} /></div>
                <div><a href="#">EXPLORE STUDION &gt;</a></div>
            </div>
        </div>
    )
}

export default StudioDropdown