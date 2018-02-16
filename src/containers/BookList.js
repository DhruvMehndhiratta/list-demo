import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';
import {
    ListGroup,
    ListGroupItem,
    Col
} from 'react-bootstrap';

class BookList extends Component{
    renderList(){
        return this.props.books.map( (book) => {
            return(
                <ListGroupItem 
                    key={book.title}
                    onClick={ () => console.log(this.props.selectBook( book ))}
                > 
                    {book.title} 
                </ListGroupItem>
            );
        });
    }
    render(){
        return(
            <Col md={6} lg={6} style={{ marginTop : '5%'}}>
               <ListGroup>
                   {this.renderList()}
               </ListGroup>
            </Col>
        )
    }
}
// whatever it will return will be availabe to us as props
function mapStateToProps( state ) {
    return{ 
        books : state.books
    };
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook : selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);