import Search from "../comp/Search";
import List from "../comp/List";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
    state = {
        data: null,
        bannerImage: '',
        bannerImageOpacity: 0,
        modelData: '',
        listingData: {},
        searchVal: '',
        categories: [],
    };

    handleValueChange = (value) => {
        this.setState({ searchValue: value });
    }

    componentDidMount() {
        fetch('https://arthurfrost.qflo.co.za/php/getTimeline.php')
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    data: data,
                    bannerImage: `https://arthurfrost.qflo.co.za/${data?.Body[0]?.Background}`,
                    bannerImageOpacity: data?.Body[0]?.BackgroundOpacity,
                    modelData: data?.Body[0]?.About,
                    listingData: data?.Timeline,
                });

                if (this.state.listingData.length) {
                    this.state.listingData.forEach(item => {
                        if (!this.state.categories.includes(item.Category)) {
                            this.state.categories.push(item.Category);
                        }
                    });
                }
            });
    }

    render() {
        return (
            <>
                <div className="inner">
                    <div className="container-fluid position-relative p-4">
                        <div className="backgroundContainer">
                            <img className="pageBackground" style={{ opacity: this.state.bannerImageOpacity / 100 }} src={this.state.bannerImage} alt="here"/>
                        </div>
                        <Search modelData={this.state.modelData} onValueChange={this.handleValueChange} categories={this.state.categories}/>
                        <List listData={this.state.listingData} searchVal={this.state.searchValue}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;