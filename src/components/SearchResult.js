
import '../css/SearchResult.css';
import {Component} from 'react';
import queryString from 'query-string';

class SearchResult extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        //DOM이 완성되면 자동호출
        console.log(window.location)// location객체 안에는 수많은 속성값이~
        console.log(window.location.search)// "?query=hello&encoding=utf-8"
        // search : "?query=hello&encoding=utf-8"
        const queryObj = queryString.parse(window.location.search)
        //{query:'hello',encdong:'utf-8'}
        console.log(queryObj)//JSON
        console.log(queryObj.query)//'hello'
        const searchText=queryObj.query
        this.getData(searchText)
    }

    getData=(searchText)=>{
        //axios~ 서버에서 데이터 받아온다~
        //YTS,Naver검색API
    }

    render(){
        return(
            <div id='search-result'>
                검색결과
            </div>
        )
    }
}

export default SearchResult;