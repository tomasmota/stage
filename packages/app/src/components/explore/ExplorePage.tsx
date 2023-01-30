import {
    ExploreLayout,
    GroupsExplorerContent,
    ToolExplorerContent
} from '@backstage/plugin-explore';
import React from 'react';

export const ExplorePage = () => {
    return (
        <ExploreLayout
            title="Explore the TomInc ecosystem"
            subtitle="Browse our tech landscape"
        >
            <ExploreLayout.Route path="groups" title="Packs">
                <GroupsExplorerContent />
            </ExploreLayout.Route>
            <ExploreLayout.Route path="inner-source" title="InnerSource">
                <ToolExplorerContent />
            </ExploreLayout.Route>
        </ExploreLayout>
    );
};

export const explorePage = <ExplorePage />;
