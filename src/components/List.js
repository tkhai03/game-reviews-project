import React from 'react'
import axios from 'axios'


class List extends React.Component {
    constructor() {
        super()

        this.state = {
            allData: []
        }
    }
    componentDidMount() {
        axios.get('/api/reviews').then(response => this.setState({
            allData: response.data
        }))
    }
    render() {
        console.log(this.state.allData)
        const data = this.state.allData.map((e) => {
            return (
                <div>
                <div className= "title">Title: {e.title}</div>
                <div><img className= "images" src= {e.image} alt=''/> </div>
                <div className= "reviewer">Reviewer: {e.reviewer}</div>
                <div className= 'Description'>Description: {e.desc}</div>
                </div>
                )
        })
        return (
            <div>
                {data}
            </div>
        )
    }
}

export default List