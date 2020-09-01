import React from 'react'
import axios from 'axios'
import AddGame from './AddGame'



class List extends React.Component {
    constructor() {
        super()

        this.state = {
            allData: []
        }
        this.handleAddReview=this.handleAddReview.bind(this)
        this.handleDeleteReview=this.handleDeleteReview.bind(this)
    }
    componentDidMount() {
        axios.get('/api/reviews').then(response => this.setState({
            allData: response.data
        }))
    }
    handleAddReview(newReview){
        console.log('hit')
        axios.post('/api/reviews', newReview).then(response => this.setState({
            allData: response.data
        }))
    }

    handleDeleteReview(id){
        axios.delete(`/api/reviews/${id}`).then(response => {
            this.setState({
                allData: response.data
        })

        })
    }


    render() {
        console.log(this.state.allData)
        const data = this.state.allData.map((e) => {
            return (
                <div>
                <div className= "title">Title: {e.title}</div>
                <div><img className= "images" src= {e.image} alt=''/> </div>
                <div className= "reviewer">Reviewer: {e.reviewer}</div>
                <div className= 'description'>Description: {e.desc}</div>
                <button onClick={() => this.handleDeleteReview(e.id)}>Delete</button>
                </div>
                )
        })
        return (
            <div>
                <AddGame handleAddReview= {this.handleAddReview}/>
                {data}
            </div>
        )
    }
}

export default List