import React, { Component } from 'react'
export default class AddGame extends Component {
    constructor() {
        super()
        this.state = {
            reviewer: '',
            image: '',
            title: '',
            desc: ''
        }

    }
       handleAddReviewer(e) {
           this.setState({
               reviewer: e.target.value,
           })
       }

       handleAddImage(e) {
           this.setState({
               image: e.target.value,
           })
       }

       handleAddTitle(e) {
           this.setState({
               title: e.target.value,
           })
       }

       handleAddDesc(e) {
           this.setState({
               desc: e.target.value,
           })
       }
    

    render() {
        return (
            <div>
                <form>
                    <input onChange={(e) => this.handleAddReviewer(e)}
                    placeholder= 'reviewer'/>
                    <input onChange={(e) => this.handleAddImage(e)}
                    placeholder='image'/>
                    <input onChange={(e) => this.handleAddTitle(e)}
                    placeholder='title'/>
                    <input onChange={(e) => this.handleAddDesc(e)}
                    placeholder='desc'/>
                    <button onClick={() => this.props.handleAddReview(this.state)}>Submit</button>
                </form>
            </div>
        )
    }
} 