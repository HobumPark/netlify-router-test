
import '../css/SearchTab.css';
import {Component} from 'react';

class SearchTab extends Component{
    constructor(props){
        super(props)
        this.state={
            query:''
        }
    }

    moveSearch=()=>{
        alert("검색버튼 누름!")
        const {query}=this.state//비구조화할당
        window.location.href=`/search?query=${query}&encoding=utf-8`
        // /search 요청을 보내고, query라는 이름의 "도서관" 값을 넘긴다.
    }
    inputChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            query:e.target.value
        })
    }
    render(){
        return(
            <div id='search-tab'>
                <input type='text' placeholder='검색어입력' 
                onChange={this.inputChange}/>
                <button onClick={this.moveSearch}>검색</button>
            </div>
        )
    }
}

export default SearchTab;