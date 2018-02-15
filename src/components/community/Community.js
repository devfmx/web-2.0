import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contactbar/ContactBar';
import Header from '../othersheader/OtherHead';
import CCard from './community-card/CommunityCard';
import data from './comunidad-data';


class Community extends Component {




    render() {
         let  people = data();
         let cards = people.map((value) =>
             <div className="col-md-10 col-lg-10 mt-5">
                 <CCard fullname={value.name} job={value.job}
                        text={value.text} />
             </div>
         )

        return (
            <div>
                <Contact/>
                <Navbar/>
                <Header title={"COMUNIDAD"}/>
                <div className="container-fluid">
                    <div className="row justify-content-center mt-5 pb-5">
                        {cards}
                    </div>
                </div>

            </div>
        );
    }
}



export default Community;
