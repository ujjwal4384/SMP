import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from 'react-loadable';
import Loader from '../../components/Loader';

const MentorIndex = Loadable({
    loader: () => import('./MentorIndex'),
    loading: () => <Loader />
})

const ComingSoon = Loadable({
    loader: () => import('../../components/ComingSoon'),
    loading: () => <Loader />
})

const ShowMentors = Loadable({
    loader: () => import('./ShowMentors'),
    loading: () => <Loader />
})

const FilterMentors = Loadable({
    loader: () => import('./FilterMentors'),
    loading: () => <Loader />
})
// console.log(this.props.docs);

class Mentors extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Switch>
                    <Route exact path="/mentors" render={() => <MentorIndex docs={this.props.docs}/>} />
                    <Route exact path="/mentors/show" render={() => <ShowMentors />} /> {/*show all mentors or searched*/}
                    <Route exact path="/mentors/filter" render={() => <FilterMentors/>} /> {/* filter search */}
                    <Route exact path="/mentors/becomeMentor" render={() => <ComingSoon />} /> {/* procedure to become mentor*/}
                    <Redirect to="/mentors" /> 
                </Switch>
            </React.Fragment>
         );
    }
}
 
export default Mentors;