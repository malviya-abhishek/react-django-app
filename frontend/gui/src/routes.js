import { Divider } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView'
import ArticleDetail from './containers/ArticleDetailView'

const BaseRouter = () =>{
    return(
        <div>
            <Route  exact path="/" component={ArticleList} />
            <Route exact path="/:articleId" component={ArticleDetail}  />
        </div>
    );
};

export default BaseRouter;